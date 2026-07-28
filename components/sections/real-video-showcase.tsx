"use client";

import React, { useState } from "react";
import { REAL_KASHAN_MEDIA, RealMediaItem } from "@/lib/data/content";
import { Play, Instagram, Youtube, ExternalLink } from "lucide-react";

export function RealVideoShowcase() {
  const [activeItem, setActiveItem] = useState<RealMediaItem>(REAL_KASHAN_MEDIA[0]);

  return (
    <section id="work" className="min-h-[85vh] py-32 sm:py-40 flex items-center bg-surface-base border-b border-border-strong/40">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div className="space-y-3">
            <span className="text-sm font-mono text-text-tertiary uppercase tracking-wider bg-surface-strong px-4 py-1.5 rounded-full border border-border-strong font-semibold">
              Authentic Media
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
              Real Reels & Video Content
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-lg">
              Watch Connect Kashan&apos;s actual high-performing Instagram reels and YouTube vlogs.
            </p>
          </div>

          <a
            href="https://www.instagram.com/connect.kashan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base font-mono text-text-tertiary hover:text-text-primary transition-colors flex items-center gap-2 font-bold"
          >
            <span>View @connect.kashan feed</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Active Media Embed Player Frame */}
          <div className="lg:col-span-7 bg-surface-muted border border-border-strong rounded-sm p-6 shadow-1 space-y-5">
            <div className="relative aspect-video rounded-xs overflow-hidden bg-black border border-border-strong flex items-center justify-center">
              {activeItem.platform === "YouTube" ? (
                <iframe
                  src={activeItem.embedUrl}
                  title={activeItem.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-6 bg-surface-strong">
                  <div className="w-16 h-16 rounded-full bg-text-tertiary/20 border border-text-tertiary text-text-tertiary flex items-center justify-center">
                    <Instagram className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-text-primary">
                      {activeItem.title}
                    </h4>
                    <p className="text-base text-text-secondary max-w-sm mx-auto">
                      {activeItem.caption}
                    </p>
                  </div>
                  <a
                    href={activeItem.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-text-tertiary text-surface-base text-sm font-bold px-7 py-3.5 rounded-full hover:bg-[#33e1ff] transition-all inline-flex items-center gap-2"
                  >
                    <span>Watch on Instagram Reel</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Active Item Metadata */}
            <div className="flex items-center justify-between text-sm sm:text-base text-text-secondary pt-2 font-mono">
              <div className="flex items-center gap-4">
                <span className="text-text-primary font-bold">{activeItem.views} Views</span>
                <span>•</span>
                <span className="text-text-tertiary font-semibold">{activeItem.category}</span>
              </div>
              <a
                href={activeItem.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors flex items-center gap-1.5 font-bold"
              >
                <span>Open in App</span>
                <ExternalLink className="w-4 h-4 text-text-tertiary" />
              </a>
            </div>
          </div>

          {/* Side Playlist Selector */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs sm:text-sm font-mono text-text-secondary uppercase tracking-wider block mb-3 font-bold">
              Select Video / Reel:
            </span>

            {REAL_KASHAN_MEDIA.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`w-full text-left p-5 rounded-xs border transition-all flex items-start gap-4 ${
                    isActive
                      ? "bg-surface-strong border-text-tertiary shadow-glow"
                      : "bg-surface-muted border-border-strong/60 hover:border-border-strong hover:bg-surface-strong/50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isActive ? "bg-text-tertiary text-surface-base" : "bg-surface-base text-text-secondary border border-border-strong"
                  }`}>
                    {item.platform === "Instagram" ? (
                      <Instagram className="w-5 h-5" />
                    ) : (
                      <Youtube className="w-5 h-5" />
                    )}
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className={`text-base font-bold truncate ${isActive ? "text-text-primary" : "text-text-secondary"}`}>
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-text-tertiary font-bold flex-shrink-0">
                        {item.views}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
