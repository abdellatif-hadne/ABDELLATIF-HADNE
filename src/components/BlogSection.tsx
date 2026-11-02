import FadeIn from "./FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { posts } from "../data/blog";
import PostCard from "./blog/PostCard";

const BlogSection = () => {
  const latest = posts.slice(0, 3);

  return (
    <section id="blog" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <FadeIn className="mb-14 text-center" margin="-80px">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Notes &amp; <span className="gradient-text">write-ups</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            Articles on Supply Chain, logistics, data and the things I learn along the way.
          </p>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          >
            View all articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
