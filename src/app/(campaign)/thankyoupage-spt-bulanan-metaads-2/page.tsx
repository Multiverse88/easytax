import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { ThankYouRedirect } from "@/components/campaign/SptBulananCampaignClient";
import { Centang } from "@/components/ikon";
import { logoMark } from "@/data/situs";

export const metadata: Metadata = {
  title: "Terima Kasih | EasyTax",
  description: "Permintaan konsultasi EasyTax sudah diterima.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.ico", apple: "/favicon.webp" },
};

function cleanQuery(value: string | string[] | undefined, fallback: string, maxLength: number) {
  const text = Array.isArray(value) ? value[0] : value;
  if (!text) return fallback;
  const clean = text.replace(/[<>\u0000-\u001F\u007F]/g, "").trim();
  return clean ? clean.slice(0, maxLength) : fallback;
}

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default function ThankYouPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <main id="konten-utama" className="relative grid min-h-[100dvh] place-items-center overflow-hidden bg-netral-lat px-5 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(244,201,34,0.25),transparent_27%),radial-gradient(circle_at_82%_75%,rgba(21,34,105,0.12),transparent_30%)]" />
      <Suspense fallback={<div className="h-[570px] w-full max-w-xl animate-pulse rounded-3xl bg-white shadow-lg" />}>
        <ThankYouCard searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function ThankYouCard({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const nama = cleanQuery(params.nama, "Kak", 80);
  const omzet = cleanQuery(params.omzet, "belum ditentukan", 100);

  return (
    <section className="relative w-full max-w-xl rounded-3xl bg-white p-7 text-center shadow-[0_28px_80px_rgba(21,34,105,0.18)] sm:p-11">
      <Link href="/" aria-label="EasyTax, kembali ke beranda" className="inline-flex items-center gap-3">
        <Image src={logoMark} alt="" width={54} height={36} className="h-9 w-auto" priority />
        <span className="font-heading text-2xl font-black">EasyTax</span>
      </Link>

      <div className="mx-auto mt-9 grid size-16 place-items-center rounded-full bg-yellow-500 text-navy-900">
        <Centang className="size-8" />
      </div>
      <h1 className="mt-6 text-balance font-heading text-4xl font-black tracking-tight sm:text-5xl">Data Anda sudah kami terima.</h1>
      <p className="mx-auto mt-4 max-w-md leading-7 text-teks-sekunder">
        Terima kasih, {nama}. Tim EasyTax siap membahas kebutuhan laporan untuk omzet {omzet} per tahun.
      </p>

      <div className="my-8 h-px bg-garis" />
      <ThankYouRedirect nama={nama} omzet={omzet} />

      <div className="mt-9 grid gap-2 text-sm font-semibold text-teks-sekunder sm:grid-cols-3">
        <span>Data terjaga</span>
        <span>Konsultasi awal gratis</span>
        <span>Didampingi konsultan</span>
      </div>
    </section>
  );
}
