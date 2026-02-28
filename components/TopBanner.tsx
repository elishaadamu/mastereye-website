"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Phone, ShieldCheck, ArrowRight, Facebook, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export function TopBanner() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";

  return (
    <div className="relative overflow-hidden bg-background dark:bg-[#0a0a0a] border-b border-border/40 dark:border-white/5 z-60 transition-colors duration-300">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] dark:opacity-[0.1]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                 linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`
              : `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), 
                 linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Animated gradient light effect */}
      <motion.div 
        animate={{ 
          x: ["-100%", "100%"],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear",
          repeatDelay: 2
        }}
        className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent w-1/2 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 gap-4">
          
          {/* Left: Licensed & Newsletter */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-bold text-muted-foreground dark:text-gray-300 uppercase tracking-wider">Licensed Personnel</span>
            </div>
            <div className="h-3 w-px bg-border dark:bg-white/10 mx-1" />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-tight hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-3 h-3" />
              Intelligence Briefings
            </motion.button>
          </div>

          {/* Center: Message (Always visible, simpler on mobile) */}
          <div className="flex-1 flex justify-center">
            <p className="text-[9px] xs:text-xs font-medium tracking-wide text-muted-foreground dark:text-gray-400 uppercase text-center">
              <span className="text-foreground dark:text-white hidden xs:inline">Premium</span> Security — <span className="text-primary">Affordable Rates</span>
            </p>
          </div>

          {/* Right: Socials + Phone */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-3 mr-2">
              <a href="https://facebook.com" aria-label="Follow us on Facebook" className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-all hover:scale-110">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" aria-label="Follow us on LinkedIn" className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-all hover:scale-110">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" aria-label="Follow us on Twitter" className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-all hover:scale-110">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" aria-label="Follow us on Instagram" className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-all hover:scale-110">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="h-3 w-px bg-border dark:bg-white/10 hidden lg:block" />

            {/* Phone CTA */}
            <motion.a 
              href="tel:07049308993"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 bg-muted dark:bg-white/5 hover:bg-muted/80 dark:hover:bg-white/10 px-3 py-1 rounded-full border border-border dark:border-white/10 transition-colors"
            >
              <Phone className="w-3 h-3 text-primary" />
              <span className="text-[10px] sm:text-xs font-bold text-foreground dark:text-white tabular-nums">
                07049308993
              </span>
            </motion.a>
          </div>

        </div>
      </div>
    </div>
  );
}
