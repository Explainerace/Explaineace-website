FROM oven/bun:1-alpine AS base
WORKDIR /app

# Copy dependency specifications
COPY package.json bun.lock* ./
RUN bun install

# Copy source code and build production Next.js app
COPY . .
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# Railway injects $PORT at runtime
ENV PORT=3000
EXPOSE 3000

CMD ["bun", "run", "start"]
