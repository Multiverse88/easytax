import type { CollectionConfig } from "payload";
import {
  FixedToolbarFeature,
  HeadingFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

import { adminSaja, siapaSaja, stafPenulis } from "../access";
import { hookRevalidate } from "../cms/revalidate";
import { formatSlug } from "../lib/slug";

/**
 * Koleksi Kamus Istilah Perpajakan & Akuntansi.
 * Dikelola melalui Payload Admin pada menu "Konten" -> "Kamus Istilah".
 */
export const Istilah: CollectionConfig = {
  slug: "istilah",
  labels: { singular: "Istilah", plural: "Kamus Istilah" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "shortTitle", "category", "status", "updatedAt"],
    group: "Konten",
    description: "Kamus istilah perpajakan dan akuntansi untuk halaman /istilah.",
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
        const target = data.slug || data.shortTitle || data.title;
        if (target) {
          data.slug = formatSlug(target);
        }
        return data;
      },
    ],
    afterChange: [hookRevalidate("istilah")],
    afterDelete: [hookRevalidate("istilah")],
  },
  fields: [
    {
      name: "title",
      label: "Judul Istilah",
      type: "text",
      required: true,
      admin: {
        description: 'Contoh: "PPh 21 (Pajak Penghasilan Pasal 21)" atau "Faktur Pajak"',
      },
    },
    {
      name: "shortTitle",
      label: "Singkatan / Nama Pendek",
      type: "text",
      admin: {
        description: 'Contoh: "PPh 21", "PPN", "PKP". Digunakan untuk badge dan pencarian cepat.',
      },
    },
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
      name: "category",
      label: "Kategori",
      type: "select",
      required: true,
      defaultValue: "Perpajakan",
      options: [
        { label: "Perpajakan", value: "Perpajakan" },
        { label: "PPh", value: "PPh" },
        { label: "PPN", value: "PPN" },
        { label: "PKP", value: "PKP" },
        { label: "SPT", value: "SPT" },
        { label: "Akuntansi", value: "Akuntansi" },
        { label: "Kepatuhan Pajak", value: "Kepatuhan Pajak" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "dasarHukum",
      label: "Dasar Hukum / Regulasi Terkait",
      type: "text",
      admin: {
        description: 'Contoh: "UU No. 7 Tahun 2021 (UU HPP), PP 58/2023, PMK 168/2023"',
      },
    },
    {
      name: "excerpt",
      label: "Definisi Ringkas / Excerpt",
      type: "textarea",
      required: true,
      admin: {
        description: "Ditampilkan di kartu kamus istilah dan sebagai ringkasan di bagian atas halaman detail.",
      },
    },
    {
      name: "content",
      label: "Penjelasan Lengkap",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
          HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
        ],
      }),
      admin: {
        description: "Penjelasan lengkap istilah dengan editor visual (judul, teks tebal/miring, daftar, kutipan).",
      },
    },
    {
      name: "status",
      label: "Status Publikasi",
      type: "select",
      required: true,
      defaultValue: "published",
      options: [
        { label: "Published (Terbit)", value: "published" },
        { label: "Draft (Konsep)", value: "draft" },
      ],
      admin: { position: "sidebar" },
    },
  ],
};
