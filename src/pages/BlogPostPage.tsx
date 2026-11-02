import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";

import Navbar from "../components/Navbar";
import Markdown from "../components/blog/Markdown";
import { getPostBySlug, formatDate } from "../data/blog";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) document.title = `${post.title} | Abdellatif Hadne`;
    return () => {
      document.title = "Hadne | Supply Chain & Logistics";
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className="fixed inset-0 grain pointer-events-none" />

      <Navbar />

      <main className="relative z-10 container mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <header className="mt-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {post.cover && (
            <img
              src={`${import.meta.env.BASE_URL}${post.cover.replace(/^\//, "")}`}
              alt={post.title}
              className="mt-8 w-full rounded-2xl border border-border object-cover"
            />
          )}
        </header>

        <article>
          <Markdown content={post.body} />
        </article>

        <footer className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_hsl(var(--primary)/0.6)] transition-all hover:-translate-y-0.5"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default BlogPostPage;
