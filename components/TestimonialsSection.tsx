"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { testimonials } from "@/lib/types";
import { useState, useEffect, useCallback } from "react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, next]);

  useEffect(() => {
    const updateItems = () => {
      // Laptop/Desktop: 3 per view
      // Mobile: ~1.2 per view for the peek effect
      if (window.innerWidth < 1024) setItemsToShow(1.2); 
      else setItemsToShow(3);
    };
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden transition-all duration-500">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <div className="max-w-2xl text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-black tracking-widest mb-6"
              >
                <Star className="w-3 h-3 fill-primary" />
                Wall of Proof
              </motion.div>
              <h2 className="text-4xl font-black text-foreground sm:text-6xl tracking-tight leading-none">
                Trust From <br />
                <span className="text-primary italic-not-really">Verified</span> Clients
              </h2>
           </div>

           <div className="flex items-center gap-3 self-center md:self-end">
              <button 
                onClick={() => { prev(); setIsAutoPlay(false); }}
                className="p-4 rounded-2xl bg-background border border-border/50 hover:border-primary hover:text-primary transition-all shadow-sm active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => { next(); setIsAutoPlay(false); }}
                className="p-4 rounded-2xl bg-background border border-border/50 hover:border-primary hover:text-primary transition-all shadow-sm active:scale-95"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
           </div>
        </div>

        <div className="relative overflow-visible">
          <div className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" 
               style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
            {testimonials.map((test, i) => (
              <div 
                key={i} 
                className="shrink-0"
                style={{ width: itemsToShow === 3 ? 'calc(33.333% - 16px)' : 'calc(80% - 12px)' }}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <motion.div
                  className="h-full p-8 md:p-10 rounded-[3.5rem] bg-card border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group relative flex flex-col"
                >
                  <Quote className="absolute top-10 right-10 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
                  
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, starI) => (
                      <Star 
                        key={starI} 
                        className={`w-3.5 h-3.5 ${starI < test.rating ? 'fill-secondary text-secondary' : 'text-muted'}`} 
                      />
                    ))}
                    <span className="ml-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{test.source}</span>
                  </div>

                  <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-10 flex-1 italic-ish">
                    "{test.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-8 border-t border-border/40 mt-auto">
                    <div className="relative shrink-0">
                        <img src={test.image} alt={test.name} className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1 text-white border-2 border-card">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-black text-foreground group-hover:text-primary transition-colors">{test.name}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest line-clamp-1">{test.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-12 gap-2">
            {testimonials.slice(0, Math.ceil(testimonials.length - itemsToShow + 1)).map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setIsAutoPlay(false); }}
                className="py-4 px-1 group focus:outline-none"
                aria-label={`Go to testimonial slide ${i + 1}`}
              >
                <div 
                  className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-primary' : 'w-1.5 bg-border group-hover:bg-primary/50'}`}
                />
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
