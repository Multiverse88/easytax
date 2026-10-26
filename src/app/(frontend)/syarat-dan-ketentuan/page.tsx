import type { Metadata } from "next";

import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan | EasyTax",
  description:
    "Syarat dan ketentuan layanan konsultasi perpajakan, pembukuan akuntansi, dan administrasi pajak di EasyTax.",
  alternates: { canonical: "/syarat-dan-ketentuan" },
  openGraph: {
    title: "Syarat dan Ketentuan | EasyTax",
    description:
      "Ketentuan penggunaan layanan konsultasi perpajakan dan akuntansi EasyTax.",
    type: "website",
    locale: "id_ID",
    siteName: "EasyTax",
    url: "/syarat-dan-ketentuan",
  },
};

export default function SyaratDanKetentuanPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white md:py-20">
        <div className="mx-auto w-full max-w-maks px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-yellow-500/20 px-3.5 py-1 text-xs font-bold tracking-wider text-yellow-400 uppercase">
              Dokumen Legal
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Syarat dan Ketentuan EasyTax
            </h1>
            <p className="mt-4 text-base text-white/80">
              Versi berlaku: 4 September 2026 &bull; EasyTax (bagian dari Easy Corp)
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-maks px-6 md:px-8">
          <div className="prose prose-slate max-w-3xl text-navy-900/90 leading-relaxed">
            <p className="text-lg leading-relaxed text-navy-900 font-medium">
              Sebelum menggunakan layanan kami, mohon untuk membaca Syarat dan Ketentuan berikut secara saksama. Dengan mengakses website, mendaftar, atau menggunakan layanan EasyTax, Anda dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan yang tertulis di bawah ini.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              1. Ketentuan Umum
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>EasyTax adalah penyedia layanan konsultasi, administrasi perpajakan, dan pembukuan keuangan di bawah naungan Easy Corp.</li>
              <li>Klien adalah perorangan atau badan hukum yang menggunakan jasa atau berkonsultasi dengan EasyTax.</li>
              <li>EasyTax berhak untuk memperbarui atau mengubah Syarat dan Ketentuan ini sewaktu-waktu sesuai dengan perkembangan regulasi pemerintah atau kebijakan internal perusahaan tanpa pemberitahuan sebelumnya.</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              2. Cakupan Layanan &amp; Hubungan Kerja
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>EasyTax memberikan layanan sesuai dengan paket atau kesepakatan tertulis yang dipilih oleh Klien (meliputi Laporan Perpajakan &amp; Keuangan, Pelaporan SPT, Pengurusan PKP, dan Konsultasi Pajak).</li>
              <li>EasyTax bertindak sebagai konsultan/pendamping. Seluruh dokumen resmi, laporan, dan keputusan akhir tetap merupakan tanggung jawab Klien selaku wajib pajak.</li>
              <li>Hasil kerja dan ketepatan waktu pengerjaan oleh EasyTax sangat bergantung pada kelengkapan, keabsahan, dan ketepatan data yang diberikan oleh Klien.</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              3. Kewajiban &amp; Tanggung Jawab Klien
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong>Kebenaran Data:</strong> Klien menjamin bahwa seluruh dokumen, transaksi keuangan, dan informasi yang diserahkan kepada EasyTax adalah sah, akurat, benar, dan tidak melanggar hukum yang berlaku di Republik Indonesia.</li>
              <li><strong>Kepatuhan Waktu:</strong> Klien wajib memberikan dokumen/data yang dibutuhkan EasyTax sesuai dengan batas waktu (deadline) yang telah disepakati bersama agar proses pelaporan tidak terlambat.</li>
              <li><strong>Keterlambatan &amp; Sanksi Pajak:</strong> EasyTax tidak bertanggung jawab atas sanksi, denda, atau bunga yang timbul akibat keterlambatan penyerahan data dari pihak Klien, atau data yang tidak valid/palsu dari Klien.</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              4. Kerahasiaan Informasi (Confidentiality)
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>EasyTax berkomitmen penuh untuk menjaga kerahasiaan seluruh data keuangan, dokumen perusahaan, dan informasi pribadi Klien.</li>
              <li>EasyTax tidak akan menjual, menyewakan, atau membagikan data Klien kepada pihak ketiga mana pun tanpa persetujuan tertulis dari Klien, kecuali diwajibkan oleh hukum atau perundang-undangan yang berlaku (misalnya: permintaan resmi dari instansi perpajakan/penegak hukum).</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              5. Biaya &amp; Pembayaran Layanan
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Klien wajib membayar biaya layanan sesuai dengan tarif yang telah disepakati dalam penawaran resmi (quotation) atau invoice.</li>
              <li>Pembayaran dilakukan sesuai dengan metode dan skema pembayaran (DP/Lunas) yang disepakati sebelum pengerjaan dimulai.</li>
              <li>Biaya yang telah dibayarkan untuk layanan yang sedang atau telah diproses tidak dapat dikembalikan (non-refundable), kecuali terdapat kesalahan teknis dari pihak EasyTax yang menyebabkan layanan tidak dapat dijalankan sama sekali.</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              6. Pembatalan &amp; Penghentian Layanan
            </h2>
            <p className="mt-3">
              Klien dapat membatalkan pengajuan layanan dengan memberikan pemberitahuan tertulis kepada EasyTax. EasyTax berhak menghentikan atau menolak layanan secara sepihak apabila:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Klien terbukti memberikan data palsu, manipulatif, atau mengindikasikan adanya tindakan melanggar hukum.</li>
              <li>Klien tidak memenuhi kewajiban pembayaran sesuai kesepakatan.</li>
              <li>Terdapat ketidaksesuaian etika atau iklim kerja sama yang tidak kondusif.</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              7. Batasan Tanggung Jawab (Limitation of Liability)
            </h2>
            <p className="mt-3">
              EasyTax berusaha memberikan rekomendasi dan pengerjaan terbaik sesuai dengan undang-undang perpajakan yang berlaku di Indonesia. EasyTax tidak bertanggung jawab atas kerugian finansial atau sanksi hukum yang dialami Klien akibat adanya perubahan regulasi/kebijakan pemerintah yang berlaku surut, atau audit pajak dari otoritas terkait atas data historis Klien sebelum menggunakan layanan EasyTax.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              8. Hukum yang Berlaku
            </h2>
            <p className="mt-3">
              Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum yang berlaku di Republik Indonesia. Apabila timbul perselisihan, para pihak sepakat untuk menyelesaikannya secara musyawarah untuk mufakat.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
