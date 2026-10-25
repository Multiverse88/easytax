import { NextResponse } from "next/server";

import {
  buatPayloadMetaLead,
  type LeadKampanye,
  validasiLeadKampanye,
} from "@/features/campaign/spt-bulanan-lead";

const PIXEL_ID = "1821054145096112";
const MAX_BODY_BYTES = 8_192;

export type DependensiLeadKampanye = {
  kirimKeAppsScript: (lead: LeadKampanye) => Promise<void>;
  kirimKeMeta: (lead: LeadKampanye) => Promise<void>;
};

async function kirimKeAppsScript(lead: LeadKampanye): Promise<void> {
  const endpoint = process.env.LEAD_ENDPOINT;
  if (!endpoint) throw new Error("LEAD_ENDPOINT belum dikonfigurasi");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({
      ...lead,
      sheetName: "konsultasi easytax 2",
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) throw new Error(`Apps Script merespons ${response.status}`);
}

async function kirimKeMeta(lead: LeadKampanye): Promise<void> {
  const token = process.env.FB_CONVERSION_TOKEN;
  if (!token) throw new Error("FB_CONVERSION_TOKEN belum dikonfigurasi");

  const url = new URL(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events`);
  url.searchParams.set("access_token", token);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      buatPayloadMetaLead({
        eventId: lead.submissionId,
        nama: lead.nama,
        whatsapp: lead.whatsapp,
      }),
    ),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) throw new Error(`Meta CAPI merespons ${response.status}`);
}

const dependensiDefault: DependensiLeadKampanye = {
  kirimKeAppsScript,
  kirimKeMeta,
};

export async function tanganiLeadKampanye(
  request: Request,
  dependensi: DependensiLeadKampanye = dependensiDefault,
): Promise<NextResponse> {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Ukuran request terlalu besar." },
      { status: 413 },
    );
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Format data tidak valid." },
      { status: 400 },
    );
  }

  const hasil = validasiLeadKampanye(input);
  if (!hasil.ok) {
    return NextResponse.json(
      { ok: false, error: hasil.error },
      { status: 400 },
    );
  }

  try {
    await dependensi.kirimKeAppsScript(hasil.data);
  } catch (error) {
    console.error("Campaign lead storage failed", error);
    return NextResponse.json(
      { ok: false, error: "Lead belum berhasil dikirim. Silakan coba kembali." },
      { status: 503 },
    );
  }

  try {
    await dependensi.kirimKeMeta(hasil.data);
  } catch (error) {
    console.error("Campaign Meta CAPI failed", error);
  }

  return NextResponse.json(
    { ok: true, eventId: hasil.data.submissionId },
    { status: 201 },
  );
}

export async function POST(request: Request): Promise<NextResponse> {
  return tanganiLeadKampanye(request);
}
