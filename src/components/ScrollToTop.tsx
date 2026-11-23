"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-zinc-900 text-white dark:bg-gradient-to-tr dark:from-zinc-100 dark:to-zinc-300 dark:text-black flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 border border-zinc-300 dark:border-white/20 cursor-pointer"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="text-lg font-bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
