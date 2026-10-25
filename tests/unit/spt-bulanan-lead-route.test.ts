import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { NextRequest } from "next/server.js";

import {
  tanganiLeadKampanye,
  type DependensiLeadKampanye,
} from "@/app/api/lead/spt-bulanan-metaads/route";

const URL = "http://localhost/api/lead/spt-bulanan-metaads";
const BODY = {
  submissionId: "lead-123",
  nama: "Budi Santoso",
  whatsapp: "0812-3456-7890",
  layanan: "Laporan Perpajakan & Keuangan Badan",
  omzet: "Rp50 juta – Rp100 juta",
  source: "konsultasi easytax 2",
};

function request(body: unknown = BODY) {
  return new NextRequest(URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

function dependencies(overrides: Partial<DependensiLeadKampanye> = {}): DependensiLeadKampanye {
  return {
    kirimKeAppsScript: async () => undefined,
    kirimKeMeta: async () => undefined,
    ...overrides,
  };
}

describe("POST /api/lead/spt-bulanan-metaads", () => {
  it("meneruskan lead tervalidasi dan mengembalikan event ID", async () => {
    let appsScriptWhatsapp = "";
    let metaEventId = "";
    const response = await tanganiLeadKampanye(
      request(),
      dependencies({
        kirimKeAppsScript: async (lead) => {
          appsScriptWhatsapp = lead.whatsapp;
        },
        kirimKeMeta: async (lead) => {
          metaEventId = lead.submissionId;
        },
      }),
    );

    assert.equal(response.status, 201);
    assert.deepEqual(await response.json(), { ok: true, eventId: "lead-123" });
    assert.equal(appsScriptWhatsapp, "6281234567890");
    assert.equal(metaEventId, "lead-123");
  });

  it("menolak payload invalid sebelum memanggil provider", async () => {
    let providerCalled = false;
    const response = await tanganiLeadKampanye(
      request({ ...BODY, whatsapp: "123" }),
      dependencies({
        kirimKeAppsScript: async () => {
          providerCalled = true;
        },
      }),
    );

    assert.equal(response.status, 400);
    assert.equal(providerCalled, false);
  });

  it("menggagalkan request saat penyimpanan Apps Script gagal", async () => {
    const originalError = console.error;
    console.error = () => undefined;
    try {
      const response = await tanganiLeadKampanye(
        request(),
        dependencies({
          kirimKeAppsScript: async () => {
            throw new Error("provider unavailable");
          },
        }),
      );

      assert.equal(response.status, 503);
      assert.deepEqual(await response.json(), {
        ok: false,
        error: "Lead belum berhasil dikirim. Silakan coba kembali.",
      });
    } finally {
      console.error = originalError;
    }
  });

  it("tetap sukses saat Meta gagal setelah lead tersimpan", async () => {
    const originalError = console.error;
    console.error = () => undefined;
    try {
      const response = await tanganiLeadKampanye(
        request(),
        dependencies({
          kirimKeMeta: async () => {
            throw new Error("meta unavailable");
          },
        }),
      );

      assert.equal(response.status, 201);
      assert.deepEqual(await response.json(), { ok: true, eventId: "lead-123" });
    } finally {
      console.error = originalError;
    }
  });
});
