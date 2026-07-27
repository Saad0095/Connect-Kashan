"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";
import { ArrowUpRight, Mail, Download, Sparkles } from "lucide-react";

interface FinalCtaProps {
  onOpenMediaKit: () => void;
}

export function FinalCta({ onOpenMediaKit }: FinalCtaProps) {
  return (
    <section className="min-h-[70vh] py-36 sm:py-48 flex items-center justify-center bg-surface-muted relative overflow-hidden border-b border-border-strong/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-text-tertiary/15 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="space-y-10 bg-surface-strong/80 border border-border-strong rounded-sm p-12 sm:p-20 shadow-1"
        >
          <div className="inline-flex items-center gap-2 text-sm font-mono text-text-tertiary bg-surface-base px-4 py-1.5 rounded-full border border-border-strong font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Ready for your next campaign?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight max-w-3xl mx-auto leading-tight">
            Let&apos;s build something people actually watch.
          </h2>

          <p className="text-text-secondary text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-normal">
            Got a product worth talking about? Drop a message or download the official Connect Kashan media kit to review detailed audience demographics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <a
              href="#pricing"
              className="bg-text-tertiary hover:bg-[#ff9d5c] text-surface-base font-bold text-base sm:text-lg px-9 py-4.5 rounded-full transition-all shadow-glow hover:shadow-1 flex items-center gap-2.5 active:scale-95"
            >
              <span>Book a collab</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenMediaKit}
              className="bg-surface-base hover:bg-surface-muted text-text-primary border border-border-strong hover:border-text-tertiary text-base sm:text-lg font-bold px-8 py-4.5 rounded-full transition-all flex items-center gap-2.5"
            >
              <Download className="w-5 h-5 text-text-tertiary" />
              <span>Download Media Kit (PDF)</span>
            </button>
          </div>

          <div className="pt-8 border-t border-border-strong/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-base text-text-secondary font-mono">
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-text-tertiary" />
              Direct Email: <strong className="text-text-primary">m.moid90@gmail.com</strong>
            </span>
            <span className="hidden sm:inline text-border-strong">•</span>
            <span>Response: Within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
