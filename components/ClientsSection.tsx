"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, MapPin, Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { abujaClients, josClients } from "@/lib/types";

export function ClientsSection() {
  const [activeTab, setActiveTab] = useState<'abuja' | 'jos'>('abuja');

  const displayedAbuja = abujaClients.slice(0, 5);
  const displayedJos = josClients.slice(0, 5);

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Decorative Branding Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase font-black tracking-widest mb-6"
          >
            <ShieldCheck className="w-3 h-3" />
            Our Verified Portfolio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-foreground sm:text-6xl mb-6"
          >
            Clients using our <span className="text-primary italic-not-really leading-none">Services</span>
          </motion.h2>
          
          {/* Tab Switcher */}
          <div className="flex p-1 bg-background rounded-full border border-border shadow-sm mt-8">
            <button 
              onClick={() => setActiveTab('abuja')}
              className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'abuja' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Abuja Operations
            </button>
            <button 
              onClick={() => setActiveTab('jos')}
              className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'jos' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Jos Operations
            </button>
          </div>
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {(activeTab === 'abuja' ? displayedAbuja : displayedJos).map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="group bg-background p-6 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl flex items-center gap-4 relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Building2 className="w-16 h-16" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors pr-4">
                {client}
              </span>
            </motion.div>
          ))}
          
          {/* View More Card */}
          <Link 
            href="/about#clients" 
            className="group bg-primary text-white p-6 rounded-[2rem] border border-primary hover:bg-primary/90 transition-all hover:shadow-2xl flex flex-col items-center justify-center gap-4 relative overflow-hidden"
          >
             <div className="text-xs font-black uppercase tracking-widest leading-none">View All {activeTab === 'abuja' ? abujaClients.length : josClients.length} Clients</div>
             <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        {/* Dynamic Proof Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-border/50 flex flex-col sm:row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
              <Search className="w-5 h-5" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Actively monitoring and securing <span className="text-foreground font-black">40+ Premium Locations</span> in Nigeria.
            </p>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">
            Master Eye Security Portfolio • 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
