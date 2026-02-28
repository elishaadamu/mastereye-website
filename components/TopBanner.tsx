"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, ArrowRight, Facebook, Linkedin, Mail } from "lucide-react";

export function TopBanner() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] border-b border-white/5 z-60">
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
          
          {/* Left: Social Links (Hidden on small mobile) */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://facebook.com" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <div className="h-3 w-px bg-white/10 mx-1" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Licensed</span>
            </div>
          </div>

          {/* Center: Message (Always visible, simpler on mobile) */}
          <div className="flex-1 flex justify-center">
            <p className="text-[9px] xs:text-xs font-medium tracking-wide text-gray-400 uppercase text-center">
              <span className="text-white hidden xs:inline">Premium</span> Security — <span className="text-primary">Affordable Rates</span>
            </p>
          </div>

          {/* Right: Actions (Newsletter + Phone) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Newsletter Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-tight hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-3 h-3" />
              Newsletter
            </motion.button>

            <div className="h-3 w-px bg-white/10 hidden md:block" />

            {/* Phone CTA */}
            <motion.a 
              href="tel:07049308993"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10 transition-colors"
            >
              <Phone className="w-3 h-3 text-primary" />
              <span className="text-[10px] sm:text-xs font-bold text-white tabular-nums">
                07049308993
              </span>
            </motion.a>
          </div>

        </div>
      </div>
    </div>
  );
}
