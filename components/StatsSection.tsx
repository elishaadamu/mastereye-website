"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Shield, Users, Award, Trophy, Globe, Activity } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function StatsSection() {
  const stats = [
    { name: 'Professional Guards', value: 500, suffix: '+', icon: <Shield className="w-5 h-5" />, color: "from-blue-500/20" },
    { name: 'Corporate Clients', value: 20, suffix: '+', icon: <Users className="w-5 h-5" />, color: "from-emerald-500/20" },
    { name: 'Years of Excellence', value: 15, suffix: '+', icon: <Award className="w-5 h-5" />, color: "from-amber-500/20" },
    { name: 'Security Awards', value: 3, suffix: '', icon: <Trophy className="w-5 h-5" />, color: "from-purple-500/20" },
    { name: 'States Covered', value: 5, suffix: '', icon: <Globe className="w-5 h-5" />, color: "from-rose-500/20" },
  ];

  return (
    <section className="bg-[#c9a55f] dark:bg-[#030303] py-24 sm:py-32 relative overflow-hidden transition-colors duration-500 border-y border-black/5 dark:border-white/5">
      {/* Background patterns - Subtle grid for texture */}
      <div className="absolute inset-0 z-0 opacity-[0.1] dark:opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="statGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#statGrid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Section Heading */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 dark:bg-primary/10 border border-black/10 dark:border-primary/20 text-[10px] font-black text-black dark:text-primary uppercase tracking-[0.3em]">
                <Activity className="w-3 h-3 animate-pulse" />
                Live Network Data
              </div>
              <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-black dark:text-white leading-none">
                Our <span className="text-white dark:text-primary underline decoration-black/20 dark:decoration-transparent">Impact</span> <br />
                In <span className="text-black/40 dark:text-white/40">Real-Time</span>
              </h2>
              <p className="text-black/70 dark:text-gray-400 text-lg leading-relaxed max-w-md font-medium">
                Master Eye Security monitors and protects critical infrastructure across Nigeria with <span className="text-black dark:text-white underline decoration-black/20 decoration-2">data-driven precision</span>.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.name} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative p-8 rounded-[2.5rem] bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-primary/50 transition-all duration-500 overflow-hidden ${index === 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-black/10 dark:bg-white/5 rounded-2xl text-black dark:text-primary group-hover:scale-110 group-hover:bg-black dark:group-hover:bg-primary group-hover:text-white dark:group-hover:text-white transition-all duration-300">
                          {stat.icon}
                        </div>
                        <dt className="text-xs font-black uppercase tracking-[0.2em] text-black/50 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                          {stat.name}
                        </dt>
                      </div>
                      
                      <dd className="text-6xl font-black tracking-tighter text-black dark:text-white tabular-nums flex items-baseline gap-1">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </dd>
                    </div>
                    
                    {/* Decorative Technical Corner */}
                    <div className="h-10 w-10 border-t-2 border-r-2 border-black/10 dark:border-white/10 rounded-tr-2xl group-hover:border-black dark:group-hover:border-primary transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
