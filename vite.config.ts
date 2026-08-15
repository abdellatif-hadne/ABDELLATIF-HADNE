import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Only GitHub Pages needs a sub-path base (https://user.github.io/repo-name/).
// Everywhere else — Vercel, local build, dev — the site is served from the root, so base = "/".
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName =
    process.env.GITHUB_REPOSITORY?.split('/')[1]?.trim() || 'Rizki-Abdelhadi-portfolio';
const githubPagesBase = `/${repoName.replace(/^\/+|\/+$/g, '')}/`;

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    base: command === 'build' && isGitHubActions ? githubPagesBase : '/',
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        // The remaining large chunks after manualChunks below (mermaid's core +
        // cytoscape, used for architecture/mindmap diagrams) are lazy-loaded only
        // on blog posts that embed those specific diagram types — they never touch
        // the initial page load, so the default 500 kB warning is just noise here.
        chunkSizeWarningLimit: 700,
        rollupOptions: {
            output: {
                // Split large, rarely-changing vendor deps out of the main
                // entry chunk so it stays under the 500 kB warning threshold
                // and browsers can cache each piece independently.
                manualChunks(id) {
                    if (id.indexOf("node_modules") === -1) return;
                    if (/react-router-dom|\/react-dom\/|\/react\//.test(id)) return "react-vendor";
                },
            },
        },
    },
}));
