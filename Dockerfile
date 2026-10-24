# syntax=docker/dockerfile:1

# ==============================================================================
# Stage 1: Dependencies
# ==============================================================================
# Node 24 LTS mendukung TypeScript native untuk CLI Payload (script cms:*)
# tanpa tsx; image runtime tetap menjalankan Next.js production.
FROM node:24-bookworm-slim AS deps
WORKDIR /app

# Install dependensi sistem yang dibutuhkan untuk build native modul (sharp/node-gyp jika ada)
RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ && rm -rf /var/lib/apt/lists/*

# Salin manifest dependensi
COPY package.json package-lock.json ./

# Install dependensi menggunakan lockfile resmi
RUN npm ci

# ==============================================================================
# Stage 2: Builder
# ==============================================================================
FROM node:24-bookworm-slim AS builder
WORKDIR /app

# Salin modul dari stage deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Payload memerlukan secret valid ketika konfigurasi dimuat saat build.
# Gunakan secret sementara melalui mount BuildKit, tidak disimpan dalam layer.
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URI=postgresql://dummy:dummy@localhost:5432/dummy
ENV PAYLOAD_CACHE_COMPONENTS_ENABLED=true
# Batasi worker build agar build tidak kehabisan RAM pada Docker Desktop 4 GB.
ENV CIRCLE_NODE_TOTAL=2
ARG NEXT_SERVER_ACTIONS_ENCRYPTION_KEY
ENV NEXT_SERVER_ACTIONS_ENCRYPTION_KEY=${NEXT_SERVER_ACTIONS_ENCRYPTION_KEY}
# Jalankan typecheck dan build
RUN --mount=type=secret,id=payload_secret,required=true \
    PAYLOAD_SECRET="$(cat /run/secrets/payload_secret)" npm run build

# Bersihkan dependensi pengembangan (playwright, typescript, dll) sebelum disalin ke runner
RUN npm prune --omit=dev

# ==============================================================================
# Stage 3: Runner (Production)
# ==============================================================================
FROM node:24-bookworm-slim AS runner
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends curl && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3004
ENV HOSTNAME="0.0.0.0"
ENV RAG_EMBEDDING_CACHE_DIR=/app/model-cache
ARG NEXT_SERVER_ACTIONS_ENCRYPTION_KEY
ENV NEXT_SERVER_ACTIONS_ENCRYPTION_KEY=${NEXT_SERVER_ACTIONS_ENCRYPTION_KEY}

# Buat grup dan user non-root demi keamanan kontainer
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Salin aset publik, konfigurasi, dan hasil build Next.js
COPY --chown=nextjs:nodejs --from=builder /app/public ./public
COPY --chown=nextjs:nodejs --from=builder /app/.next ./.next
COPY --chown=nextjs:nodejs --from=builder /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs --from=builder /app/package.json ./package.json
COPY --chown=nextjs:nodejs --from=builder /app/next.config.ts ./next.config.ts
COPY --chown=nextjs:nodejs --from=builder /app/tsconfig.json ./tsconfig.json
COPY --chown=nextjs:nodejs --from=builder /app/src ./src
COPY --chown=nextjs:nodejs --from=builder /app/scripts ./scripts
COPY --chown=nextjs:nodejs --chmod=755 --from=builder /app/docker/entrypoint.sh ./docker/entrypoint.sh
# Cache model tidak dibundel ke image (ukurannya besar dan bukan artefak build).
# Untuk mengaktifkan RAG, mount cache read-only ke /app/model-cache atau salin
# lewat pipeline deployment yang menyediakan artifact model.
RUN mkdir -p /app/model-cache && chown -R nextjs:nodejs /app/model-cache

USER nextjs

EXPOSE 3004

ENTRYPOINT ["/app/docker/entrypoint.sh"]
CMD ["npm", "run", "start"]
