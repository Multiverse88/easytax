import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Folder proyek berada beberapa level di dalam home, jadi Turbopack
  // menebak root sebagai home dan menolak membaca package-lock.json.
  // Pin root ke folder proyek ini.
  turbopack: {
    // Folder proyek berada beberapa level di dalam home, jadi Turbopack
    // menebak root sebagai home dan menolak membaca package-lock.json.
    // Pin root ke folder proyek ini.
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  cacheComponents: true,
  // Saat diuji lewat 127.0.0.1, Next memblokir resource dev (termasuk HMR)
  // karena origin dianggap lintas host. Izinkan loopback agar hidrasi UI tetap
  // berjalan baik lewat localhost maupun 127.0.0.1. Opsi ini hanya untuk dev.
  allowedDevOrigins: ["127.0.0.1"],
  // Pertahankan halaman yang telah dikompilasi di memori dev server lebih lama
  // agar navigasi bolak-balik antar halaman tidak memicu re-compilation berulang.
  onDemandEntries: {
    maxInactiveAge: 15 * 60 * 1000,
    pagesBufferLength: 25,
  },
  experimental: {
    optimizePackageImports: ["@puckeditor/core"],
    globalNotFound: true,
  },
  // URL lama diarahkan permanen ke URL kanonis agar trafik dan indeks mesin
  // pencari tidak berakhir di halaman 404 atau konten duplikat.
  async redirects() {
    const artikelLamaSlugs = [
      "apa-yang-dimaksud-dengan-pengusaha-kena-pajak",
      "pengertian-nomor-pengukuhan-pkp-nppkp",
      "pentingnya-pengusaha-kena-pajak-mengirimkan-invoice-dengan-menyertakan-faktur-pajak",
      "keuntungan-pelaku-usaha-menjadi-pengusaha-kena-pajak-pkp",
      "syarat-pengukuhan-pengusaha-kena-pajak-pkp-yang-wajib-diketahui",
      "sudah-tau-syarat-pengusaha-kena-pajak-pkp-pahami-ini-penting",
      "pahami-hak-dan-kewajiban-pengusaha-kena-pajak-pkp",
      "contoh-pengusaha-kena-pajak-pkp-di-indonesia",
      "negara-dengan-pajak-tinggi",
      "baru-wajib-pajak-pahami-kewajiban-pajak-dengan-tepat",
      "simak-arti-dan-perbedaan-pajak-pusat-dan-pajak-daerah",
      "apa-yang-dimaksud-spt-tahunan-yang-wajib-pajak-harus-tahunan",
      "wajib-pajak-cek-lebih-jauh-tentang-pph-21",
      "pph-21-harus-tahu-bagi-wajib-pajak-cek-ulasanya",
      "pph-final-umkm-05-terbaru-dampak-pp-nomor-20-tahun-2026",
      "pt-perorangan-masih-bisa-pakai-pph-final-05-ini-jawabannya",
      "spt-bulanan-siapa-wajib-lapor-dan-risikonya-jika-terlambat",
      "pengusaha-wajib-bayar-pajak-ini-penjelasan-lengkapnya",
      "tarif-pph-21-terbaru-berapa-potongan-gaji-anda",
      "pmk-37-tahun-2025-berlaku-dampaknya-bagi-seller-marketplace",
      "tarif-ppn-2026-terbaru-besaran-ketentuan-dan-cara-menghitung",
      "jenis-jenis-npwp-di-indonesia-kenali-perbedaannya",
      "pengertian-spt-bulanan-panduan-lengkap-bagi-anda",
    ];

    return [
      { source: "/artikel", destination: "/tulisan-pajak", permanent: true },
      {
        source: "/artikel/:slug*",
        destination: "/tulisan-pajak/:slug*",
        permanent: true,
      },
      ...artikelLamaSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/tulisan-pajak/${slug}`,
        permanent: true,
      })),
      {
        source: "/layanan-laporan-perpajakan-keuangan",
        destination: "/layanan/laporan-perpajakan-keuangan",
        permanent: true,
      },
      {
        source: "/layanan-spt-pajak",
        destination: "/layanan/laporan-spt",
        permanent: true,
      },
      {
        source: "/jasa-pengajuan-pkp-perusahaan-online-pengurusan-pkp-perusahaan-online",
        destination: "/layanan/pengurusan-pkp",
        permanent: true,
      },
      { source: "/about", destination: "/tentang-kami", permanent: true },
      { source: "/our-team", destination: "/tim", permanent: true },
      { source: "/privacy-policy", destination: "/kebijakan-privasi", permanent: true },
      { source: "/terms-and-condition", destination: "/syarat-dan-ketentuan", permanent: true },
      { source: "/cv-easytax-solusi-bangsa", destination: "/verifikasi-rekening", permanent: true },
      { source: "/spt-bulanan-metaads", destination: "/spt-bulanan-metaads-2", permanent: true },
      { source: "/produk-kami-2", destination: "/layanan", permanent: true },
      { source: "/produk-kami", destination: "/layanan", permanent: true },
    ];
  },
  // Dimatikan karena bug pada Payload 3.91: saat Partial Prefetching aktif,
  // Next merender ulang route admin yang sudah terautentikasi dalam konteks
  // prefetch dan menandai `new Date()` di dalam operasi sesi Payload
  // (`authenticate` -> `removeExpiredSessions`) sebagai blocking prerender:
  // 'Route "/admin/[[...segments]]": Next.js encountered the unstable value
  // `new Date()` while prerendering.'
  // `instant = false` / `prefetch = 'force-disabled'` per-route TIDAK
  // mempan; hanya opsi ini yang menghilangkan errornya. Perbaikan permanen
  // menyusul di rilis Payload mayor berikutnya (payloadcms/payload#18065,
  // PR #18694/#18702). Aktifkan lagi setelah Payload dinaikkan ke versi itu.
  partialPrefetching: false,
  images: {
    // Payload menyusun URL media absolut dari PAYLOAD_PUBLIC_SERVER_URL, sehingga
    // optimizer next/image mengambilnya lewat jaringan. Di dev host-nya localhost
    // (IP privat) yang diblokir Next demi keamanan SSRF. URL media hanya berasal
    // dari dokumen media yang dibuat admin (bukan input pengguna), jadi aman
    // diizinkan. Di produksi host adalah domain publik sehingga opsi ini no-op.
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // Media yang diunggah lewat CMS Payload disajikan dari host ini.
      // Tambahkan domain produksi Anda di sini saat deploy.
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
    ],
  },
};

// withPayload menambahkan dukungan Payload (alias @payload-config, externalisasi
// paket server, env PAYLOAD_CACHE_COMPONENTS_ENABLED, dan header admin).
export default withPayload(nextConfig);