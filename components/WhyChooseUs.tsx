"use client";

import { motion, Variants } from "framer-motion";
import { Target, CheckCircle2, ShieldCheck, Gem, Shield } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

export function WhyChooseUs() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 relative overflow-hidden bg-background">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12"
         >
            <div className="max-w-2xl">
               <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Professional Excellence</span>
               <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl mb-6">
                 Built on <span className="text-primary">Trust & Integrity</span>
               </h2>
               <p className="text-lg leading-relaxed text-muted-foreground">
                  Master Eye Security Services Limited (MESSL) is a 100% Nigeria owned Company with the vision of achieving service distinction through professional security services.
               </p>
            </div>
            <div className="flex gap-4">
               <div className="h-20 w-1 bg-primary rounded-full"></div>
               <div className="h-20 w-1 bg-secondary rounded-full opacity-50"></div>
               <div className="h-20 w-1 bg-primary rounded-full opacity-20"></div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
             {/* Our Vision */}
             <motion.div 
               variants={itemVariants} 
               className="bg-background p-10 rounded-[3rem] shadow-sm border border-border group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
             >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                   <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a world class private security company renowned for superior quality security services.
                </p>
             </motion.div>

             {/* Our Mission */}
             <motion.div 
               variants={itemVariants} 
               className="bg-background p-10 rounded-[3rem] shadow-sm border border-border group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
             >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6">
                   <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To render quality security services via good corporate governance and adherence to sound ethical standards.
                </p>
             </motion.div>

             {/* Core Values */}
             <motion.div 
               variants={itemVariants} 
               className="bg-primary p-10 rounded-[3rem] shadow-xl text-primary-foreground relative overflow-hidden group"
             >
                <ShieldCheck className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.05] group-hover:scale-110 transition-transform duration-700" />
                
                <h3 className="text-2xl font-black mb-8 flex items-center gap-2">
                   <Shield className="w-6 h-6 text-secondary" />
                   Core Values
                </h3>
                <ul className="space-y-6 relative z-10">
                  <li className="flex gap-4">
                     <span className="text-secondary font-black">01</span>
                     <div>
                        <p className="font-black text-sm uppercase tracking-wider">People</p>
                        <p className="text-xs opacity-70">Hardworking, honest and result-oriented.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <span className="text-secondary font-black">02</span>
                     <div>
                        <p className="font-black text-sm uppercase tracking-wider">Service</p>
                        <p className="text-xs opacity-70">World class service and team spirit.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <span className="text-secondary font-black">03</span>
                     <div>
                        <p className="font-black text-sm uppercase tracking-wider">Relationship</p>
                        <p className="text-xs opacity-70">Nurturing long lasting interactions.</p>
                     </div>
                  </li>
                </ul>
             </motion.div>
          </motion.div>
      </div>
    </section>
  );
}
