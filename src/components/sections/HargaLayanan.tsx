import { Centang } from "@/components/ikon";
import { ConsultationButton } from "@/features/whatsapp/components/ConsultationButton";
import { pesanKonsultasiPaket } from "@/features/whatsapp/config";
import type { PaketLayanan } from "@/data/layanan-detail";
import { formatHargaRupiah, formatSatuan } from "@/lib/format-harga";
import type { PropsHargaLayanan } from "@/puck/types";

export { formatHargaRupiah, formatSatuan };

/** Kartu paket — meniru `.service-package` easytax-demo. */
function KartuPaket({
  paket,
  labelKeunggulan,
  labelTombol,
}: {
  paket: PaketLayanan;
  labelKeunggulan: string;
  labelTombol: string;
}) {
  const hargaTampil = formatHargaRupiah(paket.harga);
  const unitTampil = formatSatuan(paket.satuan);

  return (
    <article className="flex min-h-full flex-col rounded-[20px] border border-garis bg-white p-6 shadow-sm">
      <h3 className="font-heading text-[1.3rem] font-black text-navy-900">
        {paket.nama}
      </h3>

      {paket.deskripsi && (
        <p className="mt-2 min-h-[45px] text-[0.9rem] leading-[1.6] text-teks-redup">
          {paket.deskripsi}
        </p>
      )}

      <strong className="my-[18px] block font-heading text-[1.5rem] font-black text-navy-900">
        {hargaTampil}
        {unitTampil ? (
          <span className="ml-1.5 text-[0.85rem] font-bold text-teks-redup">
            / {unitTampil}
          </span>
        ) : null}
      </strong>

      {paket.fitur.length > 0 && (
        <>
          <h4 className="mb-2.5 font-heading text-[0.95rem] font-extrabold text-navy-900">
            {labelKeunggulan}
          </h4>
          <ul className="mb-6 flex flex-1 flex-col gap-2.5">
            {paket.fitur.map((fitur) => (
              <li
                key={fitur}
                className="flex items-start gap-2 text-[0.88rem] text-navy-900"
              >
                <Centang className="mt-0.75 h-4 w-4 shrink-0 text-emerald-accent" />
                {fitur}
              </li>
            ))}
          </ul>
        </>
      )}

      <ConsultationButton
        sumber="paket-layanan"
        konteks="paket"
        pesan={pesanKonsultasiPaket(paket.nama, paket.harga, paket.satuan)}
        ukuran="sedang"
        className="mt-auto w-fit rounded-md py-[13px] px-7 text-[0.95rem]"
      >
        {labelTombol}
      </ConsultationButton>
    </article>
  );
}
const BARIS_SPT = [
  { omzet: "0 / tidak beroperasi", badan: "Rp 499.000", pribadi: "Rp 449.000" },
  { omzet: "Rp 0 – 600 Jt", badan: "Rp 1.499.000", pribadi: "Rp 1.349.000" },
  { omzet: "Rp 600 Jt – 1,2 M", badan: "Rp 1.999.000", pribadi: "Rp 1.799.000" },
  { omzet: "Rp 1,2 M – 2,4 M", badan: "Rp 2.499.000", pribadi: "Rp 2.249.000" },
  { omzet: "Rp 2,4 M – 3,6 M", badan: "Rp 2.999.000", pribadi: "Rp 2.699.000" },
  { omzet: "Rp 3,6 M – 4,8 M", badan: "Rp 3.499.000", pribadi: "Rp 3.149.000" },
  { omzet: "> 4,8 M", badan: "Negotiable", pribadi: "Negotiable" },
];

const FITUR_SPT = [
  { teks: "Penyusunan Laporan Laba Rugi dan Neraca", catatan: "Untuk layanan SPT Badan Usaha" },
  { teks: "Penyusunan Draft SPT Tahunan PPh Badan/Pribadi" },
  { teks: "Pembuatan Kode Billing PPh Tahunan (untuk status kurang bayar)" },
  { teks: "Submit SPT Tahunan PPh Badan/Pribadi resmi DJP" },
  { teks: "[GRATIS] Revisi SPT Tahunan PPh, 1 kali dalam setahun" },
];

