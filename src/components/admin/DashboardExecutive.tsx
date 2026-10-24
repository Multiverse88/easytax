import Link from "next/link";
import type { Payload } from "payload";

interface ItemPesan {
  id: string | number;
  nama: string;
  bisnis?: string | null;
  email: string;
  whatsapp: string;
  topik: string;
  status?: string | null;
  createdAt?: string;
}

interface PropsDashboard {
  payload: Payload;
  user?: {
    nama?: string;
    email?: string;
    role?: string;
  };
}

export async function DashboardExecutive({ payload, user }: PropsDashboard) {
  // Query data statistik secara paralel dan aman
  const [
    layananCount,
    artikelCount,
    timCount,
    mitraCount,
    pesanCount,
    recentLeads,
  ] = await Promise.all([
    payload.count({ collection: "layanan" }).catch(() => ({ totalDocs: 0 })),
    payload.count({ collection: "artikel" }).catch(() => ({ totalDocs: 0 })),
    payload.count({ collection: "tim" }).catch(() => ({ totalDocs: 0 })),
    payload.count({ collection: "mitra" }).catch(() => ({ totalDocs: 0 })),
    payload.count({ collection: "pesan-kontak" }).catch(() => ({ totalDocs: 0 })),
    payload
      .find({
        collection: "pesan-kontak",
        limit: 4,
        sort: "-createdAt",
        overrideAccess: true,
      })
      .catch(() => ({ docs: [] })),
  ]);

  const namaUser = user?.nama || user?.email?.split("@")[0] || "Admin";

  return (
    <div style={{ marginBottom: "32px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* 1. Header Banner Eksekutif */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d1645 0%, #152269 100%)",
          color: "#ffffff",
          borderRadius: "14px",
          padding: "28px 32px",
          boxShadow: "0 10px 25px -5px rgba(21, 34, 105, 0.3)",
          position: "relative",
          overflow: "hidden",
          marginBottom: "24px",
        }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(244, 201, 34, 0.15)",
                color: "#f4c922",
                border: "1px solid rgba(244, 201, 34, 0.4)",
                padding: "4px 12px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981" }} />
              EasyTax Control Center · Live
            </span>
          </div>

          <h1 style={{ fontSize: "26px", fontWeight: 800, margin: "6px 0 8px 0", color: "#ffffff" }}>
            Selamat Datang, {namaUser}! 👋
          </h1>
          <p style={{ color: "#d1d5db", fontSize: "14px", margin: "0 0 20px 0", maxWidth: "680px", lineHeight: 1.5 }}>
            Pusat kendali konten, katalog layanan perpajakan, publikasi artikel, dan kontak prospek (leads) EasyTax.
          </p>

          {/* Quick Actions Bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            <Link
              href="/admin/page-builder/beranda"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f4c922",
                color: "#0d1645",
                fontWeight: 700,
                fontSize: "14px",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(244, 201, 34, 0.35)",
              }}
            >
              🎨 Buka Page Builder (Visual)
            </Link>

            <Link
              href="/admin/collections/layanan/create"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontWeight: 600,
                fontSize: "13px",
                padding: "10px 16px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              💼 + Tambah Layanan
            </Link>

            <Link
              href="/admin/collections/artikel/create"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontWeight: 600,
                fontSize: "13px",
                padding: "10px 16px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              ✍️ + Tulis Artikel
            </Link>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#9ca3af",
                fontSize: "13px",
                fontWeight: 600,
                padding: "10px 12px",
                textDecoration: "none",
                marginLeft: "auto",
              }}
            >
              🌐 Kunjungi Website ↗
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Grid Statistik Real-Time (KPI Cards) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <Link
          href="/admin/collections/layanan"
          style={{
            background: "#ffffff",
            padding: "20px 24px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            textDecoration: "none",
            color: "inherit",
            display: "block",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#6b7280" }}>Katalog Layanan</span>
            <span style={{ fontSize: "20px" }}>💼</span>
          </div>
          <div style={{ fontSize: "28px", fontWeight: 800, color: "#111827" }}>{layananCount.totalDocs}</div>
          <span style={{ fontSize: "12px", color: "#10b981", fontWeight: 600 }}>Tersedia di web publik</span>
        </Link>

        <Link
          href="/admin/collections/artikel"
          style={{
            background: "#ffffff",
            padding: "20px 24px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            textDecoration: "none",
            color: "inherit",
            display: "block",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#6b7280" }}>Artikel & Tulisan</span>
            <span style={{ fontSize: "20px" }}>📝</span>
          </div>
          <div style={{ fontSize: "28px", fontWeight: 800, color: "#111827" }}>{artikelCount.totalDocs}</div>
          <span style={{ fontSize: "12px", color: "#6366f1", fontWeight: 600 }}>Tulisan edukasi pajak</span>
        </Link>

        <Link
          href="/admin/collections/pesan-kontak"
          style={{
            background: "#ffffff",
            padding: "20px 24px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            textDecoration: "none",
            color: "inherit",
            display: "block",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#6b7280" }}>Pesan Kontak Masuk</span>
            <span style={{ fontSize: "20px" }}>💬</span>
          </div>
          <div style={{ fontSize: "28px", fontWeight: 800, color: "#0d1645" }}>{pesanCount.totalDocs}</div>
          <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: 600 }}>Calon prospek klien</span>
        </Link>

        <Link
          href="/admin/collections/mitra"
          style={{
            background: "#ffffff",
            padding: "20px 24px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            textDecoration: "none",
            color: "inherit",
            display: "block",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#6b7280" }}>Mitra & Konsultan</span>
            <span style={{ fontSize: "20px" }}>🤝</span>
          </div>
          <div style={{ fontSize: "28px", fontWeight: 800, color: "#111827" }}>
            {mitraCount.totalDocs} <span style={{ fontSize: "16px", fontWeight: 500, color: "#9ca3af" }}>/ {timCount.totalDocs} Tim</span>
          </div>
          <span style={{ fontSize: "12px", color: "#3b82f6", fontWeight: 600 }}>Klien korporasi & staf</span>
        </Link>
      </div>

      {/* 3. Pesan Kontak Terbaru (Recent Leads) */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          padding: "20px 24px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 4px 0", color: "#111827" }}>
              📩 Pesan Kontak Terbaru
            </h3>
            <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
              Pertanyaan & permohonan konsultasi yang masuk dari formulir website.
            </p>
          </div>
          <Link
            href="/admin/collections/pesan-kontak"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#152269",
              textDecoration: "none",
            }}
          >
            Lihat Semua →
          </Link>
        </div>

        {recentLeads.docs.length === 0 ? (
          <div style={{ padding: "24px", textAlign: "center", color: "#9ca3af", fontSize: "14px" }}>
            Belum ada pesan kontak baru yang masuk.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {(recentLeads.docs as unknown as ItemPesan[]).map((lead) => (
              <Link
                key={lead.id}
                href={`/admin/collections/pesan-kontak/${lead.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  background: "#f9fafb",
                  borderRadius: "8px",
                  border: "1px solid #f3f4f6",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                    <span style={{ fontWeight: 700, fontSize: "14px", color: "#111827" }}>{lead.nama}</span>
                    {lead.bisnis && (
                      <span style={{ fontSize: "12px", color: "#6b7280" }}>({lead.bisnis})</span>
                    )}
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "999px",
                        background: lead.status === "baru" ? "#fef3c7" : "#e5e7eb",
                        color: lead.status === "baru" ? "#92400e" : "#374151",
                        textTransform: "uppercase",
                      }}
                    >
                      {lead.status || "baru"}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>
                    Topik: <strong style={{ color: "#374151" }}>{lead.topik}</strong> · WA: {lead.whatsapp} · Email: {lead.email}
                  </div>
                </div>

                <div style={{ fontSize: "12px", color: "#9ca3af", whiteSpace: "nowrap" }}>
                  {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : ""}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardExecutive;
