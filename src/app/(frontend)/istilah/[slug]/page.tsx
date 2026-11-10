import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { connection } from "next/server";

import { Buku, Dokumen, PanahKanan, PanahKiri, Perisai, Rumah, WhatsApp } from "@/components/ikon";
import { CTA } from "@/components/sections/CTA";
import { ambilDetailIstilah } from "@/cms/konten";
import { cariIstilah, cariIstilahTerkait, daftarIstilah } from "@/data/istilah";
import { tautanKonsultasiWhatsApp } from "@/features/whatsapp/config";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://easytax.id").replace(/\/+$/, "");
const ABJAD = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const term = await ambilDetailIstilah(slug);
  if (!term) notFound();
  const title = `${term.title} | Kamus Istilah EasyTax`;
  const description = term.excerpt;
  const canonical = `/istilah/${encodeURIComponent(term.slug)}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "article",
      locale: "id_ID",
      siteName: "EasyTax",
      url: canonical,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function HalamanDetailIstilah({ params }: { params: Params }) {
  return (
    <Suspense fallback={<div className="min-h-[70vh] bg-navy-900" aria-busy="true" />}>
      <IsiDetailIstilah params={params} />
    </Suspense>
  );
}

function renderFormattedContent(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const nodes: React.ReactNode[] = [];
  let currentList: string[] = [];
  let isOrdered = false;

  const flushList = () => {
    if (currentList.length === 0) return;
    if (isOrdered) {
      nodes.push(
        <ol key={nodes.length} className="my-4 ml-6 list-decimal space-y-2 text-[0.95rem] leading-relaxed text-navy-900/90">
          {currentList.map((item, idx) => (
            <li key={idx}>{renderInlineMarkup(item)}</li>
          ))}
        </ol>,
      );
    } else {
      nodes.push(
        <ul key={nodes.length} className="my-4 ml-6 list-disc space-y-2 text-[0.95rem] leading-relaxed text-navy-900/90">
          {currentList.map((item, idx) => (
            <li key={idx}>{renderInlineMarkup(item)}</li>
          ))}
        </ul>,
      );
    }
    currentList = [];
    isOrdered = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]!;
    const line = raw.trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      nodes.push(
        <h3 key={nodes.length} className="mt-8 mb-3 font-heading text-lg font-bold text-navy-900">
          {renderInlineMarkup(line.slice(4))}
        </h3>,
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      nodes.push(
        <h2 key={nodes.length} className="mt-10 mb-4 border-b border-garis pb-2 font-heading text-xl font-bold text-navy-900 sm:text-2xl">
          {renderInlineMarkup(line.slice(3))}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("# ")) {
      flushList();
      nodes.push(
        <h2 key={nodes.length} className="mt-10 mb-4 border-b border-garis pb-2 font-heading text-2xl font-bold text-navy-900">
          {renderInlineMarkup(line.slice(2))}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (isOrdered && currentList.length > 0) flushList();
      isOrdered = false;
      currentList.push(line.slice(2));
      continue;
    }

    const orderMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (orderMatch) {
      if (!isOrdered && currentList.length > 0) flushList();
      isOrdered = true;
      currentList.push(orderMatch[2]!);
      continue;
    }

    flushList();
    nodes.push(
      <p key={nodes.length} className="mb-4 text-[0.96rem] leading-relaxed text-navy-900/90">
        {renderInlineMarkup(line)}
      </p>,
    );
  }

  flushList();
  return nodes;
}

function renderInlineMarkup(text: string): React.ReactNode {
  // Replace HTML bold tags with standard markdown bold syntax if present
  const cleaned = text.replace(/<\/?b>/gi, "**").replace(/<\/?strong>/gi, "**");
  const parts = cleaned.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-extrabold text-navy-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

async function IsiDetailIstilah({ params }: { params: Params }) {
  await connection();
  const { slug } = await params;
  const term = await ambilDetailIstilah(slug);
  if (!term) notFound();
  const related = cariIstilahTerkait(term.slug, term.category, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.title,
    description: term.excerpt,
    url: `${SITE_URL}/istilah/${term.slug}`,
    inDefinedTermSet: `${SITE_URL}/istilah`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: term.title,
        item: `${SITE_URL}/istilah/${term.slug}`,
      },
    ],
  };

  const pesanWa = `Halo EasyTax, saya ingin konsultasi mengenai ${term.title}.`;
  const urlWa = tautanKonsultasiWhatsApp(pesanWa, `istilah-${term.slug}`, "umum");

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

      {/* HEADER SECTION */}
      <section className="border-b border-garis bg-navy-900 py-12 text-white md:py-16">
        <div className="mx-auto w-full max-w-maks px-6 md:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-[0.88rem] text-teks-terang"
          >
            <Link href="/" className="flex items-center gap-1.5 no-underline hover:text-yellow-400">
              <Rumah className="h-3.5 w-3.5 text-yellow-500" />
              <span>Beranda</span>
            </Link>
            <span aria-hidden="true">&gt;</span>
            <Link href="/istilah" className="no-underline hover:text-yellow-400">
              <span>Kamus Istilah</span>
            </Link>
            <span aria-hidden="true">&gt;</span>
            <span className="font-bold text-yellow-500 truncate max-w-[320px] sm:max-w-none">
              {term.title}
            </span>
          </nav>

          <div className="max-w-3xl">
            {/* BADGES */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-block rounded-full bg-yellow-500 px-3.5 py-1 text-xs font-extrabold tracking-wide text-navy-900 uppercase">
                {term.category}
              </span>

              {term.shortTitle && term.shortTitle !== term.title && (
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  Singkatan: <strong>{term.shortTitle}</strong>
                </span>
              )}

              {term.dasarHukum && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <Perisai className="h-3 w-3 text-emerald-400" />
                  <span>{term.dasarHukum}</span>
                </span>
              )}
            </div>

            {/* TITLE */}
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {term.title}
            </h1>

            {/* DEFINISI RINGKAS CALLOUT */}
            <div className="mt-8 rounded-2xl border-l-4 border-yellow-500 border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xs">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-yellow-400 uppercase">
                <Buku className="h-4 w-4" />
                <span>Definisi Ringkas</span>
              </div>
              <p className="text-base font-medium leading-relaxed text-white/95 sm:text-lg">
                {term.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT & SIDEBAR */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-maks px-6 md:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* MAIN ARTICLE COLUMN */}
            <article className="lg:col-span-8">
              <div className="rounded-3xl border border-garis bg-white p-6 sm:p-10 shadow-xs">
                <div className="prose prose-slate max-w-none text-navy-900">
                  {renderFormattedContent(term.content)}
                </div>

                {/* BOTTOM HELPER NOTICE */}
                <div className="mt-10 border-t border-garis-halus pt-6 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href="/istilah"
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 transition hover:text-yellow-600 no-underline"
                  >
                    <PanahKiri className="h-4 w-4" />
                    <span>Kembali ke Kamus Istilah</span>
                  </Link>

                  <span className="text-xs text-teks-redup">
                    Ditinjau oleh Konsultan Pajak EasyTax
                  </span>
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">
              {/* WHATSAPP CONSULTATION CARD */}
              <div className="rounded-2xl border-2 border-yellow-500/40 bg-gradient-to-br from-white to-amber-50/50 p-6 shadow-sm">
                <span className="inline-block rounded-md bg-yellow-500 px-2.5 py-1 text-[11px] font-extrabold tracking-wider text-navy-900 uppercase">
                  Konsultasi Pajak
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  Butuh Bantuan Perpajakan?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-teks-sekunder">
                  Bingung perhitungan, pelaporan SPT, atau pengurusan PKP terkait <strong>{term.shortTitle || term.title}</strong>? Tim konsultan EasyTax siap mendampingi Anda.
                </p>
                <div className="mt-5">
                  <a
                    href={urlWa}
                    target="_self"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-3 text-xs font-bold text-navy-900 shadow-sm transition hover:bg-yellow-400 no-underline"
                  >
                    <WhatsApp className="h-4 w-4" />
                    <span>Konsultasi Gratis via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* ISTILAH TERKAIT */}
              {related.length > 0 && (
                <div className="rounded-2xl border border-garis bg-netral-lat p-6 shadow-xs">
                  <div className="mb-4 flex items-center gap-2">
                    <Dokumen className="h-4 w-4 text-navy-900" />
                    <h3 className="font-heading text-sm font-bold text-navy-900 uppercase tracking-wider">
                      Istilah Terkait
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/istilah/${item.slug}`}
                          className="group block rounded-xl border border-garis bg-white p-3.5 shadow-xs transition hover:border-yellow-500 hover:shadow-xs no-underline"
                        >
                          <span className="block font-heading text-xs font-bold text-navy-900 group-hover:text-yellow-600 line-clamp-1">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-[11px] text-teks-sekunder line-clamp-2">
                            {item.excerpt}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* QUICK ALPHABET JUMP */}
              <div className="rounded-2xl border border-garis bg-white p-6 shadow-xs">
                <h3 className="mb-3 font-heading text-xs font-bold tracking-wider text-teks-redup uppercase">
                  Jelajahi Abjad Lain (A - Z)
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {ABJAD.map((huruf) => (
                    <Link
                      key={huruf}
                      href={`/istilah?letter=${huruf}`}
                      className="flex h-7 w-7 items-center justify-center rounded-md border border-garis bg-netral-lat text-xs font-bold text-navy-900/80 transition hover:bg-yellow-500 hover:text-navy-900 no-underline"
                    >
                      {huruf}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