function TabelHargaSpt({ labelTombol }: { labelTombol: string }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-3xl border border-garis bg-white shadow-sm">
        <div className="bg-navy-900 px-6 py-5 text-center text-white sm:px-8">
          <h3 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
            Laporan SPT Tahunan Badan Usaha &amp; Pribadi
          </h3>
          <p className="mt-1 text-xs text-teks-terang sm:text-sm">
            Tarif resmi penyusunan dan pelaporan SPT Tahunan berdasarkan omzet per bulan
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-garis bg-amber-400 text-navy-900 font-heading text-sm font-extrabold sm:text-base">
                <th scope="col" className="py-4 px-6 sm:px-8">
                  Omzet per Bulan
                </th>
                <th scope="col" className="py-4 px-6 text-center sm:px-8 bg-amber-500/30">
                  Badan
                </th>
                <th scope="col" className="py-4 px-6 text-center sm:px-8 bg-navy-900 text-white">
                  Pribadi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-garis text-sm sm:text-[0.95rem]">
              {BARIS_SPT.map((baris, idx) => (
                <tr
                  key={baris.omzet}
                  className={idx % 2 === 0 ? "bg-white hover:bg-amber-50/40" : "bg-netral-lat/50 hover:bg-amber-50/40"}
                >
                  <td className="py-3.5 px-6 font-semibold text-navy-900 sm:px-8">
                    {baris.omzet}
                  </td>
                  <td className="py-3.5 px-6 text-center font-extrabold text-navy-900 sm:px-8 bg-amber-500/5">
                    {baris.badan}
                  </td>
                  <td className="py-3.5 px-6 text-center font-extrabold text-navy-900 sm:px-8">
                    {baris.pribadi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-garis bg-gradient-to-b from-white to-amber-50/25 p-6 sm:p-8">
          <h4 className="font-heading text-sm font-extrabold text-navy-900 uppercase tracking-wider sm:text-base">
            Fitur Layanan:
          </h4>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FITUR_SPT.map((f) => (
              <li key={f.teks} className="flex items-start gap-2.5 text-sm text-navy-900">
                <Centang className="mt-0.5 h-4 w-4 shrink-0 text-emerald-accent" />
                <span>
                  <strong>{f.teks}</strong>
                  {f.catatan && (
                    <span className="block text-xs text-teks-redup italic mt-0.5">
                      * {f.catatan}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <ConsultationButton
              sumber="tabel-harga-spt"
              konteks="paket"
              pesan="Halo EasyTax, saya ingin konsultasi mengenai Laporan SPT Tahunan Badan & Pribadi."
              ukuran="sedang"
              className="w-full sm:w-auto rounded-xl py-3.5 px-8 text-base font-bold shadow-sm"
            >
              {labelTombol || "Konsultasi SPT Sekarang"}
            </ConsultationButton>
          </div>
        </div>
      </div>
    </div>
  );
}

const BARIS_BULANAN = [
  { omzet: "0 / tidak beroperasi", harga: "Rp 749.000" },
  { omzet: "Rp 0 – 50 Jt", harga: "Rp 999.000" },
  { omzet: "Rp 50 Jt – 100 Jt", harga: "Rp 1.499.000" },
  { omzet: "Rp 100 Jt – 200 Jt", harga: "Rp 1.999.000" },
  { omzet: "Rp 200 Jt – 300 Jt", harga: "Rp 2.499.000" },
  { omzet: "Rp 300 Jt – 400 Jt", harga: "Rp 2.999.000" },
  { omzet: "Rp 400 Jt – 500 Jt", harga: "Rp 3.999.000" },
  { omzet: "Rp 500 Jt – 1 M", harga: "Rp 4.999.000" },
  { omzet: "Rp 1 M – 2,5 M", harga: "Rp 5.999.000" },
  { omzet: "> 2,5 M", harga: "Negotiable" },
];

const FITUR_BULANAN = [
  "SPT Bulanan PPh",
  "Laporan Keuangan",
  "Konsultasi Pajak",
  "Free SPT Tahunan (pembelian paket 12 bulan di muka atau rutin 12 bulan)",
];

function TabelHargaBulanan({ labelTombol }: { labelTombol: string }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-3xl border border-garis bg-white shadow-sm">
        <div className="bg-navy-900 px-6 py-5 text-center text-white sm:px-8">
          <h3 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
            Perpajakan Dan Laporan Keuangan Bulanan
          </h3>
          <p className="mt-1 text-xs text-teks-terang sm:text-sm">
            Tarif resmi pembukuan dan kepatuhan pajak bulanan berdasarkan omzet
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-garis bg-amber-400 text-navy-900 font-heading text-sm font-extrabold sm:text-base">
                <th scope="col" className="py-4 px-6 sm:px-8">
                  Omzet per Bulan
                </th>
                <th scope="col" className="py-4 px-6 text-right sm:px-8 bg-navy-900 text-white">
                  Harga per Bulan
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-garis text-sm sm:text-[0.95rem]">
              {BARIS_BULANAN.map((baris, idx) => (
                <tr
                  key={baris.omzet}
                  className={idx % 2 === 0 ? "bg-white hover:bg-amber-50/40" : "bg-netral-lat/50 hover:bg-amber-50/40"}
                >
                  <td className="py-3.5 px-6 font-semibold text-navy-900 sm:px-8">
                    {baris.omzet}
                  </td>
                  <td className="py-3.5 px-6 text-right font-extrabold text-navy-900 sm:px-8">
                    {baris.harga}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-garis bg-gradient-to-b from-white to-amber-50/25 p-6 sm:p-8">
          <h4 className="font-heading text-sm font-extrabold text-navy-900 uppercase tracking-wider sm:text-base">
            Fitur Layanan Utama:
          </h4>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FITUR_BULANAN.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-navy-900">
                <Centang className="mt-0.5 h-4 w-4 shrink-0 text-emerald-accent" />
                <span className="font-semibold">{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-teks-redup italic">
            (*) Khusus PKP Pembuatan Faktur Dibatasi Sebanyak 25 Faktur Keluaran Dalam Sebulan
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <ConsultationButton
              sumber="tabel-harga-bulanan"
              konteks="paket"
              pesan="Halo EasyTax, saya ingin konsultasi mengenai Layanan Perpajakan & Laporan Keuangan Bulanan."
              ukuran="sedang"
              className="w-full sm:w-auto rounded-xl py-3.5 px-8 text-base font-bold shadow-sm"
            >
              {labelTombol || "Konsultasi Bulanan Sekarang"}
            </ConsultationButton>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * "Harga Transparan / Paket Layanan" — diport dari `PricingPackages`
 * easytax-demo: judul terpusat lalu deretan kartu paket fleksibel.
 *
 * Properti desain section + label kartu (labelKeunggulan, labelTombol)
 * datang dari Page Builder. Nama paket, deskripsi, harga, satuan, dan
 * daftar keunggulan aktual berasal dari record CMS slug yang dibuka; kartu
 * yang sama diulang untuk SETIAP paket, berapa pun jumlahnya.
 */
export function HargaLayanan({
  paket,
  desain,
  slug,
}: {
  paket: PaketLayanan[];
  desain?: PropsHargaLayanan;
  slug?: string;
}) {
  if (paket.length === 0) return null;

  const lencana = desain?.lencana ?? "Harga Transparan";
  const judul = desain?.judul ?? "Paket Layanan";
  const deskripsi = desain?.deskripsi ?? "Pilih paket yang sesuai kebutuhan bisnis Anda.";
  const labelKeunggulan = desain?.labelKeunggulan ?? "Keunggulan";
  const labelTombol = desain?.labelTombol ?? "Konsultasi";
  const tengah = (desain?.perataan ?? "tengah") === "tengah";
  const isSpt = slug === "laporan-spt" || paket.some((p) => p.nama.includes("SPT Badan"));
  const isBulanan = slug === "laporan-perpajakan-keuangan" || (paket.length >= 8 && paket.some((p) => p.nama.includes("Dormant")));
  return (
    <section
      id="harga"
      aria-labelledby="harga-judul"
      className="bg-white py-[clamp(44px,6.4vw,64px)]"
    >
      <div className="mx-auto w-full max-w-maks px-6 md:px-8">
        <div
          className={
            tengah
              ? "mx-auto mb-10 max-w-[680px] text-center"
              : "mb-10 max-w-[680px]"
          }
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-500/60 bg-yellow-500/12 px-5 py-2 text-[0.85rem] font-bold tracking-[0.04em] text-navy-900 uppercase">
            {lencana}
          </span>

          <h2
            id="harga-judul"
            className="mb-3.5 font-heading text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.25] font-bold text-navy-900"
          >
            {judul}
          </h2>

          <p className="text-[1.05rem] text-teks-sekunder">{deskripsi}</p>
        </div>

        {isSpt ? (
          <TabelHargaSpt labelTombol={labelTombol} />
        ) : isBulanan ? (
          <TabelHargaBulanan labelTombol={labelTombol} />
        ) : (
          <ul className="flex flex-wrap justify-center gap-6">
            {paket.map((p) => (
              <li
                key={p.nama}
                className="w-full max-w-[400px] flex-[1_1_300px]"
              >
                <KartuPaket
                  paket={p}
                  labelKeunggulan={labelKeunggulan}
                  labelTombol={labelTombol}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
