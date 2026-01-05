/**
 * ShowcaseLayout Component
 * Full-page layout wrapper for showcase pages
 */

import type { ReactNode } from "react";
import { cn } from "@/shared/utils";

interface ShowcaseLayoutProps {
  children: ReactNode;
  className?: string;
}

export function ShowcaseLayout({ children, className }: ShowcaseLayoutProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-black text-white",
        "selection:bg-white/20 selection:text-white",
        className
      )}
    >
      {children}
    </div>
  );
}
