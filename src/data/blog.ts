import aiPentestBody from "../content/blog/ai-automated-pentest-2026.md?raw";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  /** Optional cover image, e.g. "/blog/my-cover.png" placed in public/blog/ */
  cover?: string;
  body: string;
}

export const posts: BlogPost[] = [
  {
    slug: "ai-automated-pentest-2026",
    title: "AI-Automated Pentesting in 2026: Where Agents Win, and Where They Don't",
    excerpt:
      "How agentic AI reshaped offensive security - from recon to reporting - and why human judgment still wins on business-logic flaws.",
    date: "2026-06-17",
    readingTime: "15 min read",
    category: "AI & Security",
    tags: ["AI", "Pentest", "Agentic AI", "Red Team", "MITRE ATT&CK"],
    body: aiPentestBody,
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  posts.find((p) => p.slug === slug);

export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
