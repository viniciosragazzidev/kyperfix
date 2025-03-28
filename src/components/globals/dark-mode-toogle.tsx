"use client";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const { setTheme, theme } = useTheme();
  const [cTheme, setCTheme] = useState(theme);

  useEffect(() => {
    setCTheme(theme);
  }, [theme]);
  return (
    <span
      onClick={() => setTheme(cTheme === "dark" ? "light" : "dark")}
      className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 transition-colors overflow-hidden hover:text-foreground/80 text-foreground/60 "
    >
      <span className="absolute dark:left-20 left-0 transition-all">
        <Moon size={18} />
      </span>
      <span className=" absolute  left-20 dark:left-0 transition-all">
        <Sun size={18} />
      </span>
    </span>
  );
}
