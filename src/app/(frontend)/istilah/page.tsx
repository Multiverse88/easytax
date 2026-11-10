import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";

import { Cari, PanahKanan, PanahKiri, Rumah, Buku, Perisai, Medali, Centang } from "@/components/ikon";
import { CTA } from "@/components/sections/CTA";
import {
  DAFTAR_KATEGORI_ISTILAH,
  filterIstilah,
  type KategoriIstilah,
} from "@/data/istilah";
import { ambilDaftarIstilah } from "@/cms/konten";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://easytax.id").replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Kamus Istilah Pajak & Akuntansi Bisnis | EasyTax",
  description:
    "Kamus istilah perpajakan, pelaporan SPT, PKP, akuntansi, dan regulasi finansial dari EasyTax. Penjelasan ringkas, akurat, dan mudah dipahami untuk pelaku usaha di Indonesia.",
  alternates: { canonical: "/istilah" },
  openGraph: {
    title: "Kamus Istilah Pajak & Akuntansi Bisnis | EasyTax",
    description:
      "Panduan ensiklopedia istilah perpajakan, SPT, PKP, dan pembukuan akuntansi bisnis di Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "EasyTax",
    url: "/istilah",
  },
};

const ABJAD = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function bangunUrlFilter(opts: {
  q?: string;
  category?: string;
  letter?: string;
  page?: number;
}): string {
  const p = new URLSearchParams();
  if (opts.q) p.set("q", opts.q);
  if (opts.category && opts.category !== "Semua") p.set("category", opts.category);
  if (opts.letter && opts.letter !== "ALL") p.set("letter", opts.letter);
  if (opts.page && opts.page > 1) p.set("page", String(opts.page));
  const qs = p.toString();
  return qs ? `/istilah?${qs}` : "/istilah";
}

type SearchParams = Promise<{
  q?: string;
  category?: string;
  letter?: string;
  page?: string;
}>;

export default function HalamanIstilah({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-white" aria-busy="true" />}>
      <IsiHalamanIstilah searchParams={searchParams} />
    </Suspense>
  );
}

