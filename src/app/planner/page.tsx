import React from 'react';
import ProjectPlanner from '@/components/sections/ProjectPlanner';

export default function PlannerPage() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <div className="px-6 lg:px-12 py-16 text-white border-b border-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">PROJECT PLANNER.</h1>
        <p className="max-w-xl text-zinc-400 font-sans leading-relaxed">
          Use this isolated page to test and iterate the project intake experience.
        </p>
      </div>
      <ProjectPlanner />
    </div>
  );
}
