"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { Lock, ArrowRight, Calendar, BookmarkCheck } from 'lucide-react';
import { PostData } from "@/lib/types";

export function BlogTeaser({ posts }: { posts: PostData[] }) {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative Branding Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Security Intelligence</span>
            <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl">
              Latest <span className="text-primary">Insights</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" aria-label="Explore all security intelligence articles" className="rounded-full ring-1 ring-border px-8 py-4 text-xs font-black uppercase tracking-widest flex items-center hover:bg-muted group transition-all">
              Explore All Intelligence <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article 
              key={post.slug} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-start justify-between bg-white dark:bg-card rounded-3xl border border-border/40 overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(39,112,188,0.15)] transition-all duration-500 group"
            >
              <div className="relative w-full h-64 bg-muted overflow-hidden">
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
                {/* Visual Accent */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-wider text-primary shadow-sm">
                        Tech Analysis
                    </span>
                </div>
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
                  {post.categories && post.categories.slice(0, 1).map((cat: string) => (
                    <div key={cat} className="flex items-center gap-1.5 text-secondary">
                      <BookmarkCheck className="w-3.5 h-3.5" />
                      {cat}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-black leading-tight text-foreground group-hover:text-primary transition-all duration-300 flex-1">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>

                <div className="mt-8 pt-8 border-t border-border/50 flex items-center justify-between group/btn">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Read Case Study</span>
                    <div className="p-2.5 bg-primary/5 rounded-full group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300 transform group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
