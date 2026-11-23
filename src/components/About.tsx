"use client";

import { motion } from "framer-motion";
import {
  HiDownload,
  HiCheckCircle,
  HiTranslate,
  HiOfficeBuilding,
  HiAcademicCap,
} from "react-icons/hi";
import { SiFiverr } from "react-icons/si";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-700/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-zinc-950 dark:text-white">
            Engineering High-Performance <span className="gradient-text">Web Systems</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Specializing in modern full-stack architectures, enterprise-scale backends, database engineering, and AI-enabled workflows.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-zinc-200 dark:to-zinc-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Full Authentic Bio (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 flex items-center justify-center font-extrabold text-xl shadow-md">
                    H
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white flex items-center gap-2">
                      {siteConfig.name}
                      <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
                        {siteConfig.handle}
                      </span>
                    </h3>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold">
                      Full-Stack Web Developer • Pakistan
                    </p>
                  </div>
                </div>

                <a
                  href={siteConfig.contact.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:text-black dark:hover:text-white hover:border-zinc-400 transition-colors shadow-sm"
                >
                  <SiFiverr className="text-base text-zinc-800 dark:text-zinc-300" />
                  <span>Fiverr Profile</span>
                </a>
              </div>

              {/* Exact About Text */}
              <p className="text-zinc-800 dark:text-zinc-200 text-base leading-relaxed font-normal">
                {siteConfig.about.intro}
              </p>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-normal">
                {siteConfig.about.details}
              </p>

              {/* Core Tenets Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-3">
                {[
                  "Clean, Maintainable Codebase",
                  "Secure Solutions (RBAC, ABAC, Keycloak)",
                  "High-Throughput Performance Tuning",
                  "Clear Communication & On-Time Delivery",
                  "Scalable Microservices Architecture",
                  "Cross-Platform & Full-Stack Mastery",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-800 dark:text-zinc-300 font-medium">
                    <HiCheckCircle className="text-zinc-700 dark:text-zinc-400 text-base flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CV Action */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Haider_Arshad_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-black text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 font-bold rounded-xl text-xs shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <HiDownload className="text-base" />
                  <span>Download Complete Resume (PDF)</span>
                </a>

                <a
                  href={siteConfig.contact.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 text-zinc-800 dark:text-zinc-200 transition-colors shadow-sm"
                >
                  <SiFiverr className="text-base text-zinc-700 dark:text-zinc-300" />
                  <span>View Fiverr Gigs</span>
                </a>
              </div>
            </div>

            {/* Organizations Track Record */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-bold text-sm">
                <HiOfficeBuilding className="text-zinc-700 dark:text-zinc-300 text-lg" />
                <span>Experience Track Across 3 Organizations:</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono block font-semibold">Current</span>
                  <h4 className="text-xs font-bold text-zinc-950 dark:text-white mt-0.5">Sybrid Private Ltd.</h4>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 font-normal">TravelSync Platform</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono block font-semibold">2 Years</span>
                  <h4 className="text-xs font-bold text-zinc-950 dark:text-white mt-0.5">HiveWorx</h4>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 font-normal">E-Office, ALMS, PMT</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono block font-semibold">1 yr 8 mos</span>
                  <h4 className="text-xs font-bold text-zinc-950 dark:text-white mt-0.5">Revive Medical Tech</h4>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 font-normal">RPM 22, Dermoscope AI</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Metrics, Languages, Education (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Stat Counters */}
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.about.highlights.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 card-hover text-center relative overflow-hidden shadow-sm"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs text-zinc-700 dark:text-zinc-400 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Languages Spoken */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 shadow-lg">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <HiTranslate className="text-zinc-700 dark:text-zinc-300 text-xl" />
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white">Languages Spoken</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-normal">Global client communication proficiency</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {siteConfig.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800"
                  >
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{lang.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Snapshot */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <HiAcademicCap className="text-zinc-700 dark:text-zinc-300 text-xl" />
                <h4 className="text-sm font-bold text-zinc-950 dark:text-white">Academic Foundation</h4>
              </div>
              {siteConfig.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-950 dark:text-white">{edu.degree}</span>
                    <span className="text-[10px] font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded font-medium">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{edu.institution}</p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1 font-normal">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
