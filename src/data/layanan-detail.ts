/**
 * Data detail tiap layanan untuk halaman /layanan/[slug]: paket harga dan
 * FAQ. Diport dari easytax-demo (v1) — nilai harga mengikuti data v1.
 *
 * Catatan: FAQ di v1 masih berisi placeholder (`[object Object]`), jadi
 * pertanyaannya dipertahankan sementara jawabannya ditulis ulang dengan
 * bahasa Indonesia yang konsisten.
 */

export interface PaketLayanan {
  nama: string;
  deskripsi: string;
  harga: string;
  satuan?: string;
  fitur: string[];
}

export interface FaqLayanan {
  pertanyaan: string;
  jawaban: string;
}

export interface DetailLayanan {
  slug: string;
  paket: PaketLayanan[];
  faq: FaqLayanan[];
  seo?: {
    judul?: string;
    deskripsi?: string;
  };
}

const FAQ_SAMA: FaqLayanan[] = [
  {
    pertanyaan: "Apakah layanan dapat disesuaikan?",
    jawaban:
      "Bisa. Setiap paket adalah titik awal. Tim kami akan menyesuaikan lingkup pekerjaan, durasi, dan deliverables mengikuti kondisi dan skala bisnis Anda, lalu menuangkannya dalam proposal tertulis.",
  },
  {
    pertanyaan: "Apakah prosesnya bisa dilakukan online?",
    jawaban:
      "Bisa. Seluruh proses mulai konsultasi, examination dokumen, hingga pelaporan dilakukan jarak jauh. Dokumen dikirim melalui kanal terenkripsi dan hanya diakses tim yang berwenang.",
  },
  {
    pertanyaan: "Berapa lama pengerjaannya?",
    jawaban:
      "Tergantung paket. Pengerjaan reguler seperti pelaporan bulanan selesai 3–5 hari kerja setelah dokumen lengkap, sedangkan pekerjaan khusus seperti TAX opinion memerlukan 1–2 minggu.",
  },
  {
    pertanyaan: "Berapa biaya konsultasinya?",
    jawaban:
      "Konsultasi awal tidak dipungut biaya. Biaya terlihat jelas di sejak awal lewat proposal berisi rincian pekerjaan dan harga, tanpa biaya tersembunyi di tengah jalan.",
  },
];

