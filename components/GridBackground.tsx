"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";

  return (
    <div className="relative w-full min-h-screen">
      <div 
        className="absolute inset-0 z-[-1] min-h-screen w-full transition-colors duration-1000"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)'
            : 'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '100px 100px', // large square grid similar to 67hf
        }}
      >
        {/* Soft edge fade for the grid */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] mask-[radial-gradient(ellipse_at_center,transparent_20%,black_100%)]" />
      </div>
      {children}
    </div>
  );
}
