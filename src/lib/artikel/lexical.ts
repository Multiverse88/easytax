import type {
  SerializedHeadingNode,
  SerializedListItemNode,
  SerializedListNode,
  SerializedParagraphNode,
  SerializedTextNode,
} from "@payloadcms/richtext-lexical";
import type { Artikel } from "@/payload-types";

export type HeadingToc = {
  id: string;
  text: string;
  level: 2 | 3 | 4 | 5 | 6;
};

export type BlokIsi =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; level: 2 | 3 | 4 | 5 | 6; text: string }
  | { kind: "list"; ordered: boolean; items: string[] };

type ParagrafArtikel = SerializedParagraphNode<SerializedTextNode>;
type JudulArtikel = SerializedHeadingNode<SerializedTextNode>;
type ButirArtikel = SerializedListItemNode<SerializedTextNode>;
type DaftarArtikel = SerializedListNode<ButirArtikel>;

export type KontenArtikelLexical = Artikel["blok"];

type NodeLexical = {
  children?: NodeLexical[];
  text?: string;
  type?: string;
  tag?: string;
};

const elemenDasar = {
  direction: null,
  format: "" as const,
  indent: 0,
  version: 1,
};

function teks(text: string): SerializedTextNode {
  return {
    type: "text",
    detail: 0,
    format: 0,
    mode: "normal",
    style: "",
    text,
    version: 1,
  };
}

function paragraf(text: string): ParagrafArtikel {
  return {
    ...elemenDasar,
    type: "paragraph",
    children: [teks(text)],
    textFormat: 0,
    textStyle: "",
  };
}

function heading(
  text: string,
  level: 2 | 3 | 4 | 5 | 6,
): JudulArtikel {
  return {
    ...elemenDasar,
    type: "heading",
    children: [teks(text)],
    tag: `h${level}`,
  };
}

function daftar(items: string[], ordered: boolean): DaftarArtikel {
  const children: ButirArtikel[] = items.map((item, index) => ({
    ...elemenDasar,
    type: "listitem",
    children: [teks(item)],
    value: index + 1,
    checked: undefined,
  }));

  return {
    ...elemenDasar,
    type: "list",
    children,
    listType: ordered ? "number" : "bullet",
    start: 1,
    tag: ordered ? "ol" : "ul",
    checked: undefined,
  };
}

export function buatKontenArtikelKosong(): KontenArtikelLexical {
  return {
    root: {
      ...elemenDasar,
      type: "root",
      children: [paragraf("")],
    },
  };
}

export function blokKeLexical(blok: readonly BlokIsi[]): KontenArtikelLexical {
  const children = blok.map((item) => {
    switch (item.kind) {
      case "heading":
        return heading(item.text, item.level);
      case "list":
        return daftar(item.items, item.ordered);
      default:
        return paragraf(item.text);
    }
  });

  return {
    root: {
      ...elemenDasar,
      type: "root",
      children: children.length > 0 ? children : [paragraf("")],
    },
  };
}

export function slugifyHeading(text: string): string {
  const slug = text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "bagian";
}

function nodeLexical(value: unknown): NodeLexical | null {
  if (!value || typeof value !== "object") return null;

  const node: NodeLexical = {};
  if ("type" in value && typeof value.type === "string") node.type = value.type;
  if ("tag" in value && typeof value.tag === "string") node.tag = value.tag;
  if ("text" in value && typeof value.text === "string") node.text = value.text;
  if ("children" in value && Array.isArray(value.children)) {
    node.children = value.children
      .map(nodeLexical)
      .filter((child): child is NodeLexical => child !== null);
  }
  return node;
}

function rootChildren(data: unknown): NodeLexical[] {
  if (!data || typeof data !== "object" || !("root" in data)) return [];
  return nodeLexical(data.root)?.children ?? [];
}

function teksNode(node: NodeLexical): string {
  if (node.type === "text") return node.text ?? "";
  if (node.type === "linebreak") return "\n";
  return (node.children ?? []).map(teksNode).join("");
}

export function ekstrakTeksLexical(data: unknown): string {
  return rootChildren(data)
    .map(teksNode)
    .filter(Boolean)
    .join("\n\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function ekstrakHeadingLexical(data: unknown): HeadingToc[] {
  const heading = rootChildren(data).flatMap((node) => {
    if (node.type !== "heading" || !/^h[2-6]$/.test(node.tag ?? "")) return [];
    const text = teksNode(node).trim();
    if (!text) return [];
    return [{ text, level: Number(node.tag?.slice(1)) as HeadingToc["level"] }];
  });
  const seen = new Map<string, number>();

  return heading.map((item) => {
    const base = slugifyHeading(item.text);
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);
    return { ...item, id: count === 1 ? base : `${base}-${count}` };
  });
}
