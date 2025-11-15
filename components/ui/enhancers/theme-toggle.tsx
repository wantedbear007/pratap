"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        w-12 h-6 flex items-center 
        bg-gray-300 dark:bg-gray-700      /* ← Dark gray background in dark mode */
        border-2 border-gray-400 dark:border-gray-600
        rounded-full p-1 transition-all duration-300
        hover:bg-gray-400 dark:hover:bg-gray-600
        focus:outline-none focus:ring-2 focus:ring-gray-400
      "
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div
        className={`
          w-4 h-4 rounded-full 
          bg-gray-700 dark:bg-gray-300     /* ← Dark gray knob in light mode */
          shadow-lg transform transition-all duration-300
          ${isDark ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </button>
  );
}
