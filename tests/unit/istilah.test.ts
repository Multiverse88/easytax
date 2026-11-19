import assert from "node:assert/strict";
import { it } from "node:test";

import { filterIstilah, type IstilahItem } from "@/data/istilah";
import { blokKeLexical } from "@/lib/artikel/lexical";

it("memakai hanya istilah CMS terbaru, termasuk pencarian isi rich text dan filter kategori", () => {
  const source: IstilahItem[] = [
    {
      slug: "istilah-terbaru",
      title: "Aturan Terbaru",
      category: "PPh",
      excerpt: "Ringkasan yang diperbarui editor.",
      content: blokKeLexical([{ kind: "paragraph", text: "Penjelasan penghasilan terkini." }]),
    },
    {
      slug: "dokumen-lain",
      title: "Dokumen Lain",
      category: "PPN",
      excerpt: "Dokumen perpajakan.",
      content: blokKeLexical([{ kind: "paragraph", text: "Penjelasan faktur." }]),
    },
  ];

  assert.deepEqual(filterIstilah({ source: [] }).data, []);
  assert.deepEqual(filterIstilah({ source, q: "penghasilan" }).data.map((item) => item.slug), ["istilah-terbaru"]);
  assert.deepEqual(filterIstilah({ source, category: "PPN" }).data.map((item) => item.slug), ["dokumen-lain"]);
  assert.deepEqual(filterIstilah({ source, category: "PPN", q: "penghasilan" }).data, []);
  assert.deepEqual(filterIstilah({ source, letter: "A" }).data.map((item) => item.slug), ["istilah-terbaru"]);
  assert.deepEqual(filterIstilah({ source, page: 2, limit: 1 }).data.map((item) => item.slug), ["dokumen-lain"]);
  assert.equal(filterIstilah({ source, q: "versi-lama" }).meta.total, 0);
});
