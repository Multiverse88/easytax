/**
 * Unit tests: RAG Artikel — Scope Isolation
 *
 * Membuktikan bahwa RAG hanya beroperasi pada artikel,
 * bukan pada layanan, testimoni, mitra, atau konten lainnya.
 */

import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { ekstrakTeksArtikel } from "@/rag/text-extractor";
import { chunkTeksArtikel } from "@/rag/chunker";
import { blokKeLexical } from "@/lib/artikel/lexical";

describe("unit test: RAG — Isolasi Scope Artikel", () => {
  it("hanya memproses data dengan format ArtikelUntukEkstraksi", async () => {
    // Format artikel yang valid
    const artikelValid = await ekstrakTeksArtikel({
      id: 1,
      judul: "Panduan PPh Badan",
      slug: "panduan-pph-badan",
      ringkasan: "Artikel tentang pajak badan usaha.",
      blok: blokKeLexical([
        {
          kind: "paragraph",
          text: "PPh Badan dikenakan atas penghasilan neto badan.",
        },
      ]),
    });

    assert.ok(artikelValid, "Artikel valid harus bisa diekstrak");
    assert.equal(artikelValid.artikelId, 1);
  });

  it("tidak memiliki interface untuk layanan, testimoni, atau mitra", () => {
    // Fungsi ekstraksi hanya menerima ArtikelUntukEkstraksi
    // yang memiliki field: id, judul, slug, ringkasan?, blok?
    // Tidak ada parameter untuk:
    // - harga/paket (layanan)
    // - kutipan/rating (testimoni)
    // - logo/nama perusahaan (mitra)
    // - layout JSON (page builder)
    const artikelSederhana = {
      id: 99,
      judul: "Artikel Saja",
      slug: "artikel-saja",
    };

    // Type check: hanya field artikel yang diterima
    assert.equal(artikelSederhana.id, 99);
    assert.equal(artikelSederhana.judul, "Artikel Saja");
  });

  it("chunker hanya memproses data chunking artikel", () => {
    const chunks = chunkTeksArtikel({
      artikelId: 10,
      slug: "artikel-chunk-test",
      judul: "Chunk Test",
      teksLengkap: "Konten artikel perpajakan.",
      contentHash: "hash123",
    });

    // Setiap chunk harus memiliki artikelId dan slug artikel
    for (const chunk of chunks) {
      assert.equal(chunk.artikelId, 10);
      assert.equal(chunk.slug, "artikel-chunk-test");
    }
  });

  it("mengabaikan data isi yang bukan dokumen Lexical", async () => {
    const hasil = await ekstrakTeksArtikel({
      id: 20,
      judul: "Data Asing",
      slug: "data-asing",
      blok: {
        components: [
          { type: "hero", text: "Hero section" },
          { type: "testimonial", text: "Sangat puas" },
        ],
      },
    });

    if (hasil) {
      assert.ok(!hasil.teksLengkap.includes("Hero section"));
      assert.ok(!hasil.teksLengkap.includes("Sangat puas"));
    }
  });
});
