/**
 * Ekstraksi teks artikel Lexical untuk chunking dan embedding.
 */

import { ekstrakTeksLexical } from "@/lib/artikel/lexical";

export interface ArtikelUntukEkstraksi {
  id: number;
  judul: string;
  slug: string;
  ringkasan?: string;
  blok?: unknown;
}

export interface HasilEkstraksi {
  artikelId: number;
  slug: string;
  judul: string;
  teksLengkap: string;
  contentHash: string;
}


/**
 * Normalisasi teks: hapus whitespace berlebihan, trim.
 */
function normalisasiTeks(teks: string): string {
  return teks
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+/g, " ")
    .trim();
}

/**
 * Buat hash sederhana dari konten untuk mendeteksi perubahan.
 * Menggunakan Web Crypto API yang tersedia di Node.js 20+.
 */
export async function buatContentHash(teks: string): Promise<string> {
  const { createHash } = await import("node:crypto");
  return createHash("sha256").update(teks, "utf8").digest("hex").slice(0, 16);
}

/**
 * Ekstrak teks lengkap dari artikel untuk indexing.
 */
export async function ekstrakTeksArtikel(
  artikel: ArtikelUntukEkstraksi,
): Promise<HasilEkstraksi | null> {
  const bagian: string[] = [];

  if (artikel.judul?.trim()) {
    bagian.push(artikel.judul.trim());
  }

  if (artikel.ringkasan?.trim()) {
    bagian.push(artikel.ringkasan.trim());
  }

  const teksBlok = ekstrakTeksLexical(artikel.blok);
  if (teksBlok) bagian.push(teksBlok);

  const teksLengkap = normalisasiTeks(bagian.join("\n\n"));

  if (!teksLengkap || teksLengkap.length < 20) {
    return null;
  }

  // Slug included so a rename of otherwise unchanged content triggers reindex.
  // Output is 16 hex chars, matching the varchar(16) content_hash column.
  const contentHash = await buatContentHash(`${teksLengkap}\0${artikel.slug}`);

  return {
    artikelId: artikel.id,
    slug: artikel.slug,
    judul: artikel.judul,
    teksLengkap,
    contentHash,
  };
}
