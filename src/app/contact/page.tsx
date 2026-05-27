import React from 'react';
import ProjectPlanner from '@/components/sections/ProjectPlanner';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <div className="px-6 lg:px-12 py-16 text-white border-b border-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">CONNECT.</h1>
        <p className="max-w-xl text-zinc-400 font-sans leading-relaxed">
          Ready to build something uncompromising? Fill out the project planner below or reach out directly. We carefully select our partners to ensure the highest level of execution.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs text-zinc-400 uppercase tracking-widest border-t border-[#1F1F1F] pt-8">
          <div>
            <span className="text-white block mb-2">GENERAL INQUIRIES</span>
            <a href="mailto:hello@chizel.studio" className="hover:text-white transition-colors">HELLO@CHIZEL.STUDIO</a>
          </div>
          <div>
            <span className="text-white block mb-2">CAREERS</span>
            <a href="mailto:work@chizel.studio" className="hover:text-white transition-colors">WORK@CHIZEL.STUDIO</a>
          </div>
        </div>
      </div>
      <ProjectPlanner />
    </div>
  );
}