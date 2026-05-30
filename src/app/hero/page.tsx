import React from 'react';
import Hero from '@/components/sections/Hero';

export default function HeroPage() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white" id="top">
      <div className="px-6 lg:px-12 py-16 text-white border-b border-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">HOME HERO.</h1>
        <p className="max-w-xl text-zinc-400 font-sans leading-relaxed">
          A focused presentation of the hero module used on the front page — useful for isolated QA and visual tuning.
        </p>
      </div>
      <Hero />
    </div>
  );
}
