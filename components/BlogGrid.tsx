"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { Lock, ArrowRight, Calendar, BookmarkCheck } from 'lucide-react';
import { PostData } from "@/lib/types";

export function BlogGrid({ posts }: { posts: PostData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {posts.map((post, index) => (
        <motion.article 
          key={post.slug} 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex flex-col items-start justify-between bg-card rounded-[3.5rem] border border-border/40 overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(39,112,188,0.15)] transition-all duration-500 group"
        >
          <div className="relative w-full h-72 bg-muted overflow-hidden">
            {post.image ? (
              <img 
                src={post.image} 
                alt={post.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                <Lock className="w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            )}
            <div className="absolute top-6 left-6 z-20">
                <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                    Case Study
                </span>
            </div>
          </div>
          
          <div className="p-10 w-full flex flex-col flex-1 relative">
            <div className="flex items-center gap-x-4 text-[10px] mb-6 font-black uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
              {post.categories && post.categories.slice(0, 1).map((cat: string) => (
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
    </div>
  );
}
