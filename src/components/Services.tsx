"use client";

import { motion } from "framer-motion";
import {
  HiCode,
  HiServer,
  HiShieldCheck,
  HiDatabase,
  HiLocationMarker,
  HiChip,
} from "react-icons/hi";
import { siteConfig } from "@/data/siteConfig";

const serviceIcons = [
  HiCode,
  HiServer,
  HiShieldCheck,
  HiDatabase,
  HiLocationMarker,
  HiChip,
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-700/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-zinc-800 dark:text-zinc-300 text-xs font-bold tracking-widest uppercase bg-zinc-100 dark:bg-zinc-900 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm">
            What I Deliver
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-zinc-950 dark:text-white">
            Specialized Engineering <span className="gradient-text">Services</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Providing high-caliber software engineering and consulting services tailored for startups and enterprise clients.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-zinc-200 dark:to-zinc-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-7 rounded-3xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 card-hover shadow-lg dark:shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-300 text-xl mb-5 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-950 transition-all duration-300 shadow-sm">
                    <Icon />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono font-medium text-zinc-500 dark:text-zinc-400">
                  <span>Service 0{index + 1}</span>
                  <span className="text-zinc-800 dark:text-zinc-300 font-semibold">Ready to Deploy</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
