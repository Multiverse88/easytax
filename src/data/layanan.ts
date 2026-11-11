/**
 * Data layanan untuk section "Layanan Pajak & Keuangan" di beranda.
 * Diport dari easytax-demo (v1) — field `heroImage` dipertahankan supaya
 * kartu layanan bisa merender foto sampul seperti di desain asal.
 */

export interface LayananBeranda {
  slug: string;
  judul: string;
  subjudul: string;
  ringkasan: string;
  gambar: string;
}

export const layananBeranda: LayananBeranda[] = [
  {
    slug: "laporan-spt",
    judul: "Laporan SPT",
    subjudul: "Bebas Denda & Akurat",
    ringkasan:
      "EasyTax membantu perhitungan, penyusunan, dan e-Filing SPT Tahunan PPh Badan serta SPT Orang Pribadi dengan bukti lapor resmi DJP.",
    gambar: "/images/external/photo-1434626881859-194d67b2b86f.webp",
  },
  {
    slug: "pengurusan-pkp",
    judul: "Layanan Pengurusan PKP",
    subjudul: "Cepat & 100% Lolos Survei KPP",
    ringkasan:
      "Bantu proses pengukuhan PKP, aktivasi akun e-Faktur, sertifikat elektronik DJP, dan pembekalan teknis faktur pajak.",
    gambar: "/images/layanan-pengurusan-pkp.webp",
  },
  {
    slug: "laporan-perpajakan-keuangan",
    judul: "Laporan Perpajakan & Keuangan",
    subjudul: "Lebih Rapi, Akurat & Aman",
    ringkasan:
      "EasyTax membantu memahami, mengelola, dan menyusun laporan keuangan bulanan serta pelaporan pajak secara tepat waktu.",
    gambar: "/images/external/photo-1454165804606-c3d57bc86b40.webp",
  },
  {
    slug: "pencabutan-npwp-badan",
    judul: "Pencabutan NPWP Badan",
    subjudul: "Mulai Rp 500.000",
    ringkasan:
      "Layanan permohonan pencabutan atau penghapusan NPWP bagi badan usaha yang telah bubar atau berhenti beroperasi sesuai prosedur KPP.",
    gambar: "/images/external/photo-1450101499163-c8848c66ca85.webp",
  },
  {
    slug: "penonaktifan-npwp-pribadi",
    judul: "Penonaktifan NPWP Pribadi",
    subjudul: "Mulai Rp 350.000",
    ringkasan:
      "Penetapan status Wajib Pajak Non-Efektif (NE) untuk orang pribadi agar terbebas dari sanksi dan kewajiban lapor SPT Tahunan.",
    gambar: "/images/external/photo-1554224154-26032ffc0d07.webp",
  },
  {
    slug: "pembuatan-npwp-badan",
    judul: "Pembuatan NPWP Badan",
    subjudul: "Pendaftaran Resmi PT & CV",
    ringkasan:
      "Layanan pendaftaran NPWP baru untuk perusahaan dan badan usaha secara praktis, cepat, dan terdaftar resmi di DJP.",
    gambar: "/images/external/photo-1486406146926-c627a92ad1ab.webp",
  },
  {
    slug: "pembuatan-npwp-pribadi",
    judul: "Pembuatan NPWP Pribadi",
    subjudul: "Praktis & Bebas Antre",
    ringkasan:
      "Pendaftaran Nomor Pokok Wajib Pajak (NPWP) baru untuk karyawan, profesional, dan pengusaha perorangan.",
    gambar: "/images/external/photo-1554224155-8d04cb21cd6c.webp",
  },
  {
    slug: "pengajuan-surat-pajak-badan",
    judul: "Pengajuan Surat Pajak Badan",
    subjudul: "SKF, SKB & Administrasi KPP",
    ringkasan:
      "Pengurusan surat keterangan perpajakan badan seperti Surat Keterangan Fiskal (SKF), SKB, dan korespondensi resmi ke DJP.",
    gambar: "/images/external/photo-1454165804606-c3d57bc86b40.webp",
  },
];