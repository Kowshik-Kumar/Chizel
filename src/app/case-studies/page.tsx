import React from 'react';
import CaseStudies from '@/components/sections/CaseStudies';

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <div className="px-6 lg:px-12 py-16 text-white border-b border-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">CASE STUDIES.</h1>
        <p className="max-w-xl text-zinc-400 font-sans leading-relaxed">
          A dedicated horizontal showcase for selected work and live embeds.
        </p>
      </div>
      <CaseStudies />
    </div>
  );
}
