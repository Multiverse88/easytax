"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Menu, Tutup, Obrolan, PanahBawah, PanahKanan } from "@/components/ikon";
import { Tombol } from "@/components/ui/Tombol";
import { ConsultationButton } from "@/features/whatsapp/components/ConsultationButton";
import { cn } from "@/lib/cn";
import { logoMark } from "@/data/situs";
import type { LayananBeranda } from "@/data/layanan";
import type { ItemNavigasi } from "@/types";

/**
 * Navigasi utama: sticky, semi-transparan + blur, dengan drawer untuk mobile.
 *
 * Perilaku yang dibawa dari v1:
 *  - Header tetap (sticky top-0) dengan latar putih 95% + backdrop blur.
 *  - Link aktif dicetak kuning.
 *  - Tombol hamburger hanya muncul < 1024px.
 *
 * Perbaikan dari v1:
 *  - Drawer mobile bisa ditutup dengan Escape, bukan hanya dari klik link
 *    seperti di v1.
 *  - Scroll body dikunci saat drawer terbuka, jadi konten di belakang
 *    tidak ikut ter-scroll.
 *  - Logo memakai next/image, bukan <img> mentah.
 */
export function Navbar({
  nama,
  subjudul,
  whatsappUrl,
  menu,
  layanan,
}: {
  nama: string;
  subjudul: string;
  whatsappUrl: string;
  menu: ItemNavigasi[];
  layanan: LayananBeranda[];
}) {
  const pathname = usePathname();
  const [terbuka, setTerbuka] = useState(false);

  /* Tutup drawer setiap kali navigasi berpindah halaman. */
  useEffect(() => {
    setTerbuka(false);
  }, [pathname]);

  /* Kunci scroll + tutup drawer saat Escape ditekan. */
  useEffect(() => {
    if (!terbuka) return;

    const sebelumnyaOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const tutupDenganEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTerbuka(false);
    };
    document.addEventListener("keydown", tutupDenganEscape);

    return () => {
      document.body.style.overflow = sebelumnyaOverflow;
      document.removeEventListener("keydown", tutupDenganEscape);
    };
  }, [terbuka]);

  return (
    <header className="sticky top-0 z-1000 w-full border-b border-garis-halus bg-white shadow-[0_4px_20px_color-mix(in_srgb,var(--color-brand-navy)_5%,transparent)]">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex w-full max-w-maks items-center justify-between px-6 py-4"
      >
        {/* Brand — meniru `.easytax-brand-combo` easytax-demo: logo 48px
            dengan wordmark dan subjudul bertumpuk di sebelahnya. */}
        <Link
          href="/"
          aria-label={`${nama} — beranda`}
          className="flex items-center gap-3 no-underline"
        >
          <Image
            src={logoMark}
            alt={`Logo ${nama}`}
            width={48}
            height={48}
            priority
            className="h-12 w-12 shrink-0 object-contain transition-transform duration-300 hover:scale-105"
          />
          <span className="flex flex-col justify-center leading-tight">
            <span className="font-heading text-[1.75rem] font-extrabold tracking-[-0.02em] text-navy-900">
              {nama}
            </span>
            {/* Subjudul disembunyikan di layar sempit — kalau tidak ia membungkus
                baris dan mendorong tinggi header. */}
            <span className="hidden text-[0.74rem] font-bold tracking-[0.02em] text-navy-900 sm:block">
              {subjudul}
            </span>
          </span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => {
            const aktif =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.href === "/layanan") {
              return (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={aktif ? "page" : undefined}
                    className={cn(
                      "tautan-nav flex items-center gap-1.5 text-[0.95rem] transition-colors duration-300",
                      aktif
                        ? "font-extrabold text-navy-900"
                        : "font-semibold text-navy-900",
                    )}
                  >
                    {item.label}
                    <PanahBawah className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>

                  {/* Mega-menu: tampil saat li di-hover/focus, murni CSS tanpa state. */}
                  <div className="invisible absolute top-full left-1/2 z-10 w-[640px] -translate-x-1/2 translate-y-2 rounded-xl border border-garis bg-white opacity-0 shadow-xl transition-[var(--transition-base)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="grid grid-cols-2 gap-1 p-4">
                      {layanan.map((l) => (
                        <Link
                          key={l.slug}
                          href={`/layanan/${l.slug}`}
                          className="flex items-center gap-3 rounded-lg p-2.5 no-underline transition-colors hover:bg-netral-lat"
                        >
                          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-netral-lat">
                            <Image
                              src={l.gambar || "/images/placeholder-layanan.svg"}
                              alt=""
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-[0.88rem] font-bold text-navy-900">
                              {l.judul}
                            </span>
                            <span className="block truncate text-[0.78rem] text-teks-sekunder">
                              {l.subjudul}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/layanan"
                      className="flex items-center justify-center gap-2 border-t border-garis-halus px-4 py-3 text-[0.85rem] font-extrabold text-navy-900 no-underline transition-colors hover:text-yellow-600"
                    >
                      Lihat Semua Layanan
                      <PanahKanan className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={aktif ? "page" : undefined}
                  className={cn(
                    "tautan-nav text-[0.95rem] transition-colors duration-300",
                    aktif
                      ? "font-extrabold text-navy-900"
                      : "font-semibold text-navy-900",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Aksi kanan */}
        <div className="flex items-center gap-4">
          <ConsultationButton
            sumber="navbar"
            ukuran="kecil"
            ikonKiri={<Obrolan className="h-4 w-4" />}
            className="hidden lg:inline-flex"
          >
            Konsultasi Gratis
          </ConsultationButton>

          <button
            type="button"
            onClick={() => setTerbuka((v) => !v)}
            aria-label={terbuka ? "Tutup menu" : "Buka menu"}
            aria-expanded={terbuka}
            aria-controls="menu-mobile"
            className="-mr-2.5 cursor-pointer rounded-sm p-2.5 text-navy-900 transition-colors hover:bg-netral-lat lg:hidden"
          >
            {terbuka ? <Tutup className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Drawer mobile */}
      <div
        id="menu-mobile"
        hidden={!terbuka}
        className="border-t border-garis bg-white lg:hidden"
      >
        <ul className="flex flex-col px-6 py-2">
          {menu.map((item) => {
            const aktif =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.href === "/layanan") {
              return (
                <li
                  key={item.href}
                  className="border-b border-garis-halus last:border-b-0"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-[0.95rem] text-navy-900 marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className={aktif ? "font-extrabold" : "font-bold"}>
                        {item.label}
                      </span>
                      <PanahBawah className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <ul className="flex flex-col gap-1 pb-3.5">
                      {layanan.map((l) => (
                        <li key={l.slug}>
                          <Link
                            href={`/layanan/${l.slug}`}
                            className="block rounded-md px-3 py-2 text-[0.88rem] font-semibold text-teks-sekunder no-underline hover:bg-netral-lat hover:text-navy-900"
                          >
                            {l.judul}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={aktif ? "page" : undefined}
                  className={cn(
                    "block border-b border-garis-halus py-3.5 text-[0.95rem] text-navy-900 last:border-b-0",
                    aktif ? "bg-yellow-500/12 font-extrabold" : "font-bold",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-6 pt-2 pb-6">
          <ConsultationButton
            sumber="navbar-mobile"
            ukuran="besar"
            ikonKiri={<Obrolan className="h-5 w-5" />}
            className="w-full"
          >
            Konsultasi Gratis
          </ConsultationButton>
        </div>
      </div>
    </header>
  );
}