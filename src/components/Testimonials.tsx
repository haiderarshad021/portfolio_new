"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { siteConfig } from "@/data/siteConfig";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      <div className="absolute top-0 left-0 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-700/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            Client & Colleague Endorsements
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-zinc-950 dark:text-white">
            Proven Industry <span className="gradient-text">Trust</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Feedback and commendations from engineering leaders and verified clients across enterprise deliveries.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-zinc-200 dark:to-zinc-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {siteConfig.testimonials.map((testimonial, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveIndex(index)}
              className={`p-7 rounded-3xl transition-all duration-300 cursor-pointer ${activeIndex === index
                  ? "bg-zinc-50 dark:bg-[#181818] border-zinc-400 dark:border-zinc-600 shadow-xl"
                  : "bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700"
                } flex flex-col justify-between shadow-md`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <FaQuoteLeft
                    className={`text-2xl transition-colors duration-300 ${activeIndex === index ? "text-zinc-800 dark:text-zinc-200" : "text-zinc-400 dark:text-zinc-600"
                      }`}
                  />
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className="text-base" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 font-normal italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                    {testimonial.role}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold shadow-sm">
                  <SiFiverr className="text-zinc-600 dark:text-zinc-400 text-xs" />
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
