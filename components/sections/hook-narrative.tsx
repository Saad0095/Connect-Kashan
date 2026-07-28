"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";
import { ArrowRight, Plus, Sparkles } from "lucide-react";
import { renderCanvas } from "@/components/ui/canvas";

export function HookNarrative() {
  useEffect(() => {
    // Only run canvas in browser, not during SSR
    if (typeof window !== 'undefined') {
      try {
        renderCanvas();
      } catch (e) {
        console.error("Canvas render error", e);
      }
    }
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-border-strong/40 bg-surface-base">
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center py-20 md:py-32 w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="z-10 mb-8 sm:justify-center flex justify-center">
            <div className="relative flex items-center whitespace-nowrap rounded-full border border-border-strong bg-surface-strong/80 backdrop-blur-sm px-5 py-2 text-sm font-semibold tracking-wider text-text-tertiary uppercase shadow-sm">
              <Sparkles className="h-4 w-4 mr-2" /> The Philosophy
            </div>
          </div>

          <div className="mb-10 w-full">
            <div className="px-2 w-full">
              <div className="relative mx-auto h-full w-full border border-border-strong p-8 md:px-16 md:py-20 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] bg-surface-muted/30 backdrop-blur-sm shadow-1">
                <Plus strokeWidth={3} className="text-text-tertiary/50 absolute -left-4 -top-4 h-8 w-8" />
                <Plus strokeWidth={3} className="text-text-tertiary/50 absolute -bottom-4 -left-4 h-8 w-8" />
                <Plus strokeWidth={3} className="text-text-tertiary/50 absolute -right-4 -top-4 h-8 w-8" />
                <Plus strokeWidth={3} className="text-text-tertiary/50 absolute -bottom-4 -right-4 h-8 w-8" />
                
                <h2 className="flex select-none flex-col px-3 py-2 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug tracking-tight text-text-primary">
                  &ldquo;Zindagi bari honi chahiye, lambi nahi.&rdquo;
                </h2>
                
                <div className="flex items-center justify-center gap-2 mt-8">
                  <span className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Authentic Daily Life</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-text-secondary font-normal leading-relaxed max-w-2xl mx-auto mt-12 px-6">
              <p>
                I don&apos;t make polished commercial ads that people skip after 3 seconds. I post everyday Pakistani life — the funny arguments, the market struggles, and the stuff we actually laugh about with friends.
              </p>
              <p>
                When I talk about a watch, a kitchen gadget, or an app, it&apos;s because I actually used it. That&apos;s why people don&apos;t mute the reel when a brand appears.
              </p>
            </div>
            
            <div className="flex justify-center mt-10">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2.5 text-lg font-bold text-text-tertiary hover:text-text-primary transition-colors group cursor-pointer"
              >
                <span>See collaboration packages</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Animated Canvas */}
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto opacity-40 mix-blend-lighten z-0 w-full h-full"
        id="canvas"
      ></canvas>
    </section>
  );
}
