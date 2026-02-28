"use client";

import { motion } from "framer-motion";
import { User, Shield, Briefcase, Scale, Target, Flag } from "lucide-react";

const members = [
  {
    name: "AIG. JOSEPH ABIODUN (RTD)",
    role: "Chairman",
    credentials: "B-Tech, MSC, NPM, FDC",
    icon: <Flag className="w-6 h-6" />,
    shape: "rounded-[3.5rem] rounded-bl-none",
    color: "bg-primary/5 dark:bg-primary/10"
  },
  {
    name: "CHIEF JERRY OKECHUKWU EBOH",
    role: "Managing Director/CEO",
    credentials: "BSC, MSC, MNISEC, FISPS",
    icon: <Briefcase className="w-6 h-6" />,
    shape: "rounded-[3.5rem] rounded-tr-none",
    color: "bg-secondary/10 dark:bg-secondary/20"
  },
  {
    name: "BARR. (MRS) FLORENCE E. EBOH",
    role: "Executive Director",
    credentials: "LL.B, BL",
    icon: <Scale className="w-6 h-6" />,
    shape: "rounded-[3.5rem] rounded-br-[10rem]",
    color: "bg-muted"
  },
  {
    name: "MAUREEN N. EBOH",
    role: "Operational Director",
    credentials: "BSC, MSC",
    icon: <Target className="w-6 h-6" />,
    shape: "rounded-[1rem] rounded-tl-[6rem]",
    color: "bg-primary/5 dark:bg-primary/10"
  },
  {
    name: "COL. AHMED BELLO (RTD)",
    role: "Security Strategist",
    credentials: "MSS, FSS",
    icon: <Shield className="w-6 h-6" />,
    shape: "rounded-[5rem] rounded-br-none rounded-tl-none",
    color: "bg-secondary/10 dark:bg-secondary/20"
  },
  {
    name: "DR. SAMUEL OKON",
    role: "Human Resource Director",
    credentials: "PHD, CIPM",
    icon: <User className="w-6 h-6" />,
    shape: "rounded-[3.5rem] skew-x-1",
    color: "bg-muted"
  }
];

export function BoardMembers() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <span className="text-secondary font-black uppercase tracking-widest text-xs mb-4 block">The Command Center</span>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl mb-6">Our Board Members</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative p-10 ${member.shape} ${member.color} border border-border/30 group transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(39,112,188,0.2)]`}
            >
              <div className="bg-background w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:rotate-[10deg]">
                {member.icon}
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-6">{member.role}</p>
              {member.credentials && (
                <p className="text-xs font-mono text-muted-foreground bg-background/80 px-4 py-2 rounded-full inline-block border border-border/50">
                  {member.credentials}
                </p>
              )}
              
              <div className="absolute top-6 right-6 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity">
                <Shield className="w-16 h-16" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
