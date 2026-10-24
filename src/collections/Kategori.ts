import type { CollectionConfig } from "payload";

import { adminSaja, siapaSaja, stafPenulis } from "../access";
import { hookRevalidate } from "../cms/revalidate";
import { formatSlug } from "../lib/slug";

/**
 * Kategori artikel (mis. Akuntansi, Bisnis, Perpajakan). Dipakai oleh filter
 * kategori di /tulisan-pajak dan sebagai relasi pada koleksi Artikel.
 */
export const Kategori: CollectionConfig = {
  slug: "kategori",
  labels: { singular: "Kategori Artikel", plural: "Kategori Artikel" },
  admin: {
    useAsTitle: "nama",
    defaultColumns: ["nama", "slug"],
    group: "Konten",
  },
  access: {
    read: siapaSaja,
    create: stafPenulis,
    update: stafPenulis,
    delete: adminSaja,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data;
        const target = data.slug || data.nama;
        if (target) {
          data.slug = formatSlug(target);
        }
        return data;
      },
    ],
    afterChange: [hookRevalidate("artikel")],
    afterDelete: [hookRevalidate("artikel")],
  },
  fields: [
    { name: "nama", label: "Nama Kategori", type: "text", required: true },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: false,
      unique: true,
      index: true,
      admin: {
        description:
          "Versi huruf kecil untuk filter (otomatis diisi dari nama jika dikosongkan).",
      },
    },
  ],
};
