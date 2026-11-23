"use client";

import { motion } from "framer-motion";
import {
  HiBriefcase,
  HiCalendar,
  HiClock,
  HiCheckCircle,
} from "react-icons/hi";
import { siteConfig } from "@/data/siteConfig";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-700/5 rounded-full blur-[140px] pointer-events-none" />

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
            Work Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-zinc-950 dark:text-white">
            Hands-on Engineering <span className="gradient-text">Trajectory</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Demonstrated track record of delivering enterprise-scale solutions across 3 prominent technology organizations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-zinc-200 dark:to-zinc-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Organizations Experience List */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {siteConfig.experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 card-hover shadow-lg dark:shadow-xl relative overflow-hidden"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-5 border-b border-zinc-200 dark:border-zinc-800 gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 text-xl shadow-sm">
                    <HiBriefcase />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{exp.role}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <HiCalendar className="text-zinc-700 dark:text-zinc-300" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <HiClock className="text-zinc-700 dark:text-zinc-300" />
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                {exp.summary}
              </p>

              {/* Specific Projects Delivered */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mb-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 font-mono">
                    Key Enterprise Solutions Delivered:
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {exp.projects.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 space-y-1.5 shadow-sm"
                      >
                        <h5 className="text-xs font-bold text-zinc-950 dark:text-zinc-200 flex items-center gap-1.5">
                          <span className="text-zinc-600 dark:text-zinc-400">▹</span>
                          {proj.name}
                        </h5>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 font-normal">
                          {proj.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Contributions List */}
              {exp.keyContributions && (
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 font-mono">
                    Key Features & Technical Contributions:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {exp.keyContributions.map((contrib, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-zinc-800 dark:text-zinc-300 font-normal">
                        <HiCheckCircle className="text-zinc-700 dark:text-zinc-400 text-sm mt-0.5 flex-shrink-0" />
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Used Footer */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-zinc-500 dark:text-zinc-500 font-mono mr-2 font-semibold">Stack:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
