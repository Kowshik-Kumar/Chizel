import React from 'react';
import ServicesBento from '@/components/sections/ServicesBento';

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <div className="px-6 lg:px-12 py-16 text-white border-b border-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">SERVICES.</h1>
        <p className="max-w-xl text-zinc-400 font-sans leading-relaxed">
          Specialized disciplines for ambitious brands. We don't do everything. We focus on areas where we can deliver unmatched quality and rigorous engineering.
        </p>
      </div>
      <ServicesBento />
    </div>
  );
}