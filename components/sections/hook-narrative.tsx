"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";
import { ArrowRight } from "lucide-react";

export function HookNarrative() {
  return (
    <section className="min-h-[70vh] py-32 sm:py-44 flex items-center justify-center bg-surface-muted/50 border-b border-border-strong/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="space-y-10"
        >
          {/* Section Tag */}
          <div className="inline-block text-sm font-mono font-semibold text-text-tertiary tracking-wider uppercase bg-surface-strong px-4 py-1.5 rounded-full border border-border-strong">
            The Philosophy
          </div>

          {/* Typography Narrative Block */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-snug max-w-3xl mx-auto">
            &ldquo;Zindagi bari honi chahiye, lambi nahi.&rdquo;
          </h2>

          <div className="space-y-6 text-lg sm:text-xl md:text-2xl text-text-secondary font-normal leading-relaxed max-w-2xl mx-auto">
            <p>
              I don&apos;t make polished commercial ads that people skip after 3 seconds. I post everyday Pakistani life — the funny arguments, the market struggles, and the stuff we actually laugh about with friends.
            </p>
            <p>
              When I talk about a watch, a kitchen gadget, or an app, it&apos;s because I actually used it. That&apos;s why people don&apos;t mute the reel when a brand appears.
            </p>
          </div>

          {/* Link */}
          <div className="pt-6">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2.5 text-lg font-bold text-text-tertiary hover:text-text-primary transition-colors group"
            >
              <span>See collaboration packages</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
