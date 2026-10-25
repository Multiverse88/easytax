import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getPayload } from "payload";
import config from "../src/payload.config.ts";
import { mitraKlien } from "../src/data/mitra.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

async function sync() {
  const payload = await getPayload({ config });

  console.log("Synchronizing EasyLegal clients & partners to collection 'mitra'...");

  // 1. Delete old demo mitra records
  const oldMitra = await payload.find({
    collection: "mitra",
    limit: 100,
    depth: 0,
    overrideAccess: true,
  });

  const validNames = new Set(mitraKlien.map((m) => m.nama));
  for (const doc of oldMitra.docs) {
    if (!validNames.has(doc.nama)) {
      await payload.delete({
        collection: "mitra",
        id: doc.id,
        overrideAccess: true,
      });
      console.log(`- Removed legacy mitra: ${doc.nama} (ID ${doc.id})`);
    }
  }

  // 2. Upload and upsert each client in mitraKlien
  for (const [index, item] of mitraKlien.entries()) {
    const filename = path.basename(item.src);
    const filePath = path.join(ROOT, "public", "images", "klien-easylegal", filename);

    const existingMedia = await payload.find({
      collection: "media",
      where: { filename: { equals: `mitra-${filename}` } },
      limit: 1,
      depth: 0,
      overrideAccess: true,
    });

    let mediaId = existingMedia.docs[0]?.id;
    if (!mediaId) {
      try {
        const fileBuffer = await fs.readFile(filePath);
        const uploaded = await payload.create({
          collection: "media",
          data: {
            alt: `Logo ${item.nama}`,
          },
          file: {
            data: fileBuffer,
            name: `mitra-${filename}`,
            mimetype: "image/png",
            size: fileBuffer.length,
          },
          overrideAccess: true,
        });
        mediaId = uploaded.id;
        console.log(`+ Uploaded media logo: ${item.nama} -> ID ${mediaId}`);
      } catch (e) {
        console.error(`Error uploading ${filename}:`, e.message);
      }
    }

    const existingDoc = await payload.find({
      collection: "mitra",
      where: { nama: { equals: item.nama } },
      limit: 1,
      depth: 0,
      overrideAccess: true,
    });

    if (existingDoc.docs.length > 0) {
      await payload.update({
        collection: "mitra",
        id: existingDoc.docs[0].id,
        data: {
          nama: item.nama,
          logo: mediaId,
          urutan: index + 1,
        },
        overrideAccess: true,
      });
      console.log(`✓ Updated mitra: ${item.nama} (urutan ${index + 1})`);
    } else {
      await payload.create({
        collection: "mitra",
        data: {
          nama: item.nama,
          logo: mediaId,
          urutan: index + 1,
        },
        overrideAccess: true,
      });
      console.log(`+ Created mitra: ${item.nama} (urutan ${index + 1})`);
    }
  }

  console.log("Done! Total mitra now:", mitraKlien.length);
}

sync()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Sync failed:", err);
    process.exit(1);
  });
