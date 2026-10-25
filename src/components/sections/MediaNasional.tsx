import Image from "next/image";

/* ==========================================================================
   Section "Telah Diliput Oleh Media Nasional / Liputan Media".

   Menampilkan logo media nasional resmi yang meliput EasyTax
   (diambil langsung dari aset asli easytax.id) yang mengarah
   langsung ke artikel berita terkait.
   ========================================================================== */

interface ItemMedia {
  nama: string;
  url: string;
  logo: string;
  width: number;
  height: number;
}

const MEDIA: readonly ItemMedia[] = [
  {
    nama: "Industry.co.id",
    url: "https://m.industry.co.id/read/147352/easytax-layanan-pajak-umkm-untuk-jaga-arus-kas-dan-ketertiban-usaha",
    logo: "/images/media-liputan/industry.png",
    width: 403,
    height: 77,
  },
  {
    nama: "Warta Ekonomi",
    url: "https://wartaekonomi.co.id/read596584/easytax-kenalkan-layanan-pajak-terintegrasi-untuk-umkm-dengan-biaya-terjangkau",
    logo: "/images/media-liputan/warta-ekonomi.png",
    width: 372,
    height: 60,
  },
  {
    nama: "JPNN.com",
    url: "https://www.jpnn.com/news/easytax-hadirkan-layanan-pajak-terintegrasi-untuk-membantu-umkm",
    logo: "/images/media-liputan/jpnn.png",
    width: 403,
    height: 137,
  },
  {
    nama: "SINDOnews",
    url: "https://ekbis.sindonews.com/read/1665745/34/tekan-beban-administrasi-usaha-easytax-luncurkan-layanan-pajak-umkm-all-in-1768287674",
    logo: "/images/media-liputan/sindonews.png",
    width: 402,
    height: 37,
  },
  {
    nama: "Business Asia",
    url: "https://businessasia.co.id/easytax-resmi-hadirkan-layanan-pajak-umkm-dengan-skema-all-in-rp-999-000-per-bulan/",
    logo: "/images/media-liputan/business-asia.png",
    width: 477,
    height: 106,
  },
] as const;

export function MediaNasional({
  desain,
}: {
  desain?: { judul?: string };
} = {}) {
  const judul = desain?.judul ?? "Telah Diliput Oleh Media Nasional:";

  return (
    <section
      id="media"
      aria-labelledby="media-judul"
      className="border-b border-garis bg-white py-[clamp(44px,6vw,64px)]"
    >
      <div className="mx-auto flex w-full max-w-maks flex-col items-center gap-[26px] px-6 text-center md:px-8">
        <h2
          id="media-judul"
          className="font-heading text-[0.92rem] leading-none font-extrabold tracking-[0.12em] text-navy-900 uppercase"
        >
          {judul}
        </h2>

        <ul className="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {MEDIA.map((media) => (
            <li key={media.nama}>
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${media.nama} - Baca Liputan EasyTax`}
                className="flex items-center justify-center rounded-lg p-2 transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src={media.logo}
                  alt={media.nama}
                  width={media.width}
                  height={media.height}
                  className="h-7 md:h-8 w-auto max-w-[155px] object-contain transition-opacity duration-200 hover:opacity-100 opacity-90"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
