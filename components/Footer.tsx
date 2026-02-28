"use client";

import Link from 'next/link';
import { Facebook, Linkedin, Phone, Mail, MapPin, ShieldCheck, ArrowRight, ExternalLink, Twitter, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";

  return (
    <footer className="relative bg-background dark:bg-[#050505] text-foreground dark:text-white overflow-hidden border-t border-border dark:border-white/5 transition-colors duration-300">
      {/* Tactical Multi-Layer Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300">
        <div 
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
          style={{
            backgroundImage: isDark 
              ? `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), 
                 linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`
              : `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), 
                 linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.2] dark:opacity-[0.08]"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(rgba(201, 165, 95, 0.3) 1px, transparent 1px), 
                 linear-gradient(90deg, rgba(201, 165, 95, 0.3) 1px, transparent 1px)`
              : `linear-gradient(rgba(201, 165, 95, 0.15) 1px, transparent 1px), 
                 linear-gradient(90deg, rgba(201, 165, 95, 0.15) 1px, transparent 1px)`,
            backgroundSize: '160px 160px',
            backgroundPosition: '-1px -1px'
          }}
        />
        {/* Scanning Light Effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent animate-scan" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-20 pb-12">
        {/* Newsletter Section */}
        <div className="mb-20 p-8 sm:p-12 rounded-[2.5rem] bg-linear-to-b from-primary/5 dark:from-white/[0.05] to-transparent border border-border dark:border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-md space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground dark:text-white leading-tight">
                Secure Your <span className="text-primary">Intelligence</span>
              </h3>
              <p className="text-muted-foreground dark:text-gray-400 text-sm sm:text-base font-medium leading-relaxed">
                Join our elite network for the latest security briefings, tactical updates, and professional insights.
              </p>
            </div>
            <div className="w-full lg:max-w-md">
              <form className="relative flex items-center p-1.5 bg-background/50 dark:bg-black/40 border border-border dark:border-white/10 rounded-2xl focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 transition-all">
                <Mail className="w-5 h-5 text-muted-foreground dark:text-gray-500 ml-4 shrink-0" />
                <input 
                  type="email" 
                  placeholder="Enter your security clearance email..." 
                  className="bg-transparent border-none focus:ring-0 text-sm font-bold placeholder:text-muted-foreground/50 dark:placeholder:text-gray-600 px-4 py-3 w-full outline-none text-foreground dark:text-white"
                />
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20">
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-[10px] text-muted-foreground/60 dark:text-gray-600 font-bold uppercase tracking-widest text-center lg:text-left ml-2">
                * Zero Spam • Instant Security Updates
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <img 
                src="/assets/images/IMG-20230221-WA0004.jpg" 
                alt="Master Eye Security Logo" 
                className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/30 shadow-2xl group-hover:scale-105 transition-transform" 
              />
              <div className="text-foreground dark:text-white font-black leading-tight">
                 <div className="text-xl tracking-tight">Master Eye</div>
                 <div className="text-[10px] text-primary uppercase tracking-[0.3em] font-black">Security Services</div>
              </div>
            </Link>
            
            <p className="text-muted-foreground dark:text-gray-400 text-lg leading-relaxed max-w-sm">
              Defining your safety and security through professional excellence and state-of-the-art surveillance.
            </p>

            <div className="flex items-center gap-3">
               {[
                 { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", color: "hover:text-primary" },
                 { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", color: "hover:text-blue-400" },
                 { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", color: "hover:text-pink-500" },
                 { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", color: "hover:text-primary" },
                 { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", color: "hover:text-red-500" }
               ].map((item, i) => (
                 <motion.a 
                   key={i}
                   href={item.href}
                   whileHover={{ y: -5, scale: 1.1 }}
                   className={`w-11 h-11 rounded-2xl bg-muted dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center text-muted-foreground dark:text-gray-400 ${item.color} hover:border-border/50 dark:hover:border-white/20 hover:bg-muted/80 dark:hover:bg-white/10 transition-all duration-300 shadow-lg`}
                 >
                   {item.icon}
                 </motion.a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground dark:text-white">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-bold flex items-center group transition-colors">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground dark:text-white">System access</h4>
            <ul className="space-y-4">
              {[
                { name: 'Career Portal', href: 'https://mastereyesecurityserviceslimited.000webhostapp.com/', ext: true },
                { name: 'Employee Login', href: 'https://mastereyesecurityserviceslimited.000webhostapp.com/employee-login.php', ext: true },
                { name: 'Admin Dashboard', href: 'https://mastereyesecurityserviceslimited.000webhostapp.com/admin.php', ext: true }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground dark:text-gray-400 hover:text-secondary text-sm font-bold flex items-center group transition-colors"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-2 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground dark:text-white">Head Office</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground dark:text-gray-300">ABUJA OFFICE</p>
                  <p className="text-sm text-muted-foreground dark:text-gray-500 leading-relaxed">
                    Suit 215, Plot 630, Cadastral Zone A09, Durumi-Area 1, Garki, FCT-Abuja
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground dark:text-gray-300">Email Updates</p>
                  <a href="mailto:mastereyeservices@gmail.com" className="text-sm text-muted-foreground dark:text-gray-500 hover:text-primary dark:hover:text-white transition-colors">
                    mastereyeservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
               <div className="p-4 rounded-2xl bg-muted/50 dark:bg-white/[0.03] border border-border dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground dark:text-gray-400">RC: 1530932</span>
                  </div>
                  <div className="h-4 w-px bg-border dark:bg-white/10" />
                  <span className="text-[10px] font-bold text-secondary uppercase">Licensed in Nigeria</span>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-xs text-muted-foreground font-medium">
             &copy; {new Date().getFullYear()} Master Eye Security Services Limited. All rights reserved.
           </p>
           <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground dark:text-gray-500">
              <Link href="/privacy" className="hover:text-primary dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary dark:hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
