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
    slug: "restitusi-pajak",
    paket: [
      {
        nama: "Paket Restitusi Basic",
        deskripsi:
          "Cocok untuk kebutuhan restitusi dengan dokumen dan transaksi yang relatif sederhana.",
        harga: "Rp 2.500.000",
        satuan: "/paket",
        fitur: [
          "Pemeriksaan kelengkapan dokumen",
          "Review data perpajakan",
          "Pendampingan persiapan pengajuan",
          "Konsultasi dasar restitusi",
        ],
      },
      {
        nama: "Paket Restitusi Standard",
        deskripsi:
          "Pendampingan restitusi yang lebih menyeluruh untuk dokumen yang lebih kompleks.",
        harga: "Rp 5.000.000",
        satuan: "/paket",
        fitur: [
          "Review dokumen dan data perpajakan",
          "Pemeriksaan transaksi terkait",
          "Persiapan dokumen restitusi",
          "Pendampingan proses pengajuan",
          "Konsultasi selama proses",
        ],
      },
      {
        nama: "Paket Restitusi Professional",
        deskripsi:
          "Pemeriksaan dan dokumentasi yang lebih mendalam untuk proses restitusi.",
        harga: "Rp 8.000.000",
        satuan: "/paket",
        fitur: [
          "Review komprehensif dokumen perpajakan",
          "Analisis data dan transaksi",
          "Persiapan dokumen pendukung",
          "Pendampingan proses restitusi",
          "Konsultasi dan monitoring proses",
        ],
      },
      {
        nama: "Paket Restitusi Corporate",
        deskripsi:
          "Pendampingan end-to-end untuk volume dokumen yang besar dan kompleks.",
        harga: "Rp 12.500.000",
        satuan: "/paket",
        fitur: [
          "Review menyeluruh data perpajakan",
          "Analisis dokumen dan transaksi",
          "Persiapan dokumen pendukung",
          "Pendampingan proses restitusi",
          "Monitoring dan konsultasi intensif",
        ],
      },
    ],
    faq: [
      {
        pertanyaan: "Apa itu Restitusi Pajak?",
        jawaban:
          "Restitusi pajak adalah hak wajib pajak untuk meminta kembali kelebihan uang pajak yang telanjur disetor atau dana yang sebenarnya tidak wajib dibayarkan. Pengembalian ini bisa diajukan untuk berbagai jenis pungutan seperti PPh, PPN, dan PPnBM, dan negara akan mengembalikan dana tersebut setelah Direktorat Jenderal Pajak (DJP) merampungkan proses pemeriksaan sesuai aturan yang berlaku.",
      },
      {
        pertanyaan: "Apa itu Jasa Restitusi Pajak?",
        jawaban:
          "Jasa Restitusi Pajak adalah layanan yang membantu wajib pajak, baik perorangan maupun badan usaha, dalam mengurus proses pengajuan permohonan pengembalian (restitusi) atas kelebihan pembayaran pajak kepada negara. Seluruh proses administratif yang kompleks dan membutuhkan ketelitian tinggi ditangani langsung oleh tenaga ahli perpajakan.",
      },
      {
        pertanyaan: "Apa Penyebab Restitusi Pajak?",
        jawaban:
          "Restitusi pajak biasanya terjadi akibat kesalahan hitung atau potong saat pihak lain memotong, memungut, atau Anda salah menghitung besaran pajak di SPT; perusahaan mendapat fasilitas khusus berupa PPh atau PPN yang dibebaskan atau ditanggung pemerintah; kegiatan usaha tertentu dikenakan tarif pajak 0%; atau Anda menyetor pajak padahal sebenarnya tidak termasuk wajib pajak yang harus membayarnya.",
      },
      {
        pertanyaan: "Siapa Saja yang Berhak Mengajukan Permohonan Restitusi Pajak?",
        jawaban:
          "Restitusi dapat diajukan oleh Wajib Pajak Orang Pribadi maupun Wajib Pajak Badan (perusahaan) yang mengalami kondisi kelebihan bayar pajak atau melakukan setoran pajak yang tidak terutang sesuai ketentuan perpajakan yang berlaku.",
      },
      {
        pertanyaan:
          "Berapa lama proses pengajuan restitusi sampai dicairkan?",
        jawaban:
          "Umumnya 1–3 bulan sejak pengajuan, tergantung proses verifikasi DJP. EasyTax menyiapkan dokumen secara lengkap agar verifikasi tidak berputar.",
      },
      ...FAQ_SAMA,
    ],
    seo: {
      judul: "Jasa Restitusi Pajak PPH dan PPN - EasyTax",
      deskripsi:
        "Klaim kelebihan bayar pajak Anda dengan aman. EasyTax menyediakan jasa restitusi pajak profesional untuk membantu proses pendampingan hingga dana cair.",
    },
  },
  {
    slug: "laporan-spt",
    paket: [
      {
        nama: "SPT Tahunan Badan",
        deskripsi:
          "Penyusunan dan e-Filing SPT Tahunan PPh Pasal 1771 untuk badan usaha.",
        harga: "Rp 1.750.000",
        satuan: "/tahun",
        fitur: [
          "Pemeriksaan pembukuan dan bukti potong",
          "Penyusunan lampiran SPT",
          "e-Filing SPT Tahunan Badan",
          "Bukti lapor resmi dari DJP",
        ],
      },
      {
        nama: "SPT Orang Pribadi",
        deskripsi:
          "Penghitungan dan pelaporan pajak penghasilan pribadi yearly.",
        harga: "Rp 750.000",
        satuan: "/tahun",
        fitur: [
          "Rekapitulasi penghasilan dan potongan",
          "Penghitungan pajak terutang",
          "Pelaporan SPT Orang Pribadi",
          "Konsultasi satu kali",
        ],
      },
      {
        nama: "e-Filing & Pendampingan",
        deskripsi:
          "Pendampingan e-Filing lengkap dengan pemeriksaan sebelum pelaporan.",
        harga: "Rp 2.500.000",
        satuan: "/tahun",
        fitur: [
          "Verifikasi dan rekonsiliasi data",
          "Pendampingan.input pelaporan",
          "Pemeriksaan hasil e-Filing",
          "Simulasi risiko koreksi fiskal",
        ],
      },
      {
        nama: "Paket Lengkap Setahun",
        deskripsi:
          "SPT Tahunan plus laporan bulanan dan pendampingan sepanjang tahun.",
        harga: "Rp 4.500.000",
        satuan: "/tahun",
        fitur: [
          "SPT Tahunan dan laporan bulanan",
          "Laporan neraca dan laba rugi",
          "Pendampingan pemeriksaan KPP",
          "Konsultasi tanpa batas",
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
        nama: "Pengurusan PKP Dasar",
        deskripsi: "Pendampingan pengukuhan untuk usaha dengan omzet sederhana.",
        harga: "Rp 1.500.000",
        satuan: "/paket",
        fitur: [
          "Pendampingan pengisian formulir",
          "Verifikasi kelengkapan dokumen",
          "Panduan survei lokasi KPP",
          "Pendampingan aktivasi e-Faktur",
        ],
      },
      {
        nama: "Pengurusan PKP Lengkap",
        deskripsi:
          "Proses sampai PKP aktif beserta e-Faktur dan sertifikat elektronik.",
        harga: "Rp 2.500.000",
        satuan: "/paket",
        fitur: [
          "Seluruh paperwork pengukuhan",
          "Pendampingan survei lokasi",
          "Aktivasi akun e-Faktur",
          "Penerbitan sertifikat elektronik",
          "Pelatihan pembekalan faktur pajak",
        ],
      },
      {
        nama: "PKP Plus Pembukuan",
        deskripsi: "PKP aktif sekaligus penjadwalan pembukuan bulanan.",
        harga: "Rp 4.000.000",
        satuan: "/paket",
        fitur: [
          "Pengurusan PKP sampai aktif",
          "Pembukuan bulanan 12 bulan",
          "Penyusunan laporan pajak bulanan",
          "Rekonsiliasi faktur dan pembelian",
        ],
      },
      {
        nama: "PKP Korporat",
        deskripsi: "Pendampingan penuh untuk perusahaan multi-cabang.",
        harga: "Rp 6.000.000",
        satuan: "/paket",
        fitur: [
          "Pengurusan PKP untuk seluruh outlet",
          "Standardisasi sistem faktur pajak",
          "Pelatihan tim internal",
          "Pendampingan satu tahun",
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