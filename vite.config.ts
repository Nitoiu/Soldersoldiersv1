// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // The site has no backend/server functions: every route is crawled and prerendered
    // to static HTML at build time so it can be hosted on any static host (e.g. Vercel).
    prerender: { enabled: true, crawlLinks: true },
  },
  // No server runtime is needed: the build is fully static, so skip the deploy adapter.
  nitro: false,
});
