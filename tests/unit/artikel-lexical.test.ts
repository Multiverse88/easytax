import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  blokKeLexical,
  ekstrakHeadingLexical,
  ekstrakTeksLexical,
} from "@/lib/artikel/lexical";

const blokLama = [
  { kind: "paragraph" as const, text: "Paragraf pembuka." },
  { kind: "heading" as const, level: 2 as const, text: "Syarat Pajak" },
  {
    kind: "list" as const,
    ordered: true,
    items: ["Memiliki NPWP", "Menyiapkan laporan"],
  },
  { kind: "heading" as const, level: 3 as const, text: "Syarat Pajak" },
];

describe("unit test: konten artikel Lexical", () => {
  it("mengonversi blok lama menjadi dokumen Lexical tanpa kehilangan struktur", () => {
    const hasil = blokKeLexical(blokLama);

    assert.deepEqual(
      hasil.root.children.map((node) => node.type),
      ["paragraph", "heading", "list", "heading"],
    );
    const heading = hasil.root.children[1];
    assert.ok(heading && "tag" in heading);
    assert.equal(heading.tag, "h2");

    const daftar = hasil.root.children[2];
    assert.ok(daftar && "listType" in daftar);
    assert.equal(daftar.listType, "number");
    assert.match(ekstrakTeksLexical(hasil), /Paragraf pembuka/);
    assert.match(ekstrakTeksLexical(hasil), /Memiliki NPWP/);
  });

  it("membuat anchor heading H2/H3 yang unik dan stabil", () => {
    const hasil = blokKeLexical(blokLama);

    assert.deepEqual(ekstrakHeadingLexical(hasil), [
      { id: "syarat-pajak", text: "Syarat Pajak", level: 2 },
      { id: "syarat-pajak-2", text: "Syarat Pajak", level: 3 },
    ]);
  });
});
