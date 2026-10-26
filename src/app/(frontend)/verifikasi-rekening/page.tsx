import type { Metadata } from "next";
import Image from "next/image";

import { CopyButton } from "@/components/ui/CopyButton";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Verifikasi Rekening Resmi Pembayaran | EasyTax",
  description:
    "Halaman resmi verifikasi rekening pembayaran EasyTax (CV EasyTax Solusi Bangsa) untuk mencegah penipuan.",
  alternates: { canonical: "/verifikasi-rekening" },
  openGraph: {
    title: "Verifikasi Rekening Resmi Pembayaran | EasyTax",
    description:
      "Pastikan rekening pembayaran Anda ke CV EasyTax Solusi Bangsa sudah sesuai untuk keamanan transaksi Anda.",
    type: "website",
    locale: "id_ID",
    siteName: "EasyTax",
    url: "/verifikasi-rekening",
  },
};

export default function VerifikasiRekeningPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white md:py-20">
        <div className="mx-auto w-full max-w-maks px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-yellow-500/20 px-3.5 py-1 text-xs font-bold tracking-wider text-yellow-400 uppercase">
              Pencegahan Penipuan &bull; Rekening Resmi
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Verifikasi Rekening Resmi EasyTax
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Pastikan pembayaran Anda hanya ditujukan ke rekening resmi yang terdaftar. Halaman ini adalah rujukan resmi EasyTax untuk memvalidasi nomor rekening sebelum melakukan transfer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-maks px-6 md:px-8">
          <div className="mx-auto max-w-3xl space-y-10">
            {/* Kartu Rekening Resmi */}
            <div className="overflow-hidden rounded-2xl border-2 border-yellow-500/30 bg-gradient-to-br from-white to-amber-50/40 p-8 shadow-sm md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-6 border-b border-navy-900/10 pb-6">
                <div>
                  <span className="text-xs font-extrabold tracking-wider text-navy-900/60 uppercase">
                    Bank Mandiri
                  </span>
                  <h2 className="mt-1 font-heading text-xl font-bold text-navy-900">
                    Rekening Operasional Resmi
                  </h2>
                </div>
                <div className="relative h-12 w-36">
                  <Image
                    src="/images/legal/logo-mandiri.webp"
                    alt="Bank Mandiri"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <span className="text-sm font-semibold text-navy-900/60">
                    Nomor Rekening
                  </span>
                  <div className="mt-1 flex flex-wrap items-center gap-4">
                    <span className="font-mono text-2xl font-black tracking-wider text-navy-900 sm:text-3xl">
                      1300025965529
                    </span>
                    <CopyButton text="1300025965529" label="Salin Nomor" />
                  </div>
                </div>

                <div>
                  <span className="text-sm font-semibold text-navy-900/60">
                    Atas Nama Rekening
                  </span>
                  <p className="mt-1 font-heading text-xl font-extrabold text-navy-900">
                    EASYTAX SOLUSI BANGSA CV
                  </p>
                </div>
              </div>

              {/* Box Peringatan */}
              <div className="mt-8 rounded-xl border border-red-200 bg-red-50/80 p-5 text-red-900">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <div className="text-sm leading-relaxed">
                    <strong className="block font-bold">Perhatian Penting:</strong>
                    Jika nomor rekening atau nama penerima di invoice Anda berbeda dengan yang tercantum di halaman ini, <strong>segera hentikan pembayaran</strong> dan hubungi konsultan resmi kami untuk verifikasi.
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu Legalitas Kemenkumham */}
            <div className="rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm md:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-block rounded-md bg-navy-900/5 px-2.5 py-1 text-xs font-bold text-navy-900 uppercase">
                    🏛️ Legalitas Terdaftar
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-navy-900">
                    Terdaftar Resmi di Kemenkumham RI
                  </h3>
                  <p className="mt-2 text-sm text-navy-900/70">
                    EasyTax terdaftar dan mematuhi hukum di Kementerian Hukum dan HAM Republik Indonesia sebagai badan usaha yang sah.
                  </p>
                </div>
                <div className="relative h-28 w-28 shrink-0 rounded-lg border border-navy-900/10 p-1">
                  <Image
                    src="/images/legal/qr-ahu.webp"
                    alt="Barcode AHU Kemenkumham"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-navy-900/5 p-5">
                <div className="space-y-1 text-sm">
                  <p className="text-navy-900/70">Badan Usaha Resmi:</p>
                  <p className="font-heading font-bold text-navy-900">CV EASYTAX SOLUSI BANGSA</p>
                  <p className="mt-2 text-navy-900/70">Nomor SK Terdaftar:</p>
                  <p className="font-mono font-bold text-navy-900">AHU-0058677-AH.01.14 Tahun 2024</p>
                </div>

                <div className="mt-5">
                  <a
                    href="https://sab.ahu.go.id/cv/pendaftaran/info/no/AHU-0058677-AH.01.14+Tahun+2024/id/1885757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800"
                  >
                    <span>Cek di Sistem Resmi AHU Kemenkumham</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
