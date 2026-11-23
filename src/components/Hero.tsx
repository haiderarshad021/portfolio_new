"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  HiDownload,
  HiArrowRight,
  HiLocationMarker,
  HiBadgeCheck,
  HiTranslate,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Subtle Ambient Lighting */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-zinc-200/40 dark:bg-zinc-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-zinc-200/40 dark:bg-zinc-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Info (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for New Projects
              </span>

              <a
                href={siteConfig.contact.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors shadow-sm"
              >
                <SiFiverr className="text-zinc-800 dark:text-zinc-300 text-sm" />
                <span>{siteConfig.handle}</span>
              </a>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 shadow-sm">
                <HiLocationMarker className="text-zinc-600 dark:text-zinc-400 text-sm" />
                {siteConfig.location}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15] mb-4">
              Hi, I&apos;m <span className="gradient-text">{siteConfig.name}</span>
            </h1>

            {/* Animated Typing Title */}
            <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-200 mb-6 flex items-center justify-center lg:justify-start gap-2 h-10">
              <span className="text-zinc-600 dark:text-zinc-400 font-medium">Specializing in</span>
              <TypeAnimation
                sequence={[
                  "Full-Stack Web Development",
                  2200,
                  "Next.js & React Applications",
                  2000,
                  "NestJS & Node.js Architecture",
                  2000,
                  "PostgreSQL & Database Optimization",
                  2000,
                  "Enterprise RBAC / ABAC Systems",
                  2000,
                  "Real-Time Tracking & AI Systems",
                  2200,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="text-zinc-950 dark:text-zinc-100 font-extrabold"
              />
            </div>

            {/* Bio paragraph from exact profile */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 font-normal">
              Full-Stack Web Developer with <span className="text-zinc-950 dark:text-white font-bold">4+ years of hands-on experience across 3 organizations</span>. Specialized in building modern, scalable web applications with clean code, secure solutions, high performance, and timely delivery.
            </p>

            {/* Multilingual capability pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8 text-xs">
              <div className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-300 font-semibold mr-1">
                <HiTranslate className="text-zinc-700 dark:text-zinc-400 text-base" />
                <span>Languages:</span>
              </div>
              {siteConfig.languages.map((lang) => (
                <span
                  key={lang.name}
                  className="px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 font-medium shadow-sm"
                >
                  {lang.name}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-900 hover:bg-black text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 font-bold rounded-xl text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Enterprise Projects</span>
                <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Haider_Arshad_Resume.pdf"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-zinc-50 border-2 border-zinc-300 text-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100 rounded-xl text-sm font-bold transition-all shadow-sm"
              >
                <HiDownload className="text-base text-zinc-700 dark:text-zinc-300 group-hover:animate-bounce" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Socials & Fiverr Quick Profile Link */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs text-zinc-600 dark:text-zinc-500 uppercase tracking-wider font-mono font-bold">
                Connect:
              </span>
              <a
                href={siteConfig.contact.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors shadow-sm"
                aria-label="Fiverr Profile"
              >
                <SiFiverr className="text-zinc-800 dark:text-zinc-300 text-sm" />
                <span>Fiverr @haiderarshad206</span>
              </a>
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-sm" />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              {/* Profile Card Container */}
              <div className="relative rounded-2xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 shadow-xl">
                {/* Profile Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 flex items-center justify-center font-extrabold text-2xl shadow-md">
                      HA
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white dark:bg-[#121212] border-2 border-white dark:border-[#121212] flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white">{siteConfig.name}</h3>
                      <HiBadgeCheck className="text-zinc-700 dark:text-zinc-300 text-lg" title="Verified Pro" />
                    </div>
                    <p className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">{siteConfig.handle}</p>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold mt-0.5">
                      Software Engineer • Pakistan
                    </p>
                  </div>
                </div>

                {/* Key Metrics / Highlights */}
                <div className="grid grid-cols-2 gap-3 py-6">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-100">4+ Years</div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 font-medium">Hands-on Experience</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-100">3 Orgs</div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 font-medium">Sybrid, HiveWorx, Revive</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-100">8+</div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 font-medium">Enterprise Platforms</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-100">100%</div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 font-medium">Project Delivery</p>
                  </div>
                </div>

                {/* Core Skills Snapshot */}
                <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-[11px] font-bold text-zinc-700 dark:text-zinc-400 uppercase tracking-wider">
                    Core Technical Pillars
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "React.js",
                      "Next.js",
                      "NestJS",
                      "Node.js",
                      "PostgreSQL",
                      "PostGIS",
                      "MongoDB",
                      "Keycloak",
                      "RBAC/ABAC",
                      "Docker",
                      "AI/ML",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct quick action */}
                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-black text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 text-xs font-bold transition-all text-center shadow-md"
                  >
                    Contact for Opportunities 💬
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