async function IsiHalamanIstilah({ searchParams }: { searchParams: SearchParams }) {
  await connection();
  const params = await searchParams;
  const q = params.q?.trim() || "";
  const kategoriAktif = (params.category || "Semua") as KategoriIstilah;
  const abjadAktif = (params.letter || "ALL").toUpperCase();
  const page = Math.max(1, parseInt(params.page || "1", 10) || 1);
  const allTerms = await ambilDaftarIstilah();
  const { data: terms, meta } = filterIstilah({
    q,
    category: kategoriAktif,
    letter: abjadAktif,
    page,
    limit: 24,
    source: allTerms,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Kamus Istilah Pajak & Akuntansi EasyTax",
    description:
      "Ensiklopedia istilah perpajakan, pelaporan SPT, PKP, dan akuntansi bisnis Indonesia.",
    url: `${SITE_URL}/istilah`,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.title,
      description: t.excerpt,
      url: `${SITE_URL}/istilah/${t.slug}`,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kamus Istilah",
        item: `${SITE_URL}/istilah`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* HERO SECTION */}
      <section className="border-b border-garis bg-navy-900 py-12 text-white md:py-16">
        <div className="mx-auto w-full max-w-maks px-6 md:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-2 text-[0.88rem] text-teks-terang"
          >
            <Link href="/" className="flex items-center gap-1.5 no-underline hover:text-yellow-400">
              <Rumah className="h-3.5 w-3.5 text-yellow-500" />
              <span>Beranda</span>
            </Link>
            <span aria-hidden="true">&gt;</span>
            <span className="font-bold text-yellow-500">Kamus Istilah</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/50 bg-yellow-500/15 px-4 py-1.5 text-xs font-bold tracking-wider text-yellow-400 uppercase">
              <Buku className="h-3.5 w-3.5" />
              <span>Glosarium Pajak &amp; Akuntansi</span>
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
              Kamus Istilah Pajak &amp; Akuntansi
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Panduan ensiklopedia praktis untuk memahami istilah perpajakan, pelaporan SPT, PKP, akuntansi bisnis, dan regulasi finansial di Indonesia secara mudah dan tepat.
            </p>

            {/* STRIP FITUR */}
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Medali className="h-4 w-4 text-yellow-500" />
                <span>70+ Istilah Terkurasi</span>
              </div>
              <div className="flex items-center gap-2">
                <Perisai className="h-4 w-4 text-emerald-400" />
                <span>Rujukan Regulasi DJP &amp; UU KUP</span>
              </div>
              <div className="flex items-center gap-2">
                <Centang className="h-4 w-4 text-yellow-400" />
                <span>Ditinjau Tim Konsultan EasyTax</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTERS SECTION */}
      <section className="bg-netral-lat py-10 md:py-14">
        <div className="mx-auto w-full max-w-maks px-6 md:px-8">
          {/* SEARCH BAR */}
          <div className="mx-auto mb-8 max-w-3xl">
            <form action="/istilah" method="get" className="relative flex items-center">
              {kategoriAktif !== "Semua" && (
                <input type="hidden" name="category" value={kategoriAktif} />
              )}
              {abjadAktif !== "ALL" && (
                <input type="hidden" name="letter" value={abjadAktif} />
              )}
              <Cari className="pointer-events-none absolute left-4 h-5 w-5 text-teks-redup md:left-5" />
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Cari istilah pajak (misal: PPh 21, PPN, PKP, SPT, Faktur Pajak)..."
                className="w-full rounded-2xl border border-garis bg-white py-3.5 pr-28 pl-12 text-sm font-medium text-navy-900 shadow-sm placeholder:text-teks-redup focus:border-navy-900 focus:ring-4 focus:ring-yellow-500/20 focus:outline-none md:py-4 md:pr-32 md:pl-14 md:text-base"
              />
              <button
                type="submit"
                className="absolute right-2 rounded-xl bg-yellow-500 px-5 py-2 text-xs font-bold text-navy-900 shadow-sm transition-colors hover:bg-yellow-400 md:px-6 md:py-2.5 md:text-sm"
              >
                Cari
              </button>
            </form>
          </div>

          {/* KATEGORI CHIPS */}
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wider text-teks-redup uppercase">
                Filter Kategori
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {DAFTAR_KATEGORI_ISTILAH.map((cat) => {
                const isActive = kategoriAktif === cat;
                const href = bangunUrlFilter({
                  q,
                  category: cat,
                  letter: abjadAktif,
                });
                return (
                  <Link
                    key={cat}
                    href={href}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all no-underline ${
                      isActive
                        ? "bg-navy-900 text-white shadow-sm"
                        : "border border-garis bg-white text-navy-900 hover:border-navy-900 hover:bg-white"
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ALPHABETICAL BAR (A-Z) */}
          <div className="mb-10">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold tracking-wider text-teks-redup uppercase">
                Indeks Abjad (A - Z)
              </span>
              {(abjadAktif !== "ALL" || kategoriAktif !== "Semua" || q) && (
                <Link
                  href="/istilah"
                  className="text-xs font-bold text-yellow-600 underline hover:text-yellow-700"
                >
                  Reset Semua Filter
                </Link>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-garis bg-white p-2.5 shadow-xs">
              <Link
                href={bangunUrlFilter({ q, category: kategoriAktif, letter: "ALL" })}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors no-underline ${
                  abjadAktif === "ALL"
                    ? "bg-yellow-500 text-navy-900"
                    : "text-navy-900/80 hover:bg-netral-lat"
                }`}
              >
                Semua
              </Link>
              {ABJAD.map((huruf) => {
                const isSelected = abjadAktif === huruf;
                const href = bangunUrlFilter({
                  q,
                  category: kategoriAktif,
                  letter: huruf,
                });
                return (
                  <Link
                    key={huruf}
                    href={href}
                    className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition-colors no-underline ${
                      isSelected
                        ? "bg-yellow-500 text-navy-900"
                        : "text-navy-900/80 hover:bg-netral-lat hover:text-navy-900"
                    }`}
                  >
                    {huruf}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RESULT HEADER */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-garis pb-4">
            <div className="text-sm font-semibold text-navy-900">
              {q ? (
                <span>
                  Hasil pencarian untuk <strong className="text-yellow-600">&quot;{q}&quot;</strong>
                  {kategoriAktif !== "Semua" && ` dalam kategori ${kategoriAktif}`}
                  {abjadAktif !== "ALL" && ` | Abjad: ${abjadAktif}`}
                </span>
              ) : (
                <span>
                  {kategoriAktif !== "Semua" ? (
                    <>
                      Kategori: <strong className="text-navy-900">{kategoriAktif}</strong>
                    </>
                  ) : (
                    "Daftar Istilah Perpajakan &amp; Akuntansi"
                  )}
                  {abjadAktif !== "ALL" && (
                    <span className="ml-2 font-bold text-yellow-600">(Abjad: {abjadAktif})</span>
                  )}
                </span>
              )}
            </div>
            <span className="text-xs font-semibold text-teks-redup">
              Menampilkan {terms.length} dari {meta.total} istilah
            </span>
          </div>

          {/* GRID KARTU ISTILAH */}
          {terms.length === 0 ? (
            <div className="mx-auto my-12 max-w-lg rounded-3xl border border-dashed border-garis bg-white p-10 text-center shadow-xs">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/15 text-navy-900">
                <Buku className="h-7 w-7 text-navy-900" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">
                Istilah tidak ditemukan
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-teks-sekunder">
                {q
                  ? `Tidak ada istilah yang cocok dengan kata kunci "${q}". Coba kata kunci lain atau reset filter.`
                  : "Belum ada istilah yang terdaftar pada kategori atau abjad ini."}
              </p>
              <Link
                href="/istilah"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-navy-800 no-underline"
              >
                Reset Filter
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {terms.map((item) => {
                const hurufAwal = (item.shortTitle || item.title).charAt(0).toUpperCase();

                return (
                  <Link
                    key={item.slug}
                    href={`/istilah/${item.slug}`}
                    className="group relative flex flex-col justify-between rounded-2xl border border-garis bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:shadow-md no-underline"
                  >
                    <div>
                      {/* TOP BADGE & AVATAR HURUF */}
                      <div className="mb-4 flex items-center justify-between gap-2">
                        <span className="inline-block rounded-full bg-yellow-500/15 px-3 py-1 text-[11px] font-bold text-navy-900">
                          {item.category}
                        </span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-garis bg-netral-lat text-xs font-extrabold text-navy-900 transition-colors group-hover:bg-yellow-500">
                          {hurufAwal}
                        </span>
                      </div>

                      {/* JUDUL ISTILAH */}
                      <h2 className="font-heading text-lg font-bold text-navy-900 transition-colors group-hover:text-yellow-600 line-clamp-2">
                        {item.title}
                      </h2>

                      {/* RINGKASAN */}
                      <p className="mt-2.5 text-sm leading-relaxed text-teks-sekunder line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* FOOTER LINK */}
                    <div className="mt-5 flex items-center gap-2 pt-4 border-t border-garis-halus text-xs font-bold text-navy-900 group-hover:text-yellow-600">
                      <span>Lihat penjelasan lengkap</span>
                      <PanahKanan className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* PAGINATION */}
          {meta.totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              {meta.page > 1 ? (
                <Link
                  href={bangunUrlFilter({
                    q,
                    category: kategoriAktif,
                    letter: abjadAktif,
                    page: meta.page - 1,
                  })}
                  className="flex h-10 items-center gap-1.5 rounded-xl border border-garis bg-white px-4 text-xs font-bold text-navy-900 transition hover:bg-netral-lat no-underline"
                >
                  <PanahKiri className="h-3.5 w-3.5" />
                  <span>Sebelumnya</span>
                </Link>
              ) : null}

              {Array.from({ length: meta.totalPages }, (_, i) => i + 1).map((p) => {
                const isCurrent = p === meta.page;
                return (
                  <Link
                    key={p}
                    href={bangunUrlFilter({
                      q,
                      category: kategoriAktif,
                      letter: abjadAktif,
                      page: p,
                    })}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold transition no-underline ${
                      isCurrent
                        ? "bg-navy-900 text-white shadow-xs"
                        : "border border-garis bg-white text-navy-900 hover:bg-netral-lat"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}

              {meta.page < meta.totalPages ? (
                <Link
                  href={bangunUrlFilter({
                    q,
                    category: kategoriAktif,
                    letter: abjadAktif,
                    page: meta.page + 1,
                  })}
                  className="flex h-10 items-center gap-1.5 rounded-xl border border-garis bg-white px-4 text-xs font-bold text-navy-900 transition hover:bg-netral-lat no-underline"
                >
                  <span>Berikutnya</span>
                  <PanahKanan className="h-3.5 w-3.5" />
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
