import React from 'react';
import ProcessTimeline from '@/components/sections/ProcessTimeline';

export default function ProcessPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <div className="px-6 lg:px-12 py-16 text-white border-b border-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">PROCESS.</h1>
        <p className="max-w-xl text-zinc-400 font-sans leading-relaxed">
          Our methodology is transparent, iterative, and structurally sound. We believe in tight feedback loops and engineering systems that scale from day one.
        </p>
      </div>
      <ProcessTimeline />
    </div>
  );
}