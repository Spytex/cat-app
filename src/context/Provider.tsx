"use client";

import { ThemeProvider } from "next-themes";
import { CatProvider } from "@/context/CatContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <CatProvider>{children}</CatProvider>
    </ThemeProvider>
  );
}
