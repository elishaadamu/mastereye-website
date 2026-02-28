"use client";

import Link from 'next/link';
import { Facebook, Linkedin, Phone, Mail, MapPin, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden border-t border-white/5">
      {/* Tactical Multi-Layer Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 165, 95, 0.2) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(201, 165, 95, 0.2) 1px, transparent 1px)`,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <img 
                src="/assets/images/IMG-20230221-WA0004.jpg" 
                alt="Master Eye Security Logo" 
                className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/30 shadow-2xl group-hover:scale-105 transition-transform" 
              />
              <div className="text-white font-black leading-tight">
                 <div className="text-xl tracking-tight">Master Eye</div>
                 <div className="text-[10px] text-primary uppercase tracking-[0.3em] font-black">Security Services</div>
              </div>
            </Link>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Defining your safety and security through professional excellence and state-of-the-art surveillance.
            </p>

            <div className="flex items-center gap-4">
               {[
                 { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
                 { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
                 { icon: <Phone className="w-5 h-5" />, href: "tel:07049308993" }
               ].map((item, i) => (
                 <motion.a 
                   key={i}
                   href={item.href}
                   whileHover={{ y: -3, scale: 1.1 }}
                   className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all"
                 >
                   {item.icon}
                 </motion.a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary text-sm font-bold flex items-center group transition-colors">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">System access</h4>
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
                    className="text-gray-400 hover:text-secondary text-sm font-bold flex items-center group transition-colors"
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
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">Head Office</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-300">ABUJA OFFICE</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Suit 215, Plot 630, Cadastral Zone A09, Durumi-Area 1, Garki, FCT-Abuja
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-300">Email Updates</p>
                  <a href="mailto:mastereyeservices@gmail.com" className="text-sm text-gray-500 hover:text-white transition-colors">
                    mastereyeservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
               <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">RC: 1530932</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <span className="text-[10px] font-bold text-secondary uppercase">Licensed in Nigeria</span>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-xs text-gray-500 font-medium">
             &copy; {new Date().getFullYear()} Master Eye Security Services Limited. All rights reserved.
           </p>
           <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
