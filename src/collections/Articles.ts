import type { CollectionConfig } from "payload";

import { adminSaja, bacaTerbitAtauStaf, stafPenulis } from "../access";
import { hookRevalidate } from "../cms/revalidate";
import { fieldSeo } from "../fields/seo";
import { formatSlug } from "../lib/slug";
import { hookIndexArtikelRAG, hookHapusArtikelRAG } from "../rag/hooks";
import {
  FixedToolbarFeature,
  HeadingFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

/**
 * Articles (Artikel) — sumber data untuk artikel perpajakan.
 * Menggunakan slug database `artikel` agar kompatibel penuh dengan PostgreSQL.
 */
export const Articles: CollectionConfig = {
  slug: "artikel",
  labels: { singular: "Artikel", plural: "Artikel" },
  admin: {
    useAsTitle: "judul",
    defaultColumns: ["judul", "kategori", "tanggalTerbit", "_status"],
    group: "Konten",
  },
  versions: { drafts: true },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data;
        const target = data.slug || data.judul;
        if (target) {
          data.slug = formatSlug(target);
        }
        return data;
      },
    ],
    afterChange: [hookRevalidate("artikel"), hookIndexArtikelRAG],
    afterDelete: [hookRevalidate("artikel"), hookHapusArtikelRAG],
  },
  access: {
    read: bacaTerbitAtauStaf,
    create: stafPenulis,
    update: stafPenulis,
    delete: adminSaja,
  },
  fields: [
    { name: "judul", label: "Judul", type: "text", required: true },
    {
      name: "slug",
      label: "Slug (URL)",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { position: "sidebar" },
    },
    {
      name: "ringkasan",
      label: "Ringkasan",
      type: "textarea",
      required: true,
      admin: {
        description:
          "Tampil pada kartu daftar artikel dan sebagai meta description.",
      },
    },
    {
      name: "sampul",
      label: "Gambar Sampul",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "kategori",
      label: "Kategori",
      type: "relationship",
      relationTo: "kategori",
      required: true,
    },
    {
      name: "tag",
      label: "Tag",
      type: "array",
      fields: [{ name: "teks", label: "Tag", type: "text", required: true }],
    },
    {
      name: "penulis",
      label: "Penulis",
      type: "relationship",
      relationTo: "users",
      admin: { position: "sidebar" },
    },
    {
      name: "tanggalTerbit",
      label: "Tanggal Terbit",
      type: "date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayOnly" } },
    },
    {
      name: "waktuBaca",
      label: "Estimasi Waktu Baca",
      type: "text",
      admin: { position: "sidebar" },
    },
    {
      name: "blok",
      label: "Isi Artikel",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
          HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
        ],
      }),
    },
    fieldSeo,
  ],
};

export const Artikel = Articles;
export default Articles;
