"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import Image from "next/image";
import { Camera } from "lucide-react";
import { GalleryImage } from "@/lib/gallery";
import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";

export default function GalleryView({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return (
      <GridBackground>
        <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center">
          <Camera className="w-16 h-16 text-primary/30 mb-6" />
          <h2 className="text-2xl font-black text-foreground mb-4">No Images Found</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Add images to the <kbd className="bg-muted px-2 py-1 rounded">public/assets/gallery</kbd> folder to see them here.
          </p>
        </div>
      </GridBackground>
    );
  }

  return (
    <GridBackground>
      <div className="pt-32 pb-24 min-h-screen">
        {/* Header Section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-3xl flex items-center justify-center transform -rotate-12 shadow-inner">
                <Camera className="w-8 h-8" />
              </div>
            </div>
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Operations</span>
            <h1 className="text-5xl font-black tracking-tight text-foreground sm:text-7xl mb-6 leading-[1.1]">
              Visual <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8">Gallery</span>
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-medium">
              Explore Master Eye Security Services in action. From advanced surveillance technology to our elite manned guarding personnel across Nigeria.
            </p>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {images.map((img, i) => (
              <motion.div
                key={img.src} // using src to ensure unique key across renders
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.1 }} // cap staggered delay to max out at 0.5s chunks
                onClick={() => setSelectedIndex(i)}
                className={`cursor-pointer relative rounded-3xl overflow-hidden group bg-card border border-border hover:border-primary shadow-sm hover:shadow-xl transition-all ${img.span}`}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                  <span className="text-white font-black tracking-widest uppercase text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </span>
                </div>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Lightbox images={images} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </GridBackground>
  );
}
