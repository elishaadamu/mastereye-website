"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, Globe } from 'lucide-react';
import { GridBackground } from "@/components/GridBackground";

export default function Contact() {
  return (
    <GridBackground>
      <div className="pt-32 pb-24">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-5xl font-black tracking-tight text-foreground sm:text-7xl mb-8">
              Let's Talk <span className="text-primary">Safety</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experts are ready to design a security strategy that fits your unique needs. Connect with us today.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-12">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="space-y-8"
               >
                 <div className="flex gap-6 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground mb-2">Call Operations</h3>
                      <p className="text-muted-foreground mb-3 text-sm">Our command center is available for enquiries.</p>
                      <div className="space-y-1">
                        <a href="tel:07049308993" className="block text-lg font-black text-primary hover:tracking-wide transition-all">07049308993</a>
                        <a href="tel:07062094716" className="block text-lg font-black text-primary hover:tracking-wide transition-all">07062094716</a>
                      </div>
                    </div>
                 </div>

                 <div className="flex gap-6 items-start group text-foreground">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:rotate-6">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground mb-2">Email Correspondence</h3>
                      <p className="text-muted-foreground mb-3 text-sm">Send us detailed requirements via email.</p>
                      <a href="mailto:mastereyeservices@gmail.com" className="text-lg font-black text-secondary hover:tracking-wide transition-all italic-not-really">mastereyeservices@gmail.com</a>
                    </div>
                 </div>

                 <div className="flex gap-6 items-start group text-foreground">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground mb-2">Headquarters</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                        Suit 215, Plot 630, Cadastral Zone A09, Durumi-Area 1, Garki, FCT-Abuja, Nigeria.
                      </p>
                    </div>
                 </div>
               </motion.div>

               <div className="p-8 rounded-[2.5rem] bg-muted/30 border border-border/50 relative overflow-hidden">
                  <div className="relative z-10 flex items-center gap-4">
                    <Globe className="w-10 h-10 text-primary opacity-20" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Coverage</p>
                      <p className="font-bold">Active in Abuja, Lagos, Jos, and Delta.</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-10 sm:p-16 rounded-[4rem] bg-card border border-border shadow-2xl shadow-primary/5 relative"
               >
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Full Name</label>
                        <input 
                          id="name"
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Email Address</label>
                        <input 
                          id="email"
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                       <label htmlFor="service" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Service Required</label>
                       <select id="service" className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium appearance-none">
                          <option>Manned Guarding</option>
                          <option>CCTV Surveillance</option>
                          <option>VIP Protection</option>
                          <option>Corporate Security</option>
                       </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-4">Message</label>
                      <textarea 
                        id="message"
                        rows={6}
                        placeholder="Tell us about your security needs..." 
                        className="w-full bg-muted/50 border border-border/50 rounded-3xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      aria-label="Send your security request"
                      className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 group"
                    >
                       Secure Your Request
                       <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </form>
               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </GridBackground>
  );
}
