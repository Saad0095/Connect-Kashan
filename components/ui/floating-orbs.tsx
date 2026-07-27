"use client";

import React from "react";
import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Right Amber Glow Orb */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-text-tertiary/10 rounded-full blur-[140px]"
      />

      {/* Center Left Dark Amber Orb */}
      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 -left-28 w-[550px] h-[550px] bg-text-tertiary/8 rounded-full blur-[150px]"
      />
    </div>
  );
}
