"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";
import { Award, Instagram, Youtube } from "lucide-react";

export function FounderBio() {
  return (
    <section id="bio" className="py-28 bg-surface-muted/30 border-b border-border-strong/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-surface-strong/60 border border-border-strong rounded-sm p-8 sm:p-14 shadow-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Bio Photo Column */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-xs overflow-hidden border border-border-strong bg-surface-muted group">
                <Image
                  src="/images/kashan-hero.png"
                  alt="Kashan (@connect.kashan) Photograph"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  unoptimized
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-slow contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-base/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-surface-base/90 backdrop-blur-md p-3.5 rounded-xs border border-border-strong flex items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-text-primary block">Kashan</span>
                    <span className="text-text-secondary text-xs">Digital Creator & Actor</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-text-tertiary/15 text-text-tertiary font-mono text-xs font-bold">
                    Karachi, PK
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bio Content Column */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-sm font-mono text-text-tertiary bg-surface-base px-3.5 py-1.5 rounded-full border border-border-strong font-semibold">
                <Award className="w-4 h-4" />
                <span>Meet Kashan</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
                From comedy group roots to building a high-trust digital audience.
              </h2>

              <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  I started creating content as part of the comedy collective <strong>&ldquo;The Idiotz&rdquo;</strong>, making sketch comedy that captured Pakistan&apos;s digital boom.
                </p>
                <p>
                  Over time, I took that same raw, funny storytelling into my own channel, <strong>Kashan</strong> (under handle <strong>@connect.kashan</strong>). I balance content creation with real-life work, which keeps my perspective grounded.
                </p>
                <p>
                  When brands partner with me, they aren&apos;t buying a glossy billboard — they are tapping into a community that treats my video recommendations like advice from a close friend.
                </p>
              </div>

              {/* Quick Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border-strong/60">
                <div className="bg-surface-base p-4 rounded-xs border border-border-strong">
                  <span className="text-xs text-text-secondary block font-mono">Started</span>
                  <span className="text-lg font-bold text-text-primary">2017</span>
                </div>
                <div className="bg-surface-base p-4 rounded-xs border border-border-strong">
                  <span className="text-xs text-text-secondary block font-mono">Core Format</span>
                  <span className="text-lg font-bold text-text-primary">IG Reels & Vlogs</span>
                </div>
                <div className="bg-surface-base p-4 rounded-xs border border-border-strong col-span-2 sm:col-span-1">
                  <span className="text-xs text-text-secondary block font-mono">Demographic</span>
                  <span className="text-lg font-bold text-text-tertiary">18 - 34 Desi Youth</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/connect.kashan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-text-primary border border-border-strong hover:border-text-tertiary px-4 py-2.5 rounded-full bg-surface-base transition-colors"
                >
                  <Instagram className="w-4 h-4 text-text-tertiary" />
                  <span>@connect.kashan</span>
                </a>
                <a
                  href="https://www.youtube.com/connectkashan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-text-primary border border-border-strong hover:border-text-tertiary px-4 py-2.5 rounded-full bg-surface-base transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>Kashan Official</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
