"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, MessageSquareQuote } from "lucide-react";

export function ReviewPlatformsSection() {
  return (
    <section className="py-10 bg-card/10 relative overflow-hidden border-t border-border/40 my-10 rounded-[4rem]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <div className="flex justify-center mb-6">
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-black tracking-widest">
               <MessageSquareQuote className="w-3.5 h-3.5 fill-primary" />
               Leave Feedback
             </div>
           </div>
           <h2 className="text-4xl font-black text-foreground sm:text-5xl tracking-tight leading-none mb-6">
             Rate Our <span className="text-primary underline decoration-primary/20 decoration-4 underline-offset-8">Services</span>
           </h2>
           <p className="text-muted-foreground font-medium text-lg">
             Your feedback helps us continuously improve our security operations. Please consider leaving us a review on your preferred platform.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Trustpilot Review Box */}
          <motion.a
            href="https://www.trustpilot.com/review/mastereyesecurityservicesltd.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-10 rounded-[3rem] bg-background border border-border/50 hover:border-[#00b67a]/50 hover:shadow-2xl hover:shadow-[#00b67a]/10 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center text-center"
          >
            <div className="absolute inset-0 bg-linear-to-b from-[#00b67a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-4 relative z-10 w-full flex items-center justify-center">
              {/* TrustBox widget - Review Collector */}
              <div 
                className="trustpilot-widget w-full flex justify-center" 
                data-locale="en-US" 
                data-template-id="56278e9abfbbba0bdcd568bc" 
                data-businessunit-id="69a434f3e7d07b31f773b18d" 
                data-style-height="52px" 
                data-style-width="100%" 
                data-token="062f97d3-d6f1-4e8d-a6c6-59c62f95ed61"
              >
                <a href="https://www.trustpilot.com/review/mastereyesecurityservicesltd.com.ng" target="_blank" rel="noopener noreferrer">Trustpilot</a>
              </div>
              {/* End TrustBox widget */}
            </div>
            
            <p className="text-sm text-muted-foreground z-10 mb-8 font-medium">Verified Client Feedback</p>
            
            <div className="mt-auto flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#00b67a]/10 text-[#00b67a] text-xs font-black uppercase tracking-widest group-hover:bg-[#00b67a] group-hover:text-white transition-all z-10">
              Leave a Review <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>

          {/* Google Maps Review Box */}
          <motion.a
            href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative p-10 rounded-[3rem] bg-background border border-border/50 hover:border-[#4285F4]/50 hover:shadow-2xl hover:shadow-[#4285F4]/10 transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-linear-to-b from-[#4285F4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-8 relative z-10 flex items-center justify-center gap-3">
              <svg viewBox="0 0 488 512" className="w-10 h-10">
                <path fill="#4285F4" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
              </svg>
              <span className="text-3xl font-black tracking-tight text-foreground">Google</span>
            </div>
            
            <div className="flex gap-1.5 mb-6 z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#FBBC05] fill-[#FBBC05]" />
              ))}
            </div>
            
            <p className="text-lg font-bold text-foreground z-10 mb-2">5.0 Star Rating</p>
            <p className="text-sm text-muted-foreground z-10 mb-8 font-medium">Check our Google Maps profile</p>
            
            <div className="mt-auto flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#4285F4]/10 text-[#4285F4] text-xs font-black uppercase tracking-widest group-hover:bg-[#4285F4] group-hover:text-white transition-all z-10">
              Write a Review <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
