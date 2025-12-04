# ---------- Build Stage ----------
FROM oven/bun:1.1 AS builder

WORKDIR /app

# Устанавливаем зависимости (используем bun.lockb если есть)
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Копируем проект
COPY . .

# Строим Nuxt проект
RUN bun run build


# ---------- Production Stage ----------
FROM oven/bun:1.1-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Копируем только нужные файлы из build-stage
COPY --from=builder /app/.output ./.output

# Nuxt 4 запускается через server/index.mjs
EXPOSE 3000

CMD ["bun", ".output/server/index.mjs"]
