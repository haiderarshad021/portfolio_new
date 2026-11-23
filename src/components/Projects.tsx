"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiArrowRight,
  HiCheckCircle,
  HiOfficeBuilding,
} from "react-icons/hi";
import { SiFiverr } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const categories = ["All", "Enterprise", "AI & Health", "Fintech & Mobility"];

  const filteredProjects =
    selectedCategory === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-700/5 rounded-full blur-[140px] pointer-events-none" />

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
            Portfolio of Past Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-zinc-950 dark:text-white">
            Enterprise & Real-World <span className="gradient-text">Systems</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            A showcase of production software platforms built across Sybrid, HiveWorx, and Revive Medical Technologies.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-zinc-200 dark:to-zinc-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-md font-bold"
                  : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:text-white shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedProject === project.title;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 card-hover flex flex-col justify-between relative group shadow-lg dark:shadow-xl"
                >
                  <div>
                    {/* Top Meta info */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 dark:text-zinc-300">
                        <HiOfficeBuilding className="text-sm text-zinc-600 dark:text-zinc-400" />
                        <span>{project.company}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium shadow-sm">
                        {project.period}
                      </span>
                    </div>

                    {/* Category pill */}
                    <div className="mb-2">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium mb-3">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 font-normal">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-bold">
                        Architecture & Key Capabilities:
                      </p>
                      {project.highlights.slice(0, isExpanded ? 6 : 2).map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-zinc-800 dark:text-zinc-300 font-normal">
                          <HiCheckCircle className="text-zinc-600 dark:text-zinc-400 text-sm mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}

                      {project.highlights.length > 2 && (
                        <button
                          onClick={() =>
                            setExpandedProject(isExpanded ? null : project.title)
                          }
                          className="text-[11px] text-zinc-900 dark:text-zinc-300 hover:underline font-bold mt-1"
                        >
                          {isExpanded ? "Show Less ▲" : `+${project.highlights.length - 2} More Details ▼`}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Footer & Tech Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200 dark:border-zinc-800 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <a
                        href={project.liveUrl || siteConfig.contact.fiverr}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <SiFiverr className="text-sm" />
                        <span>View on Fiverr</span>
                        <HiArrowRight className="text-xs" />
                      </a>

                      <a
                        href={project.githubUrl || siteConfig.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors shadow-sm"
                        title="GitHub"
                      >
                        <FaGithub className="text-xs" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Portfolio Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 text-center max-w-4xl mx-auto shadow-xl"
        >
          <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2">
            Have a custom software or full-stack project?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mb-6 font-normal">
            From architecture design and backend microservices to responsive frontend interfaces and AI systems — let&apos;s build something exceptional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-black text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 text-xs font-bold shadow-md hover:scale-[1.02] transition-all"
            >
              Start a Conversation
            </a>
            <a
              href={siteConfig.contact.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold hover:bg-zinc-50 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <SiFiverr className="text-base" />
              <span>Hire on Fiverr (@haiderarshad206)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
