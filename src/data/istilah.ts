export interface IstilahItem {
  slug: string;
  title: string;
  shortTitle?: string;
  category: "PPh" | "PPN" | "PKP" | "SPT" | "Akuntansi" | "Kepatuhan Pajak" | "Perpajakan";
  excerpt: string;
  content: string;
  dasarHukum?: string;
}

export const DAFTAR_KATEGORI_ISTILAH = [
  "Semua",
  "Perpajakan",
  "PPh",
  "PPN",
  "PKP",
  "SPT",
  "Akuntansi",
  "Kepatuhan Pajak",
] as const;

export type KategoriIstilah = (typeof DAFTAR_KATEGORI_ISTILAH)[number];

export const daftarIstilah: IstilahItem[] = [
  {
    "slug": "akuntansi",
    "title": "Akuntansi (Accounting)",
    "shortTitle": "Akuntansi",
    "category": "Akuntansi",
    "dasarHukum": "Standar Akuntansi Keuangan (SAK) Indonesia",
    "excerpt": "Proses pencatatan, pengelompokan, peringkasan, dan penyajian transaksi keuangan entitas bisnis untuk menghasilkan informasi laporan keuangan yang akurat.",
    "content": "**Akuntansi (Accounting)** adalah seni dan disiplin pencatatan, pengklasifikasian, dan pengikhtisaran transaksi keuangan organisasi bisnis secara sistematis guna menghasilkan laporan keuangan yang andal bagi manajemen, pemegang saham, perbankan, dan otoritas perpajakan."
  },
  {
    "slug": "coretax",
    "title": "Coretax System DJP",
    "shortTitle": "Coretax",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Perpres No. 40 Tahun 2018",
    "excerpt": "Sistem Informasi Manajemen Terintegrasi (Core Tax Administration System) generasi terbaru milik DJP untuk mengintegrasikan seluruh proses bisnis perpajakan.",
    "content": "**Coretax System** adalah pembaruan menyeluruh sistem teknologi informasi perpajakan Direktorat Jenderal Pajak yang mengintegrasikan 21 proses bisnis perpajakan (registrasi, pembayaran, pelaporan SPT, penagihan, pemeriksaan, hingga keberatan) dalam satu platform terpadu."
  },
  {
    "slug": "depresiasi",
    "title": "Depresiasi (Penyusutan Fiskal)",
    "shortTitle": "Penyusutan Fiskal",
    "category": "Akuntansi",
    "dasarHukum": "Pasal 11 UU PPh",
    "excerpt": "Alokasi sistematis harga perolehan harta berwujud selama masa manfaat ekonomisnya sesuai dengan kelompok aset fiskal DJP.",
    "content": "**Depresiasi (Penyusutan Fiskal)** adalah pembebanan bertahap atas nilai perolehan aktiva tetap berwujud selama masa manfaatnya menurut tarif dan metode garis lurus (straight line) atau saldo menurun (declining balance) sesuai kelompok harta berwujud Pasal 11 UU PPh."
  },
  {
    "slug": "ebilling",
    "title": "e-Billing Pajak & Kode Billing",
    "shortTitle": "e-Billing",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "PER-05/PJ/2017",
    "excerpt": "Metode pembayaran pajak elektronik menggunakan Kode Billing 15 digit sebelum melakukan penyetoran ke kas negara melalui bank persepsi atau kantor pos.",
    "content": "**e-Billing Pajak** adalah sistem penerbitan kode pembayaran (Kode Billing) berbasis online yang menggantikan formulir Surat Setoran Pajak (SSP) manual. Kode billing terdiri dari 15 digit angka yang berlaku dalam masa waktu tertentu sebelum disetorkan."
  },
  {
    "slug": "efaktur",
    "title": "e-Faktur Pajak",
    "shortTitle": "e-Faktur",
    "category": "PPN",
    "dasarHukum": "PER-03/PJ/2022, PER-11/PJ/2022",
    "excerpt": "Aplikasi atau sistem resmi DJP untuk membuat dan melaporkan faktur pajak secara elektronik guna mencegah penerbitan faktur fiktif.",
    "content": "**e-Faktur** adalah aplikasi resmi dari Direktorat Jenderal Pajak (DJP) yang digunakan oleh Pengusaha Kena Pajak (PKP) untuk menerbitkan Faktur Pajak elektronik dan melaporkan SPT Masa PPN 1111 secara terintegrasi."
  },
  {
    "slug": "e-filing",
    "title": "e-Filing DJP Online",
    "shortTitle": "e-Filing",
    "category": "SPT",
    "dasarHukum": "PER-03/PJ/2015",
    "excerpt": "Layanan penyampaian SPT secara online dan realtime melalui situs web Direktorat Jenderal Pajak atau Application Service Provider (ASP) resmi.",
    "content": "**e-Filing** adalah cara penyampaian SPT tahunan maupun masa secara elektronik yang dilakukan secara online dan real time melalui portal resmi DJP Online (djponline.pajak.go.id) dengan menggunakan Bukti Penerimaan Elektronik (BPE) sebagai bukti lapor sah."
  },
  {
    "slug": "efin",
    "title": "EFIN (Electronic Filing Identification Number)",
    "shortTitle": "EFIN",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "PER-41/PJ/2015",
    "excerpt": "Nomor identitas digital resmi dari DJP untuk melakukan registrasi dan transaksi elektronik di portal DJP Online dan aplikasi perpajakan.",
    "content": "**EFIN (Electronic Filing Identification Number)** adalah 10 digit nomor identitas yang diterbitkan oleh KPP untuk mengautentikasi wajib pajak saat mendaftar akun DJP Online, reset password akun pajak, dan mengajukan sertifikat elektronik."
  },
  {
    "slug": "faktur-pajak",
    "title": "Faktur Pajak",
    "shortTitle": "Faktur Pajak",
    "category": "PPN",
    "dasarHukum": "Pasal 13 UU PPN, PER-03/PJ/2022 stdtd PER-11/PJ/2022",
    "excerpt": "Bukti pungutan pajak resmi yang dibuat oleh Pengusaha Kena Pajak (PKP) atas penyerahan Barang Kena Pajak (BKP) atau Jasa Kena Pajak (JKP).",
    "content": "**Faktur Pajak** adalah dokumen elektronik sah yang diterbitkan oleh Pengusaha Kena Pajak (PKP) sebagai bukti telah memungut Pajak Pertambahan Nilai (PPN) dari pembeli atau pengguna jasa.\n\n### Komponen Utama Faktur Pajak\n- **Nomor Seri Faktur Pajak (NSFP)** yang dialokasikan resmi oleh DJP.\n- Identitas PKP Penjual (Nama, Alamat, NPWP).\n- Identitas Pembeli (Nama, Alamat, NPWP/NIK).\n- Rincian Barang/Jasa Kena Pajak, Harga Jual, DPP (Dasar Pengenaan Pajak), dan nilai PPN terutang.\n- Kode QR validasi resmi e-Faktur."
  },
  {
    "slug": "faktur-pajak-keluaran",
    "title": "Faktur Pajak Keluaran (PK)",
    "shortTitle": "Pajak Keluaran",
    "category": "PPN",
    "dasarHukum": "Pasal 9 UU PPN stdtd UU HPP",
    "excerpt": "PPN terutang yang wajib dipungut oleh PKP saat melakukan penjualan barang atau penyerahan jasa kena pajak kepada konsumen.",
    "content": "**Faktur Pajak Keluaran (Pajak Keluaran)** adalah PPN terutang yang wajib dipungut oleh Pengusaha Kena Pajak saat menyerahkan BKP, JKP, atau ekspor barang kena pajak.\n\nPada akhir bulan (masa pajak), total Pajak Keluaran dibandingkan dengan total Pajak Masukan:\n- Jika PK > PM: PKP wajib menyetor selisih Kurang Bayar ke kas negara.\n- Jika PK < PM: PKP berhak mengajukan kompensasi ke bulan berikutnya atau memohon Restitusi Pajak."
  },
  {
    "slug": "faktur-pajak-masukan",
    "title": "Faktur Pajak Masukan (PM)",
    "shortTitle": "Pajak Masukan",
    "category": "PPN",
    "dasarHukum": "Pasal 9 UU PPN stdtd UU HPP",
    "excerpt": "PPN yang dibayarkan oleh PKP pada saat membeli barang atau memanfaatkan jasa kena pajak dari PKP lain yang dapat dikreditkan terhadap Pajak Keluaran.",
    "content": "**Faktur Pajak Masukan (Pajak Masukan)** adalah PPN yang seharusnya sudah dibayar oleh Pengusaha Kena Pajak saat perolehan Barang Kena Pajak (BKP), penerimaan Jasa Kena Pajak (JKP), atau impor barang.\n\n### Pengkreditan Pajak Masukan\nPajak Masukan dapat dikreditkan dengan Pajak Keluaran untuk masa pajak yang sama, atau paling lambat 3 (tiga) bulan setelah berakhirnya masa pajak yang bersangkutan sepanjang belum dibebankan sebagai biaya dan belum dilakukan pemeriksaan."
  },
  {
    "slug": "fungsi-faktur-pajak",
    "title": "Fungsi Faktur Pajak",
    "shortTitle": "Fungsi Faktur Pajak",
    "category": "PPN",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Fungsi Faktur Pajak - EasyLegal | Secara umum, Faktur Pajak berfungsi sebagai bukti transaksi barang atau jasa kena pajak tersebut telah dilakukan pemungutan Pajak...",
    "content": "SEO: Fungsi Faktur Pajak - EasyLegal | Secara umum, Faktur Pajak berfungsi sebagai bukti transaksi barang atau jasa kena pajak tersebut telah dilakukan pemungutan Pajak Pertambahan Nilai (PPN)....\n\n\n\n\n\nSecara umum, Faktur Pajak berfungsi <b>sebagai bukti transaksi barang atau jasa kena pajak tersebut telah dilakukan pemungutan Pajak Pertambahan Nilai (PPN)</b>. Dengan adanya eFaktur, maka pengusaha dapat terbebas dari tuduhan manipulasi atau penggelapan pajak pada saat ada pemeriksaan."
  },
  {
    "slug": "fungsi-pajak",
    "title": "Fungsi Pajak",
    "shortTitle": "Fungsi Pajak",
    "category": "Perpajakan",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Fungsi Pajak - EasyLegal | Sebagai sumber pendapatan negara, pajak berfungsi untuk membiayai pengeluaran-pengeluaran negara. Untuk menjalankan tugas-tugas rutin negara dan...",
    "content": "SEO: Fungsi Pajak - EasyLegal | Sebagai sumber pendapatan negara, pajak berfungsi untuk membiayai pengeluaran-pengeluaran negara. Untuk menjalankan tugas-tugas rutin negara dan melaksanakan...\n\n\n\n\n\nSebagai sumber pendapatan negara, pajak berfungsi untuk <b>membiayai pengeluaran-pengeluaran negara</b>. Untuk menjalankan tugas-tugas rutin negara dan melaksanakan pembangunan, negara membutuhkan biaya. Biaya ini dapat diperoleh dari penerimaan pajak.\n\n\n\n\n\n## G"
  },
  {
    "slug": "jenis-pajak",
    "title": "Jenis-Jenis Pajak di Indonesia",
    "shortTitle": "Jenis-Jenis Pajak di Indonesia",
    "category": "Perpajakan",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Jenis Pajak - EasyLegal | Jenis Pajak pusat terdiri dari 5 yaitu Pajak Penghasilan (PPh), Pajak Pertambahan Nilai (PPN), Pajak Penjualan Atas Barang Mewah (PPnBM), Bea...",
    "content": "SEO: Jenis Pajak - EasyLegal | Jenis Pajak pusat terdiri dari 5 yaitu Pajak Penghasilan (PPh), Pajak Pertambahan Nilai (PPN), Pajak Penjualan Atas Barang Mewah (PPnBM), Bea Meterai dan Pajak...\n\n\n\n\n\nJenis Pajak pusat terdiri dari 5 yaitu <b>Pajak Penghasilan (PPh), Pajak Pertambahan Nilai (PPN), Pajak Penjualan Atas Barang Mewah (PPnBM), Bea Meterai dan Pajak Bumi dan Bangunan (PBB)</b>."
  },
  {
    "slug": "jenis-pph",
    "title": "Jenis-Jenis PPh (Pajak Penghasilan)",
    "shortTitle": "Jenis-Jenis PPh",
    "category": "PPh",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Jenis PPH - EasyLegal | Jenis-jenis Pajak Penghasilan (PPh) di Indonesia berdasarkan Undang-Undang Pajak Penghasilan adalah sebagai berikut:\\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ 1. PPh Pasal...",
    "content": "SEO: Jenis PPH - EasyLegal | Jenis-jenis Pajak Penghasilan (PPh) di Indonesia berdasarkan Undang-Undang Pajak Penghasilan adalah sebagai berikut:\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n1. PPh Pasal 21\\\\r\\\n\n\n\\\\r\\\n...\n\n\n\n\n\n<strong>Jenis-jenis Pajak Penghasilan (PPh)</strong> di Indonesia berdasarkan Undang-Undang Pajak Penghasilan adalah sebagai berikut:\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3>1. <strong>PPh Pasal 21</strong></h3>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Objek</strong>: Penghasilan berupa gaji, upah, honorarium, tunjangan, atau pembayaran lain terkait pekerjaan.</li>\\\\r\\\n \t<li><strong>Subjek</strong>: Pegawai, penerima jasa, atau tenaga kerja lainnya.</li>\\\\r\\\n \t<li><strong>Pemotong Pajak</strong>: Perusahaan atau pemberi kerja.</li>\\\\r\\\n</ul>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3>2. <strong>PPh Pasal 22</strong></h3>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Objek</strong>: Transaksi impor, ekspor, atau pembelian barang tertentu oleh pemerintah.</li>\\\\r\\\n \t<li><strong>Subjek</strong>: Importir, eksportir, atau penjual barang ke pemerintah.</li>\\\\r\\\n \t<li><strong>Pemungut Pajak</strong>: Bendahara pemerintah atau badan usaha tertentu.</li>\\\\r\\\n</ul>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3>3. <strong>PPh Pasal 23</strong></h3>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Objek</strong>: Penghasilan berupa bunga, royalti, dividen, sewa, atau jasa tertentu.</li>\\\\r\\\n \t<li><strong>Subjek</strong>: Penerima penghasilan dari transaksi tersebut.</li>\\\\r\\\n \t<li><strong>Pemotong Pajak</strong>: Pihak pemberi penghasilan.</li>\\\\r\\\n</ul>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3>4. <strong>PPh Pasal 25</strong></h3>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Objek</strong>: Angsuran pajak yang dibayar secara berkala berdasarkan perhitungan tahunan.</li>\\\\r\\\n \t<li><strong>Subjek</strong>: Wajib Pajak Orang Pribadi atau Badan.</li>\\\\r\\\n \t<li><strong>Tujuan</strong>: Mengurangi beban PPh yang harus dibayar di akhir tahun.</li>\\\\r\\\n</ul>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3>5. <strong>PPh Pasal 26</strong></h3>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Objek</strong>: Penghasilan yang diterima Wajib Pajak luar negeri dari Indonesia.</li>\\\\r\\\n \t<li><strong>Subjek</strong>: Orang pribadi atau badan yang tidak berdomisili di Indonesia.</li>\\\\r\\\n \t<li><strong>Tarif</strong>: Umumnya 20% dari bruto (bisa lebih rendah jika ada perjanjian pajak internasional).</li>\\\\r\\\n</ul>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3>6. <strong>PPh Pasal 4 Ayat (2)</strong> (PPh Final)</h3>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Objek</strong>: Penghasilan tertentu yang dikenai pajak final, seperti bunga deposito, sewa tanah atau bangunan, dan UMKM.</li>\\\\r\\\n \t<li><strong>Subjek</strong>: Orang pribadi atau badan yang menerima penghasilan tersebut.</li>\\\\r\\\n \t<li><strong>Sifat</strong>: Final, tidak perlu dihitung ulang dalam SPT Tahunan.</li>\\\\r\\\n</ul>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3>7. <strong>PPh Pasal 15</strong></h3>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Objek</strong>: Penghasilan khusus dari sektor tertentu, seperti pelayaran, penerbangan internasional, dan konstruksi.</li>\\\\r\\\n \t<li><strong>Subjek</strong>: Badan usaha yang bergerak di bidang tersebut.</li>\\\\r\\\n \t<li><strong>Metode</strong>: Menggunakan norma perhitungan khusus.</li>\\\\r\\\n</ul>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3>8. <strong>PPh Pasal 29</strong></h3>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Objek</strong>: Kekurangan pembayaran pajak penghasilan tahunan.</li>\\\\r\\\n \t<li><strong>Subjek</strong>: Wajib Pajak Orang Pribadi atau Badan.</li>\\\\r\\\n \t<li><strong>Pembayaran</strong>: Dilakukan setelah menghitung keseluruhan pajak yang terutang.</li>\\\\r\\\n</ul>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3>9. <strong>PPh Badan</strong></h3>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Objek</strong>: Penghasilan perusahaan atau badan hukum.</li>\\\\r\\\n \t<li><strong>Tarif</strong>: Umumnya 22% (berdasarkan UU terbaru, dapat berubah).</li>\\\\r\\\n \t<li><strong>Pelaporan</strong>: Melalui SPT Tahunan Badan.</li>\\\\r\\\n</ul>"
  },
  {
    "slug": "jenis-spt",
    "title": "Jenis-Jenis SPT Pajak",
    "shortTitle": "Jenis-Jenis SPT Pajak",
    "category": "SPT",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Jenis SPT - EasyLegal | SPT adalah singkatan dari Surat Pemberitahuan. SPT Tahunan wajib bagi Warga negara Indonesia yang telah memiliki Nomor Pokok Wajib Pajak.\\\\r\\ \\\\r\\...",
    "content": "SEO: Jenis SPT - EasyLegal | SPT adalah singkatan dari Surat Pemberitahuan. SPT Tahunan wajib bagi Warga negara Indonesia yang telah memiliki Nomor Pokok Wajib Pajak.\\\\r\\\n\\\\r\\\nDalam...\n\n\n\n\n\nSPT adalah singkatan dari Surat Pemberitahuan. SPT Tahunan wajib bagi Warga negara Indonesia yang telah memiliki Nomor Pokok Wajib Pajak.\\\\r\\\n\\\\r\\\nDalam pelaksanaannya, terdapat tiga jenis formulir SPT Tahunan Orang Pribadi (formulir 1770) yang digunakan di Indonesia, yaitu <b>formulir SPT 1770, formulir SPT 1770 S, dan formulir SPT 1770 SS</b>. Ketiganya dibedakan berdasarkan jumlah dan sumber penghasilan yang diperoleh Wajib Pajak Orang Pribadi dalam satu tahun pajak."
  },
  {
    "slug": "keuntungan-menjadi-pkp",
    "title": "Keuntungan Menjadi PKP",
    "shortTitle": "Keuntungan Menjadi PKP",
    "category": "PKP",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Keuntungan menjadi PKP - EasyLegal | Dengan menjadi PKP, tentu banyak keuntungan yang bisa didapat oleh pengusaha. Salah satunya adalah pengusaha dapat meningkatkan...",
    "content": "SEO: Keuntungan menjadi PKP - EasyLegal | Dengan menjadi PKP, tentu banyak keuntungan yang bisa didapat oleh pengusaha. Salah satunya adalah pengusaha dapat meningkatkan penerimaan atas pemungutan PPN....\n\n\n\n\n\nDengan menjadi PKP, tentu banyak keuntungan yang bisa didapat oleh pengusaha. Salah satunya adalah pengusaha dapat <b>meningkatkan penerimaan atas pemungutan PPN</b>. Dengan menjadi PKP, pengusaha dapat mengkreditkan pajak masukannya. Dalam bertransaksi, PPN sering kali menjadi beban pengusaha."
  },
  {
    "slug": "konsultan-pajak",
    "title": "Konsultan Pajak",
    "shortTitle": "Konsultan Pajak",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "PMK No. 111/PMK.03/2014 stdtd PMK 175/PMK.01/2022",
    "excerpt": "Setiap orang yang dalam lingkungan pekerjaannya secara bebas memberikan jasa konsultasi perpajakan kepada wajib pajak dalam melaksanakan hak dan memenuhi kewajiban perpajakannya.",
    "content": "**Konsultan Pajak** adalah tenaga profesional bersertifikasi yang bertugas membantu dan mendampingi wajib pajak perorangan maupun korporasi dalam mengelola administrasi, perencanaan pajak (tax planning), penghitungan, pelaporan SPT, serta pendampingan saat terjadi pemeriksaan pajak atau sengketa perpajakan."
  },
  {
    "slug": "koreksi-fiskal-negatif",
    "title": "Koreksi Fiskal Negatif",
    "shortTitle": "Koreksi Negatif",
    "category": "Akuntansi",
    "dasarHukum": "Pasal 4 ayat (2) & (3) UU PPh",
    "excerpt": "Koreksi yang mengurangi laba fiskal karena adanya penghasilan yang telah dipotong PPh final atau bukan merupakan objek pajak.",
    "content": "**Koreksi Fiskal Negatif** adalah penyesuaian yang mengakibatkan berkurangnya laba kena pajak fiskal karena penghasilan komersial tersebut telah dikenakan PPh Final (seperti bunga deposito atau sewa tanah/bangunan) atau bukan merupakan objek pajak (seperti dividen tertentu)."
  },
  {
    "slug": "koreksi-fiskal-positif",
    "title": "Koreksi Fiskal Positif",
    "shortTitle": "Koreksi Positif",
    "category": "Akuntansi",
    "dasarHukum": "Pasal 9 UU PPh",
    "excerpt": "Koreksi yang menambah laba fiskal akibat biaya komersial yang tidak diakui perpajakan (non-deductible expense).",
    "content": "**Koreksi Fiskal Positif** adalah penyesuaian yang mengakibatkan bertambahnya laba kena pajak karena adanya beban komersial yang menurut ketentuan UU PPh tidak boleh dikurangkan dari penghasilan bruto (non-deductible expenses), seperti natura non-standar, sumbangan, sanksi administrasi denda pajak, dan biaya kepentingan pribadi pemilik."
  },
  {
    "slug": "laporan-keuangan",
    "title": "Laporan Keuangan Perusahaan",
    "shortTitle": "Laporan Keuangan",
    "category": "Akuntansi",
    "dasarHukum": "SAK EMKM, SAK EP, Pasal 28 UU KUP",
    "excerpt": "Catatan informasi keuangan perusahaan pada suatu periode akuntansi yang menggambarkan kinerja dan posisi keuangan entitas usaha.",
    "content": "**Laporan Keuangan** adalah ikhtisar menyeluruh tentang kondisi finansial suatu perusahaan pada periode tertentu. Terdiri dari Laporan Posisi Keuangan (Neraca), Laporan Laba Rugi Komprehensif, Laporan Perubahan Ekuitas, Laporan Arus Kas, dan Catatan atas Laporan Keuangan (CALK). Laporan keuangan komersial merupakan bahan acuan utama penyusunan SPT Tahunan Badan."
  },
  {
    "slug": "laporan-laba-rugi",
    "title": "Laporan Laba Rugi (Income Statement)",
    "shortTitle": "Laba Rugi",
    "category": "Akuntansi",
    "dasarHukum": "Standar Akuntansi Keuangan",
    "excerpt": "Laporan yang merangkum pendapatan dan beban perusahaan selama periode tertentu untuk mengetahui apakah entitas membukukan keuntungan atau kerugian.",
    "content": "**Laporan Laba Rugi (Income Statement)** adalah laporan keuangan yang mengukur keberhasilan kinerja operasional perusahaan dalam jangka waktu tertentu (bulanan atau tahunan) dengan mempertemukan pendapatan (revenue) terhadap harga pokok penjualan (HPP) dan beban operasional."
  },
  {
    "slug": "manfaat-pkp-bagi-bisnis",
    "title": "Manfaat PKP Bagi Bisnis",
    "shortTitle": "Manfaat PKP Bagi Bisnis",
    "category": "PKP",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Manfaat PKP Bagi bisnis - EasyLegal | Menjadi PKP (Pengusaha Kena Pajak) memiliki beberapa manfaat penting bagi bisnis. Berikut adalah beberapa manfaat utama menjadi PKP:\\\\r\\...",
    "content": "SEO: Manfaat PKP Bagi bisnis - EasyLegal | Menjadi PKP (Pengusaha Kena Pajak) memiliki beberapa manfaat penting bagi bisnis. Berikut adalah beberapa manfaat utama menjadi PKP:\\\\r\\\n\n\n\\\\r\\\n \t\n\n- Dapat...\n\n\n\n\n\nMenjadi PKP (Pengusaha Kena Pajak) memiliki beberapa manfaat penting bagi bisnis. Berikut adalah beberapa manfaat utama menjadi PKP:\\\\r\\\n<ol>\\\\r\\\n \t<li><strong>Dapat Mengajukan Faktur Pajak</strong>: Sebagai PKP, bisnis Anda dapat mengeluarkan faktur pajak yang sah. Ini memungkinkan pelanggan untuk memanfaatkan pajak masukan (pajak yang dibayar atas pembelian) yang dapat dikreditkan, yang dapat meningkatkan daya saing bisnis Anda.</li>\\\\r\\\n \t<li><strong>Pengembalian Pajak (Pajak Masukan)</strong>: Sebagai PKP, Anda berhak untuk mengkreditkan pajak masukan yang dibayar atas pembelian barang dan jasa yang digunakan dalam kegiatan usaha. Dengan kata lain, pajak yang Anda bayar saat membeli barang atau jasa untuk bisnis bisa dikurangkan dari pajak yang harus dibayar pada saat penjualan (Pajak Keluaran), yang dapat mengurangi beban pajak yang harus dibayar.</li>\\\\r\\\n \t<li><strong>Meningkatkan Kepercayaan Pelanggan dan Mitra Bisnis</strong>: Menjadi PKP menunjukkan bahwa bisnis Anda terdaftar secara resmi dan patuh pajak. Hal ini dapat meningkatkan kredibilitas dan kepercayaan dari pelanggan dan mitra bisnis, terutama dalam transaksi B2B (business to business), karena mereka juga bisa mengklaim pajak masukan.</li>\\\\r\\\n \t<li><strong>Memperluas Peluang Bisnis</strong>: Banyak perusahaan besar dan instansi pemerintah hanya bekerja sama dengan PKP karena mereka membutuhkan faktur pajak untuk keperluan laporan keuangan dan pengelolaan pajak. Dengan menjadi PKP, bisnis Anda bisa lebih mudah menjalin kerja sama dengan perusahaan besar atau instansi pemerintah.</li>\\\\r\\\n</ol>"
  },
  {
    "slug": "neraca",
    "title": "Neraca Keuangan (Balance Sheet)",
    "shortTitle": "Neraca",
    "category": "Akuntansi",
    "dasarHukum": "Standar Akuntansi Keuangan",
    "excerpt": "Bagian laporan keuangan yang menyajikan posisi aset (aktiva), kewajiban (liabilitas), dan ekuitas modal pemilik pada tanggal tertentu.",
    "content": "**Neraca Keuangan (Balance Sheet)** adalah laporan keuangan yang memperlihatkan kondisi aset, kewajiban, dan modal perusahaan pada suatu titik waktu tertentu dengan prinsip keseimbangan: **Aset = Liabilitas + Ekuitas**."
  },
  {
    "slug": "non-pkp",
    "title": "Non-PKP (Bukan Pengusaha Kena Pajak)",
    "shortTitle": "Non-PKP",
    "category": "PKP",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Non pkp - EasyLegal | \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ Non PKP (Non Pengusaha Kena Pajak) adalah individu atau badan usaha yang tidak wajib memungut, menyetor, dan melaporkan Pajak...",
    "content": "SEO: Non pkp - EasyLegal | \\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\nNon PKP (Non Pengusaha Kena Pajak) adalah individu atau badan usaha yang tidak wajib memungut, menyetor, dan melaporkan Pajak Pertambahan...\n\n\n\n\n\n<div class=\\\\\"flex max-w-full flex-col flex-grow\\\\\">\\\\r\\\n<div class=\\\\\"min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words [.text-message+&amp;]:mt-5\\\\\" dir=\\\\\"auto\\\\\" data-message-author-role=\\\\\"assistant\\\\\" data-message-id=\\\\\"7615e4b8-1976-42c6-bf01-f6e944701e6a\\\\\" data-message-model-slug=\\\\\"gpt-4o-mini\\\\\">\\\\r\\\n<div class=\\\\\"flex w-full flex-col gap-1 empty:hidden first:pt-[3px]\\\\\">\\\\r\\\n<div class=\\\\\"markdown prose w-full break-words dark:prose-invert light\\\\\">\\\\r\\\n\\\\r\\\nNon PKP (Non Pengusaha Kena Pajak) adalah individu atau badan usaha yang tidak wajib memungut, menyetor, dan melaporkan Pajak Pertambahan Nilai (PPN) karena tidak memenuhi batasan omzet yang ditetapkan oleh peraturan perpajakan. Artinya, pengusaha non-PKP tidak terdaftar sebagai Pengusaha Kena Pajak (PKP) dan tidak memiliki kewajiban untuk mengenakan PPN pada transaksi jual beli mereka.\\\\r\\\n\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>"
  },
  {
    "slug": "nppkp",
    "title": "NPPKP (Nomor Pengukuhan PKP)",
    "shortTitle": "NPPKP",
    "category": "PKP",
    "dasarHukum": "PER-04/PJ/2020",
    "excerpt": "Nomor identitas unik yang diberikan kepada wajib pajak setelah resmi berstatus Pengusaha Kena Pajak.",
    "content": "**NPPKP (Nomor Pengukuhan Pengusaha Kena Pajak)** adalah nomor identitas perpajakan yang berfungsi sebagai tanda pengenal resmi PKP dalam menjalankan hak dan kewajiban PPN, termasuk menerbitkan e-Faktur dan bertransaksi dengan instansi pemerintah atau BUMN."
  },
  {
    "slug": "npwp",
    "title": "NPWP (Nomor Pokok Wajib Pajak)",
    "shortTitle": "NPWP",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Pasal 1 angka 6 UU KUP, PMK 112/PMK.03/2022",
    "excerpt": "Nomor yang diberikan kepada wajib pajak sebagai sarana dalam administrasi perpajakan yang dipergunakan sebagai tanda pengenal diri atau identitas resmi.",
    "content": "**NPWP (Nomor Pokok Wajib Pajak)** adalah identitas resmi perpajakan yang wajib dimiliki oleh setiap individu dan entitas usaha yang telah memenuhi persyaratan subjektif dan objektif perpajakan di Indonesia."
  },
  {
    "slug": "npwp-16-digit",
    "title": "NPWP 16 Digit (Integrasi NIK-NPWP)",
    "shortTitle": "NPWP 16 Digit",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "PMK No. 112/PMK.03/2022 stdtd PMK 136/2023",
    "excerpt": "Format baru nomor pokok wajib pajak 16 digit yang mengintegrasikan Nomor Induk Kependudukan (NIK) bagi orang pribadi dan penambahan angka 0 bagi badan usaha.",
    "content": "**NPWP 16 Digit** adalah standardisasi format identitas perpajakan nasional di bawah arsitektur sistem Coretax DJP. Untuk Wajib Pajak Orang Pribadi, NIK KTP langsung difungsikan sebagai NPWP 16 digit setelah dilakukan pemadanan data mandiri."
  },
  {
    "slug": "objek-pajak",
    "title": "Objek Pajak",
    "shortTitle": "Objek Pajak",
    "category": "Perpajakan",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: OBJEK PAJAK - EasyLegal | Objek pajak menurut Undang-Undang Nomor 36 Tahun 2008 didefinisikan sebagai penghasilan atau tambahan kemampuan ekonomis yang diterima wajib pajak....",
    "content": "SEO: OBJEK PAJAK - EasyLegal | Objek pajak menurut Undang-Undang Nomor 36 Tahun 2008 didefinisikan sebagai penghasilan atau tambahan kemampuan ekonomis yang diterima wajib pajak. Secara...\n\n\n\n\n\nObjek pajak menurut <a href=\\\\\"https://jdih.kemenkeu.go.id/fulltext/2008/36tahun2008uu.htm\\\\\">Undang-Undang Nomor 36 Tahun 2008</a> didefinisikan sebagai penghasilan atau tambahan kemampuan ekonomis yang diterima wajib pajak. Secara sederhana objek pajak adalah segala sesuatu yang dikenakan pajak. Dalam sistem perpajakan Indonesia, ini menentukan besarnya pajak yang harus dibayar oleh wajib pajak. Besarnya pajak juga ditentukan oleh subjek pajak, persentase tarif pajak, dan dasar pengenaan pajak.\\\\r\\\n\\\\r\\\nIndonesia mengatur dalam berbagai peraturan perundang-undangan yang masih berlaku hingga saat ini. Berikut Undang-undang yang mengatur objek pajak di Indonesia:\\\\r\\\n<ul>\\\\r\\\n \t<li>Undang-Undang Nomor 36 Tahun 2008 tentang Perubahan Keempat Atas Undang-Undang Nomor 7 Tahun 1983 tentang PPN.</li>\\\\r\\\n \t<li>Undang-Undang Nomor 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintah Daerah.</li>\\\\r\\\n \t<li>Undang-Undang Nomor 7 Tahun 2021 tentang Harmonisasi Peraturan Perpajakan (UU HPP).</li>\\\\r\\\n</ul>\\\\r\\\nPengaturan tentangnya bertujuan untuk memastikan bahwa objek ini yang dikenakan pajak adalah hal-hal yang sesuai dengan tujuan pemungutan pajak.\\\\r\\\n\\\\r\\\nHal ini digunakan untuk konsumsi atau untuk menambah kekayaan wajib pajak yang bersangkutan. Bentuknya dengan nama atau bentuk apapun, penghasilan atau tambahan kemampuan ekonomis yang diterima wajib pajak. Penghasilan itu berasal dari Indonesia maupun luar Indonesia. Beberapa jenis penghasilan ini jika termasuk dalam jenis golongan dan kriteria, akan dikenakan objek pajak yang sesuai dengan tarif dan jenis pajak yang berlaku."
  },
  {
    "slug": "pajak-final",
    "title": "Pajak Final",
    "shortTitle": "Pajak Final",
    "category": "Perpajakan",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Pajak Final - EasyLegal | \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ \\\\r\\ Pajak final adalah pajak yang dikenakan dengan tarif tetap pada penghasilan...",
    "content": "SEO: Pajak Final - EasyLegal | \\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\n\\\\r\\\nPajak final adalah pajak yang dikenakan dengan tarif tetap pada penghasilan atau transaksi tertentu,...\n\n\n\n\n\n<div class=\\\\\"flex-1 overflow-hidden @container/thread\\\\\">\\\\r\\\n<div class=\\\\\"h-full\\\\\">\\\\r\\\n<div class=\\\\\"react-scroll-to-bottom--css-awcuy-79elbk h-full\\\\\">\\\\r\\\n<div class=\\\\\"react-scroll-to-bottom--css-awcuy-1n7m0yu\\\\\">\\\\r\\\n<div class=\\\\\"flex flex-col text-sm\\\\\"><article class=\\\\\"w-full scroll-mb-[var(--thread-trailing-height,150px)] text-token-text-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px]\\\\\" dir=\\\\\"auto\\\\\" data-testid=\\\\\"conversation-turn-31\\\\\" data-scroll-anchor=\\\\\"true\\\\\">\\\\r\\\n<div class=\\\\\"m-auto text-base py-[18px] px-3 md:px-4 w-full md:px-5 lg:px-4 xl:px-5\\\\\">\\\\r\\\n<div class=\\\\\"mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl\\\\\">\\\\r\\\n<div class=\\\\\"group/conversation-turn relative flex w-full min-w-0 flex-col agent-turn\\\\\">\\\\r\\\n<div class=\\\\\"flex-col gap-1 md:gap-3\\\\\">\\\\r\\\n<div class=\\\\\"flex max-w-full flex-col flex-grow\\\\\">\\\\r\\\n<div class=\\\\\"min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words text-start [.text-message+&amp;]:mt-5\\\\\" dir=\\\\\"auto\\\\\" data-message-author-role=\\\\\"assistant\\\\\" data-message-id=\\\\\"4b280314-5c26-4ac5-b020-abbc63554aa4\\\\\" data-message-model-slug=\\\\\"gpt-4o-mini\\\\\">\\\\r\\\n<div class=\\\\\"flex w-full flex-col gap-1 empty:hidden first:pt-[3px]\\\\\">\\\\r\\\n<div class=\\\\\"markdown prose w-full break-words dark:prose-invert light\\\\\">\\\\r\\\n\\\\r\\\n<strong>Pajak final</strong> adalah pajak yang dikenakan dengan tarif tetap pada penghasilan atau transaksi tertentu, dan dianggap selesai setelah dibayar, tanpa perlu pelaporan lebih lanjut. Pajak ini tidak bergantung pada penghasilan atau laba bersih, dan hanya dibayar sekali pada saat transaksi atau penerimaan penghasilan. Contohnya termasuk PPh final atas sewa, jasa konstruksi, dan UMKM, serta PPNBM untuk barang mewah. Keuntungan pajak final adalah kemudahan dan efisiensi administrasi karena prosesnya lebih sederhana.\\\\r\\\n\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n<div class=\\\\\"mb-2 flex gap-3 empty:hidden -ml-2\\\\\">\\\\r\\\n<div class=\\\\\"items-center justify-start rounded-xl p-1 flex\\\\\">\\\\r\\\n<div class=\\\\\"flex items-center\\\\\"></div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n<div class=\\\\\"pr-2 lg:pr-0\\\\\"></div>\\\\r\\\n<div class=\\\\\"mt-3 w-full empty:hidden\\\\\">\\\\r\\\n<div class=\\\\\"text-center\\\\\"></div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n<div class=\\\\\"absolute\\\\\">\\\\r\\\n<div class=\\\\\"flex items-center justify-center\\\\\"></div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</article></div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n<div class=\\\\\"md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full\\\\\">\\\\r\\\n<div>\\\\r\\\n<div class=\\\\\"m-auto text-base px-3 md:px-4 w-full md:px-5 lg:px-4 xl:px-5\\\\\">\\\\r\\\n<div class=\\\\\"mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl\\\\\">\\\\r\\\n<div class=\\\\\"flex justify-center\\\\\"></div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>\\\\r\\\n</div>"
  },
  {
    "slug": "pajak-jual-beli-tanah",
    "title": "Pajak Jual Beli Tanah",
    "shortTitle": "Pajak Jual Beli Tanah",
    "category": "Perpajakan",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Pajak Jual Beli Tanah - EasyLegal | Pajak penjualan tanah merupakan hasil dari kegiatan ekonomi dalam transaksi jual beli tanah. Selain itu, transaksi ini juga melibatkan...",
    "content": "SEO: Pajak Jual Beli Tanah - EasyLegal | Pajak penjualan tanah merupakan hasil dari kegiatan ekonomi dalam transaksi jual beli tanah. Selain itu, transaksi ini juga melibatkan berbagai biaya tambahan...\n\n\n\n\n\nPajak penjualan tanah merupakan <b>hasil dari kegiatan ekonomi dalam transaksi jual beli tanah</b>. Selain itu, transaksi ini juga melibatkan berbagai biaya tambahan yang harus dipenuhi oleh pihak penjual dan pembeli sesuai dengan peraturan yang berlaku."
  },
  {
    "slug": "pajak-progresif",
    "title": "Pajak Progresif",
    "shortTitle": "Pajak Progresif",
    "category": "Perpajakan",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Pajak Progresif - EasyLegal | Pajak progresif adalah tarif pemungutan pajak dengan persentase yang naik dengan semakin besarnya jumlah yang digunakan sebagai dasar pengenaan...",
    "content": "SEO: Pajak Progresif - EasyLegal | Pajak progresif adalah tarif pemungutan pajak dengan persentase yang naik dengan semakin besarnya jumlah yang digunakan sebagai dasar pengenaan pajak, dan...\n\n\n\n\n\n<b>Pajak progresif</b> adalah tarif pemungutan pajak dengan persentase yang naik dengan semakin besarnya jumlah yang digunakan sebagai dasar pengenaan pajak, dan kenaikan persentase untuk setiap jumlah tertentu setiap kali naik."
  },
  {
    "slug": "pajak-umkm",
    "title": "Pajak UMKM",
    "shortTitle": "Pajak UMKM",
    "category": "Perpajakan",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Pajak UMKM - EasyLegal | Wajib Pajak (WP) Usaha Mikro, Kecil, dan Menengah (UMKM) adalah salah satu kelompok Wajib Pajak yang diberikan fasilitas berupa kemudahan dalam...",
    "content": "SEO: Pajak UMKM - EasyLegal | Wajib Pajak (WP) Usaha Mikro, Kecil, dan Menengah (UMKM) adalah salah satu kelompok Wajib Pajak yang diberikan fasilitas berupa kemudahan dalam pemenuhan hak...\n\n\n\n\n\nWajib Pajak (WP) Usaha Mikro, Kecil, dan Menengah (UMKM) adalah <b>salah satu kelompok Wajib Pajak yang diberikan fasilitas berupa kemudahan dalam pemenuhan hak dan kewajiban perpajakannya</b>."
  },
  {
    "slug": "pembukuan",
    "title": "Pembukuan Akuntansi",
    "shortTitle": "Pembukuan",
    "category": "Akuntansi",
    "dasarHukum": "Pasal 28 UU KUP",
    "excerpt": "Proses pencatatan yang dilakukan secara teratur untuk mengumpulkan data dan informasi keuangan meliputi harta, kewajiban, modal, penghasilan, dan biaya.",
    "content": "**Pembukuan** adalah proses pencatatan keuangan yang wajib diselenggarakan oleh Wajib Pajak Badan dan Wajib Pajak Orang Pribadi yang melakukan kegiatan usaha dengan omzet di atas Rp 4,8 miliar setahun. Pembukuan ditutup dengan menyusun Neraca dan Laporan Laba Rugi pada setiap akhir tahun pajak."
  },
  {
    "slug": "tax-planning",
    "title": "Perencanaan Pajak (Tax Planning)",
    "shortTitle": "Tax Planning",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Regulasi Perpajakan Nasional",
    "excerpt": "Upaya legal dan terencana dalam mengefisiensikan beban pembayaran pajak perusahaan sesuai dengan celah hukum dan ketentuan yang berlaku.",
    "content": "**Tax Planning (Perencanaan Pajak)** adalah proses mengorganisasi transaksi keuangan dan bisnis wajib pajak agar beban pajak berada pada posisi yang paling efisien secara legal dan sah menurut undang-undang perpajakan, tanpa melanggar ketentuan hukum (bukan penggelapan pajak/tax evasion)."
  },
  {
    "slug": "perpajakan",
    "title": "Perpajakan di Indonesia",
    "shortTitle": "Perpajakan di Indonesia",
    "category": "Perpajakan",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Perpajakan - EasyLegal | Perpajakan di Indonesia didasarkan pada Pasal 23A UUD 1945, dimana pajak adalah kontribusi yang dikenakan kepada seluruh Warga Negara Indonesia,...",
    "content": "SEO: Perpajakan - EasyLegal | Perpajakan di Indonesia didasarkan pada Pasal 23A UUD 1945, dimana pajak adalah kontribusi yang dikenakan kepada seluruh Warga Negara Indonesia, warga negara...\n\n\n\n\n\n<strong>Perpajakan</strong> di Indonesia didasarkan pada Pasal 23A UUD 1945, dimana <strong>pajak adalah kontribusi yang dikenakan kepada seluruh Warga Negara Indonesia, warga negara asing dan warga yang tinggal secara kumulatif 120 hari di wilayah Indonesia dalam jangka waktu dua belas bulan.</strong>"
  },
  {
    "slug": "pkp",
    "title": "PKP (Pengusaha Kena Pajak)",
    "shortTitle": "PKP",
    "category": "PKP",
    "dasarHukum": "Pasal 3A UU PPN, PMK 197/PMK.03/2013",
    "excerpt": "Pelaku usaha perseorangan atau badan yang melakukan penyerahan BKP/JKP dan telah resmi dikukuhkan oleh Kantor Pelayanan Pajak (KPP).",
    "content": "**Pengusaha Kena Pajak (PKP)** adalah bisnis atau pelaku usaha perorangan yang telah resmi dikukuhkan oleh Kantor Pelayanan Pajak (KPP) dan memiliki hak serta kewajiban untuk memungut, menyetor, dan melaporkan PPN serta PPnBM.\n\n### Kriteria Wajib PKP\nPelaku usaha dengan omzet kotor melebihi **Rp 4,8 miliar** dalam satu tahun buku wajib mendaftarkan diri untuk dikukuhkan sebagai PKP paling lambat akhir bulan berikutnya setelah omzet tercapai. Pelaku usaha dengan omzet di bawah Rp 4,8 miliar dapat memilih secara sukarela untuk dikukuhkan sebagai PKP."
  },
  {
    "slug": "pph-21",
    "title": "PPh 21 (Pajak Penghasilan Pasal 21)",
    "shortTitle": "PPh 21",
    "category": "PPh",
    "dasarHukum": "UU No. 7 Tahun 1983 stdtd UU HPP, PP 58/2023, PMK 168/2023",
    "excerpt": "Pajak atas penghasilan berupa gaji, upah, honorarium, tunjangan, dan pembayaran lain yang diterima oleh pegawai atau bukan pegawai sehubungan dengan pekerjaan, jasa, atau kegiatan.",
    "content": "**PPh Pasal 21 (Pajak Penghasilan Pasal 21)** adalah pemotongan pajak atas penghasilan yang dibayarkan kepada orang pribadi sehubungan dengan pekerjaan, jabatan, jasa, dan kegiatan di Indonesia.\n\n### Objek Pemotongan PPh 21\n1. **Penghasilan Pegawai Tetap**: Gaji bulanan, tunjangan, lembur, bonus, dan Tunjangan Hari Raya (THR).\n2. **Penghasilan Pegawai Tidak Tetap**: Upah harian, upah mingguan, atau upah borongan.\n3. **Penghasilan Bukan Pegawai**: Honorarium tenaga ahli (dokter, pengacara, konsultan, akuntan, arsitek), komisi agen, dan pembicara seminar.\n4. **Uang Pensiun & Pesangon**: Manfaat pensiun atau pesangon yang dibayarkan sekaligus maupun berkala.\n\n### Mekanisme Tarif Efektif Rata-Rata (TER)\nMulai 1 Januari 2024, penghitungan PPh 21 bulanan (Januari - November) menggunakan skema **Tarif Efektif Rata-Rata (TER)** berdasarkan status PTKP (Kategori A, B, atau C). Pada masa pajak Desember, dilakukan penghitungan ulang menggunakan tarif progresif Pasal 17 ayat (1) huruf a UU PPh untuk menentukan selisih kurang atau lebih bayar tahunan.\n\n### Kewajiban Pemotong PPh 21\nPemberi kerja wajib:\n- Menghitung dan memotong PPh 21 setiap bulan.\n- Menyetorkan potongan pajak ke kas negara paling lambat tanggal 10 bulan berikutnya.\n- Menerbitkan Bukti Potong (Bupot) 1721-A1/A2 dan melaporkan SPT Masa PPh 21 melalui portal DJP Online paling lambat tanggal 20 bulan berikutnya."
  },
  {
    "slug": "pph-22",
    "title": "PPh 22 (Pajak Penghasilan Pasal 22)",
    "shortTitle": "PPh 22",
    "category": "PPh",
    "dasarHukum": "Pasal 22 UU PPh, PMK 34/PMK.010/2017 stdtd PMK 41/2022",
    "excerpt": "Pajak penghasilan yang dipungut oleh bendaharawan pemerintah, badan tertentu, atau instansi terkait kegiatan impor, ekspor, atau pembelian barang tertentu.",
    "content": "**PPh Pasal 22** adalah pajak penghasilan yang dipungut atas transaksi perdagangan barang tertentu, kegiatan impor komoditas, serta pembelian barang yang dibiayai oleh APBN/APBD atau BUMN.\n\n### Pemungut dan Tarif Umum PPh 22\n- **Bendaharawan Pemerintah & BUMN**: Dipungut sebesar 1,5% dari harga pembelian barang (tidak termasuk PPN).\n- **Bank Devisa & Bea Cukai (Impor)**: Dipungut 2,5% (menggunakan API) atau 7,5% (tanpa API) dari nilai impor.\n- **Industri Tertentu**: Penjualan semen (0,25%), kertas (0,1%), baja (0,3%), dan otomotif (0,45%).\n- **Barang Sangat Mewah**: Dipungut tarif 1% hingga 5% sesuai kriteria PMK yang berlaku.\n\nPPh 22 pada prinsipnya dapat dikreditkan oleh wajib pajak pembeli dalam SPT Tahunan PPh Badan atau Pribadi pada akhir tahun pajak."
  },
  {
    "slug": "pph-23",
    "title": "PPh 23 (Pajak Penghasilan Pasal 23)",
    "shortTitle": "PPh 23",
    "category": "PPh",
    "dasarHukum": "Pasal 23 UU PPh, PMK 141/PMK.03/2015",
    "excerpt": "Pajak yang dipotong atas penghasilan berupa dividen, bunga, royalti, sewa selain tanah/bangunan, dan imbalan jasa yang diterima oleh wajib pajak badan dalam negeri.",
    "content": "**PPh Pasal 23** adalah pajak yang dipotong oleh pihak pembayar atas penghasilan yang dibayarkan kepada wajib pajak badan dalam negeri atau Bentuk Usaha Tetap (BUT) atas pemanfaatan modal, penyerahan jasa, atau hadiah.\n\n### Tarif dan Objek PPh 23\n1. **Tarif 15% (dari jumlah bruto)**:\n   - Dividen yang diterima wajib pajak badan dalam negeri (yang tidak memenuhi syarat pengecualian).\n   - Bunga pinjaman, diskonto, dan imbalan pengembalian utang.\n   - Royalti atas hak kekayaan intelektual (HAKI).\n   - Hadiah, penghargaan, dan bonus selain yang telah dipotong PPh 21.\n\n2. **Tarif 2% (dari jumlah bruto)**:\n   - Sewa dan penghasilan lain sehubungan dengan penggunaan harta (selain sewa tanah dan/atau bangunan).\n   - Imbalan atas jasa teknik, jasa manajemen, jasa konsultan, jasa akuntansi, jasa hukum, jasa IT, dan 62 jenis jasa lain yang diatur dalam PMK 141/2015.\n\nBagi penerima penghasilan yang tidak memiliki NPWP, tarif pemotongan dikenakan 100% lebih tinggi (menjadi 4% untuk jasa dan 30% untuk dividen/royalti)."
  },
  {
    "slug": "pph-25",
    "title": "PPh 25 (Angsuran Pajak Bulanan)",
    "shortTitle": "PPh 25",
    "category": "PPh",
    "dasarHukum": "Pasal 25 UU PPh",
    "excerpt": "Pembayaran angsuran pajak penghasilan secara berkala setiap bulan yang bertujuan untuk meringankan beban pembayaran pajak terutang pada akhir tahun buku.",
    "content": "**PPh Pasal 25** adalah pembayaran angsuran Pajak Penghasilan dalam tahun berjalan yang harus dibayar sendiri oleh Wajib Pajak (baik Orang Pribadi pengusaha maupun Badan) untuk setiap bulan.\n\n### Tujuan dan Mekanisme PPh 25\nTujuan PPh 25 adalah mencicil pajak terutang agar wajib pajak tidak terbebani pembayaran pajak dalam jumlah besar saat penutupan tahun buku (SPT Tahunan).\n\nBesaran angsuran PPh 25 pada umumnya dihitung berdasarkan pajak terutang pada SPT Tahunan tahun pajak sebelumnya, dikurangi kredit pajak (PPh 21, 22, 23, dan 24), kemudian dibagi 12 (dua belas) bulan. Pembayaran wajib dilakukan paling lambat tanggal 15 bulan berikutnya."
  },
  {
    "slug": "pph-badan",
    "title": "PPh Badan (Pajak Penghasilan Perusahaan)",
    "shortTitle": "PPh Badan",
    "category": "PPh",
    "dasarHukum": "Pasal 17 ayat (1) huruf b UU PPh stdtd UU HPP",
    "excerpt": "Pajak yang dikenakan atas penghasilan neto yang diterima atau diperoleh perseroan terbatas (PT), CV, firma, atau badan usaha lainnya dalam satu tahun pajak.",
    "content": "**PPh Badan** adalah pajak penghasilan yang dikenakan atas laba bersih fiskal yang diperoleh wajib pajak badan dalam negeri dan bentuk usaha tetap (BUT) selama satu tahun pajak berjalan.\n\n### Tarif PPh Badan di Indonesia\n- **Tarif Standar**: Sebesar **22%** dari Penghasilan Kena Pajak (PKP) neto fiskal.\n- **Fasilitas Pengurangan Tarif (Pasal 31E UU PPh)**: Badan usaha dalam negeri dengan omzet hingga Rp 50 miliar mendapat diskon tarif 50% (sehingga tarif menjadi **11%**) atas bagian Penghasilan Kena Pajak dari omzet bruto hingga Rp 4,8 miliar.\n- **PT Terbuka (Tbk)**: Perusahaan publik yang memenuhi kriteria kepemilikan saham tertentu dapat memperoleh tarif 3% lebih rendah (menjadi 19%)."
  },
  {
    "slug": "pph-final-umkm",
    "title": "PPh Final UMKM 0,5% (PP 55 Tahun 2022)",
    "shortTitle": "PPh Final UMKM",
    "category": "PPh",
    "dasarHukum": "PP No. 55 Tahun 2022 (Pengganti PP 23/2018), UU HPP",
    "excerpt": "Fasilitas tarif pajak penghasilan khusus sebesar 0,5% dari omzet bruto bagi pelaku usaha mikro, kecil, dan menengah dengan omzet tidak melebihi Rp 4,8 miliar setahun.",
    "content": "**PPh Final UMKM 0,5%** adalah skema perpajakan sederhana bagi wajib pajak orang pribadi dan badan tertentu yang memiliki peredaran bruto (omzet) sampai dengan Rp 4,8 miliar dalam satu tahun pajak.\n\n### Ketentuan Utama PP 55/2022\n1. **Pembebasan Omzet Rp 500 Juta untuk Orang Pribadi**: Wajib Pajak Orang Pribadi tidak dikenai pajak atas omzet hingga Rp 500 juta dalam satu tahun pajak. Pajak 0,5% baru dihitung atas omzet di atas Rp 500 juta.\n2. **Jangka Waktu Penggunaan**:\n   - Wajib Pajak Orang Pribadi: Maksimal 7 tahun pajak.\n   - Koperasi, CV, atau Firma: Maksimal 4 tahun pajak.\n   - PT (Perseroan Terbatas) umum & PT Perorangan: Maksimal 3 tahun pajak.\n3. **Setelah Jangka Waktu Habis**: Wajib pajak beralih menggunakan tarif normal PPh Badan (Pasal 17) dengan menyelenggarakan pembukuan resmi."
  },
  {
    "slug": "pph-4-ayat-2",
    "title": "PPh Pasal 4 Ayat 2 (PPh Final)",
    "shortTitle": "PPh 4(2)",
    "category": "PPh",
    "dasarHukum": "Pasal 4 ayat (2) UU PPh, PP 34/2016, PP 9/2022",
    "excerpt": "Pajak penghasilan yang bersifat final atas transaksi tertentu seperti sewa tanah dan/atau bangunan, pengalihan hak atas tanah/bangunan, dan jasa konstruksi.",
    "content": "**PPh Pasal 4 Ayat 2 (PPh Final)** adalah pajak penghasilan yang dipotong atau disetor sendiri dan perhitungannya selesai seketika tanpa dapat dikreditkan kembali dalam SPT Tahunan.\n\n### Transaksi yang Dikenakan PPh Final Pasal 4 Ayat 2\n1. **Sewa Tanah dan/atau Bangunan**: Tarif 10% dari jumlah bruto nilai sewa.\n2. **Pengalihan Hak atas Tanah dan/atau Bangunan (Jual Beli Properti)**: Tarif 2,5% untuk umum, atau 1% untuk rumah sederhana/rusunami.\n3. **Jasa Konstruksi**: Dikenakan tarif berkisar antara 1,75% hingga 4% tergantung kualifikasi usaha pelaksana/perencana konstruksi (PP 9/2022).\n4. **Bunga Deposito & Tabungan**: Dikenakan tarif 20% oleh perbankan.\n5. **Hadiah Undian**: Tarif 25% dari nilai bruto hadiah undian."
  },
  {
    "slug": "ppn",
    "title": "PPN (Pajak Pertambahan Nilai)",
    "shortTitle": "PPN",
    "category": "PPN",
    "dasarHukum": "UU No. 8 Tahun 1983 stdtd UU HPP (UU No. 7 Tahun 2021)",
    "excerpt": "Pajak yang dikenakan atas setiap pertambahan nilai dari barang atau jasa dalam peredarannya dari produsen ke konsumen di dalam daerah pabean Indonesia.",
    "content": "**PPN (Pajak Pertambahan Nilai)** adalah pajak konsumsi barang dan jasa di dalam Daerah Pabean yang dikenakan pada setiap rantai distribusi barang atau jasa kena pajak.\n\n### Prinsip Pemungutan PPN\n- PPN bersifat **pajak tidak langsung**, artinya beban pajak ditanggung oleh konsumen akhir namun pemungutan dan penyetorannya dilakukan oleh Pengusaha Kena Pajak (PKP) penjual.\n- Menggunakan mekanisme **Pajak Masukan vs Pajak Keluaran**: PPN yang dipungut dari pembeli (Pajak Keluaran) dikurangi dengan PPN yang dibayar saat membeli bahan/barang dagangan (Pajak Masukan). Selisih kurang bayar disetorkan ke kas negara."
  },
  {
    "slug": "ppnbm",
    "title": "PPnBM (Pajak Penjualan atas Barang Mewah)",
    "shortTitle": "PPnBM",
    "category": "PPN",
    "dasarHukum": "Pasal 5 UU PPN stdtd UU HPP",
    "excerpt": "Pajak tambahan yang dikenakan satu kali pada tingkat produsen atau importir atas barang kena pajak yang tergolong mewah.",
    "content": "**PPnBM (Pajak Penjualan atas Barang Mewah)** adalah pungutan pajak tambahan di samping PPN yang dikenakan khusus atas penyerahan barang-barang mewah oleh pabrikan atau importir.\n\n### Kriteria Barang Kena PPnBM\n1. Barang yang bukan merupakan barang kebutuhan pokok masyarakat.\n2. Barang yang dikonsumsi oleh masyarakat berpenghasilan tinggi.\n3. Barang yang dikonsumsi untuk menunjukkan status atau prestise.\n4. Barang yang pemakaiannya dapat merugikan kesehatan, moral, atau ketertiban masyarakat.\n\nTarif PPnBM berkisar antara 10% hingga 200% tergantung jenis komoditas (misalnya kendaraan bermotor mewah, kapal pesiar, atau hunian mewah). Berbeda dengan PPN, PPnBM tidak dapat dikreditkan."
  },
  {
    "slug": "ptkp",
    "title": "PTKP (Penghasilan Tidak Kena Pajak)",
    "shortTitle": "PTKP",
    "category": "PPh",
    "dasarHukum": "PMK 101/PMK.010/2016",
    "excerpt": "Batasan jumlah penghasilan wajib pajak orang pribadi yang tidak dikenakan pajak penghasilan Pasal 21 dalam satu tahun pajak.",
    "content": "**PTKP (Penghasilan Tidak Kena Pajak)** adalah ambang batas penghasilan wajib pajak orang pribadi yang dibebaskan dari pemotongan PPh Pasal 21. Hanya penghasilan neto di atas nilai PTKP yang dihitung sebagai Penghasilan Kena Pajak.\n\n### Besaran Nilai PTKP (Berlaku Saat Ini)\n- **Wajib Pajak Sendiri (TK/0)**: Rp 54.000.000 per tahun (Rp 4.500.000 per bulan).\n- **Tambahan untuk Wajib Pajak Kawin**: Rp 4.500.000 per tahun.\n- **Tambahan untuk Setiap Tanggungan (Maks. 3 orang)**: Rp 4.500.000 per orang per tahun (anak kandung, anak angkat, atau orang tua yang menjadi tanggungan penuh).\n- **PTKP Istri Penghasilan Digabung**: Tambahan Rp 54.000.000 per tahun."
  },
  {
    "slug": "rekonsiliasi-fiskal",
    "title": "Rekonsiliasi Fiskal (Koreksi Fiskal)",
    "shortTitle": "Rekonsiliasi Fiskal",
    "category": "Akuntansi",
    "dasarHukum": "UU PPh Pasal 4, 6, dan 9",
    "excerpt": "Penyesuaian laba komersial menurut akuntansi menjadi penghasilan neto fiskal menurut aturan perpajakan melalui koreksi positif dan koreksi negatif.",
    "content": "**Rekonsiliasi Fiskal** adalah proses penyesuaian laba bersih komersial yang disusun berdasarkan Standar Akuntansi Keuangan (SAK) menjadi Laba Kena Pajak (Penghasilan Neto Fiskal) sesuai dengan ketentuan Undang-Undang Pajak Penghasilan."
  },
  {
    "slug": "restitusi-pajak",
    "title": "Restitusi Pajak (Tax Refund)",
    "shortTitle": "Restitusi Pajak",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Pasal 17B UU KUP, PMK 209/PMK.03/2021",
    "excerpt": "Permohonan pengembalian kelebihan pembayaran pajak yang diajukan oleh wajib pajak kepada negara atas kelebihan pemotongan atau pembayaran pajak.",
    "content": "**Restitusi Pajak** adalah hak wajib pajak untuk meminta pengembalian atas kelebihan pembayaran pajak yang tercantum dalam SPT Tahunan atau SPT Masa (ketika Pajak Masukan lebih besar dari Pajak Keluaran). Pengembalian dapat melalui mekanisme restitusi pendahuluan untuk wajib pajak berisiko rendah atau melalui proses pemeriksaan pajak reguler."
  },
  {
    "slug": "sertifikat-elektronik-pajak",
    "title": "Sertifikat Elektronik Pajak (Digital Certificate DJP)",
    "shortTitle": "Sertifikat Elektronik",
    "category": "PKP",
    "dasarHukum": "PER-04/PJ/2020",
    "excerpt": "Sertifikat digital terenkripsi dari DJP yang memuat tanda tangan elektronik dan identitas resmi PKP untuk mengakses layanan e-Faktur dan portal perpajakan.",
    "content": "**Sertifikat Elektronik Pajak** adalah file sertifikat digital resmi yang diterbitkan oleh Direktorat Jenderal Pajak untuk mengotentikasi identitas PKP saat mengakses layanan perpajakan online seperti e-Faktur dan e-Bupot. Sertifikat ini memiliki masa berlaku 2 (dua) tahun dan wajib diperpanjang sebelum kedaluwarsa."
  },
  {
    "slug": "skp",
    "title": "SKP (Surat Ketetapan Pajak)",
    "shortTitle": "SKP",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "UU KUP",
    "excerpt": "Surat ketetapan resmi yang meliputi SKPKB (Kurang Bayar), SKPKBT (Kurang Bayar Tambahan), SKPLB (Lebih Bayar), dan SKPN (Nihil).",
    "content": "**SKP (Surat Ketetapan Pajak)** adalah surat ketetapan yang diterbitkan oleh kantor pajak hasil dari pemeriksaan pajak, yang menentukan besarnya jumlah pokok pajak terutang, jumlah kredit pajak, dan jumlah sanksi administrasi."
  },
  {
    "slug": "skt-pajak-adalah",
    "title": "SKT Pajak (Surat Keterangan Terdaftar)",
    "shortTitle": "SKT Pajak",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: SKT Pajak Adalah - EasyLegal | SKT Pajak (Surat Keterangan Terdaftar) adalah dokumen resmi yang diterbitkan oleh Direktorat Jenderal Pajak (DJP) sebagai bukti bahwa wajib...",
    "content": "SEO: SKT Pajak Adalah - EasyLegal | SKT Pajak (Surat Keterangan Terdaftar) adalah dokumen resmi yang diterbitkan oleh Direktorat Jenderal Pajak (DJP) sebagai bukti bahwa wajib pajak, baik...\n\n\n\n\n\n<strong>SKT Pajak (Surat Keterangan Terdaftar)</strong> adalah dokumen resmi yang diterbitkan oleh Direktorat Jenderal Pajak (DJP) sebagai bukti bahwa wajib pajak, baik individu maupun badan, telah terdaftar sebagai subjek pajak dan memiliki kewajiban perpajakan tertentu sesuai peraturan yang berlaku. SKT Pajak menjadi salah satu syarat penting dalam aktivitas bisnis, seperti pengajuan NPWP atau transaksi yang memerlukan bukti kepatuhan pajak."
  },
  {
    "slug": "sp2dk",
    "title": "SP2DK (Surat Permintaan Penjelasan Data)",
    "shortTitle": "SP2DK",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "SE-05/PJ/2022",
    "excerpt": "Surat resmi dari Kantor Pajak (KPP) yang meminta klarifikasi atas adanya ketidaksesuaian data laporan pajak dengan data transaksi pihak ketiga.",
    "content": "**SP2DK (Surat Permintaan Penjelasan atas Data dan/atau Keterangan)** adalah surat yang diterbitkan oleh Kepala KPP melalui Account Representative (AR) kepada wajib pajak apabila ditemukan indikasi ketidaksesuaian antara data SPT yang dilaporkan dengan data eksternal DJP (rekening koran, lawan transaksi e-Faktur, transaksi bea cukai, atau kepemilikan aset). Wajib pajak diberi waktu 14 hari kerja untuk memberikan tanggapan resmi."
  },
  {
    "slug": "sphp-pajak",
    "title": "SPHP (Surat Pemberitahuan Hasil Pemeriksaan)",
    "shortTitle": "SPHP",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: SPHP Pajak - EasyLegal | SPHP Pajak adalah surat yang berisi mengenai hasil temuan-temuan pemeriksaan yang meliputi pos-pos yang dikoreksi, nilai koreksi, dasar koreksi,...",
    "content": "SEO: SPHP Pajak - EasyLegal | SPHP Pajak adalah surat yang berisi mengenai hasil temuan-temuan pemeriksaan yang meliputi pos-pos yang dikoreksi, nilai koreksi, dasar koreksi, perhitungan...\n\n\n\n\n\n<b>SPHP Pajak</b> adalah surat yang berisi mengenai hasil temuan-temuan pemeriksaan yang meliputi pos-pos yang dikoreksi, nilai koreksi, dasar koreksi, perhitungan sementara dari jumlah pokok <b>pajak</b> terutang, dan perhitungan sementara dari sanksi administrasi."
  },
  {
    "slug": "sppkp",
    "title": "SPPKP (Surat Pengukuhan Pengusaha Kena Pajak)",
    "shortTitle": "SPPKP",
    "category": "PKP",
    "dasarHukum": "PER-04/PJ/2020",
    "excerpt": "Surat keputusan resmi yang diterbitkan KPP sebagai bukti legalitas bahwa suatu badan usaha atau perorangan telah resmi berstatus sebagai PKP.",
    "content": "**Surat Pengukuhan Pengusaha Kena Pajak (SPPKP)** adalah dokumen ketetapan resmi dari Kantor Pelayanan Pajak yang membuktikan bahwa wajib pajak telah memenuhi syarat administratif dan verifikasi lapangan untuk beroperasi sebagai Pengusaha Kena Pajak."
  },
  {
    "slug": "spt",
    "title": "SPT (Surat Pemberitahuan)",
    "shortTitle": "SPT",
    "category": "SPT",
    "dasarHukum": "UU No. 6 Tahun 1983 stdtd UU HPP (KUP)",
    "excerpt": "Surat yang digunakan oleh wajib pajak untuk melaporkan perhitungan dan pembayaran pajak, objek pajak, bukan objek pajak, serta harta dan kewajiban.",
    "content": "**SPT (Surat Pemberitahuan)** adalah laporan resmi yang wajib disampaikan oleh setiap wajib pajak ke Direktorat Jenderal Pajak sebagai pertanggungjawaban atas kewajiban perpajakan yang telah dijalankan dalam suatu Masa Pajak (bulanan) atau Tahun Pajak (tahunan)."
  },
  {
    "slug": "spt-masa",
    "title": "SPT Masa (Laporan Pajak Bulanan)",
    "shortTitle": "SPT Masa",
    "category": "SPT",
    "dasarHukum": "UU KUP",
    "excerpt": "Laporan pajak yang wajib disampaikan setiap bulan untuk jenis pajak PPh 21, PPh 22, PPh 23, PPh 25, PPh 4(2), dan PPN.",
    "content": "**SPT Masa** adalah surat pemberitahuan untuk melaporkan pemotongan, pemungutan, dan penyetoran pajak untuk suatu masa pajak (bulan takwim). Contoh SPT Masa meliputi SPT Masa PPh 21/26, SPT Masa PPh Unifikasi (PPh 22, 23, 4(2), 15), dan SPT Masa PPN 1111."
  },
  {
    "slug": "spt-tahunan-badan",
    "title": "SPT Tahunan Badan (Formulir 1771)",
    "shortTitle": "SPT 1771",
    "category": "SPT",
    "dasarHukum": "UU KUP & UU PPh",
    "excerpt": "Formulir pelaporan pajak tahunan resmi untuk perusahaan (PT, CV, Yayasan, Koperasi) yang wajib dilampiri laporan keuangan komersial.",
    "content": "**SPT Tahunan Badan (Formulir 1771)** adalah dokumen laporan tahunan yang wajib disampaikan oleh seluruh entitas bisnis di Indonesia paling lambat tanggal 30 April setelah tahun buku berakhir. Laporan ini wajib melampirkan laporan keuangan resmi (Neraca dan Laba Rugi), daftar penyusutan aktiva tetap, serta perhitungan rekonsiliasi fiskal."
  },
  {
    "slug": "spt-tahunan-orang-pribadi",
    "title": "SPT Tahunan Orang Pribadi (1770 / 1770S)",
    "shortTitle": "SPT Pribadi",
    "category": "SPT",
    "dasarHukum": "UU KUP & UU PPh",
    "excerpt": "Laporan pajak tahunan bagi individu, karyawan, profesional, dan pemilik usaha yang wajib disampaikan paling lambat 31 Maret setiap tahun.",
    "content": "**SPT Tahunan Orang Pribadi** adalah pelaporan pajak tahunan bagi setiap individu pemegang NPWP untuk melaporkan seluruh penghasilan, harta per 31 Desember, daftar utang, dan susunan anggota keluarga. Terbagi atas Formulir 1770SS (pegawai berpenghasilan bruto s.d Rp 60 jt), 1770S (pegawai di atas Rp 60 jt / lebih dari satu pemberi kerja), dan 1770 (pengusaha atau pekerja bebas)."
  },
  {
    "slug": "status-pajak",
    "title": "Status Pajak",
    "shortTitle": "Status Pajak",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Status Pajak - EasyLegal | Status Pajak mengacu pada kondisi atau kategori seorang Wajib Pajak dalam kaitannya dengan kewajiban perpajakannya. Di Indonesia, status pajak...",
    "content": "SEO: Status Pajak - EasyLegal | Status Pajak mengacu pada kondisi atau kategori seorang Wajib Pajak dalam kaitannya dengan kewajiban perpajakannya. Di Indonesia, status pajak mencakup...\n\n\n\n\n\n<strong>Status Pajak</strong> mengacu pada kondisi atau kategori seorang Wajib Pajak dalam kaitannya dengan kewajiban perpajakannya. Di Indonesia, status pajak mencakup informasi tentang tanggung jawab pembayaran pajak, kewajiban pelaporan, serta kategori tertentu berdasarkan penghasilan, hubungan keluarga, dan jenis usaha."
  },
  {
    "slug": "stp",
    "title": "STP (Surat Tagihan Pajak)",
    "shortTitle": "STP",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Pasal 14 UU KUP",
    "excerpt": "Surat ketetapan yang diterbitkan oleh KPP untuk melakukan penagihan pajak dan/atau sanksi administrasi berupa bunga atau denda.",
    "content": "**STP (Surat Tagihan Pajak)** adalah surat untuk melakukan tagihan pajak terutang dan sanksi administrasi seperti denda keterlambatan pelaporan SPT atau bunga atas keterlambatan pembayaran pajak. STP memiliki kekuatan hukum yang setara dengan surat keputusan pajak lainnya."
  },
  {
    "slug": "subjek-pajak",
    "title": "Subjek Pajak",
    "shortTitle": "Subjek Pajak",
    "category": "Perpajakan",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Subjek Pajak - EasyLegal | Subjek pajak adalah istilah dalam peraturan perundang-undangan perpajakan untuk perorangan (pribadi) atau organisasi (kelompok) berdasarkan...",
    "content": "SEO: Subjek Pajak - EasyLegal | Subjek pajak adalah istilah dalam peraturan perundang-undangan perpajakan untuk perorangan (pribadi) atau organisasi (kelompok) berdasarkan peraturan...\n\n\n\n\n\n<b>Subjek pajak</b> adalah istilah dalam peraturan perundang-undangan perpajakan untuk perorangan (pribadi) atau organisasi (kelompok) berdasarkan peraturan perundang-undangan perpajakan yang berlaku."
  },
  {
    "slug": "surat-pernyataan-non-pkp",
    "title": "Surat Pernyataan Non-PKP",
    "shortTitle": "Surat Non-PKP",
    "category": "PKP",
    "dasarHukum": "PMK 197/PMK.03/2013",
    "excerpt": "Surat pernyataan resmi dari pelaku usaha yang menyatakan bahwa omzetnya belum mencapai Rp 4,8 miliar sehingga tidak memungut PPN.",
    "content": "**Surat Pernyataan Non-PKP** adalah surat resmi bertanda tangan dan bermeterai yang dibuat oleh wajib pajak perorangan atau badan untuk menerangkan kepada rekanan bisnis atau instansi bahwa usahanya belum dikukuhkan sebagai PKP, sehingga tidak menerbitkan faktur pajak dan tidak memungut PPN atas transaksinya."
  },
  {
    "slug": "syarat-omzet-pkp",
    "title": "Syarat Batasan Omzet PKP",
    "shortTitle": "Syarat Batasan Omzet PKP",
    "category": "PKP",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Syarat Omzet PKP - EasyLegal | Dalam PMK 197/2013 tersebut, syarat omzet PKP atau batasan PKP adalah Rp4,8 miliar setahun. Besar batasan omzet pengusaha kecil yang sudah...",
    "content": "SEO: Syarat Omzet PKP - EasyLegal | Dalam PMK 197/2013 tersebut, syarat omzet PKP atau batasan PKP adalah Rp4,8 miliar setahun. Besar batasan omzet pengusaha kecil yang sudah wajib menjadi PKP...\n\n\n\n\n\nDalam PMK 197/2013 tersebut, syarat omzet PKP atau batasan PKP adalah <b>Rp4,8 miliar setahun</b>. Besar batasan omzet pengusaha kecil yang sudah wajib menjadi PKP dalam beleid tersebut naik dari threshold PKP dalam PMK 68/2010 yang ditetapkan sebesar Rp600 juta setahun."
  },
  {
    "slug": "syarat-pkp",
    "title": "Syarat Pengukuhan PKP",
    "shortTitle": "Syarat Pengukuhan PKP",
    "category": "PKP",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Syarat PKP - EasyLegal | Pengusaha Kena Pajak (PKP) adalah pelaku usaha yang wajib memungut, menyetor, dan melaporkan Pajak Pertambahan Nilai (PPN) atas barang atau jasa...",
    "content": "SEO: Syarat PKP - EasyLegal | Pengusaha Kena Pajak (PKP) adalah pelaku usaha yang wajib memungut, menyetor, dan melaporkan Pajak Pertambahan Nilai (PPN) atas barang atau jasa yang...\n\n\n\n\n\n<strong>Pengusaha Kena Pajak (PKP)</strong> adalah pelaku usaha yang wajib memungut, menyetor, dan melaporkan Pajak Pertambahan Nilai (PPN) atas barang atau jasa yang diperjualbelikan. Untuk menjadi PKP, terdapat syarat-syarat yang harus dipenuhi oleh pelaku usaha, baik individu maupun badan usaha.\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3><strong>Syarat Menjadi PKP</strong></h3>\\\\r\\\n<h4><strong>1. Kriteria Pendapatan Usaha</strong></h4>\\\\r\\\n<ul>\\\\r\\\n \t<li><strong>Omzet tahunan usaha mencapai Rp 4,8 miliar atau lebih.</strong>\\\\r\\\nJika omzet tahunan kurang dari Rp 4,8 miliar, pelaku usaha tidak wajib menjadi PKP, tetapi dapat mendaftar secara sukarela.</li>\\\\r\\\n</ul>\\\\r\\\n<h4><strong>2. Kategori Usaha</strong></h4>\\\\r\\\n<ul>\\\\r\\\n \t<li>Usaha tersebut termasuk dalam kategori yang dikenakan <strong>Pajak Pertambahan Nilai (PPN)</strong>, baik untuk barang kena pajak (BKP) maupun jasa kena pajak (JKP).</li>\\\\r\\\n</ul>\\\\r\\\n<h4><strong>3. Memiliki NPWP</strong></h4>\\\\r\\\n<ul>\\\\r\\\n \t<li>Wajib memiliki <strong>Nomor Pokok Wajib Pajak (NPWP)</strong> atas nama usaha atau pribadi.</li>\\\\r\\\n</ul>\\\\r\\\n<h4><strong>4. Memiliki Tempat Usaha</strong></h4>\\\\r\\\n<ul>\\\\r\\\n \t<li>Wajib memiliki tempat usaha yang jelas, baik berupa lokasi fisik atau lokasi virtual (domisili usaha yang sah).</li>\\\\r\\\n</ul>\\\\r\\\n<h4><strong>5. Pendaftaran ke KPP</strong></h4>\\\\r\\\n<ul>\\\\r\\\n \t<li>Pendaftaran dilakukan melalui Kantor Pelayanan Pajak (KPP) atau secara online melalui sistem Direktorat Jenderal Pajak (DJP Online).</li>\\\\r\\\n</ul>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3><strong>Dokumen yang Dibutuhkan untuk Pendaftaran PKP</strong></h3>\\\\r\\\n<h4><strong>A. Untuk Wajib Pajak Pribadi</strong></h4>\\\\r\\\n<ol>\\\\r\\\n \t<li>Fotokopi KTP.</li>\\\\r\\\n \t<li>Fotokopi NPWP.</li>\\\\r\\\n \t<li>Surat pernyataan tempat usaha.</li>\\\\r\\\n \t<li>Dokumen pendukung seperti izin usaha atau bukti kepemilikan tempat usaha.</li>\\\\r\\\n</ol>\\\\r\\\n<h4><strong>B. Untuk Wajib Pajak Badan</strong></h4>\\\\r\\\n<ol>\\\\r\\\n \t<li>Fotokopi akta pendirian perusahaan.</li>\\\\r\\\n \t<li>Fotokopi NPWP badan.</li>\\\\r\\\n \t<li>Surat keterangan domisili usaha.</li>\\\\r\\\n \t<li>Izin usaha, seperti NIB (Nomor Induk Berusaha) atau SIUP.</li>\\\\r\\\n \t<li>Fotokopi KTP pemilik atau pengurus perusahaan.</li>\\\\r\\\n</ol>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3><strong>Prosedur Pendaftaran PKP</strong></h3>\\\\r\\\n<ol>\\\\r\\\n \t<li><strong>Pendaftaran melalui DJP Online atau KPP</strong>\\\\r\\\n<ul>\\\\r\\\n \t<li>Isi formulir pendaftaran PKP dengan lengkap.</li>\\\\r\\\n</ul>\\\\r\\\n</li>\\\\r\\\n \t<li><strong>Verifikasi oleh Kantor Pajak</strong>\\\\r\\\n<ul>\\\\r\\\n \t<li>Petugas pajak akan memverifikasi data dan, jika perlu, melakukan survei lokasi usaha.</li>\\\\r\\\n</ul>\\\\r\\\n</li>\\\\r\\\n \t<li><strong>Penerbitan Surat Keterangan Terdaftar (SKT)</strong>\\\\r\\\n<ul>\\\\r\\\n \t<li>Jika disetujui, Surat Keterangan Terdaftar (SKT) sebagai PKP akan diterbitkan.</li>\\\\r\\\n</ul>\\\\r\\\n</li>\\\\r\\\n</ol>\\\\r\\\n\\\\r\\\n<hr />\\\\r\\\n\\\\r\\\n<h3><strong>Hak dan Kewajiban PKP</strong></h3>\\\\r\\\n<h4><strong>Hak</strong>:</h4>\\\\r\\\n<ul>\\\\r\\\n \t<li>Mengkreditkan Pajak Masukan terhadap Pajak Keluaran.</li>\\\\r\\\n</ul>\\\\r\\\n<h4><strong>Kewajiban</strong>:</h4>\\\\r\\\n<ol>\\\\r\\\n \t<li>Memungut PPN atas penjualan barang atau jasa.</li>\\\\r\\\n \t<li>Menyetorkan PPN yang telah dipungut ke negara.</li>\\\\r\\\n \t<li>Melaporkan SPT Masa PPN setiap bulan.</li>\\\\r\\\n</ol>"
  },
  {
    "slug": "tarif-pph",
    "title": "Tarif Pajak Penghasilan (PPh)",
    "shortTitle": "Tarif Pajak Penghasilan",
    "category": "PPh",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Tarif PPH - EasyLegal | Tarif PPh (Pajak Penghasilan) di Indonesia bervariasi sesuai dengan jenis penghasilan dan status wajib pajak. Setiap jenis penghasilan dikenakan tarif...",
    "content": "SEO: Tarif PPH - EasyLegal | Tarif PPh (Pajak Penghasilan) di Indonesia bervariasi sesuai dengan jenis penghasilan dan status wajib pajak. Setiap jenis penghasilan dikenakan tarif yang...\n\n\n\n\n\nTarif PPh (Pajak Penghasilan) di Indonesia bervariasi sesuai dengan jenis penghasilan dan status wajib pajak. Setiap jenis penghasilan dikenakan tarif yang berbeda, dan tarif ini bersifat progresif atau tetap, tergantung pada penghasilan yang diperoleh. Berikut adalah penjelasan mengenai tarif PPh yang perlu Anda ketahui.\\\\r\\\n\\\\r\\\n<strong>A. Yang Mendapatkan pajak ini</strong>\\\\r\\\n\\\\r\\\n1. Untuk Wajib Pajak Orang Pribadi (PPh Orang Pribadi)\\\\r\\\n\\\\r\\\nBagi wajib pajak individu bersifat progresif, yang artinya semakin besar penghasilan, semakin tinggi tarif pajak yang dikenakan. Berikut adalah tarif yang berlaku untuk orang pribadi berdasarkan Penghasilan Kena Pajak (PKP) per tahun:\\\\r\\\n<ol>\\\\r\\\n \t<li>Rp0 hingga Rp60.000.000: Tarif 5%.</li>\\\\r\\\n \t<li>Rp60.000.001 hingga Rp250.000.000: Tarif 15%.</li>\\\\r\\\n \t<li>Rp250.000.001 hingga Rp500.000.000: Tarif 25%.</li>\\\\r\\\n \t<li>Di atas Rp500.000.000: Tarif 30%.</li>\\\\r\\\n</ol>\\\\r\\\n2. Untuk Wajib Pajak Badan (PPh Badan)\\\\r\\\n\\\\r\\\nUntuk badan usaha atau perusahaan, yang dikenakan adalah 22% dari penghasilan yang diperoleh. Namun, perusahaan yang terdaftar di pasar saham bisa mendapatkan tarif yang lebih rendah sesuai dengan ketentuan yang berlaku.\\\\r\\\n\\\\r\\\n3. Atas Penghasilan Lainnya\\\\r\\\n\\\\r\\\nSelain itu, ada juga tarif untuk jenis penghasilan tertentu, seperti:\\\\r\\\n<ul>\\\\r\\\n \t<li>Dividen: Dikenakan 10% tarif PPh final.</li>\\\\r\\\n \t<li>Bunga: Dikenakan 20% tarif PPh final.</li>\\\\r\\\n \t<li>Royalti: Dikenakan tarif yang lebih bervariasi, tergantung pada negara tempat usaha dijalankan.</li>\\\\r\\\n</ul>\\\\r\\\n<strong>B. Beberapa faktor yang mempengaruhi pajak ini antara lain:</strong>\\\\r\\\n<ul>\\\\r\\\n \t<li>Status Pajak: Wajib pajak yang memiliki keluarga atau tanggungan dapat memperoleh potongan yang mengurangi penghasilan kena pajak.</li>\\\\r\\\n \t<li>Penghasilan Tidak Kena Pajak (PTKP): Setiap tahun, pemerintah menetapkan jumlah PTKP yang dapat mengurangi penghasilan yang dikenakan pajak.</li>\\\\r\\\n</ul>\\\\r\\\n<strong>C. Kesimpulan</strong>\\\\r\\\n\\\\r\\\nTarif PPh adalah komponen penting dalam sistem perpajakan Indonesia, yang mempengaruhi cara perhitungan pajak bagi individu dan badan usaha. Dengan mengetahui tarif PPh, wajib pajak dapat lebih mudah merencanakan kewajiban perpajakan mereka. Pastikan Anda mengikuti perubahan dan ketentuan terbaru terkait tarif PPh untuk menghindari masalah perpajakan."
  },
  {
    "slug": "tarif-progresif-pph-21",
    "title": "Tarif Pajak Progresif PPh 21",
    "shortTitle": "Tarif Pajak Progresif PPh 21",
    "category": "PPh",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Tarif Progresif PPH 21 - EasyLegal | Tarif Pemotongan PPh Pasal 21 Progresif;\\\\r\\ \\\\r\\ lapisan penghasilan kena pajak diubah menjadi mulai dari Rp60 juta per tahun dengan...",
    "content": "SEO: Tarif Progresif PPH 21 - EasyLegal | Tarif Pemotongan PPh Pasal 21 Progresif;\\\\r\\\n\\\\r\\\nlapisan penghasilan kena pajak diubah menjadi mulai dari Rp60 juta per tahun dengan tarif progresif antara 5%...\n\n\n\n\n\n<strong>Tarif Pemotongan PPh Pasal 21 Progresif;</strong>\\\\r\\\n\\\\r\\\nlapisan penghasilan kena pajak diubah menjadi mulai dari Rp60 juta per tahun dengan <b>tarif progresif</b> antara 5% hingga 35% untuk penghasilan kena pajak di atas Rp5 miliar, sebagaimana diatur dalam UU HPP 7/2021."
  },
  {
    "slug": "tarif-pph-23",
    "title": "Tarif PPh Pasal 23",
    "shortTitle": "Tarif PPh Pasal 23",
    "category": "PPh",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Tarif PPH 23 - EasyLegal | Berikut tarif PPh 23, yaitu: Tarif 15% dari jumlah bruto dikenakan untuk penghasilan bunga, dividen, royalti dan hadiah/penghargaan. Tarif 2% dari...",
    "content": "SEO: Tarif PPH 23 - EasyLegal | Berikut tarif PPh 23, yaitu: Tarif 15% dari jumlah bruto dikenakan untuk penghasilan bunga, dividen, royalti dan hadiah/penghargaan. Tarif 2% dari jumlah bruto...\n\n\n\n\n\nBerikut <b>tarif PPh 23</b>, yaitu: <b>Tarif</b> 15% dari jumlah bruto dikenakan untuk penghasilan bunga, dividen, royalti dan hadiah/penghargaan. <b>Tarif</b> 2% dari jumlah bruto dikenakan untuk penghasilan jasa dan sewa. <b>Tarif</b> 2% dari jumlah bruto atas imbalan jasa teknik, jasa manajemen, jasa konstruksi dan jasa konsultan."
  },
  {
    "slug": "ter-pph-21",
    "title": "TER PPh 21 (Tarif Efektif Rata-Rata)",
    "shortTitle": "TER PPh 21",
    "category": "PPh",
    "dasarHukum": "PP No. 58 Tahun 2023, PMK No. 168 Tahun 2023",
    "excerpt": "Metode penghitungan pemotongan PPh 21 bulanan terbaru menggunakan tabel persentase efektif berdasarkan rentang penghasilan bruto dan kategori status PTKP.",
    "content": "**Tarif Efektif Rata-Rata (TER) PPh 21** adalah metode perhitungan pemotongan PPh 21 yang resmi berlaku sejak 1 Januari 2024 untuk mempermudah administrasi pemotongan pajak penghasilan karyawan oleh perusahaan.\n\n### Pengelompokan Kategori TER Bulanan\n1. **TER Kategori A**: Meliputi status PTKP TK/0 (Rp 54 jt), TK/1 (Rp 58,5 jt), dan K/0 (Rp 58,5 jt).\n2. **TER Kategori B**: Meliputi status PTKP TK/2, TK/3, K/1, dan K/2.\n3. **TER Kategori C**: Khusus untuk status PTKP K/3 (menikah dengan 3 tanggungan).\n\nSetiap kategori memiliki tabel persentase tarif bertingkat (mulai dari 0% hingga 34%) yang langsung dikalikan dengan penghasilan bruto bulanan tanpa perlu menghitung biaya jabatan atau iuran pensiun setiap bulan secara manual."
  },
  {
    "slug": "tin-pajak",
    "title": "TIN Pajak (Taxpayer Identification Number)",
    "shortTitle": "TIN Pajak",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: TIN Pajak - EasyLegal | Nomor Identifikasi Pajak (TIN/Tax Identification Number) adalah nomor yang berperan penting dalam mencatat dan melacak kewajiban perpajakan, terutama...",
    "content": "SEO: TIN Pajak - EasyLegal | Nomor Identifikasi Pajak (TIN/Tax Identification Number) adalah nomor yang berperan penting dalam mencatat dan melacak kewajiban perpajakan, terutama dalam...\n\n\n\n\n\n<strong>Nomor Identifikasi Pajak (TIN/Tax Identification Number)</strong> adalah nomor yang berperan penting dalam mencatat dan melacak kewajiban <b>perpajakan</b>, terutama dalam konteks internasional. <b>TIN</b> memungkinkan entitas <b>pajak</b> dikenali secara unik dalam berbagai yurisdiksi, membantu mempermudah pengelolaan <b>pajak</b> lintas negara."
  },
  {
    "slug": "undang-undang-ppn",
    "title": "Undang-Undang PPN",
    "shortTitle": "Undang-Undang PPN",
    "category": "PPN",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Undang Undang PPN - EasyLegal | Undang-Undang Pajak Pertambahan Nilai (PPN) di Indonesia diatur dalam Undang-Undang Nomor 42 Tahun 2009 tentang Pajak Pertambahan Nilai Barang...",
    "content": "SEO: Undang Undang PPN - EasyLegal | Undang-Undang Pajak Pertambahan Nilai (PPN) di Indonesia diatur dalam Undang-Undang Nomor 42 Tahun 2009 tentang Pajak Pertambahan Nilai Barang dan Jasa serta...\n\n\n\n\n\n<strong>Undang-Undang Pajak Pertambahan Nilai (PPN)</strong> di Indonesia diatur dalam <strong>Undang-Undang Nomor 42 Tahun 2009 tentang Pajak Pertambahan Nilai Barang dan Jasa serta Pajak Penjualan atas Barang Mewah</strong> (UU PPN). Undang-undang ini mengatur tentang kewajiban pemungutan PPN atas barang dan jasa yang diperdagangkan di dalam negeri, serta ketentuan terkait pajak penjualan atas barang mewah (PPnBM).\\\\r\\\n<h3>Beberapa pokok penting dalam UU PPN:</h3>\\\\r\\\n<ol>\\\\r\\\n \t<li><strong>Objek PPN</strong>:\\\\r\\\nPPN dikenakan atas barang dan jasa yang diperdagangkan di Indonesia, termasuk impor barang atau jasa.</li>\\\\r\\\n \t<li><strong>Pengusaha Kena Pajak (PKP)</strong>:\\\\r\\\nHanya pengusaha yang terdaftar sebagai Pengusaha Kena Pajak (PKP) yang diwajibkan untuk memungut, menyetor, dan melaporkan PPN.</li>\\\\r\\\n \t<li><strong>Tarif PPN</strong>:\\\\r\\\nTarif standar PPN di Indonesia adalah 10%, namun ada beberapa barang dan jasa tertentu yang dapat dikenakan tarif yang lebih rendah atau dibebaskan dari PPN.</li>\\\\r\\\n \t<li><strong>Dasar Pengenaan Pajak (DPP)</strong>:\\\\r\\\nPPN dihitung berdasarkan harga jual atau penggantian atas barang atau jasa yang dikenakan pajak.</li>\\\\r\\\n \t<li><strong>Pajak Penjualan atas Barang Mewah (PPnBM)</strong>:\\\\r\\\nSelain PPN, undang-undang ini juga mengatur tentang pajak penjualan atas barang mewah, yang dikenakan atas barang tertentu seperti mobil mewah, rumah besar, dan barang lainnya dengan nilai tinggi.</li>\\\\r\\\n \t<li><strong>Fasilitas dan Pembebasan PPN</strong>:\\\\r\\\nUndang-undang ini juga mengatur berbagai pembebasan atau fasilitas PPN untuk barang dan jasa tertentu, seperti untuk barang kebutuhan pokok atau barang yang digunakan untuk tujuan tertentu (misalnya ekspor).</li>\\\\r\\\n</ol>\\\\r\\\nUU PPN bertujuan untuk mengatur dan memfasilitasi penerimaan negara melalui pajak atas konsumsi barang dan jasa, serta memberikan kepastian hukum bagi pelaku usaha dan konsumen."
  },
  {
    "slug": "wajib-pajak",
    "title": "Wajib Pajak",
    "shortTitle": "Wajib Pajak",
    "category": "Kepatuhan Pajak",
    "dasarHukum": "Ketentuan Perundang-undangan Perpajakan",
    "excerpt": "SEO: Wajib Pajak - EasyLegal | Berdasarkan Undang-Undang Ketentuan Umum dan Tata Cara Perpajakan (UU KUP), pengertian pajak adalah kontribusi wajib kepada negara yang terutang...",
    "content": "SEO: Wajib Pajak - EasyLegal | Berdasarkan Undang-Undang Ketentuan Umum dan Tata Cara Perpajakan (UU KUP), pengertian pajak adalah kontribusi wajib kepada negara yang terutang oleh orang...\n\n\n\n\n\nBerdasarkan Undang-Undang Ketentuan Umum dan Tata Cara <b>Perpajakan</b> (UU KUP), <b>pengertian</b> pajak adalah kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan yang bersifat memaksa berdasarkan Undang-Undang, dengan tidak mendapatkan imbalan secara langsung dan digunakan untuk keperluan negara."
  }
];

