import { getPayload } from "payload";
import config from "../src/payload.config.ts";
import { detailLayanan } from "../src/data/layanan-detail.ts";

async function run() {
  const payload = await getPayload({ config });
  const detail = detailLayanan.find((d) => d.slug === "laporan-perpajakan-keuangan");
  if (!detail) throw new Error("Detail not found");

  const docs = await payload.find({
    collection: "layanan",
    where: { slug: { equals: "laporan-perpajakan-keuangan" } },
    depth: 0,
    overrideAccess: true,
  });

  if (docs.docs.length > 0) {
    const doc = docs.docs[0];
    const paket = detail.paket.map((p) => ({
      nama: p.nama,
      deskripsi: p.deskripsi,
      harga: p.harga,
      satuan: p.satuan,
      fitur: p.fitur.map((f) => ({ teks: f })),
    }));
    const faq = detail.faq.map((f) => ({
      pertanyaan: f.pertanyaan,
      jawaban: f.jawaban,
    }));

    await payload.update({
      collection: "layanan",
      id: doc.id,
      data: { paket, faq },
      overrideAccess: true,
    });
    console.log("SUCCESS_UPDATED_PROD_PAKET: 10 tiers updated successfully");
  }
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
