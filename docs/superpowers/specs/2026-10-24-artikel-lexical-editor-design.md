# Desain Editor Artikel Lexical

**Tanggal:** 24 Oktober 2026  
**Status:** Disetujui untuk ditulis; menunggu tinjauan dokumen sebelum implementasi

## Tujuan

Menyederhanakan form artikel Payload CMS menjadi satu editor rich text seperti alur penulisan di project `websiteel`, tanpa menyalin editor custom project tersebut. Implementasi memakai editor Lexical bawaan Payload agar toolbar, upload media, draft, validasi, dan pembaruan Payload tetap terpelihara oleh dependency yang sudah terpasang.

## Keputusan

1. Hapus panel `EasyTax Article Companion` dari form artikel.
2. Ganti field `blok` dari Payload `blocks` menjadi satu field `richText` berlabel **Isi Artikel**.
3. Pertahankan nama field database `blok` agar perubahan schema dan caller sekecil mungkin.
4. Aktifkan fitur editor standar: heading, bold, italic, link, blockquote, ordered/unordered list, dan upload gambar dari collection `media`.
5. Pertahankan daftar isi publik. Heading H2/H3 dari Lexical menjadi anchor dan item daftar isi secara otomatis.
6. Migrasikan seluruh dokumen aktif dan versi/draft lama. Tidak ada format lama, compatibility shim, atau editor kedua setelah cutover.

## Pengalaman Admin

Urutan field utama:

1. Judul
2. Ringkasan
3. Gambar Sampul
4. Kategori
5. Tag
6. Isi Artikel (Lexical)
7. SEO

Field slug, penulis, tanggal terbit, dan estimasi waktu baca tetap di sidebar. Penulis langsung mengetik di satu kanvas editor. Gambar inline dipilih atau dibuat melalui koleksi Payload `media`; URL gambar manual tidak ditambahkan.

## Model Data dan Migrasi

Format lama tersimpan pada tabel anak Payload (`artikel_blocks_*` dan `_artikel_v_blocks_*`), bukan dalam kolom JSONB pada tabel induk. Format baru menambahkan kolom JSONB `blok` pada `artikel` dan `version_blok` pada `_artikel_v`, masing-masing berisi `SerializedEditorState` Lexical.

Konversi deterministik:

- `paragraf` → node `paragraph` dengan text child.
- `judul-bagian` level 2/3/4 → node `heading` bertag `h2`/`h3`/`h4`.
- `daftar` → node `list` ordered/bullet dengan satu `listitem` per item.

Migrasi berjalan dalam satu transaksi PostgreSQL: tambah kolom JSONB baru, susun node berdasarkan `_order` dari seluruh tabel blocks utama dan versions, validasi hasil dan jumlah parent, lalu hapus tabel blocks serta enum yang sudah tidak dipakai. Nilai kosong menjadi root Lexical kosong yang valid. Tipe blok yang tidak dikenal menyebabkan migrasi gagal dengan ID dokumen pada pesan error; tidak ada data yang dilewati diam-diam. Migrasi `down` membuat kembali tabel blocks dan mengonversi paragraph, heading, serta list. Jika dokumen sudah mengandung node baru yang tidak dapat direpresentasikan—termasuk upload inline—`down` harus berhenti sebelum mengubah schema agar tidak membuang konten.

Setelah migrasi, generate ulang `payload-types.ts` dan import map. Kode companion serta registrasinya dihapus.

## Pembacaan dan Render Publik

`ambilArtikelDetail` mengembalikan state Lexical beserta tag dan penulis. Halaman artikel merender state menggunakan `RichText` dari `@payloadcms/richtext-lexical/react` dengan class styling yang mempertahankan tipografi artikel saat ini.

Upload node memakai converter gambar yang mengambil URL media melalui helper `mediaUrlRelatif`; alt text berasal dari record media. Renderer tidak memakai `dangerouslySetInnerHTML`.

Ekstraktor daftar isi menelusuri root Lexical, memilih heading H2/H3, mengambil plain text, membuat slug unik stabil, lalu converter heading menggunakan ID yang sama. Heading H4 tetap dirender tetapi tidak masuk daftar isi agar sidebar tetap ringkas.

Fallback statis di `src/data/artikel-detail.ts` dikonversi melalui helper yang sama menjadi state Lexical. Tidak ada jalur render blocks lama setelah cutover.

## RAG dan Seed

Seed mengubah struktur `BlokIsi` statis menjadi state Lexical sebelum create/update artikel. RAG text extractor menelusuri node Lexical secara rekursif dan menggabungkan text dari paragraph, heading, list item, quote, link, serta caption gambar bila ada. Metadata judul, slug, dan ringkasan tetap diproses seperti sekarang.

Hook indexing dan reindex route menerima tipe artikel hasil generate baru; cast format blocks lama dihapus.

## Error Handling dan Integritas

- Field Isi Artikel tetap wajib di Payload.
- Migrasi berjalan transaksional dan berhenti pada data tak dikenal.
- Renderer mengabaikan node Lexical kosong, tetapi tidak menampilkan kembali konten fallback bila CMS berhasil mengembalikan artikel kosong.
- Upload yang relasinya tidak lagi tersedia tidak merusak halaman; node dilewati dan error server dicatat.
- Akses collection, draft/publish, hooks revalidation, dan optimistic behavior Payload tidak berubah.

## Berkas Utama yang Berubah

- `src/collections/Articles.ts`
- `src/components/admin/artikel/ArtikelCompanion.tsx` (hapus)
- `src/app/(payload)/admin/importMap.js`
- `src/cms/konten.ts`
- `src/components/sections/BadanArtikel.tsx`
- `src/lib/artikel/toc.ts`
- `src/rag/text-extractor.ts`
- `src/rag/article-indexing.ts`
- `src/rag/hooks.ts`
- `src/seed/index.ts`
- `src/data/artikel-detail.ts`
- `src/migrations/20261024_artikel_lexical.ts`
- `src/migrations/index.ts`
- `src/payload-types.ts`
- test unit/integrasi terkait artikel, TOC, migration, dan RAG
- `README.md`

## Verifikasi

1. Regression test migrasi membuktikan paragraph, heading, ordered/unordered list, dokumen kosong, dan rollback.
2. Unit test ekstraksi plain text dan heading Lexical.
3. Typecheck dan test suite lulus.
4. Build produksi lulus.
5. Browser admin membuktikan create/edit draft dengan toolbar dan gambar Media.
6. Browser publik membuktikan paragraf, heading, daftar, gambar, alt text, serta daftar isi dan anchor.
7. Smoke RAG membuktikan isi Lexical dapat dicari setelah reindex.
8. Data produksi dibandingkan sebelum/sesudah migrasi berdasarkan jumlah artikel dan plain text hasil ekstraksi.

## Di Luar Cakupan

- Menyalin UI atau kode editor custom `websiteel`.
- AI writing assistant, skor SEO, template artikel, atau generator isi.
- Mengubah desain halaman artikel selain penyesuaian yang diperlukan untuk render Lexical.
- Mengubah collection, izin, atau workflow publish lain.