export function cariIstilah(slug: string): IstilahItem | undefined {
  const clean = slug.toLowerCase().trim();
  return daftarIstilah.find((item) => item.slug.toLowerCase() === clean);
}

export function cariIstilahTerkait(currentSlug: string, category: string, limit = 5): IstilahItem[] {
  return daftarIstilah
    .filter((item) => item.slug !== currentSlug && (item.category === category || category === "Semua"))
    .slice(0, limit);
}

export function filterIstilah(opts: {
  q?: string;
  category?: string;
  letter?: string;
  page?: number;
  limit?: number;
}): {
  data: IstilahItem[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
} {
  const q = (opts.q || "").toLowerCase().trim();
  const category = opts.category && opts.category !== "Semua" ? opts.category : null;
  const letter = opts.letter && opts.letter !== "ALL" ? opts.letter.toUpperCase() : null;
  const page = Math.max(1, opts.page || 1);
  const limit = Math.max(1, opts.limit || 24);

  let filtered = daftarIstilah.filter((item) => {
    if (category && item.category !== category) return false;
    if (letter && !item.title.toUpperCase().startsWith(letter)) return false;
    if (q) {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchShort = item.shortTitle ? item.shortTitle.toLowerCase().includes(q) : false;
      const matchExcerpt = item.excerpt.toLowerCase().includes(q);
      const matchContent = item.content.toLowerCase().includes(q);
      if (!matchTitle && !matchShort && !matchExcerpt && !matchContent) return false;
    }
    return true;
  });

  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const offset = (page - 1) * limit;
  const data = filtered.slice(offset, offset + limit);

  return {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages,
    },
  };
}
