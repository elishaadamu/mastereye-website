"use client";

import { motion } from "framer-motion";
import { Eye, Shield, UserCheck, ShieldCheck, Zap, Camera, Lock, Search } from "lucide-react";
import { GridBackground } from "@/components/GridBackground";

export default function ServicesPage() {
  const services = [
    {
      title: "Electronic Surveillance",
      desc: "Comprehensive CCTV installation, monitoring, and maintenance. We use 4K high-definition cameras with night vision and remote access capabilities.",
      icon: <Camera className="w-10 h-10" />,
      features: ["Real-time Monitoring", "Remote Access", "Motion Detection", "Cloud Storage"]
    },
    {
      title: "Manned Guarding",
      desc: "Professional security operatives trained in crowd control, conflict resolution, and emergency response. Our guards are vetted and highly disciplined.",
      icon: <Users className="w-10 h-10" />,
      features: ["24/7 Deployment", "Regular Patrols", "Access Control", "Incidence Reporting"]
    },
    {
      title: "VIP Protection",
      desc: "Executive protection services for high-profile individuals. Discreet, highly skilled armed or unarmed bodyguards tailored to your itinerary.",
      icon: <UserCheck className="w-10 h-10" />,
      features: ["Secure Transportation", "Threat Assessment", "Route Planning", "Discreet Security"]
    },
    {
       title: "Corporate Security",
       desc: "End-to-end security solutions for offices, industrial sites, and construction projects. We manage complex security ecosystems efficiently.",
       icon: <ShieldCheck className="w-10 h-10" />,
       features: ["Site Surveys", "Risk Management", "Policy Development", "Tech Integration"]
    }
  ];

  return (
    <GridBackground>
      <div className="pt-32 pb-24">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
            <h1 className="text-5xl font-black tracking-tight text-foreground sm:text-7xl mb-8">
              Professional <span className="text-primary">Shielding</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide a spectrum of security solutions designed to meet the rigorous demands of modern safety requirements in Nigeria.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[3.5rem] bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl overflow-hidden relative"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                     {service.icon}
                  </div>
                  <h2 className="text-3xl font-black mb-6">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm font-bold text-foreground/80">
                        <Zap className="w-4 h-4 text-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 lg:px-8">
           <div className="bg-primary text-primary-foreground rounded-[4rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
              <Shield className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.05]" />
              <h2 className="text-4xl sm:text-5xl font-black mb-6 relative z-10">Ready to Secure Your World?</h2>
              <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto relative z-10">
                Contact our experts today for a personalized security assessment and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                 <button className="bg-white text-primary font-black px-10 py-5 rounded-full hover:bg-gray-100 transition-colors">Request Quote</button>
                 <button className="bg-primary-foreground/10 border border-white/20 text-white font-black px-10 py-5 rounded-full hover:bg-white/10 transition-colors">Call Support</button>
              </div>
           </div>
        </section>
      </div>
    </GridBackground>
  );
}

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
