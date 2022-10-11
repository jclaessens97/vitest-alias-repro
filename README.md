# vitest-alias-repro

## Prerequisites

- Docker
- pnpm >=v7.5
- node >=v18

## how to run

1. pnpm i
2. cd packages/api
3. npx prisma migrate dev
4. npx prisma generate
5. pnpm run dev (verify this works)
6. pnpm run test
   -> error: module @/db not found in equipment.repository.ts
