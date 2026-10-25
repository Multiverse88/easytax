import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  buatPayloadMetaLead,
  validasiLeadKampanye,
} from "@/features/campaign/spt-bulanan-lead";

const INPUT_VALID = {
  submissionId: "lead-123",
  nama: "  Budi Santoso  ",
  whatsapp: "0812-3456-7890",
  layanan: "Laporan Perpajakan & Keuangan Badan",
  omzet: "Rp50 juta – Rp100 juta",
  source: "konsultasi easytax 2",
};

describe("lead kampanye SPT bulanan", () => {
  it("menerima field kampanye yang didukung dan menormalisasi nomor Indonesia", () => {
    assert.deepEqual(validasiLeadKampanye(INPUT_VALID), {
      ok: true,
      data: {
        ...INPUT_VALID,
        nama: "Budi Santoso",
        whatsapp: "6281234567890",
      },
    });
  });

  it("menolak nomor, omzet, source, dan submission ID yang tidak didukung", () => {
    for (const input of [
      { ...INPUT_VALID, whatsapp: "123" },
      { ...INPUT_VALID, omzet: "Omzet buatan" },
      { ...INPUT_VALID, source: "sumber lain" },
      { ...INPUT_VALID, submissionId: "<script>" },
    ]) {
      const hasil = validasiLeadKampanye(input);
      assert.equal(hasil.ok, false);
    }
  });

  it("membentuk payload Meta dengan hash phone dan nama pertama yang stabil", () => {
    assert.deepEqual(
      buatPayloadMetaLead({
        eventId: "lead-123",
        nama: "Budi Santoso",
        whatsapp: "6281234567890",
        eventTime: 1_700_000_000,
      }),
      {
        data: [
          {
            event_name: "Lead",
            event_time: 1_700_000_000,
            event_id: "lead-123",
            action_source: "website",
            user_data: {
              ph: ["dd752605096029a73495a91862983963e1947a834a4300808074185af10bb725"],
              fn: ["24263bfaefb124c488c2f5e63d1d30b418f51d0d6f5b380aa1956ec40ea57278"],
            },
          },
        ],
      },
    );
  });
});
