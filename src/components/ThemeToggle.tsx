"use client";

import { useTheme } from "@/context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-[#141414] hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5 text-xs font-semibold"
      aria-label="Toggle theme mode"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? (
        <>
          <HiSun className="text-base text-amber-300" />
          <span className="hidden sm:inline text-[11px] font-mono text-zinc-300">Light</span>
        </>
      ) : (
        <>
          <HiMoon className="text-base text-zinc-700" />
          <span className="hidden sm:inline text-[11px] font-mono text-zinc-700">Dark</span>
        </>
      )}
    </motion.button>
  );
}
