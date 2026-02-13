# ── Stage 1: Install dependencies ────────────────
FROM oven/bun:1-slim AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ── Stage 2: Build Astro (server mode) ──────────
FROM oven/bun:1-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# ── Stage 3: Production deps only ────────────────
FROM oven/bun:1-slim AS prod-deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

# ── Stage 4: Production runtime ─────────────────
FROM node:22-slim
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends socat \
    && rm -rf /var/lib/apt/lists/*

# Only production node_modules (no devDeps)
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY scripts/start-web ./scripts/start-web
RUN chmod +x scripts/start-web

ENV NODE_ENV=production

CMD ["./scripts/start-web"]
