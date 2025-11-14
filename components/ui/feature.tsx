'use client';

import type { LucideIcon } from "lucide-react";
import { cn } from "./utils";

interface FeatureCardProps {
  icon: LucideIcon;
  gradient: string;
  title: string;
  description: string;
  dir?: "rtl" | "ltr";
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  gradient,
  title,
  description,
  dir = "ltr",
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-surface-elevated border border-border-hairline rounded-xl p-6 lg:p-8 overflow-hidden transition-all duration-300 hover:border-primary/50",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5",
          `bg-gradient-to-br ${gradient}`,
        )}
      />

      <div className="relative mb-4">
        <div
          className={cn(
            "inline-flex p-3 rounded-lg bg-opacity-10",
            `bg-gradient-to-br ${gradient}`,
          )}
        >
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className={cn("relative", dir === "rtl" ? "text-right" : "text-left")}>
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>

      <div
        className={cn(
          "absolute bottom-0 w-16 h-16 opacity-0 transition-opacity duration-300 group-hover:opacity-10 clip-angle",
          dir === "rtl" ? "left-0" : "right-0",
          `bg-gradient-to-br ${gradient}`,
        )}
      />
    </div>
  );
}

