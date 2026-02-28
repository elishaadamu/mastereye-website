"use client";

import { motion } from "framer-motion";
import { Shield, Eye, UserCheck, ShieldCheck } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      name: 'Surveillance Systems',
      description: 'Advanced CCTV and surveillance networking for your home or business.',
      icon: Eye,
      tag: "Tech-Driven"
    },
    {
      name: 'Manned Guarding',
      description: 'Highly trained professionals ensuring physical security of your assets.',
      icon: Shield,
      tag: "Elite Forces"
    },
    {
      name: 'VIP Protection',
      description: 'Discreet and effective security solutions for high-profile personnel.',
      icon: UserCheck,
      tag: "Close Protection"
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* Decorative background accents for meaning */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs uppercase font-black tracking-widest mb-6"
          >
            <ShieldCheck className="w-3 h-3" />
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-foreground sm:text-6xl"
          >
            Our Professional <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            Focused security solutions tailored to meet the highest standards of safety, surveillance, and personal protection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((feature, index) => (
            <motion.div 
              key={feature.name} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col bg-background p-10 rounded-[3rem] shadow-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group overflow-hidden"
            >
              {/* Decorative Corner Shape */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 mb-8 w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg]">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              
              <div className="relative z-10 flex-grow">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-2 block">{feature.tag}</span>
                <h3 className="text-2xl font-black leading-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.name}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground mb-8">
                  {feature.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">Explore More</span>
                <ShieldCheck className="w-5 h-5 text-primary/30 group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
