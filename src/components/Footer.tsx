"use client";

import Link from "next/link";
import { HiCode, HiDownload, HiArrowUp } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0a0a0a] pt-16 pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 flex items-center justify-center shadow-sm">
                <HiCode className="text-lg" />
              </div>
              <span className="text-base font-bold text-zinc-950 dark:text-white tracking-tight">
                {siteConfig.name}{" "}
                <span className="text-xs font-mono font-normal text-zinc-500">
                  {siteConfig.handle}
                </span>
              </span>
            </Link>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm font-normal">
              Full-Stack Web Developer with 4+ years of hands-on experience across 3 organizations. Specialist in Next.js, NestJS, PostgreSQL, microservices, and secure enterprise applications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold hover:border-zinc-400 hover:text-black dark:hover:text-white transition-colors shadow-sm"
              >
                <SiFiverr className="text-base text-zinc-800 dark:text-zinc-300" />
                <span>Fiverr Profile</span>
              </a>
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="text-sm" />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Home", href: "#home" },
                { name: "About Me", href: "#about" },
                { name: "Skills Arsenal", href: "#skills" },
                { name: "Experience Track", href: "#experience" },
                { name: "Past Projects", href: "#projects" },
                { name: "Services", href: "#services" },
                { name: "Contact & Hire", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Stack (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider font-mono">
              Core Engineering Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Next.js",
                "React.js",
                "NestJS",
                "Node.js",
                "PostgreSQL",
                "PostGIS",
                "MongoDB",
                "MySQL",
                "Docker",
                "Keycloak",
                "RBAC",
                "Firebase",
                "AI/ML Systems",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <a
                href="/resume.pdf"
                download="Haider_Arshad_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-zinc-200 hover:underline"
              >
                <HiDownload className="text-sm" />
                <span>Download Verified Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-4">
          <p className="font-normal">
            &copy; {currentYear} {siteConfig.name} ({siteConfig.handle}). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-xs font-medium"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
}
