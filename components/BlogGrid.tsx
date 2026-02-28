"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { Lock, ArrowRight, Calendar, BookmarkCheck, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { PostData } from "@/lib/types";

const POSTS_PER_PAGE = 6;

export function BlogGrid({ posts }: { posts: PostData[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach(post => {
      post.categories?.forEach(cat => cats.add(cat));
    });
    return ["All", ...Array.from(cats)].sort();
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter(post => post.categories?.includes(activeCategory));
  }, [posts, activeCategory]);

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-16">
      {/* Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/40">
        <div className="flex items-center gap-3 text-muted-foreground">
            <Filter className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest">Filter by Intelligence Category</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    aria-label={`Filter by ${cat} category`}
                    className={`px-5 py-2 min-h-[44px] rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                        activeCategory === cat 
                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' 
                        : 'bg-muted/50 text-muted-foreground border-transparent hover:border-primary/30 hover:bg-muted'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {paginatedPosts.map((post, index) => (
            <motion.article 
              key={post.slug} 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-start justify-between bg-card rounded-[3.5rem] border border-border/40 overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(39,112,188,0.15)] transition-all duration-500 group"
            >
              <div className="relative w-full h-72 bg-muted overflow-hidden">
                {post.image ? (
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                    <Lock className="w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
                {post.categories && post.categories.length > 0 && (
                    <div className="absolute top-6 left-6 z-20">
                        <span className="px-4 py-1.5 bg-background/95 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm border border-border/50">
                            {post.categories[0]}
                        </span>
                    </div>
                )}
              </div>
              
              <div className="p-10 w-full flex flex-col flex-1 relative">
                <div className="flex items-center gap-x-4 text-[10px] mb-6 font-black uppercase tracking-widest text-muted-foreground">
                  <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={post.date} suppressHydrationWarning>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  {post.categories && post.categories.slice(1, 2).map((cat: string) => (
                    <div key={cat} className="flex items-center gap-1.5 text-secondary">
                      <BookmarkCheck className="w-3.5 h-3.5" />
                      {cat}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-black leading-tight text-foreground group-hover:text-primary transition-all duration-300 flex-1 mb-6">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3 mb-10 leading-relaxed font-medium">
                  {post.description || "In-depth analysis and expert perspectives on modern security challenges and solutions in the Nigerian landscape."}
                </p>

                <div className="mt-auto pt-8 border-t border-border/50 flex items-center justify-between group/btn">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Explore Full Article</span>
                    <div className="p-3 bg-primary/5 rounded-full group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300 transform group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 pt-8">
            <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous page"
                className="p-4 rounded-2xl bg-card border border-border/40 text-foreground hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-card disabled:hover:text-foreground transition-all duration-300 group"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        aria-label={`Go to page ${i + 1}`}
                        className={`w-12 h-12 rounded-2xl text-xs font-black transition-all duration-300 ${
                            currentPage === i + 1 
                            ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/20' 
                            : 'bg-card border border-border/40 text-muted-foreground hover:border-primary/50'
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Next page"
                className="p-4 rounded-2xl bg-card border border-border/40 text-foreground hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-card disabled:hover:text-foreground transition-all duration-300 group"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
      )}
    </div>
  );
}
