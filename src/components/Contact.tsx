"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiLocationMarker,
  HiDownload,
  HiPaperAirplane,
  HiBadgeCheck,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { siteConfig } from "@/data/siteConfig";

interface FormDataState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev: FormDataState) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-700/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            Direct Communication
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 text-zinc-950 dark:text-white">
            Let&apos;s Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Whether you need a full-scale web application, backend architecture, or consulting on system design — I&apos;m ready to collaborate.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-zinc-800 to-zinc-400 dark:from-zinc-200 dark:to-zinc-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Details (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-3xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-5">
              <div>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2">Get in Touch Directly</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  Available for freelance projects, enterprise consulting, and specialized engineering deliverables.
                </p>
              </div>

              {/* Fiverr Direct Card */}
              <a
                href={siteConfig.contact.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 shadow-sm">
                    <SiFiverr className="text-xl text-zinc-800 dark:text-zinc-200" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-zinc-950 dark:text-white">Fiverr Freelance Profile</span>
                      <HiBadgeCheck className="text-zinc-700 dark:text-zinc-300 text-sm" />
                    </div>
                    <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 block mt-0.5">
                      @{siteConfig.handle}
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
                  <span>Fast Response Time</span>
                  <span className="text-zinc-800 dark:text-zinc-300 font-semibold group-hover:underline">Open Profile →</span>
                </div>
              </a>

              {/* Contact Items */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <HiLocationMarker className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400">Location</p>
                    <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">{siteConfig.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <HiMail className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400">Direct Email</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download="Haider_Arshad_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-black text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 text-xs font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <HiDownload className="text-base" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 font-semibold">Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.contact.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 transition-colors shadow-sm"
                    title="Fiverr"
                  >
                    <SiFiverr className="text-sm" />
                  </a>
                  <a
                    href={siteConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 transition-colors shadow-sm"
                    title="GitHub"
                  >
                    <FaGithub className="text-sm" />
                  </a>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 transition-colors shadow-sm"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white dark:bg-[#121212] border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-4"
            >
              <div>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-1">Send a Message</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal">
                  Fill in your project details and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 dark:text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400 text-xs shadow-sm font-normal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-800 dark:text-zinc-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400 text-xs shadow-sm font-normal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-800 dark:text-zinc-300 mb-1.5">
                  Subject / Project Scope
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Next.js SaaS MVP or Enterprise Backend Architecture"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400 text-xs shadow-sm font-normal"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-800 dark:text-zinc-300 mb-1.5">
                  Project Details / Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, deliverables, and any technical constraints..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400 text-xs resize-none shadow-sm font-normal"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-black text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 text-xs font-bold shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : submitted ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 dark:text-emerald-700">
                    <HiBadgeCheck className="text-base" /> Message Sent Successfully!
                  </span>
                ) : (
                  <>
                    <HiPaperAirplane className="text-sm rotate-90" />
                    <span>Send Inbound Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
