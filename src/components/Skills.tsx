"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { siteConfig } from "@/data/siteConfig";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-zinc-200/30 dark:bg-zinc-700/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-zinc-200/30 dark:bg-zinc-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-zinc-950 dark:text-white">
            Professional <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Verified expertise from Fiverr across 9 fundamental software engineering disciplines.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-zinc-200 dark:to-zinc-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* 9 Fiverr "Pro" Badges Grid */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-mono">
              Fiverr Verified Specializations (All Rated &ldquo;Pro&rdquo;)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {siteConfig.fiverrSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="group p-4 rounded-xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 card-hover flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-950 transition-all">
                    <HiCheck className="text-base" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-200 capitalize">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 shadow-sm">
                  Pro
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Tech Stack Categorized Tabs */}
        <div className="max-w-5xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
            <div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">Full-Stack Technology Ecosystem</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal">
                Battle-tested tools and frameworks utilized across production deployments
              </p>
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap gap-1.5 bg-zinc-100 dark:bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
              {siteConfig.techStackCategories.map((cat, idx) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === idx
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Skills */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {siteConfig.techStackCategories[activeTab].skills.map((skill) => (
                <div
                  key={skill}
                  className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors flex items-center justify-between group shadow-sm"
                >
                  <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {skill}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-200 transition-colors" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Technical highlights summary bar */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <span className="text-xs font-mono text-zinc-900 dark:text-zinc-200 block font-bold">Next.js & React</span>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-normal">Modern UI & SSR Architecture</p>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-900 dark:text-zinc-200 block font-bold">NestJS & Node.js</span>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-normal">Scalable Microservices APIs</p>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-900 dark:text-zinc-200 block font-bold">PostgreSQL & PostGIS</span>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-normal">Geospatial & Complex Relational</p>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-900 dark:text-zinc-200 block font-bold">Keycloak & RBAC</span>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-normal">Granular Authorization & Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
