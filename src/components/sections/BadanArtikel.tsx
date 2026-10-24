import type {
  JSXConvertersFunction,
} from "@payloadcms/richtext-lexical/react";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { DaftarIsiArtikel } from "@/components/sections/DaftarIsiArtikel";
import type {
  HeadingToc,
  KontenArtikelLexical,
} from "@/lib/artikel/lexical";

function konverterHeading(headings: HeadingToc[]): JSXConvertersFunction {
  let index = 0;

  return ({ defaultConverters }) => ({
    ...defaultConverters,
    heading: ({ node, nodesToJSX }) => {
      const Tag = node.tag;
      const id = Tag === "h1" ? undefined : headings[index++]?.id;
      return <Tag id={id}>{nodesToJSX({ nodes: node.children })}</Tag>;
    },
  });
}

/**
 * Badan artikel: konten Lexical dengan daftar isi sticky dan tag artikel.
 */
export function BadanArtikel({
  blok,
  tags,
  headings,
}: {
  blok: KontenArtikelLexical;
  tags: string[];
  headings: HeadingToc[];
}) {
  return (
    <section
      aria-label="Isi artikel"
      className="bg-white pt-[84px] pb-[clamp(44px,6.4vw,64px)]"
    >
      <div className="mx-auto w-full max-w-maks px-6 md:px-8">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <aside className="lg:col-start-2 lg:row-start-1 lg:sticky lg:top-[92px] lg:self-start">
            <DaftarIsiArtikel headings={headings} />
          </aside>

          <div className="lg:col-start-1 lg:row-start-1">
            <article className="max-w-[760px]">
              <RichText
                className="[&_a]:font-semibold [&_a]:text-navy-900 [&_a]:underline [&_a]:decoration-yellow-500 [&_a]:underline-offset-4 [&_blockquote]:my-7 [&_blockquote]:border-l-4 [&_blockquote]:border-yellow-500 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-teks-sekunder [&_h2]:mt-9 [&_h2]:mb-3 [&_h2]:scroll-mt-28 [&_h2]:border-l-4 [&_h2]:border-yellow-500 [&_h2]:pl-4 [&_h2]:font-heading [&_h2]:text-[clamp(1.3rem,2.2vw,1.55rem)] [&_h2]:leading-[1.35] [&_h2]:font-bold [&_h2]:text-navy-900 [&_h3]:mt-7 [&_h3]:mb-2.5 [&_h3]:scroll-mt-28 [&_h3]:font-heading [&_h3]:text-[1.15rem] [&_h3]:leading-[1.4] [&_h3]:font-bold [&_h3]:text-navy-900 [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:scroll-mt-28 [&_h4]:font-heading [&_h4]:text-[1.08rem] [&_h4]:font-bold [&_h4]:text-navy-900 [&_img]:my-8 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-2xl [&_li]:text-[1rem] [&_li]:leading-[1.7] [&_li]:text-teks-sekunder [&_ol]:mb-6 [&_ol]:grid [&_ol]:list-decimal [&_ol]:gap-2.5 [&_ol]:pl-6 [&_p]:mb-5 [&_p]:text-[1.02rem] [&_p]:leading-[1.8] [&_p]:text-teks-sekunder [&_p:first-child]:text-[1.1rem] [&_p:first-child]:leading-[1.75] [&_p:first-child]:font-medium [&_p:first-child]:text-navy-900 [&_picture]:block [&_ul]:mb-6 [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-2.5 [&_ul]:pl-6"
                converters={konverterHeading(headings)}
                data={blok}
              />
            </article>

            {tags.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-garis pt-7">
                <span className="mr-1 text-[0.78rem] font-extrabold tracking-[0.08em] text-teks-redup uppercase">
                  Tag
                </span>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-garis bg-netral-lat px-4 py-1.5 text-[0.84rem] font-semibold text-navy-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
