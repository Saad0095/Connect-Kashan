"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";
import { VideoItem } from "@/lib/data/content";
import { ChevronLeft, ChevronRight, Play, Eye, Heart, ExternalLink } from "lucide-react";

interface ContentRailProps {
  id: string;
  title: string;
  subtitle: string;
  items: VideoItem[];
  badge?: string;
}

export function ContentRail({ id, title, subtitle, items, badge }: ContentRailProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      scroll("right");
    } else if (e.key === "ArrowLeft") {
      scroll("left");
    }
  };

  return (
    <section id={id} className="py-16 bg-surface-base border-b border-border-strong/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rail Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            {badge && (
              <span className="inline-block text-xs font-mono text-text-tertiary bg-surface-strong px-2.5 py-0.5 rounded-xs border border-border-strong mb-2">
                {badge}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              {subtitle}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full bg-surface-muted border border-border-strong text-text-secondary hover:text-text-primary hover:border-text-tertiary flex items-center justify-center transition-colors active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full bg-surface-muted border border-border-strong text-text-secondary hover:text-text-primary hover:border-text-tertiary flex items-center justify-center transition-colors active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Rail */}
        <div
          ref={scrollRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label={`${title} video list. Use left and right arrow keys to scroll.`}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-6 focus:outline-none focus:ring-2 focus:ring-text-tertiary/50 rounded-xs"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[280px] sm:w-[320px] bg-surface-muted border border-border-strong hover:border-text-tertiary/60 rounded-sm overflow-hidden group transition-all duration-slow hover:shadow-1 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] bg-surface-strong overflow-hidden">
                <Image
                  src={item.embedUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"}
                  alt={`Thumbnail for ${item.title}`}
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-black/30" />


                {/* Format / Brand Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-surface-base/85 backdrop-blur-md px-2 py-0.5 rounded-xs text-[10px] font-mono text-text-primary border border-border-strong">
                    {item.category}
                  </span>
                  {item.brandName && (
                    <span className="bg-text-tertiary text-surface-base px-2 py-0.5 rounded-xs text-[10px] font-mono font-semibold">
                      {item.brandName}
                    </span>
                  )}
                </div>

                {/* Duration Badge */}
                {item.duration && (
                  <div className="absolute bottom-2 right-2 bg-black/75 px-1.5 py-0.5 rounded text-[10px] font-mono text-white">
                    {item.duration}
                  </div>
                )}

                {/* Hover Play Button */}
                <a
                  href={item.directUrl || item.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Watch ${item.title} on Instagram`}
                >
                  <div className="w-12 h-12 rounded-full bg-text-tertiary text-surface-base flex items-center justify-center shadow-glow transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 fill-surface-base translate-x-0.5" />
                  </div>
                </a>
              </div>

              {/* Details Content */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-text-tertiary transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Footer Metrics & Action */}
                <div className="pt-3 border-t border-border-strong/60 flex items-center justify-between text-xs text-text-secondary font-mono">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-text-primary font-medium">
                      <Eye className="w-3.5 h-3.5 text-text-tertiary" />
                      {item.views}
                    </span>
                    <span className="flex items-center gap-1 text-text-secondary">
                      <Heart className="w-3.5 h-3.5 text-rose-500" />
                      {item.likes}
                    </span>
                  </div>

                  <a
                    href={item.directUrl || item.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:text-text-primary transition-colors flex items-center gap-0.5 text-[11px]"
                  >
                    <span>Watch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
