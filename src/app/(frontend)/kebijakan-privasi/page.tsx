import type { Metadata } from "next";

import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | EasyTax",
  description:
    "Kebijakan privasi EasyTax: standar perlindungan data pribadi, dokumen perpajakan, dan keamanan informasi klien.",
  alternates: { canonical: "/kebijakan-privasi" },
  openGraph: {
    title: "Kebijakan Privasi | EasyTax",
    description:
      "Standar perlindungan data pribadi dan dokumen perpajakan klien EasyTax.",
    type: "website",
    locale: "id_ID",
    siteName: "EasyTax",
    url: "/kebijakan-privasi",
  },
};

export default function KebijakanPrivasiPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white md:py-20">
        <div className="mx-auto w-full max-w-maks px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-yellow-500/20 px-3.5 py-1 text-xs font-bold tracking-wider text-yellow-400 uppercase">
              Dokumen Legal
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Kebijakan Privasi EasyTax
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
              Di <strong>EasyTax</strong> (bagian dari <strong>Easy Corp</strong>), kami memahami bahwa data keuangan dan dokumen perpajakan adalah informasi yang sangat sensitif. Kami berkomitmen penuh untuk melindungi privasi serta keamanan data pribadi dan bisnis Anda sesuai dengan standar perlindungan data yang berlaku di Republik Indonesia.
            </p>
            <p className="mt-4">
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda saat menggunakan layanan EasyTax.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              1. Informasi yang Kami Kumpulkan
            </h2>
            <p className="mt-3">
              Untuk dapat memberikan layanan perpajakan dan akuntansi secara akurat, kami mengumpulkan beberapa jenis informasi:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Informasi Identitas &amp; Kontak:</strong> Nama lengkap, Nomor Induk Kependudukan (NIK), Nomor Pokok Wajib Pajak (NPWP), alamat email, nomor telepon, dan alamat kantor/domisili.
              </li>
              <li>
                <strong>Dokumen &amp; Data Keuangan Bisnis:</strong> Rekening koran, laporan keuangan, faktur penjualan/pembelian, bukti pemotongan pajak, serta dokumen pendukung akuntansi lainnya.
              </li>
              <li>
                <strong>Data Legalitas Perusahaan:</strong> Akta pendirian, NIB, sertifikat elektronik pajak, serta identitas pengurus perusahaan (untuk klien badan).
              </li>
              <li>
                <strong>Data Akses &amp; Layanan:</strong> Username atau akses portal perpajakan yang Anda berikan secara khusus kepada kami untuk keperluan pelaporan pajak resmi.
              </li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              2. Cara Kami Menggunakan Informasi Anda
            </h2>
            <p className="mt-3">
              Data yang kami kumpulkan hanya digunakan untuk kepentingan operasional dan pemenuhan kewajiban perpajakan Anda, antara lain:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Menyusun laporan keuangan, pembukuan, dan perhitungan pajak bisnis atau pribadi Anda.</li>
              <li>Melakukan pelaporan SPT Masa/Tahunan serta pengurusan administrasi PKP ke Direktorat Jenderal Pajak (DJP).</li>
              <li>Memberikan konsultasi, perancangan strategi pajak, dan analisis keuangan yang relevan.</li>
              <li>Mengirimkan notifikasi batas waktu pelaporan, perbaruan regulasi pajak, atau tagihan layanan.</li>
              <li>Meningkatkan kualitas layanan, keamanan sistem, dan pengalaman penggunaan layanan EasyTax.</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              3. Kerahasiaan &amp; Keamanan Data
            </h2>
            <p className="mt-3">
              Keamanan data Anda adalah prioritas utama EasyTax. Kami menerapkan langkah-langkah perlindungan berikut:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Akses Terbatas:</strong> Hanya staf dan tim konsultan EasyTax yang memiliki wewenang khusus yang dapat mengakses dokumen keuangan Anda untuk kepentingan pekerjaan resmi.
              </li>
              <li>
                <strong>Enkripsi &amp; Penyimpanan Aman:</strong> Seluruh berkas digital disimpan dalam sistem cloud bersertifikasi keamanan tinggi dengan prosedur enkripsi data.
              </li>
              <li>
                <strong>Perjanjian Kerahasiaan (NDA):</strong> Seluruh tim EasyTax terikat oleh perjanjian kerahasiaan ketat untuk memastikan tidak ada kebocoran data.
              </li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              4. Pembagian Data kepada Pihak Ketiga
            </h2>
            <p className="mt-3">
              EasyTax <strong>tidak akan pernah menjual, menyewakan, atau membagikan</strong> informasi pribadi atau keuangan Anda kepada pihak ketiga untuk kepentingan pemasaran tanpa izin tertulis dari Anda.
            </p>
            <p className="mt-2">Kami hanya membagikan data Anda dalam kondisi berikut:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Instansi Pemerintah/Otoritas Pajak:</strong> Menyerahkan laporan resmi kepada Direktorat Jenderal Pajak (DJP) atau instansi terkait dalam rangka pemenuhan kewajiban perpajakan Anda.
              </li>
              <li>
                <strong>Kepatuhan Hukum:</strong> Apabila diwajibkan oleh undang-undang, perintah pengadilan, atau proses hukum yang sah di Republik Indonesia.
              </li>
              <li>
                <strong>Ekosistem Easy Corp:</strong> Dengan persetujuan Anda, untuk mempermudah integrasi layanan pendukung bisnis lain (seperti legalitas pendirian atau virtual office).
              </li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              5. Hak Klien atas Data
            </h2>
            <p className="mt-3">Sebagai pemilik data, Anda memiliki hak penuh untuk:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Meminta salinan data pribadi dan dokumen bisnis yang tersimpan di sistem kami.</li>
              <li>Mengoreksi atau memperbarui informasi yang tidak akurat.</li>
              <li>Meminta penghapusan data atau dokumen Anda setelah masa kerja sama selesai (selama tidak bertentangan dengan kewajiban retensi dokumen sesuai undang-undang perpajakan).</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">
              6. Perubahan Kebijakan Privasi
            </h2>
            <p className="mt-3">
              EasyTax berhak untuk memperbarui Kebijakan Privasi ini sewaktu-waktu guna menyesuaikan dengan perubahan regulasi hukum atau peningkatan sistem layanan kami. Perubahan akan diinformasikan melalui website atau komunikasi resmi EasyTax.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
