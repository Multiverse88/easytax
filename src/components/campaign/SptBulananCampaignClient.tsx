"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import { PanahKanan, WhatsApp } from "@/components/ikon";
import {
  LAYANAN_KAMPANYE,
  OPSI_OMZET,
  SUMBER_KAMPANYE,
  type OmzetKampanye,
} from "@/features/campaign/spt-bulanan-lead";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type CampaignContextValue = {
  omzet: "" | OmzetKampanye;
  pilihOmzet: (omzet: OmzetKampanye) => void;
};

const CampaignContext = createContext<CampaignContextValue | null>(null);

function useCampaign(): CampaignContextValue {
  const context = useContext(CampaignContext);
  if (!context) throw new Error("CampaignProvider wajib tersedia");
  return context;
}

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [omzet, setOmzet] = useState<"" | OmzetKampanye>("");

  function pilihOmzet(value: OmzetKampanye) {
    setOmzet(value);
    requestAnimationFrame(() => {
      document.querySelector<HTMLSelectElement>("#omzet-kampanye")?.focus();
      document.querySelector("#konsultasi")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
      });
    });
  }

  return (
    <CampaignContext value={{ omzet, pilihOmzet }}>
      {children}
    </CampaignContext>
  );
}

export function PricingAction({ omzet }: { omzet: OmzetKampanye }) {
  const { pilihOmzet } = useCampaign();
  return (
    <button
      type="button"
      onClick={() => pilihOmzet(omzet)}
      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 font-heading text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
    >
      Pilih paket <PanahKanan className="size-4" />
    </button>
  );
}

