import { createHash } from "node:crypto";

import { sanitizeText } from "@/lib/validation";

export const LAYANAN_KAMPANYE = "Laporan Perpajakan & Keuangan Badan";
export const SUMBER_KAMPANYE = "konsultasi easytax 2";

export const OPSI_OMZET = [
  "0 / Tidak beroperasi",
  "Rp0 – Rp50 juta",
  "Rp50 juta – Rp100 juta",
  "Rp100 juta – Rp200 juta",
  "Rp200 juta – Rp300 juta",
  "Rp300 juta – Rp400 juta",
  "Rp400 juta – Rp500 juta",
  "Rp500 juta – Rp1 miliar",
  "Rp1 miliar – Rp2,5 miliar",
  "Di atas Rp2,5 miliar",
] as const;

export type OmzetKampanye = (typeof OPSI_OMZET)[number];

export type LeadKampanye = {
  submissionId: string;
  nama: string;
  whatsapp: string;
  layanan: typeof LAYANAN_KAMPANYE;
  omzet: OmzetKampanye;
  source: typeof SUMBER_KAMPANYE;
};

type HasilValidasi =
  | { ok: true; data: LeadKampanye }
  | { ok: false; error: string };

function normalisasiNomorIndonesia(value: string): string | null {
  const digits = value.replace(/\D/g, "");
  const normalized = digits.startsWith("0")
    ? `62${digits.slice(1)}`
    : digits.startsWith("8")
      ? `62${digits}`
      : digits;

  return /^62\d{8,13}$/.test(normalized) ? normalized : null;
}

export function validasiLeadKampanye(input: unknown): HasilValidasi {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Format data tidak valid." };
  }

  const raw = input as Record<string, unknown>;
  const submissionId = String(raw.submissionId || "").trim();
  const nama = sanitizeText(String(raw.nama || "")).slice(0, 80);
  const whatsapp = normalisasiNomorIndonesia(String(raw.whatsapp || ""));
  const layanan = String(raw.layanan || "");
  const omzet = String(raw.omzet || "");
  const source = String(raw.source || "");

  if (!/^lead-[A-Za-z0-9-]{3,120}$/.test(submissionId)) {
    return { ok: false, error: "ID pengiriman tidak valid." };
  }
  if (!nama) return { ok: false, error: "Nama wajib diisi." };
  if (!whatsapp) return { ok: false, error: "Nomor WhatsApp tidak valid." };
  if (layanan !== LAYANAN_KAMPANYE) {
    return { ok: false, error: "Layanan tidak valid." };
  }
  if (!OPSI_OMZET.includes(omzet as OmzetKampanye)) {
    return { ok: false, error: "Omzet wajib dipilih." };
  }
  if (source !== SUMBER_KAMPANYE) {
    return { ok: false, error: "Sumber tidak valid." };
  }

  return {
    ok: true,
    data: {
      submissionId,
      nama,
      whatsapp,
      layanan: LAYANAN_KAMPANYE,
      omzet: omzet as OmzetKampanye,
      source: SUMBER_KAMPANYE,
    },
  };
}

function hashMeta(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export function buatPayloadMetaLead({
  eventId,
  nama,
  whatsapp,
  eventTime = Math.floor(Date.now() / 1000),
}: {
  eventId: string;
  nama: string;
  whatsapp: string;
  eventTime?: number;
}) {
  return {
    data: [
      {
        event_name: "Lead",
        event_time: eventTime,
        event_id: eventId,
        action_source: "website",
        user_data: {
          ph: [hashMeta(whatsapp)],
          fn: [hashMeta(nama.split(/\s+/)[0] || "")],
        },
      },
    ],
  };
}
