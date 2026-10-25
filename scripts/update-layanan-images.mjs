import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MEDIA_DIR = path.join(ROOT, "media");

const REPLACEMENTS = [
  { match: "restitusi-pajak", src: path.join(ROOT, "public/images/layanan-restitusi-pajak.webp") },
  { match: "pengurusan-pkp", src: path.join(ROOT, "public/images/layanan-pengurusan-pkp.webp") },
];

async function run() {
  const files = fs.readdirSync(MEDIA_DIR);
  for (const replacement of REPLACEMENTS) {
    const matches = files.filter((f) => f.includes(replacement.match));
    for (const file of matches) {
      const target = path.join(MEDIA_DIR, file);
      const meta = await sharp(target).metadata();
      const w = meta.width || 1200;
      const h = meta.height || 800;
      const tmp = `${target}.tmp`;
      await sharp(replacement.src).resize(w, h, { fit: "cover" }).webp({ quality: 85 }).toFile(tmp);
      fs.renameSync(tmp, target);
      console.log(`Updated ${file} (${w}x${h})`);
    }
  }
  console.log("Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
