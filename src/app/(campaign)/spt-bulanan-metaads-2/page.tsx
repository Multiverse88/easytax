import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  CampaignCountdown,
  CampaignProvider,
  LeadForm,
  PricingAction,
} from "@/components/campaign/SptBulananCampaignClient";
import {
  Bintang,
  Centang,
  Dokumen,
  Jam,
  Kalkulator,
  Kunci,
  Obrolan,
  PanahKanan,
  Pengguna,
  Perisai,
} from "@/components/ikon";
import { cariDetailLayanan } from "@/data/layanan-detail";
import { logoMark } from "@/data/situs";
import { OPSI_OMZET } from "@/features/campaign/spt-bulanan-lead";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easytax.id";
const canonical = `${siteUrl}/spt-bulanan-metaads-2`;

export const metadata: Metadata = {
  title: "Gaji Staf Pajak Mahal? EasyTax Mulai Rp749.000/Bulan",
  description:
    "Laporan pajak dan keuangan badan mulai Rp749.000 per bulan. Didampingi konsultan, laporan rapi, dan sudah termasuk tax planning.",
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: canonical,
    siteName: "EasyTax",
    title: "Gaji Staf Pajak Mahal? EasyTax Mulai Rp749.000/Bulan",
    description:
      "Urus pajak dan keuangan PT tanpa biaya staf internal. Pilih paket sesuai omzet dan konsultasikan kebutuhan bisnis Anda.",
    images: [{ url: `${siteUrl}/images/external/photo-1586486855514-8c633cc6fd38.webp` }],
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.webp" },
};

const benefits = [
  {
    title: "Didampingi sampai beres",
    description: "Konsultan menangani proses dari pencatatan sampai seluruh laporan selesai.",
    icon: Pengguna,
  },
  {
    title: "Konsultasi bersama ahli",
    description: "Bahas kondisi usaha dan tax planning tanpa biaya konsultasi tambahan.",
    icon: Obrolan,
  },
  {
    title: "Tepat waktu setiap bulan",
    description: "Jadwal pelaporan dipantau supaya kewajiban tidak terlewat dan memicu denda.",
    icon: Jam,
  },
  {
    title: "Data bisnis terlindungi",
    description: "Dokumen ditangani tim berwenang dengan proses kerja yang terkontrol.",
    icon: Kunci,
  },
  {
    title: "Pembukuan ikut rapi",
    description: "Neraca, laba rugi, dan rekonsiliasi disusun sesuai kebutuhan paket.",
    icon: Dokumen,
  },
  {
    title: "Biaya sesuai omzet",
    description: "Mulai Rp749 ribu per bulan, tanpa gaji, tunjangan, BPJS, dan biaya rekrutmen.",
    icon: Kalkulator,
  },
];

const testimonials = [
  {
    quote: "Tahun selanjutnya akan pakai jasa EasyTax kembali.",
    detail: "Pelaporan SPT tahunan badan CV kami selesai dengan baik.",
    name: "Mia Nurhamidah",
  },
  {
    quote: "Sudah membantu banget sore ini.",
    detail: "Respons tim cepat saat kami perlu bantuan pelaporan.",
    name: "Kentang Kukus",
  },
  {
    quote: "Saya akan langganan terus. Amanah tim EasyTax.",
    detail: "Pendampingan perpajakannya jelas dan menenangkan.",
    name: "Fathin Kifayati Syahidah",
  },
];

const faqs = [
  {
    question: "Bedanya dengan staf admin atau freelancer apa?",
    answer:
      "Staf atau freelancer umumnya hanya menangani pelaporan tertentu. EasyTax menyusun laporan keuangan, mengurus SPT bulanan, dan mendampingi konsultasi serta tax planning sesuai paket, tanpa biaya gaji dan tunjangan staf internal.",
  },
  {
    question: "Wajib lapor tahunan saja atau bulanan juga?",
    answer:
      "Kewajiban pajak badan mencakup pelaporan tahunan dan kewajiban bulanan yang relevan, seperti PPh Pasal 21, PPh Pasal 23, PPh Final, atau PPN. Tim EasyTax memetakan kewajiban berdasarkan transaksi perusahaan Anda.",
  },
  {
    question: "Kalau sudah punya omzet, apakah wajib lapor pajak?",
    answer:
      "Omzet dan transaksi usaha perlu dicatat serta dilaporkan sesuai status dan kewajiban perpajakan badan. Konsultasi awal dipakai untuk memeriksa kewajiban yang benar sebelum pekerjaan dimulai.",
  },
  {
    question: "Paket mana untuk laporan ke pemegang saham?",
    answer:
      "Pilih paket laporan perpajakan dan keuangan badan sesuai omzet perusahaan. Paket mencakup laporan keuangan yang dapat dipakai sebagai bahan laporan rutin kepada pemegang saham.",
  },
  {
    question: "Apa saja yang perlu disiapkan?",
    answer:
      "Umumnya tim memerlukan identitas badan, dokumen pajak, mutasi rekening, bukti transaksi, dan data penjualan atau biaya. Daftar final disesuaikan setelah konsultasi awal.",
  },
];

