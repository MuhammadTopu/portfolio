"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Clock,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { MarkdownContent } from "@/components/admin/MarkdownEditor";

const ARTICLE =
  "active bg-card sketch-border p-6 lg:p-8 transition-all duration-500 relative z-10 block animate-[fadeIn_0.4s_ease_forwards]";

const STATIC_BLOGS = [
  {
    _id: "static-1",
    title: "Design conferences in 2022",
    category: "Design",
    createdAt: "2022-02-23",
    readTime: "4 min read",
    image: "/old/assets/images/blog-1.png",
    excerpt:
      "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    content: `Design conferences have always been a cornerstone...`,
  },
];

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function estimateReadTime(content) {
  if (!content) return "1 min read";
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

/* =========================
   BLOG DETAIL
========================= */

function BlogDetail({ blog, onBack }) {
  const isStatic = blog._id?.startsWith("static-") || blog.content;

  const [full, setFull] = useState(blog);
  const [loading, setLoading] = useState(!isStatic);

  useEffect(() => {
    if (isStatic) return;

    let isMounted = true;

    fetch(`/api/blogs/${blog._id}`)
      .then((r) => r.json())
      .then((j) => {
        if (isMounted && j.data) setFull(j.data);
      })
      .catch(() => {})
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [blog._id]);

  return (
    <article className={ARTICLE}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-muted hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition" />
          Back to Blog
        </button>

        <a
          href={`/blog/${full._id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-foreground text-background px-3 py-1.5 sketch-border text-[11px] font-bold uppercase"
        >
          <ExternalLink size={11} />
          Open
        </a>
      </div>

      {/* Image */}
      {full.image && (
        <figure className="relative sketch-border overflow-hidden mb-8 aspect-[2/1]">
          <img src={full.image} alt={full.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-foreground px-3 py-1 text-xs font-bold text-background">
            {full.category}
          </div>
        </figure>
      )}

      {/* Title */}
      <header className="mb-8">
        <div className="flex gap-4 text-xs text-muted font-bold uppercase mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {formatDate(full.createdAt)}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {estimateReadTime(full.content)}
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          {full.title}
        </h2>
      </header>

      {/* Content */}
      {loading ? (
        <div className="space-y-4 animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 bg-foreground/10 rounded w-full" />
          ))}
        </div>
      ) : (
        <MarkdownContent content={full.content || ""} />
      )}
    </article>
  );
}

/* =========================
   BLOG LIST
========================= */

export function Blog() {
  const [blogs, setBlogs] = useState(null); // ✅ start null (important)
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/blogs?limit=20")
      .then((r) => r.json())
      .then((j) => {
        if (!isMounted) return;

        const items = j.data?.items ?? j.data;
        if (Array.isArray(items) && items.length) {
          setBlogs(items);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    // fallback after 3s
    const timeout = setTimeout(() => {
      if (isMounted && !blogs) setBlogs(STATIC_BLOGS);
    }, 3000);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  if (selected !== null && blogs) {
    return (
      <BlogDetail blog={blogs[selected]} onBack={() => setSelected(null)} />
    );
  }

  return (
    <article className={ARTICLE}>
      <header className="mb-8">
        <h2 className="text-4xl font-bold text-foreground flex items-center gap-4">
          Blog
          <div className="w-[30px] h-[3px] bg-foreground/30" />
        </h2>
      </header>

      {/* Skeleton Loader */}
      {loading && !blogs ? (
        <div className="space-y-8 animate-pulse">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="bg-card/20 rounded-lg overflow-hidden">
                <div className="h-[160px] bg-foreground/10" />
                <div className="p-5 space-y-3">
                  <div className="h-3 w-32 bg-foreground/10 rounded" />
                  <div className="h-5 w-3/4 bg-foreground/20 rounded" />
                  <div className="h-3 bg-foreground/10 rounded w-full" />
                  <div className="h-3 bg-foreground/10 rounded w-5/6" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(blogs || []).map((blog, idx) => (
            <li key={blog._id || idx} className="group relative">
              <button
                onClick={() => setSelected(idx)}
                className="block w-full text-left bg-card sketch-border overflow-hidden hover:translate-x-1 hover:translate-y-1 transition"
              >
                {blog.image && (
                  <figure className="aspect-[1.8/1] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </figure>
                )}

                <div className="p-5 space-y-2">
                  <div className="text-xs text-muted font-bold uppercase">
                    {formatDate(blog.createdAt)} ·{" "}
                    {estimateReadTime(blog.content || blog.excerpt)}
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {blog.title}
                  </h3>

                  <p className="text-muted text-sm line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}