export const detailLayanan: DetailLayanan[] = [
  {
    slug: "pencabutan-npwp-badan",
    paket: [
      {
        nama: "Pencabutan NPWP Badan",
        deskripsi:
          "Pengurusan pencabutan atau penghapusan NPWP Badan bagi perusahaan yang bubar atau tidak lagi beroperasi.",
        harga: "Rp 500.000",
        satuan: "/layanan",
        fitur: [
          "Konsultasi persyaratan pencabutan NPWP Badan",
          "Pemeriksaan kelengkapan dokumen pendukung",
          "Pengecekan riwayat utang dan kewajiban pajak",
          "Penyusunan surat permohonan penghapusan NPWP",
          "Pengajuan resmi ke Kantor Pelayanan Pajak (KPP)",
          "Monitoring proses pemeriksaan hingga SK terbit",
        ],
      },
    ],
    faq: [
      {
        pertanyaan: "Kapan badan usaha perlu mengajukan pencabutan NPWP?",
        jawaban:
          "Pencabutan NPWP Badan diajukan ketika perusahaan telah resmi dilikuidasi/dibubarkan, menghentikan seluruh kegiatan usaha secara permanen, atau mengalami penggabungan/peleburan usaha sehingga tidak lagi memenuhi syarat subjektif dan objektif sebagai wajib pajak.",
      },
      {
        pertanyaan: "Apa syarat utama pencabutan NPWP Badan?",
        jawaban:
          "Akta pembubaran badan usaha yang telah disahkan Kemenkumham, seluruh utang pajak telah dilunasi, dan SPT Tahunan masa pajak terakhir telah dilaporkan.",
      },
      {
        pertanyaan: "Berapa lama proses pencabutan NPWP Badan?",
        jawaban:
          "Sesuai regulasi DJP, proses pemeriksaan pencabutan NPWP Badan membutuhkan waktu maksimal 12 bulan sejak dokumen permohonan dinyatakan lengkap oleh KPP.",
      },
      ...FAQ_SAMA,
    ],
    seo: {
      judul: "Jasa Pencabutan NPWP Badan Resmi & Aman - EasyTax",
      deskripsi:
        "Layanan resmi pencabutan atau penghapusan NPWP Badan usaha mulai Rp 500.000. Dampingi proses administrasi hingga terbit Surat Keputusan Penghapusan NPWP dari KPP.",
    },
  },
  {
    slug: "penonaktifan-npwp-pribadi",
    paket: [
      {
        nama: "Penonaktifan NPWP Pribadi",
        deskripsi:
          "Penetapan status Wajib Pajak Non-Efektif (NE) bagi orang pribadi agar terbebas dari kewajiban lapor SPT Tahunan.",
        harga: "Rp 350.000",
        satuan: "/layanan",
        fitur: [
          "Konsultasi kelayakan status Non-Efektif (NE)",
          "Penyiapan formulir penetapan Wajib Pajak Non-Efektif",
          "Validasi data NIK dan dokumen pendukung",
          "Pengajuan permohonan ke KPP terdaftar",
          "Bukti resmi penetapan status NPWP Non-Efektif",
        ],
      },
    ],
    faq: [
      {
        pertanyaan: "Siapa yang bisa mengajukan penonaktifan NPWP Pribadi (Non-Efektif)?",
        jawaban:
          "Wajib Pajak Orang Pribadi yang tidak lagi menjalankan usaha atau pekerjaan bebas, berpenghasilan di bawah Penghasilan Tidak Kena Pajak (PTKP), atau bertempat tinggal/bekerja di luar negeri lebih dari 183 hari dalam setahun.",
      },
      {
        pertanyaan: "Apakah status Non-Efektif sama dengan penghapusan NPWP?",
        jawaban:
          "Berbeda. Status Non-Efektif (NE) membuat NPWP Anda tidak aktif sehingga tidak wajib lapor SPT dan tidak terkena sanksi denda, namun nomor NPWP tetap tersimpan dan dapat diaktifkan kembali jika Anda mulai berpenghasilan di kemudian hari.",
      },
      {
        pertanyaan: "Berapa lama proses penetapan NPWP Non-Efektif?",
        jawaban:
          "Umumnya selesai dalam 5–10 hari kerja setelah seluruh dokumen persyaratan permohonan dinyatakan lengkap oleh KPP.",
      },
      ...FAQ_SAMA,
    ],
    seo: {
      judul: "Jasa Penonaktifan NPWP Pribadi (Non-Efektif) - EasyTax",
      deskripsi:
        "Urus penetapan status NPWP Non-Efektif (NE) Pribadi mulai Rp 350.000. Bebas denda dan kewajiban lapor SPT Tahunan secara resmi.",
    },
  },
  {
    slug: "pembuatan-npwp-badan",
    paket: [
      {
        nama: "Pembuatan NPWP Badan",
        deskripsi:
          "Pendaftaran Nomor Pokok Wajib Pajak baru untuk badan usaha (PT, CV, Yayasan, Koperasi) resmi DJP.",
        harga: "Hubungi Kami",
        satuan: "",
        fitur: [
          "Konsultasi penentuan Klasifikasi Lapangan Usaha (KLU)",
          "Verifikasi akta pendirian dan SK Kemenkumham",
          "Pendaftaran online melalui sistem resmi DJP",
          "Penerbitan NPWP Badan dan Surat Keterangan Terdaftar (SKT)",
          "Panduan aktivasi akun pajak badan usaha",
        ],
      },
    ],
    faq: [
      {
        pertanyaan: "Dokumen apa saja yang dibutuhkan untuk membuat NPWP Badan?",
        jawaban:
          "Akta pendirian dan SK Kemenkumham, NPWP dan KTP penanggung jawab/direktur utama, serta dokumen alamat domisili atau legalitas usaha.",
      },
      {
        pertanyaan: "Berapa lama pembuatan NPWP Badan?",
        jawaban:
          "Proses pendaftaran melalui EasyTax selesai dalam 1–3 hari kerja setelah dokumen legalitas lengkap.",
      },
      ...FAQ_SAMA,
    ],
    seo: {
      judul: "Jasa Pembuatan NPWP Badan PT, CV & Yayasan - EasyTax",
      deskripsi:
        "Bantu pendaftaran dan pembuatan NPWP Badan usaha baru cepat, praktis, dan terdaftar resmi di DJP bersama EasyTax.",
    },
  },
  {
    slug: "pembuatan-npwp-pribadi",
    paket: [
      {
        nama: "Pembuatan NPWP Pribadi",
        deskripsi:
          "Pendaftaran NPWP baru untuk karyawan, profesional, dan pengusaha perorangan.",
        harga: "Hubungi Kami",
        satuan: "",
        fitur: [
          "Konsultasi kategori wajib pajak dan status PTKP",
          "Validasi data NIK dan data kependudukan",
          "Pendaftaran online ke sistem DJP",
          "Penerbitan NPWP elektronik resmi",
          "Panduan kewajiban perpajakan awal",
        ],
      },
    ],
    faq: [
      {
        pertanyaan: "Siapa saja yang wajib memiliki NPWP Pribadi?",
        jawaban:
          "Setiap orang pribadi yang memperoleh penghasilan di atas PTKP (Penghasilan Tidak Kena Pajak) atau menjalankan usaha/pekerjaan bebas di Indonesia.",
      },
      {
        pertanyaan: "Apakah NPWP Pribadi sudah terintegrasi dengan NIK?",
        jawaban:
          "Ya, sejak diberlakukannya sistem perpajakan terbaru, NIK 16 digit telah dipadankan sebagai NPWP Orang Pribadi penduduk Indonesia.",
      },
      ...FAQ_SAMA,
    ],
    seo: {
      judul: "Jasa Pembuatan NPWP Pribadi Cepat & Bebas Ribet - EasyTax",
      deskripsi:
        "Layanan pendaftaran NPWP Orang Pribadi baru untuk kebutuhan kerja, perbankan, dan usaha. Praktis tanpa antre di kantor pajak.",
    },
  },
  {
    slug: "pengajuan-surat-pajak-badan",
    paket: [
      {
        nama: "Pengajuan Surat Pajak Badan",
        deskripsi:
          "Pengurusan surat keterangan dan administrasi perpajakan resmi ke Kantor Pelayanan Pajak (KPP).",
        harga: "Hubungi Kami",
        satuan: "",
        fitur: [
          "Konsultasi kebutuhan surat keterangan perpajakan",
          "Review kepatuhan perpajakan sebelum permohonan",
          "Penyusunan berkas permohonan resmi",
          "Pengajuan Surat Keterangan Fiskal (SKF) / SKB",
          "Pendampingan korespondensi administrasi di KPP",
        ],
      },
    ],
    faq: [
      {
        pertanyaan: "Surat keterangan pajak apa saja yang bisa diurus?",
        jawaban:
          "EasyTax membantu pengurusan Surat Keterangan Fiskal (SKF) untuk tender/proyek pemerintah, Surat Keterangan Bebas (SKB) pemotongan/pemungutan PPh, permohonan pemindahbukuan (Pbk), dan surat permohonan administrasi perpajakan lainnya.",
      },
      {
        pertanyaan: "Berapa lama proses pengajuan surat keterangan pajak?",
        jawaban:
          "Tergantung jenis permohonan; SKF umumnya 3–5 hari kerja, sedangkan surat permohonan khusus lainnya mengikuti standar operasional KPP.",
      },
      ...FAQ_SAMA,
    ],
    seo: {
      judul: "Jasa Pengajuan Surat Pajak Badan & SKF Resmi - EasyTax",
      deskripsi:
        "Layanan pengurusan Surat Keterangan Fiskal (SKF), SKB, dan surat administrasi pajak badan usaha terpercaya bersama EasyTax.",
    },
  },
  {
    slug: "laporan-spt",
    paket: [
      {
        nama: "SPT Badan — 0 / Tidak Beroperasi",
        deskripsi: "SPT Tahunan PPh Badan bagi badan usaha yang belum/tidak beroperasi.",
        harga: "Rp 499.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Laporan Laba Rugi dan Neraca",
          "Penyusunan Draft SPT Tahunan PPh Badan",
          "Pembuatan Kode Billing PPh Tahunan (status kurang bayar)",
          "Submit SPT Tahunan PPh Badan resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Pribadi — 0 / Tidak Beroperasi",
        deskripsi: "SPT Tahunan Orang Pribadi bagi yang tidak memiliki omzet/penghasilan aktif.",
        harga: "Rp 449.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Draft SPT Tahunan PPh Pribadi",
          "Pembuatan Kode Billing PPh Tahunan (status kurang bayar)",
          "Submit SPT Tahunan PPh Pribadi resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Badan — Omzet Rp 0 – 600 Jt",
        deskripsi: "Penyusunan dan pelaporan SPT Tahunan Badan dengan omzet s.d. Rp 600 juta/bulan.",
        harga: "Rp 1.499.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Laporan Laba Rugi dan Neraca",
          "Penyusunan Draft SPT Tahunan PPh Badan",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Badan resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Pribadi — Omzet Rp 0 – 600 Jt",
        deskripsi: "Pelaporan SPT Tahunan Orang Pribadi / Usahawan omzet s.d. Rp 600 juta/bulan.",
        harga: "Rp 1.349.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Draft SPT Tahunan PPh Pribadi",
          "Perhitungan PPh Final UMKM / Tarif Umum",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Pribadi resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Badan — Omzet Rp 600 Jt – 1,2 M",
        deskripsi: "SPT Tahunan Badan usaha omzet Rp 600 juta s.d. Rp 1,2 miliar/bulan.",
        harga: "Rp 1.999.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Laporan Laba Rugi dan Neraca",
          "Penyusunan Draft SPT Tahunan PPh Badan",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Badan resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Pribadi — Omzet Rp 600 Jt – 1,2 M",
        deskripsi: "SPT Tahunan Pribadi usahawan/profesional omzet Rp 600 juta s.d. Rp 1,2 miliar/bulan.",
        harga: "Rp 1.799.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Draft SPT Tahunan PPh Pribadi",
          "Perhitungan Pajak Terutang & Kredit Pajak",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Pribadi resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Badan — Omzet Rp 1,2 M – 2,4 M",
        deskripsi: "SPT Tahunan Badan usaha omzet Rp 1,2 miliar s.d. Rp 2,4 miliar/bulan.",
        harga: "Rp 2.499.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Laporan Laba Rugi dan Neraca",
          "Penyusunan Draft SPT Tahunan PPh Badan",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Badan resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Pribadi — Omzet Rp 1,2 M – 2,4 M",
        deskripsi: "SPT Tahunan Orang Pribadi omzet Rp 1,2 miliar s.d. Rp 2,4 miliar/bulan.",
        harga: "Rp 2.249.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Draft SPT Tahunan PPh Pribadi",
          "Perhitungan Pajak Terutang & Lampiran Harta",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Pribadi resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Badan — Omzet Rp 2,4 M – 3,6 M",
        deskripsi: "SPT Tahunan Badan usaha omzet Rp 2,4 miliar s.d. Rp 3,6 miliar/bulan.",
        harga: "Rp 2.999.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Laporan Laba Rugi dan Neraca",
          "Penyusunan Draft SPT Tahunan PPh Badan",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Badan resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Pribadi — Omzet Rp 2,4 M – 3,6 M",
        deskripsi: "SPT Tahunan Orang Pribadi omzet Rp 2,4 miliar s.d. Rp 3,6 miliar/bulan.",
        harga: "Rp 2.699.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Draft SPT Tahunan PPh Pribadi",
          "Perhitungan Komprehensif Pajak Terutang",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Pribadi resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Badan — Omzet Rp 3,6 M – 4,8 M",
        deskripsi: "SPT Tahunan Badan usaha omzet Rp 3,6 miliar s.d. Rp 4,8 miliar/bulan.",
        harga: "Rp 3.499.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Laporan Laba Rugi dan Neraca",
          "Penyusunan Draft SPT Tahunan PPh Badan",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Badan resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Pribadi — Omzet Rp 3,6 M – 4,8 M",
        deskripsi: "SPT Tahunan Orang Pribadi omzet Rp 3,6 miliar s.d. Rp 4,8 miliar/bulan.",
        harga: "Rp 3.149.000",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Draft SPT Tahunan PPh Pribadi",
          "Perhitungan Pajak Terutang & Rekonsiliasi",
          "Pembuatan Kode Billing PPh Tahunan",
          "Submit SPT Tahunan PPh Pribadi resmi DJP",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Badan — Omzet > 4,8 Miliar",
        deskripsi: "SPT Tahunan Badan usaha omzet skala besar di atas Rp 4,8 miliar/bulan.",
        harga: "Negotiable",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Laporan Keuangan Lengkap",
          "Rekonsiliasi Fiskal Komprehensif",
          "Penyusunan & Submit SPT 1771 Badan",
          "Dedicated Tax Consultant",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
      {
        nama: "SPT Pribadi — Omzet > 4,8 Miliar",
        deskripsi: "SPT Tahunan Orang Pribadi High Net Worth / omzet di atas Rp 4,8 miliar/bulan.",
        harga: "Negotiable",
        satuan: "/tahun",
        fitur: [
          "Penyusunan Draft SPT 1770 / 1770 S",
          "Review Portofolio Harta & Investasi",
          "Pembuatan Kode Billing & Submit DJP",
          "Dedicated Tax Advisor",
          "[GRATIS] Revisi SPT Tahunan PPh 1 kali setahun",
        ],
      },
    ],
    faq: [
      {
        pertanyaan: "Apa Itu Layanan Jasa Lapor SPT?",
        jawaban:
          "Jasa lapor SPT (Surat Pemberitahuan) adalah layanan yang mendampingi wajib pajak, baik perorangan maupun badan usaha, dalam proses perhitungan, penyusunan, hingga pelaporan pajak tahunan secara resmi ke Direktorat Jenderal Pajak (DJP). Layanan ini memastikan seluruh kewajiban perpajakan diselesaikan secara akurat, tepat waktu, dan sesuai ketentuan undang-undang tanpa harus repot mengurusnya sendiri.",
      },
      {
        pertanyaan: "Apa Keunggulan Menggunakan Layanan Jasa Lapor SPT?",
        jawaban:
          "Anda tidak perlu menghabiskan waktu mempelajari aturan perpajakan yang rumit atau mengantre di sistem DJP. Perhitungan dan penyusunan dilakukan oleh tenaga ahli perpajakan sehingga meminimalkan risiko salah hitung atau salah input data. Proses pelaporan dilakukan lebih awal dan tepat waktu sehingga Anda terbebas dari risiko denda keterlambatan, dan seluruh dokumen keuangan serta data pribadi Anda dikelola dengan standar privasi dan keamanan yang ketat.",
      },
      {
        pertanyaan: "Siapa Saja yang Bisa Menggunakan Layanan Jasa Lapor SPT?",
        jawaban:
          "Layanan ini dapat digunakan oleh siapa saja yang memiliki NPWP atau NIK terdaftar sebagai wajib pajak, meliputi Wajib Pajak Orang Pribadi (karyawan swasta, PNS/TNI/Polri, profesional seperti dokter, konsultan, dan pengacara, freelancer, hingga pemilik usaha perorangan) serta Wajib Pajak Badan (PT, CV, firma, yayasan, maupun koperasi, baik yang aktif beroperasi maupun masih berstatus non-aktif/nihil).",
      },
      {
        pertanyaan: "Dokumen Apa Saja yang Perlu Disiapkan Sebelum Lapor SPT?",
        jawaban:
          "Untuk SPT Tahunan Pribadi (karyawan/profesional), siapkan bukti potong pajak (1721-A1/1721-A2), daftar rincian harta dan utang per 31 Desember, serta catatan penghasilan bruto jika memiliki usaha sampingan atau freelance. Untuk SPT Tahunan Badan (perusahaan), siapkan Laporan Keuangan (Laba Rugi dan Neraca), rekapitulasi peredaran bruto/omzet, bukti setor pajak bulanan (jika ada), dan profil perusahaan seperti Akta dan NPWP Badan.",
      },
      {
        pertanyaan: "Berapa lama proses pelaporan SPT?",
        jawaban:
          "Untuk SPT Tahunan Badan, pekerjaan utama Completed pada 2–4 hari kerja setelah dokumen lengkap diterima. Pengajuannya sendiri dilakukan sebelum tenggat 31 Maret.",
      },
      ...FAQ_SAMA,
    ],
    seo: {
      judul: "Jasa Lapor SPT Tahunan Badan/Pribadi - Easytax",
      deskripsi:
        "Jasa lapor SPT Tahunan Badan atau Pribadi melalui Coretax bersama tim berpengalaman EasyTax. Dari konsultasi, penyusunan, perhitungan, hingga pelaporan kami siap membantu Anda.",
    },
  },
  {
    slug: "pengurusan-pkp",
    paket: [
      {
        nama: "PKP Pulau Jawa",
        deskripsi:
          "Pendaftaran PKP untuk wilayah Pulau Jawa tanpa tambahan biaya apapun (harga coret Rp 3.000.000).",
        harga: "Rp 1.499.000",
        satuan: "/paket",
        fitur: [
          "Konsultasi tentang PKP / PPN",
          "Pengecekan status wajib pajak",
          "Pendaftaran PKP resmi DJP",
          "Persiapan & korespondensi survei PKP",
          "Pendampingan sertifikat elektronik",
          "Aktivasi e-Faktur",
          "Bonus Kupon Undian iPhone",
          "Bonus Dokumen Kontrak Bisnis",
          "Bonus Dokumen SOP Karyawan",
          "Bonus Dokumen SOP Perusahaan",
          "Bonus Voucher EasyLegal Rp 250.000",
        ],
      },
      {
        nama: "PKP Luar Jawa",
        deskripsi:
          "Pendaftaran PKP untuk wilayah Luar Pulau Jawa tanpa tambahan biaya apapun (harga coret Rp 4.000.000).",
        harga: "Rp 1.999.000",
        satuan: "/paket",
        fitur: [
          "Konsultasi tentang PKP / PPN",
          "Pengecekan status wajib pajak",
          "Pendaftaran PKP resmi DJP",
          "Persiapan & korespondensi survei PKP",
          "Pendampingan sertifikat elektronik",
          "Aktivasi e-Faktur",
          "Bonus Kupon Undian iPhone",
          "Bonus Dokumen Kontrak Bisnis",
          "Bonus Dokumen SOP Karyawan",
          "Bonus Dokumen SOP Perusahaan",
          "Bonus Voucher EasyLegal Rp 250.000",
        ],
      },
    ],
    faq: [
      {
        pertanyaan: "Apa itu Jasa Pengurusan PKP (Pengusaha Kena Pajak)?",
        jawaban:
          "Jasa pengurusan PKP adalah layanan yang membantu pelaku usaha, baik perorangan maupun badan usaha seperti PT atau CV, dalam mengurus proses pendaftaran dan pengukuhan status usahanya menjadi Pengusaha Kena Pajak di Kantor Pelayanan Pajak (KPP). Seluruh proses administratif ditangani oleh tenaga ahli, mulai dari penyiapan dokumen, pengisian formulir, pengajuan melalui sistem perpajakan, hingga pendampingan saat verifikasi atau survei lapangan sampai Surat Pengukuhan Pengusaha Kena Pajak (SPPKP) resmi diterbitkan.",
      },
      {
        pertanyaan: "Apa Manfaat dari Menggunakan Jasa Pengurusan PKP?",
        jawaban:
          "Anda menghemat waktu karena tidak perlu mempelajari aturan teknis atau bolak-balik mengurus birokrasi perpajakan. Risiko penolakan diminimalisir karena berkas divalidasi dengan cermat oleh ahli agar memenuhi standar KPP. Setelah dikukuhkan, Anda juga langsung dibantu proses aktivasi akun e-Faktur agar bisnis bisa langsung beroperasi secara legal perpajakan.",
      },
      {
        pertanyaan: "Apa Saja Syarat untuk Mengajukan PKP Melalui EasyTax?",
        jawaban:
          "Badan usaha atau perorangan telah memiliki NPWP aktif, menyampaikan laporan keuangan atau rekapitulasi peredaran bruto usaha, memiliki tempat kegiatan usaha yang jelas (kantor/tempat operasional), dan melampirkan dokumen legalitas usaha yang sah.",
      },
      {
        pertanyaan: "Dokumen Apa Saja yang Harus Disiapkan untuk Pengurusan PKP Badan (PT/CV)?",
        jawaban:
          "KTP dan NPWP pengurus/direktur utama, akta pendirian perusahaan beserta SK Kemenkumham (dan perubahannya jika ada), NPWP Badan usaha yang aktif, Surat Keterangan Domisili Usaha (SKDU) atau izin lokasi, serta foto kantor/tempat usaha (tampak luar dan dalam lengkap dengan plang nama jika ada) beserta denah lokasi.",
      },
      {
        pertanyaan: "Dokumen Apa yang Diperlukan Jika Pengaju Berstatus Pengusaha Perorangan (Pribadi)?",
        jawaban:
          "KTP dan NPWP Orang Pribadi, izin usaha atau Surat Keterangan Usaha (SKU) dari kelurahan/kecamatan atau OSS (NIB), catatan/rekapitulasi omzet usaha, serta foto tempat usaha dan alamat operasional yang valid.",
      },
      {
        pertanyaan: "Berapa lama proses pengurusan PKP?",
        jawaban:
          "Umumnya 3–6 minggu, tergantung hasil survei lokasi dan kelengkapan dokumen. EasyTax menyiapkan seluruh dokumentasi dan pendamping lapangan agar proses tidak molor.",
      },
      ...FAQ_SAMA,
    ],
    seo: {
      judul: "Jasa Pengurusan PKP Resmi dan Cepat - EasyTax",
      deskripsi:
        "Bantu bisnis Anda berkembang dengan jasa pengurusan PKP resmi & cepat dari EasyTax. Proses praktis, syarat mudah, dan didampingi tim ahli berpengalaman.",
    },
  },
  {
    slug: "laporan-perpajakan-keuangan",
    paket: [
      {
        nama: "Tidak Beroperasi / Dormant",
        deskripsi:
          "Untuk badan usaha yang belum/tidak beroperasi namun tetap wajib lapor SPT Masa & pembukuan.",
        harga: "Rp 749.000",
        satuan: "/bulan",
        fitur: [
          "Pelaporan SPT Masa PPh",
          "Penyusunan Laporan Keuangan",
          "Konsultasi Pajak Unlimited via WhatsApp",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
      {
        nama: "Omzet Rp 0 – 50 Juta",
        deskripsi: "Solusi tepat bagi startup dan UMKM dengan transaksi awal.",
        harga: "Rp 999.000",
        satuan: "/bulan",
        fitur: [
          "Pelaporan SPT Masa PPh",
          "Laporan Keuangan (Neraca & Laba Rugi)",
          "Konsultasi Pajak via Group WhatsApp",
          "Konsultasi Call/Meet s.d. 120 menit/bulan",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
      {
        nama: "Omzet Rp 50 – 100 Juta",
        deskripsi: "Untuk bisnis berkembang dengan transaksi operasional aktif.",
        harga: "Rp 1.499.000",
        satuan: "/bulan",
        fitur: [
          "Pelaporan SPT Masa PPh Bulanan",
          "Penyusunan Laporan Keuangan Standar SAK",
          "Rekonsiliasi Bank & Transaksi Harian",
          "Konsultasi Pajak Unlimited via WhatsApp",
          "Konsultasi Call/Meet s.d. 120 menit/bulan",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
      {
        nama: "Omzet Rp 100 – 200 Juta",
        deskripsi: "Pengelolaan pembukuan rapi dan pelaporan pajak tepat waktu.",
        harga: "Rp 1.999.000",
        satuan: "/bulan",
        fitur: [
          "Pelaporan Seluruh SPT Masa PPh",
          "Penyusunan Laporan Neraca & Laba Rugi",
          "Rekonsiliasi Bank & Arus Kas",
          "Konsultasi Pajak Unlimited via WhatsApp",
          "Konsultasi Call/Meet s.d. 120 menit/bulan",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
      {
        nama: "Omzet Rp 200 – 300 Juta",
        deskripsi: "Kepatuhan pajak dan pencatatan akuntansi volume transaksi menengah.",
        harga: "Rp 2.499.000",
        satuan: "/bulan",
        fitur: [
          "Pelaporan SPT Masa PPh Badan",
          "Laporan Keuangan & Buku Besar",
          "Rekonsiliasi Fiskal & Transaksi",
          "Konsultasi Pajak Unlimited via WhatsApp",
          "Konsultasi Call/Meet s.d. 120 menit/bulan",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
      {
        nama: "Omzet Rp 300 – 400 Juta",
        deskripsi: "Solusi lengkap pembukuan dan administrasi pajak korporasi.",
        harga: "Rp 2.999.000",
        satuan: "/bulan",
        fitur: [
          "Pelaporan Seluruh SPT Masa Pajak",
          "Laporan Keuangan Lengkap",
          "Rekonsiliasi Bank & Transaksi Detail",
          "Konsultasi Pajak Unlimited via WhatsApp",
          "Konsultasi Call/Meet s.d. 120 menit/bulan",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
      {
        nama: "Omzet Rp 400 – 500 Juta",
        deskripsi: "Untuk perusahaan berkembang menjelang batas pengukuhan PKP.",
        harga: "Rp 3.999.000",
        satuan: "/bulan",
        fitur: [
          "Pelaporan SPT Masa PPh & PPN",
          "Laporan Keuangan & Jurnal Lengkap",
          "Tax Review & Rekonsiliasi Rutin",
          "Konsultasi Pajak Unlimited via WhatsApp",
          "Konsultasi Call/Meet s.d. 120 menit/bulan",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
      {
        nama: "Omzet Rp 500 Jt – 1 M",
        deskripsi: "Pengawasan keuangan dan pelaporan pajak korporasi skala besar.",
        harga: "Rp 4.999.000",
        satuan: "/bulan",
        fitur: [
          "Laporan Keuangan Bulanan Lengkap",
          "Kepatuhan PPh Masa, PPN & e-Faktur",
          "Pendampingan Tax Planning Bulanan",
          "Konsultasi Pajak Unlimited via WhatsApp",
          "Konsultasi Call/Meet s.d. 120 menit/bulan",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
      {
        nama: "Omzet Rp 1 M – 2,5 M",
        deskripsi: "Manajemen akuntansi dan kepatuhan pajak multi-cabang/volume besar.",
        harga: "Rp 5.999.000",
        satuan: "/bulan",
        fitur: [
          "Laporan Keuangan Lengkap & Konsolidasi",
          "Pelaporan Seluruh Kewajiban Perpajakan",
          "Pemeriksaan Kepatuhan Pajak Berkala",
          "Dedicated Tax Consultant",
          "Konsultasi Pajak Unlimited via WhatsApp & Call",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
      {
        nama: "Omzet > 2,5 M",
        deskripsi: "Solusi kustom untuk enterprise dengan kebutuhan kompleks.",
        harga: "Negotiable",
        satuan: "/bulan",
        fitur: [
          "Custom Financial Reporting & Dashboard",
          "Full Corporate Tax Compliance & Advisory",
          "Pendampingan Pemeriksaan & SP2DK",
          "Dedicated Senior Tax Expert Team",
          "Unlimited Konsultasi Semua Kanal",
          "FREE SPT Tahunan (paket 12 bulan)",
        ],
      },
    ],
    faq: [
      {
        pertanyaan: "Apa saja catatan dan ketentuan dalam paket layanan ini?",
        jawaban:
          "1. Konsultasi via Chat atau Voice Note unlimited melalui grup WhatsApp. 2. Konsultasi via Call/Zoom/Meet s.d. 120 menit/bulan dengan perjanjian. 3. Layanan berlaku untuk 1 NPWP. 4. FREE SPT Tahunan untuk paket 12 bulan di muka atau rutin 12 bulan. 5. FREE Unlimited konsultasi Call/Zoom/Meet untuk pembelian paket 12 bulan.",
      },
      {
        pertanyaan: "Apa itu jasa akuntansi dan pajak?",
        jawaban:
          "Jasa akuntansi dan pajak adalah layanan profesional dari ahli keuangan untuk membantu bisnis, organisasi, maupun perorangan dalam mengelola pencatatan pembukuan harian, penyusunan laporan keuangan (Laba Rugi, Neraca, Arus Kas), serta memenuhi kewajiban perpajakan resmi sesuai hukum yang berlaku.",
      },
      {
        pertanyaan: "Apa keuntungan menggunakan jasa akuntansi dan pajak EasyTax?",
        jawaban:
          "Anda menghemat waktu tanpa perlu keluar rumah atau mengantre, pembukuan rapi sesuai SAK, pelaporan pajak tepat waktu agar terhindar dari denda/sanksi DJP, serta pendampingan langsung oleh tim konsultan pajak berpengalaman.",
      },
      ...FAQ_SAMA,
    ],
    seo: {
      judul: "Jasa Akuntansi dan Pajak untuk Bisnis & UMKM - Easytax",
      deskripsi:
        "Bingung kelola pembukuan? Gunakan jasa akuntansi dan pajak dari Easytax. Laporan keuangan rapi, SPT akurat, dan bebas sanksi. Konsultasi gratis!",
    },
  },
];

/** Detail layanan berdasarkan slug, atau undefined bila slug tidak dikenal. */
export function cariDetailLayanan(slug: string): DetailLayanan | undefined {
  return detailLayanan.find((d) => d.slug === slug);
}