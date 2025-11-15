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
        bg-theme-bg-100
        rounded-full p-1 transition-all
      "
    >
      <div
        className={`
          w-4 h-4 rounded-full bg-theme-fg shadow-md transform transition-all
          ${isDark ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </button>
  );
}