export function LeadForm() {
  const { omzet, pilihOmzet } = useCampaign();
  const [nama, setNama] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const submissionId = useRef("");

  function resetAttempt() {
    submissionId.current = "";
    if (status !== "idle") setStatus("idle");
    if (error) setError("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    if (!omzet) {
      setError("Pilih omzet per tahun.");
      document.querySelector<HTMLSelectElement>("#omzet-kampanye")?.focus();
      return;
    }

    setStatus("submitting");
    setError("");
    submissionId.current ||= `lead-${Date.now()}-${crypto.randomUUID()}`;

    try {
      const response = await fetch("/api/lead/spt-bulanan-metaads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId: submissionId.current,
          nama,
          whatsapp,
          layanan: LAYANAN_KAMPANYE,
          omzet,
          source: SUMBER_KAMPANYE,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        eventId?: string;
        error?: string;
      };
      if (!response.ok || !result.ok || !result.eventId) {
        throw new Error(result.error || "Form belum berhasil dikirim.");
      }

      setStatus("success");
      window.fbq?.("track", "Lead", {}, { eventID: result.eventId });
      const params = new URLSearchParams({ nama, omzet });
      window.location.assign(`/thankyoupage-spt-bulanan-metaads-2?${params}`);
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Form belum berhasil dikirim.");
    }
  }

  return (
    <form
      id="konsultasi"
      onSubmit={submit}
      className="relative scroll-mt-24 rounded-3xl bg-white p-5 text-navy-900 shadow-[0_24px_70px_rgba(21,34,105,0.22)] sm:p-7"
    >
      <div className="mb-5">
        <p className="font-heading text-xl font-extrabold sm:text-2xl">Isi 3 data, pajak beres.</p>
        <p className="mt-1 text-sm leading-6 text-teks-sekunder">
          Konsultasi awal gratis bersama personal tax assistant.
        </p>
      </div>

      <div className="grid gap-3">
        <label className="grid gap-1.5 text-sm font-semibold" htmlFor="nama-kampanye">
          Nama
          <input
            id="nama-kampanye"
            name="nama"
            value={nama}
            onChange={(event) => {
              setNama(event.target.value);
              resetAttempt();
            }}
            required
            autoComplete="name"
            maxLength={80}
            placeholder="Nama lengkap"
            className="min-h-12 rounded-xl border border-garis bg-white px-4 text-base outline-none transition placeholder:text-teks-redup focus:border-navy-900"
          />
        </label>

        <label className="grid gap-1.5 text-sm font-semibold" htmlFor="whatsapp-kampanye">
          Nomor WhatsApp aktif
          <input
            id="whatsapp-kampanye"
            name="whatsapp"
            value={whatsapp}
            onChange={(event) => {
              setWhatsapp(event.target.value);
              resetAttempt();
            }}
            required
            autoComplete="tel"
            inputMode="tel"
            minLength={8}
            maxLength={20}
            placeholder="Contoh: 0812 3456 7890"
            className="min-h-12 rounded-xl border border-garis bg-white px-4 text-base outline-none transition placeholder:text-teks-redup focus:border-navy-900"
          />
        </label>

        <label className="grid gap-1.5 text-sm font-semibold" htmlFor="omzet-kampanye">
          Omzet per tahun
          <select
            id="omzet-kampanye"
            name="omzet"
            value={omzet}
            onChange={(event) => {
              pilihOmzet(event.target.value as OmzetKampanye);
              resetAttempt();
            }}
            required
            className="min-h-12 rounded-xl border border-garis bg-white px-4 text-base outline-none transition focus:border-navy-900"
          >
            <option value="" disabled>Pilih rentang omzet</option>
            {OPSI_OMZET.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 font-heading font-extrabold text-navy-900 shadow-kuning transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Mengirim data..." : status === "success" ? "Data terkirim" : "Hubungi saya sekarang"}
        {status === "idle" || status === "error" ? <PanahKanan className="size-5" /> : null}
      </button>

      <p className="mt-3 min-h-6 text-center text-sm" aria-live="polite">
        {error ? <span className="font-semibold text-red-accent">{error}</span> : "Data Anda hanya dipakai untuk konsultasi EasyTax."}
      </p>
    </form>
  );
}

export function CampaignCountdown() {
  const [time, setTime] = useState({ hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    function update() {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      const remaining = Math.max(0, end.getTime() - now.getTime());
      setTime({
        hours: String(Math.floor(remaining / 3_600_000)).padStart(2, "0"),
        minutes: String(Math.floor((remaining % 3_600_000) / 60_000)).padStart(2, "0"),
        seconds: String(Math.floor((remaining % 60_000) / 1_000)).padStart(2, "0"),
      });
    }

    update();
    const interval = window.setInterval(update, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start justify-center gap-2 font-heading tabular-nums" aria-label={`Promo berakhir dalam ${time.hours} jam ${time.minutes} menit ${time.seconds} detik`}>
      {([time.hours, time.minutes, time.seconds] as const).map((value, index) => (
        <div key={index} className="flex items-start gap-2">
          {index > 0 ? <span className="pt-2 text-2xl font-black text-yellow-500">:</span> : null}
          <span className="grid gap-1 text-center">
            <strong className="min-w-14 rounded-xl bg-white px-2 py-2 text-2xl text-navy-900 shadow-md">{value}</strong>
            <small className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/70">{["Jam", "Menit", "Detik"][index]}</small>
          </span>
        </div>
      ))}
    </div>
  );
}

export function CampaignPageView() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      window.fbq?.("track", "PageView");
      previousPath.current = pathname;
    }
  }, [pathname]);

  return null;
}

export function ThankYouRedirect({ nama, omzet }: { nama: string; omzet: string }) {
  const [count, setCount] = useState(3);
  const message = `Halo tim EasyTax, saya ${nama} sudah mengisi form konsultasi. Mohon bantuan untuk laporan perpajakan dan keuangan badan dengan omzet per tahun ${omzet}.`;
  const href = `/api/konsultasi/whatsapp?${new URLSearchParams({
    pesan: message,
    sumber: "spt-bulanan-metaads",
    konteks: "layanan",
  })}`;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount((current) => {
        if (current <= 1) {
          window.clearInterval(interval);
          window.location.assign(href);
          return 0;
        }
        return current - 1;
      });
    }, 1_000);
    return () => window.clearInterval(interval);
  }, [href]);

  return (
    <div className="text-center">
      <p className="text-sm font-semibold text-teks-sekunder">Mengalihkan ke WhatsApp dalam</p>
      <p className="my-3 font-heading text-6xl font-black tabular-nums text-navy-900" aria-label={`${count} detik`}>{count}</p>
      <a
        href={href}
        className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 font-heading font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
      >
        <WhatsApp className="size-5" /> Chat WhatsApp sekarang
      </a>
    </div>
  );
}
