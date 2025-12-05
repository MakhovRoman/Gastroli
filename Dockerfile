# ---------- Production Stage ----------
FROM oven/bun:1.1-alpine AS runner

WORKDIR /app
COPY .output ./.output

EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]
