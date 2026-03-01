"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import { GalleryImage } from "@/lib/gallery";
import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";

export function GallerySection({ images = [] }: { images?: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border-y border-border/40 bg-card/10 my-24 overflow-hidden rounded-[4rem]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center -rotate-6 shadow-inner">
              <Camera className="w-5 h-5" />
            </div>
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">In Action</span>
          </div>
          <h2 className="text-4xl font-black text-foreground sm:text-5xl leading-tight tracking-tight">
            Security <span className="text-primary underline decoration-primary/20 decoration-4 underline-offset-8">Gallery</span>
          </h2>
        </div>
        
        <Link 
          href="/gallery" 
          className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all hover:pr-6 hover:shadow-lg hover:shadow-primary/20"
        >
          View Full Gallery
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setSelectedIndex(i)}
            className={`cursor-pointer relative h-64 rounded-3xl overflow-hidden group border border-border/50 hover:border-primary/50 transition-all`}
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-5">
              <span className="text-white font-black tracking-widest uppercase text-[10px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {img.alt}
              </span>
            </div>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </motion.div>
        ))}
      </div>

      <Lightbox images={images} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </section>
  );
}
