"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users, Award, MapPin, Building2, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import { GridBackground } from "@/components/GridBackground";
import { abujaClients, josClients } from "@/lib/types";
import dynamic from 'next/dynamic';
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection').then(mod => mod.TestimonialsSection), { ssr: true });
const StatsSection = dynamic(() => import('@/components/StatsSection').then(mod => mod.StatsSection), { ssr: true });

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "15+" },
    { label: "Security Operatives", value: "500+" },
    { label: "States Covered", value: "5+" },
    { label: "Corporate Clients", value: "20+" },
  ];

  const coreValues = [
    { 
      title: "People First", 
      desc: "We hire hardworking, honest and result-oriented team members who embody our security protocols with discipline.", 
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-500/10 text-blue-500"
    },
    { 
      title: "Service Excellence", 
      desc: "World class service delivery driven by exceptional team spirit and continuous professional training.", 
      icon: <Award className="w-8 h-8" />,
      color: "bg-emerald-500/10 text-emerald-500"
    },
    { 
      title: "Lasting Relationships", 
      desc: "Nurturing deep, long-lasting interactions with our valued clients through transparency and reliability.", 
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-amber-500/10 text-amber-500"
    }
  ];

  return (
    <GridBackground>
      <div className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Identity</span>
            <h1 className="text-5xl font-black tracking-tight text-foreground sm:text-7xl mb-8 leading-[1.1]">
              Defining Your Safety <br />
              <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8">Since 2015</span>
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-medium">
              Master Eye Security Services Limited (MESSL) is a premier 100% Nigerian-owned security firm. We achieve service distinction through rigorous professional standards and cutting-edge surveillance technology.
            </p>
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-[3.5rem] bg-card border border-border group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                <Target className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12 shadow-inner">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-foreground mb-6 tracking-tight">The Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  To be a world class private security company renowned for superior quality and unwavering reliability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-[3.5rem] bg-primary text-primary-foreground shadow-2xl overflow-hidden group"
            >
               <Shield className="absolute -bottom-10 -right-10 w-64 h-64 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000" />
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-white/10 text-white rounded-3xl flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-primary transition-all transform group-hover:-rotate-12 shadow-xl">
                  <Shield className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black mb-6 tracking-tight">The Mission</h2>
                <p className="text-lg opacity-90 leading-relaxed font-medium">
                  To render premium security services via exemplary corporate governance and adherence to sound ethical standards.
                </p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Stats */}
        <div className="mb-32">
          <StatsSection />
        </div>

        {/* Core Values */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 mb-32">
           <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
              <div className="max-w-xl">
                <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Foundational DNA</span>
                <h2 className="text-4xl font-black text-foreground sm:text-6xl leading-tight">Our Core <span className="text-primary italic-not-really">Values</span></h2>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {coreValues.map((val, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="relative p-10 rounded-[4rem] bg-card border border-border hover:border-primary transition-all duration-500 overflow-hidden group shadow-sm"
               >
                 <div className={`w-14 h-14 ${val.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                   {val.icon}
                 </div>
                 <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary">{val.title}</h3>
                 <p className="text-muted-foreground leading-relaxed font-medium">{val.desc}</p>
               </motion.div>
             ))}
           </div>
        </section>

        {/* Testimonials Integrated */}
        <TestimonialsSection />

        {/* Full Clients Section */}
        <section id="clients" className="mx-auto max-w-7xl px-6 lg:px-8 py-32 bg-primary/3 dark:bg-white/1 rounded-[5rem] my-24 border border-border/40 scroll-mt-32">
           <div className="text-center mb-20">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Reach</span>
              <h2 className="text-5xl font-black text-foreground tracking-tight">Detailed Client <span className="text-primary underline opacity-80 decoration-primary/20">Portfolio</span></h2>
              <p className="text-muted-foreground mt-4 font-medium italic">Verified active security operations across Nigeria.</p>
           </div>

           <div className="space-y-24">
              {/* Abuja Group */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                   <div className="h-0.5 flex-1 bg-linear-to-r from-transparent to-primary/20" />
                   <h3 className="text-2xl font-black uppercase tracking-widest text-primary flex items-center gap-3">
                      <MapPin className="w-6 h-6" />
                      Abuja Operations
                   </h3>
                   <div className="h-0.5 flex-1 bg-linear-to-l from-transparent to-primary/20" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                   {abujaClients.map((client, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary transition-all group">
                         <CheckCircle2 className="w-4 h-4 text-primary shrink-0 opacity-40 group-hover:opacity-100" />
                         <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">{client}</span>
                      </div>
                   ))}
                </div>
              </div>

              {/* Jos Group */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                   <div className="h-0.5 flex-1 bg-linear-to-r from-transparent to-secondary/20" />
                   <h3 className="text-2xl font-black uppercase tracking-widest text-secondary flex items-center gap-3">
                      <Building2 className="w-6 h-6" />
                      Jos Operations
                   </h3>
                   <div className="h-0.5 flex-1 bg-linear-to-l from-transparent to-secondary/20" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                   {josClients.map((client, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-secondary transition-all group">
                         <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 opacity-40 group-hover:opacity-100" />
                         <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">{client}</span>
                      </div>
                   ))}
                </div>
              </div>
           </div>
        </section>

        {/* Closing Quote */}
        <section className="mx-auto max-w-4xl px-6 lg:px-8 text-center py-20 bg-primary/3 rounded-[5rem] border border-primary/5">
           <Quote className="w-12 h-12 text-primary/20 mx-auto mb-8" />
           <p className="text-2xl sm:text-3xl font-black text-foreground leading-relaxed tracking-tight mb-4 italic">
            "Effective security is built on trust, intelligence, and unwavering discipline. We provide that foundation."
           </p>
           <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Master Eye Personnel</p>
        </section>
      </div>
    </GridBackground>
  );
}

// Fixed build dependency
import Link from "next/link";
