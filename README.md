# 2bhai.tech

Production foundation for [2bhai.tech](https://2bhai.tech).

> Foundation only — no business or product pages yet (by design).

## Stack
Next.js 15 · React 19 · TypeScript (strict) · Tailwind CSS · shadcn/ui · pnpm · ESLint · Prettier · Husky.

## Develop
```bash
corepack enable && corepack prepare pnpm@9 --activate   # if needed
pnpm install
pnpm dev            # http://localhost:3000

pnpm lint && pnpm typecheck && pnpm build   # the CI gate
```
Husky runs `lint-staged` on commit and the full gate on push.

## Deploy: GitHub → Netlify
1. Create repo **`2bhai-tech/2bhai.tech`** (empty).
2. Push the foundation branch and open a PR (see commands below).
3. Netlify → Import from GitHub → build `pnpm build`, publish `.next`
   (`@netlify/plugin-nextjs` auto-detected). A Preview builds on the PR.

## License
MIT — see [LICENSE](./LICENSE). Security policy in [SECURITY.md](./SECURITY.md).
