"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  children?: React.ReactNode;
  as?: React.ElementType;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLDivElement | null>;
  customVariants?: Variants;
  className?: string;
}

export function TimelineContent({
  children,
  as = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
}: TimelineContentProps) {
  const Component = motion.create(as as any);

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
  };

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={animationNum}
      variants={customVariants || defaultVariants}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
