"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden sm:pt-40 sm:pb-48 flex items-center justify-center min-h-[90vh]">
      {/* Background Grid Patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 165, 95, 0.15) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(201, 165, 95, 0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 165, 95, 0.3) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(201, 165, 95, 0.3) 1px, transparent 1px)`,
            backgroundSize: '160px 160px',
            backgroundPosition: '-1px -1px'
          }}
        />
      </div>
      {/* 67hf-Style Wireframe / Spiral Background Overlay */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none opacity-[0.05] dark:opacity-[0.1] overflow-hidden">
        <svg viewBox="0 0 1000 1000" className="w-[150%] h-[150%] max-w-[1200px] animate-spin-slow" style={{ animationDuration: '120s' }}>
          <circle cx="500" cy="500" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 500 0 C 1000 0, 1000 1000, 500 1000 C 0 1000, 0 0, 500 0" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M 0 500 C 0 0, 1000 0, 1000 500 C 1000 1000, 0 1000, 0 500" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center overflow-x-hidden">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] sm:text-sm font-bold text-primary ring-1 ring-inset ring-primary/30 bg-primary/10 shadow-sm mb-8 tracking-wide"
        >
          <ShieldCheck className="w-4 h-4 mr-2 shrink-0" />
          <span className="truncate">Established & Licensed in Nigeria</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-7xl mb-4 max-w-4xl px-2 box-border"
        >
          Master Eye Security
        </motion.h1>

        <motion.h2
          className="text-lg font-black tracking-widest uppercase text-primary sm:text-4xl mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-2"
        >
          <motion.span 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-px w-12 bg-primary/30 hidden sm:block origin-right"
          ></motion.span>
          
          <span className="flex flex-wrap justify-center text-center">
            {"Integrity, Surveillance & Service".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="flex whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.5 + (wordIndex * 5 + charIndex) * 0.05,
                      ease: "easeOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {/* Add spacing between words manually to control wrapping */}
                <span className="inline-block w-2 sm:w-3" />
              </span>
            ))}
          </span>

          <motion.span 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-px w-12 bg-primary/30 hidden sm:block origin-left"
          ></motion.span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground max-w-2xl mx-auto px-4"
        >
          A premium security initiative uniting highly-trained professionals across Nigeria to support businesses, families, and honor community safety through cutting-edge solutions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors flex items-center justify-center group"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Request a Quote
          </Link>
          <Link 
            href="/blog" 
            className="w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-semibold text-foreground ring-1 ring-inset ring-border hover:bg-muted transition-colors flex items-center justify-center group"
          >
            Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
