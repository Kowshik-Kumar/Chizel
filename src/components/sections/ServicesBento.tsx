import React from 'react';
import { LayoutGrid, Code, Library, Landmark, ArrowUpRight } from 'lucide-react';

export default function ServicesBento() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-black text-white border-b border-[#1F1F1F]">
      <div className="flex flex-col mb-16 gap-4">
        <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase">[ 02 / CAPABILITIES ]</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight pb-4">
          A vertical stack.<br />
          No subcontracting.
        </h2>
        <p className="text-lg text-zinc-400 font-sans max-w-2xl">
          Every pixel, every commit, every decision &mdash; shipped by one principal.
        </p>
      </div>

      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 gap-6">
        
        {/* Service 1 */}
        <div className="border border-[#1F1F1F] p-8 md:p-10 flex flex-col justify-between group bg-zinc-950/50 hover:bg-zinc-900 transition-colors">
          <div className="flex justify-between items-start mb-16">
            <span className="font-mono text-[10px] text-zinc-500">SVC_01</span>
            <div className="bg-white/10 text-white font-mono text-[10px] px-2 py-1 rounded flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> 100% Performance Score
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">UI / UX DESIGN.</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Editorial interface design grounded in typography, motion, and information hierarchy. Figma-native, system-led, dev-ready.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="border border-[#1F1F1F] p-8 md:p-10 flex flex-col justify-between group bg-zinc-950/50 hover:bg-zinc-900 transition-colors md:row-span-2">
          <div className="flex justify-between items-start mb-16">
            <span className="font-mono text-[10px] text-zinc-500">SVC_02</span>
            <Code className="text-zinc-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">TECHNICAL DEVELOPMENT.</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-8">
              React, Next, TanStack, Astro, GSAP, WebGL. Clean architecture, type-safe, edge-deployed.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
              <li className="border border-[#1F1F1F] px-2 py-1 rounded">TYPESCRIPT ●</li>
              <li className="border border-[#1F1F1F] px-2 py-1 rounded">REACT 19 ●</li>
              <li className="border border-[#1F1F1F] px-2 py-1 rounded">EDGE RUNTIME ●</li>
              <li className="border border-[#1F1F1F] px-2 py-1 rounded">WEBGL / R3F ●</li>
            </ul>
          </div>
        </div>

        {/* Service 3 */}
        <div className="border border-[#1F1F1F] p-8 md:p-10 flex flex-col justify-between group bg-zinc-950/50 hover:bg-zinc-900 transition-colors">
          <div className="flex justify-between items-start mb-16">
            <span className="font-mono text-[10px] text-zinc-500">SVC_03</span>
            <Library className="text-zinc-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">PORTFOLIO PLANNING.</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Curation, narrative architecture, and case-study scaffolding for studios and solo operators.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="border border-[#1F1F1F] p-8 md:p-10 flex flex-col justify-between group bg-zinc-950/50 hover:bg-zinc-900 transition-colors md:col-span-2">
          <div className="flex justify-between items-start mb-8 md:mb-16">
            <span className="font-mono text-[10px] text-zinc-500">SVC_04</span>
            <Landmark className="text-zinc-600 w-6 h-6" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">PRICING STRATEGY.</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                Value-based positioning, tier architecture, and retainer engineering for premium engagements.
              </p>
            </div>
            <ArrowUpRight className="text-zinc-600 w-8 h-8 md:block hidden group-hover:text-white transition-colors" />
          </div>
        </div>

      </div>
    </section>
  );
}
