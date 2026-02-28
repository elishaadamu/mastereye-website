"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield, Home, Info, Briefcase, FileText, PhoneCall, ExternalLink } from 'lucide-react';
import Search from '@/components/Search';
import { ThemeToggle } from '@/components/ThemeToggle';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalsOpen, setIsPortalsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About Us', href: '/about', icon: <Info className="w-4 h-4" /> },
    { name: 'Services', href: '/services', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/50 transition-all duration-300">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] dark:opacity-[0.1]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 165, 95, 0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(201, 165, 95, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand (Left) */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                <img src="/assets/images/IMG-20230221-WA0004.jpg" alt="Master Eye Security Logo" className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20 shadow-md group-hover:ring-primary transition-all duration-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-background animate-pulse" />
              </div>
              <div className="hidden lg:block text-foreground font-black leading-none transform ">
                 <div className="text-lg tracking-tight group-hover:text-primary transition-colors">Master Eye</div>
                 <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black group-hover:text-foreground transition-colors mt-0.5">Security Services</div>
              </div>
            </Link>
          </div>

          {/* Navigation Links (Desktop Centered) */}
          <div className="hidden md:flex items-center p-1 bg-muted/30 border border-border/50 rounded-full absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                aria-label={link.name}
                className={`relative px-5 py-2.5 rounded-full flex items-center text-xs font-black uppercase tracking-widest transition-all duration-300 ${isActive(link.href) ? 'text-white' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
              >
                {isActive(link.href) && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
            
            {/* Portals Dropdown */}
            <div className="relative group flex items-center">
              <button className="px-5 py-2.5 rounded-full flex items-center text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300">
                Portals
                <ChevronDown className="ml-1.5 w-3 h-3 text-muted-foreground group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-[100%] left-0 w-52 bg-card/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl opacity-0 translate-y-2 group-hover:opacity-100 invisible group-hover:visible group-hover:translate-y-1 transition-all duration-300 overflow-hidden">
                 <div className="p-2 space-y-1">
                   {[
                     { name: 'Apply Portal', href: 'https://mastereyesecurityserviceslimited.000webhostapp.com/' },
                     { name: 'Admin Login', href: 'https://mastereyesecurityserviceslimited.000webhostapp.com/employee-login.php' },
                     { name: 'Employee Login', href: 'https://mastereyesecurityserviceslimited.000webhostapp.com/admin.php' }
                   ].map((item, i) => (
                     <a 
                      key={i}
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-card-foreground hover:bg-primary hover:text-white transition-all duration-200 group/item"
                    >
                      {item.name}
                      <ExternalLink className="w-3 h-3 opacity-30 group-hover/item:opacity-100 transition-opacity" />
                    </a>
                   ))}
                 </div>
              </div>
            </div>
          </div>

          {/* Right side actions (Search & Theme) Desktop */}
          <div className="hidden md:flex items-center space-x-3">
             <div className="flex items-center bg-muted/40 border border-border/50 rounded-full px-2 py-1.5 shadow-inner">
               <Search />
               <div className="w-px h-4 bg-border/50 mx-1.5" />
               <ThemeToggle />
             </div>
             <Link href="/contact" className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white text-[10px] font-black uppercase tracking-widest hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/20">
                <Shield className="w-3 h-3" />
                Secure Now
             </Link>
          </div>

          {/* Mobile Interactions */}
          <div className="flex md:hidden items-center space-x-3">
            <div className="flex items-center bg-muted/40 border border-border/50 rounded-full px-1.5 py-1">
              <Search />
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary transition-all duration-300"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-10 space-y-2">
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    aria-label={`Navigate to ${link.name}`}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${isActive(link.href) ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-muted-foreground hover:bg-muted active:scale-[0.98]'}`}
                  >
                    <div className={`${isActive(link.href) ? 'text-white' : 'text-primary'}`}>{link.icon}</div>
                    {link.name}
                    {isActive(link.href) && <motion.div layoutId="mobileDot" className="ml-auto w-2 h-2 bg-white rounded-full" />}
                  </Link>
                ))}
              </div>

              {/* Mobile Portals Section */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <button 
                  onClick={() => setIsPortalsOpen(!isPortalsOpen)}
                  className={`w-full flex justify-between items-center px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${isPortalsOpen ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted'}`}
                >
                  <div className="flex items-center gap-4">
                    <Shield className="w-4 h-4 text-secondary" />
                    Access Portals
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPortalsOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isPortalsOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 space-y-1 overflow-hidden"
                    >
                      {[
                        { name: 'Apply Portal', href: 'https://mastereyesecurityserviceslimited.000webhostapp.com/' },
                        { name: 'Admin Login', href: 'https://mastereyesecurityserviceslimited.000webhostapp.com/employee-login.php' },
                        { name: 'Employee Login', href: 'https://mastereyesecurityserviceslimited.000webhostapp.com/admin.php' }
                      ].map((item, i) => (
                        <a 
                          key={i}
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-between ml-10 mr-4 px-6 py-3.5 rounded-xl text-xs font-bold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                        >
                          {item.name}
                          <ExternalLink className="w-3 h-3 opacity-30" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Footer Decor */}
              <div className="mt-8 px-6 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
                <span>RC: 1530932</span>
                <span>Licensed in Nigeria</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
