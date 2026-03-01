"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/lib/gallery";
import { useEffect } from "react";

export function Lightbox({
  images,
  selectedIndex,
  setSelectedIndex,
}: {
  images: GalleryImage[];
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
}) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((selectedIndex + 1) % images.length);
      if (e.key === "ArrowLeft") setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length, setSelectedIndex]);

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-3xl"
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 p-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all z-50 focus:outline-hidden"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 md:left-6 p-3 md:p-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all z-50 focus:outline-hidden"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-[70vh] md:h-[85vh] max-w-6xl mx-16 md:mx-24"
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain rounded-2xl"
              sizes="100vw"
              quality={100}
              priority
            />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full hidden sm:block">
              <span className="text-white font-black tracking-widest uppercase text-xs whitespace-nowrap">
                {images[selectedIndex].alt}
              </span>
            </div>
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((selectedIndex + 1) % images.length);
            }}
            className="absolute right-4 md:right-6 p-3 md:p-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all z-50 focus:outline-hidden"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
