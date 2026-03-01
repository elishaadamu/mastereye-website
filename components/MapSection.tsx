"use client";

import { motion } from "framer-motion";

export function MapSection() {
  return (
    <section className="bg-muted/30 py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs">Our Location</span>
            <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Find our <span className="text-primary">Headquarters</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              We operate from strategic locations to ensure rapid response and centralized command over our security deployments.
            </p>
          </motion.div>
        </div>

         <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-background"
         >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47368.62672318975!2d7.441158208538373!3d9.014006744440604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d8a643a9963%3A0x2609cc74317de87d!2sCadastral%20Zone%20B02%2C%20Durumi!5e1!3m2!1sen!2sng!4v1678327498250!5m2!1sen!2sng" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="  transition-all duration-700"
              title="Google Maps Location of Master Eye Security Headquarters"
            />
         </motion.div>
      </div>
    </section>
  );
}