const detail = cariDetailLayanan("laporan-perpajakan-keuangan");
if (!detail) throw new Error("Data paket laporan perpajakan tidak tersedia");

const hargaNormal = [
  "Rp1.498.000",
  "Rp1.998.000",
  "Rp2.998.000",
  "Rp3.998.000",
  "Rp4.998.000",
] as const;

const packages = detail.paket.map((paket, index) => ({
  ...paket,
  omzet: OPSI_OMZET[index],
  normal: hargaNormal[index],
}));

export default function SptBulananMetaAdsPage() {
  return (
    <CampaignProvider>
      <main id="konten-utama" className="overflow-hidden bg-white">
        <div className="bg-yellow-500 px-4 py-2 text-center text-sm font-bold text-navy-900">
          Promo laporan pajak badan. Harga khusus konsultasi hari ini.
        </div>

        <header className="border-b border-garis-halus bg-white/95 backdrop-blur">
          <div className="mx-auto flex h-18 max-w-[var(--container-maks)] items-center justify-between px-5 sm:px-8">
            <Link href="/" aria-label="EasyTax, kembali ke beranda" className="flex items-center gap-3">
              <Image src={logoMark} alt="" width={46} height={30} className="h-8 w-auto" priority />
              <span className="font-heading text-xl font-black tracking-tight">EasyTax</span>
            </Link>
            <a
              href="#konsultasi"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 font-heading text-sm font-bold text-white transition hover:-translate-y-0.5 active:translate-y-0"
            >
              Konsultasi gratis <PanahKanan className="hidden size-4 sm:block" />
            </a>
          </div>
        </header>

        <section className="relative bg-netral-lat">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_16%,rgba(244,201,34,0.22),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(21,34,105,0.10),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-[var(--container-maks)] gap-8 px-5 pb-18 pt-12 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.72fr)] lg:gap-x-10 lg:py-16">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-yellow-500 pl-3 font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-navy-900">
                Tax Festival, diskon hingga 50%
              </p>
              <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.6rem,5.8vw,5.7rem)] font-black leading-[0.96] tracking-[-0.055em] text-navy-900">
                Laporan beres tanpa gaji staf Rp3–6 juta.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-teks-sekunder sm:text-xl">
                EasyTax menangani pajak dan keuangan PT mulai Rp749 ribu per bulan. Anda tetap fokus mengembangkan bisnis.
              </p>
            </div>

            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
              <LeadForm />
            </div>

            <div className="lg:col-start-1 lg:row-start-2">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Dipercaya 900+ klien",
                  "Unlimited chat WhatsApp",
                  "Paket untuk omzet 0 sampai 2,5 M+",
                  "Free SPT Tahunan untuk paket 12 bulan",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold text-navy-900">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-yellow-500"><Centang className="size-4" /></span>
                    {item}
                  </div>
                ))}
              </div>

              <figure className="relative mt-9 max-w-xl overflow-hidden rounded-3xl">
                <Image
                  src="/images/external/photo-1586486855514-8c633cc6fd38.webp"
                  alt="Dokumen pajak dan kalkulator untuk penyusunan laporan perusahaan"
                  width={1200}
                  height={800}
                  className="aspect-[16/7] w-full object-cover"
                  priority
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/92 px-4 py-3 text-sm font-semibold text-navy-900 shadow-lg backdrop-blur">
                  Laporan bulanan, pembukuan, dan konsultasi dalam satu tim.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section aria-label="Testimoni klien" className="border-y border-garis bg-white py-10">
          <div className="mx-auto grid max-w-[var(--container-maks)] gap-5 px-5 sm:px-8 lg:grid-cols-[0.7fr_1fr_1fr]">
            <div className="flex flex-col justify-center">
              <div className="flex gap-1 text-yellow-500" aria-label="Rating 5 dari 5">
                {Array.from({ length: 5 }, (_, index) => <Bintang key={index} className="size-5 fill-current" />)}
              </div>
              <p className="mt-2 font-heading text-2xl font-black">5.0 dari klien EasyTax</p>
            </div>
            {testimonials.slice(0, 2).map((testimonial) => (
              <figure key={testimonial.name} className="border-l-2 border-yellow-500 pl-5">
                <blockquote className="font-heading text-lg font-bold leading-7">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-2 text-sm leading-6 text-teks-sekunder">
                  {testimonial.detail} <strong className="text-navy-900">{testimonial.name}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-[var(--container-maks)] px-5 sm:px-8">
            <div className="max-w-3xl">
              <h2 className="text-balance font-heading text-4xl font-black tracking-tight sm:text-6xl">Biaya hemat. Proses tenang.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-teks-sekunder">Mulai dari pencatatan sampai pelaporan, tim kami menjaga kewajiban bisnis tertangani dengan rapi.</p>
            </div>
            <div className="mt-12 grid border-t border-garis sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ title, description, icon: Icon }, index) => (
                <article key={title} className="group border-b border-garis px-0 py-8 sm:px-7 sm:first:pl-0 lg:[&:nth-child(3n+1)]:pl-0">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-netral-alt text-navy-900 transition group-hover:bg-yellow-500"><Icon className="size-6" /></span>
                    <span className="font-heading text-sm font-bold tabular-nums text-teks-redup">0{index + 1}</span>
                  </div>
                  <h3 className="font-heading text-xl font-extrabold">{title}</h3>
                  <p className="mt-2 max-w-sm leading-7 text-teks-sekunder">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-netral-lat py-20 sm:py-28">
          <div className="mx-auto max-w-[var(--container-maks)] px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance font-heading text-4xl font-black tracking-tight sm:text-6xl">Lebih hemat daripada merekrut satu staf.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-teks-sekunder">Biaya transparan mengikuti omzet, tanpa pengeluaran rekrutmen dan tunjangan bulanan.</p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-garis bg-white p-7 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-teks-redup">Staf pajak dan accounting</p>
                <p className="mt-4 font-heading text-4xl font-black text-teks-sekunder line-through">Rp3–6 juta</p>
                <p className="mt-1 text-sm text-teks-redup">per bulan, belum termasuk tunjangan</p>
                <ul className="mt-8 grid gap-4 text-teks-sekunder">
                  {["BPJS, THR, dan biaya rekrutmen", "Training ulang saat staf resign", "Keahlian tax planning belum tentu tersedia"].map((item) => (
                    <li key={item} className="flex gap-3"><span aria-hidden="true" className="font-black text-red-accent">×</span>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="relative overflow-hidden rounded-3xl bg-navy-900 p-7 text-white shadow-xl sm:p-9">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-yellow-500/20" />
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/70">EasyTax</p>
                <p className="mt-4 font-heading text-4xl font-black text-yellow-500">Mulai Rp749 ribu</p>
                <p className="mt-1 text-sm text-white/70">per bulan, harga all-in</p>
                <ul className="mt-8 grid gap-4">
                  {["Personal tax assistant", "SPT bulanan dan laporan keuangan", "Konsultasi serta tax planning"].map((item) => (
                    <li key={item} className="flex gap-3"><Centang className="mt-0.5 size-5 shrink-0 text-yellow-500" />{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="paket" className="py-20 sm:py-28">
          <div className="mx-auto max-w-[var(--container-maks)] px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance font-heading text-4xl font-black tracking-tight sm:text-6xl">Pilih paket sesuai omzet Anda.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-teks-sekunder">Semua paket mencakup pelaporan rutin, pembukuan, dan pendampingan konsultan.</p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-garis bg-white shadow-lg">
              <div className="hidden grid-cols-[1fr_0.65fr_auto] gap-6 bg-navy-900 px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white lg:grid">
                <span>Omzet per tahun</span><span>Harga per bulan</span><span>Aksi</span>
              </div>
              {packages.map((paket, index) => {
                if (!paket.omzet) return null;
                const highlighted = index === 2;
                return (
                  <article key={paket.nama} className={`grid gap-5 border-b border-garis px-5 py-6 last:border-b-0 lg:grid-cols-[1fr_0.65fr_auto] lg:items-center lg:px-7 ${highlighted ? "bg-yellow-500/10" : "bg-white"}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-heading text-lg font-extrabold">{paket.nama}</h3>
                        {highlighted ? <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-black uppercase tracking-[0.08em]">Paling diminati</span> : null}
                      </div>
                      <p className="mt-1 max-w-xl text-sm leading-6 text-teks-sekunder">{paket.deskripsi}</p>
                    </div>
                    <div>
                      {paket.normal ? <del className="block text-sm font-semibold text-teks-redup">{paket.normal}</del> : null}
                      <strong className="font-heading text-2xl font-black">{paket.harga}</strong>
                      <span className="ml-1 text-sm text-teks-sekunder">{paket.satuan}</span>
                    </div>
                    <PricingAction omzet={paket.omzet} />
                  </article>
                );
              })}
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-6 rounded-3xl bg-netral-alt p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="font-heading text-2xl font-black">Sudah termasuk layanan utama</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {["SPT Bulanan PPh dan PPN", "Neraca dan laporan laba rugi", "Konsultasi perpajakan", "Free SPT Tahunan untuk paket 12 bulan"].map((item) => (
                    <p key={item} className="flex gap-2 text-sm font-semibold"><Centang className="size-5 shrink-0 text-emerald-accent" />{item}</p>
                  ))}
                </div>
              </div>
              <a href="#konsultasi" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 font-heading font-extrabold text-navy-900 transition hover:-translate-y-0.5 active:translate-y-0">
                Minta penawaran <PanahKanan className="size-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-netral-lat py-20 sm:py-28">
          <div className="mx-auto grid max-w-[var(--container-maks)] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <h2 className="text-balance font-heading text-4xl font-black tracking-tight sm:text-6xl">Pertanyaan yang sering muncul.</h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-teks-sekunder">Belum menemukan jawaban yang Anda cari? Isi form konsultasi dan tim kami akan membantu memetakannya.</p>
              <div className="mt-8 rounded-3xl bg-navy-900 p-7 text-white">
                <p className="font-heading text-lg font-extrabold text-yellow-500">Promo hari ini berakhir dalam</p>
                <div className="mt-5"><CampaignCountdown /></div>
              </div>
            </div>

            <div className="grid gap-3">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0} className="group rounded-2xl border border-garis bg-white px-5 py-1 open:shadow-md sm:px-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-lg font-extrabold marker:content-none">
                    {faq.question}
                    <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-netral-alt text-xl transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-2xl pb-6 leading-7 text-teks-sekunder">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <div className="rounded-3xl bg-yellow-500 px-6 py-14 sm:px-14 sm:py-18">
              <Perisai className="mx-auto size-12 text-navy-900" />
              <h2 className="mx-auto mt-6 max-w-3xl text-balance font-heading text-4xl font-black tracking-tight sm:text-6xl">Waktu Anda lebih berharga daripada mengurus pajak sendiri.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8">Delegasikan laporan bulanan kepada tim yang fokus menjaga pembukuan rapi dan kewajiban tepat waktu.</p>
              <a href="#konsultasi" className="mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-navy-900 px-7 font-heading font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                Konsultasi sekarang <PanahKanan className="size-5" />
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-garis bg-white py-9">
          <div className="mx-auto flex max-w-[var(--container-maks)] flex-col gap-5 px-5 text-sm text-teks-sekunder sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-3">
              <Image src={logoMark} alt="EasyTax" width={46} height={30} className="h-7 w-auto" />
              <span>Partner pajak dan keuangan bisnis Indonesia.</span>
            </div>
            <nav aria-label="Tautan kampanye" className="flex gap-5 font-semibold text-navy-900">
              <Link href="/">Beranda</Link>
              <Link href="/kontak">Kontak</Link>
            </nav>
          </div>
        </footer>
      </main>
    </CampaignProvider>
  );
}
