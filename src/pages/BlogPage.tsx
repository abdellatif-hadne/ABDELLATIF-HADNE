import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Navbar from "../components/Navbar";
import PostCard from "../components/blog/PostCard";
import { posts } from "../data/blog";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog | Abdellatif Hadne";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className="fixed inset-0 grain pointer-events-none" />

      <Navbar />

      <main className="relative z-10 container mx-auto max-w-6xl px-6 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <header className="mt-8 mb-14 text-center">
          <span className="surface inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs tracking-wide text-primary shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            BLOG
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Notes &amp; <span className="gradient-text">write-ups</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            Articles on Supply Chain, logistics, data and the things I learn along the way.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
