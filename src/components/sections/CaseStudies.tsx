import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const projects = [
    { title: "Elegant Landscapes", type: "EDITORIAL", year: "2025", desc: "A travel publication's redesign — typography-driven, photo-led, edge-rendered.", img: "/assets/case-1.jpg" },
    { title: "Aurore Atelier", type: "COMMERCE", year: "2025", desc: "Direct-to-consumer fragrance house. Headless commerce, custom motion system.", img: "/assets/case-2.jpg" },
    { title: "Halcyon Metrics", type: "PRODUCT", year: "2024", desc: "B2B analytics console. Dense data, calm interface, sub-second interactions.", img: "/assets/case-3.jpg" },
    { title: "Northbound Studio", type: "PORTFOLIO", year: "2024", desc: "Architecture firm portfolio. Brutalist grid, archival photo storytelling.", img: "/assets/case-1.jpg" },
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
          <div key={i} className="min-w-[85vw] md:min-w-[600px] shrink-0 snap-center group cursor-pointer block border border-[#1F1F1F] bg-zinc-950/30">
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
          </div>
        ))}
      </div>
      
      <div className="px-6 md:px-12 mt-4 text-center">
         <p className="font-mono text-[10px] text-zinc-500">← DRAG / SCROLL HORIZONTALLY →</p>
      </div>
    </section>
  );
}
