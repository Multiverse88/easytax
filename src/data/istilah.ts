import type { Istilah } from "@/payload-types";
import { ekstrakTeksLexical } from "@/lib/artikel/lexical";

export interface IstilahItem {
  slug: string;
  title: string;
  shortTitle?: string;
  category: "PPh" | "PPN" | "PKP" | "SPT" | "Akuntansi" | "Kepatuhan Pajak" | "Perpajakan";
  excerpt: string;
  content: Istilah["content"];
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

export function filterIstilah(opts: {
  q?: string;
  category?: string;
  letter?: string;
  page?: number;
  limit?: number;
  source: IstilahItem[];
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
  const filtered = opts.source.filter((item) => {
    if (category && item.category !== category) return false;
    if (letter && !item.title.toUpperCase().startsWith(letter)) return false;
    if (q) {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchShort = item.shortTitle ? item.shortTitle.toLowerCase().includes(q) : false;
      const matchExcerpt = item.excerpt.toLowerCase().includes(q);
      const matchContent = ekstrakTeksLexical(item.content).toLowerCase().includes(q);
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
