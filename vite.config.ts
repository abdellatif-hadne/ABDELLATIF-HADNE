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
}));
