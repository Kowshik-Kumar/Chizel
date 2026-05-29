"use client";

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    { title: "Rudra Finance", type: "LIVE", year: "2026", desc: "Interactive live preview — embedded site.", isLive: true },
  ];

  return (
    <section id="work" className="py-24 bg-black text-white border-b border-[#1F1F1F] overflow-hidden">
      <div className="px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase">[ 04 / SELECTED WORK ]</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">CASE STUDIES.</h2>
        </div>
        <p className="font-mono text-xs text-zinc-500">HORIZONTAL SHOWCASE GALLERY</p>
      </div>

      <div className="pl-6 md:pl-12 flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {projects.map((proj, i) => (
          <div
            key={i}
            className="min-w-[85vw] md:min-w-[600px] shrink-0 snap-center group cursor-pointer block border border-[#1F1F1F] bg-zinc-950/30"
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex((idx) => (idx === i ? null : idx))}
          >
            {proj.isLive ? (
              <div className="w-full border-b border-[#1F1F1F] p-6 bg-zinc-950">
                <div className="mx-auto max-w-full md:max-w-none">
                  <div className="rounded-sm overflow-hidden border border-[#2A2A2A] bg-[#0B0B0B]">
                    <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-[#1A1A1A]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <div className="mx-auto text-[11px] text-zinc-400 font-mono tracking-wide">rudra_finance.sys</div>
                      <div className="w-6" />
                    </div>

                    <div className="aspect-[16/10] w-full bg-black">
                      <iframe
                        title="Rudra Finance Live Preview"
                        src="https://rudrabusinesssolutions.github.io/Rudra_Finance/"
                        className={`w-full h-full border-0 transition-all duration-700 ${activeIndex === i ? 'pointer-events-auto mix-blend-normal opacity-100' : 'pointer-events-none mix-blend-luminosity opacity-80'}`}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex justify-between items-start gap-4 bg-zinc-950">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-white transition-colors">{proj.title}</h3>
                    <p className="text-sm text-zinc-400 font-sans max-w-sm">{proj.desc}</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors shrink-0" />
                </div>
              </div>
            ) : (
              <>
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#1F1F1F]">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] text-white mix-blend-difference z-10">
                    <span>{proj.type}</span>
                    <span>{proj.year}</span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex justify-between items-start gap-4 bg-zinc-950">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-white transition-colors">{proj.title}</h3>
                    <p className="text-sm text-zinc-400 font-sans max-w-sm">{proj.desc}</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors shrink-0" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      
      <div className="px-6 md:px-12 mt-4 text-center">
         <p className="font-mono text-[10px] text-zinc-500">← DRAG / SCROLL HORIZONTALLY →</p>
      </div>
    </section>
  );
}
