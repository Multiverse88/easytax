/**
 * Logo mitra untuk carousel di beranda.
 * Aset disalin dari easytax-demo (v1) — public/images/clients/*.webp.
 * "dev-logo.png" dari v1 sengaja dibuang karena hanya placeholder.
 */
export const logoMitra: string[] = [
  "vidichi.webp",
  "tantri.webp",
  "sumber-aneka-wangi.webp",
  "satoshi.webp",
  "power-computerindo.webp",
  "pabriek-kuweh.webp",
  "oseal.webp",
  "moonbow.webp",
  "kms.webp",
  "kafeel-netz.webp",
  "javarudraksha.webp",
  "happyeats.webp",
  "guri-senbei.webp",
  "gmk-door.webp",
  "dewa-rackindo.webp",
  "daingsuper.webp",
  "callme.webp",
  "beeskin.webp",
  "artave.webp",
  "arava-tour.webp",
  "akiha.webp",
];

/** Teks alternatif yang lebih rapi daripada nama file. */
export const namaMitra: Record<string, string> = {
  "vidichi.webp": "Vidichi",
  "tantri.webp": "Tantri",
  "sumber-aneka-wangi.webp": "Sumber Aneka Wangi",
  "satoshi.webp": "Satoshi",
  "power-computerindo.webp": "Power Computerindo",
  "pabriek-kuweh.webp": "Pabriek Kuweh",
  "oseal.webp": "Oseal",
  "moonbow.webp": "Moonbow",
  "kms.webp": "KMS",
  "kafeel-netz.webp": "Kafeel Netz",
  "javarudraksha.webp": "Javarudraksha",
  "happyeats.webp": "HappyEats",
  "guri-senbei.webp": "Guri Senbei",
  "gmk-door.webp": "GMK Door",
  "dewa-rackindo.webp": "Dewa Rackindo",
  "daingsuper.webp": "Daing Super",
  "callme.webp": "Callme",
  "beeskin.webp": "Beeskin",
  "artave.webp": "Artave",
  "arava-tour.webp": "Arava Tour",
  "akiha.webp": "Akiha",
};

export interface ItemMitra {
  nama: string;
  src: string;
}

/**
 * Klien perusahaan resmi dari EasyLegal (OUR CLIENTS)
 */
export const daftarKlien: ItemMitra[] = [
  { nama: "PT Amerta Berkah Mandiri", src: "/images/klien-easylegal/pt-amerta-berkah-mandiri.png" },
  { nama: "Cloud+", src: "/images/klien-easylegal/cloud-plus.png" },
  { nama: "PT Samudra Karsa Raya", src: "/images/klien-easylegal/pt-samudra-karsa-raya.png" },
  { nama: "CV Inusi Solusindo", src: "/images/klien-easylegal/cv-inusi-solusindo.png" },
  { nama: "CV Sinar Listrik Indonesia", src: "/images/klien-easylegal/cv-sinar-listrik-indonesia.png" },
  { nama: "PT Elanus International Resources", src: "/images/klien-easylegal/pt-elanus-international-resources.png" },
  { nama: "PAN Education & Training Center", src: "/images/klien-easylegal/pan-education-training-center.png" },
];

/**
 * Mitra perbankan & ekosistem resmi dari EasyLegal (SUPPORTED BY)
 */
export const daftarSupportedBy: ItemMitra[] = [
  { nama: "BCA", src: "/images/klien-easylegal/bca.png" },
  { nama: "BSI", src: "/images/klien-easylegal/bsi.png" },
  { nama: "Mekari", src: "/images/klien-easylegal/mekari.png" },
  { nama: "OCBC", src: "/images/klien-easylegal/ocbc.png" },
  { nama: "Permata Bank", src: "/images/klien-easylegal/permata-bank.png" },
  { nama: "Privy", src: "/images/klien-easylegal/privy.png" },
  { nama: "Everpro", src: "/images/klien-easylegal/everpro.png" },
  { nama: "JNE", src: "/images/klien-easylegal/jne.png" },
];

export const mitraKlien: ItemMitra[] = [...daftarKlien, ...daftarSupportedBy];
