import { getPayload } from "payload";

import config from "../payload.config";

/**
 * Migrasi satu-kali: sisipkan blok `FaqBeranda` ke layout "beranda" yang
 * sudah diterbitkan, tepat sebelum CTA penutup. Dijalankan sekali di
 * production setelah tipe komponen `FaqBeranda` ditambahkan ke Page Builder.
 *
 * Jalankan: npm run cms -- run src/scripts/add-faq-beranda.ts --disable-transpile
 */

const payload = await getPayload({ config });

const res = await payload.find({
  collection: "page-layouts",
  where: { pageKey: { equals: "beranda" } },
  limit: 1,
  depth: 0,
  draft: false,
  overrideAccess: true,
});

const doc = res.docs[0];
if (!doc) {
  console.log("Layout beranda tidak ditemukan (belum diterbitkan).");
  process.exit(0);
}

const layout = doc.layout as { content: { type: string; props: Record<string, unknown> }[]; root?: unknown };

if (layout.content.some((c) => c.type === "FaqBeranda")) {
  console.log("Blok FaqBeranda sudah ada di layout beranda. Tidak ada perubahan.");
  process.exit(0);
}

const idxCta = layout.content.findIndex((c) => c.type === "CTA");
const blok = { type: "FaqBeranda", props: { id: "faqberanda-beranda" } };
const kontenBaru =
  idxCta === -1
    ? [...layout.content, blok]
    : [...layout.content.slice(0, idxCta), blok, ...layout.content.slice(idxCta)];

await payload.update({
  collection: "page-layouts",
  id: doc.id,
  data: {
    layout: { ...layout, content: kontenBaru },
    revision: doc.revision,
    _status: "published",
  },
  overrideAccess: true,
});

console.log("✓ Blok FaqBeranda ditambahkan ke layout beranda dan diterbitkan.");
process.exit(0);
