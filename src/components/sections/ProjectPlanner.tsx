"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectPlanner() {
  return (
    <section id="planner" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Side */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase">[ 05 / PROJECT PLANNER ]</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight pb-4">
              Initiate the<br />
              engagement.
            </h2>
            <p className="text-lg text-zinc-400 font-sans max-w-md mb-8">
              A structured intake &mdash; not a contact form. Calibrate scope, budget, and intent before we ever speak.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 font-mono text-[10px] text-zinc-400 max-w-sm">
            <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
              <span>RESPONSE</span>
              <span className="text-white">&lt; 24 HOURS</span>
            </div>
            <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
              <span>TIMEZONE</span>
              <span className="text-white">EST · UTC−5</span>
            </div>
            <div className="flex justify-between border-b border-[#1F1F1F] pb-2">
              <span>SLOTS · Q3 2026</span>
              <span className="text-white">2 OPEN</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full">
          <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {['NAME', 'EMAIL', 'COMPANY', 'TIMELINE'].map(f => (
                <div key={f} className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-zinc-500">{f}</label>
                  <input type={f === 'EMAIL' ? 'email' : 'text'} placeholder={f === 'NAME' ? 'Your full name' : f === 'EMAIL' ? 'you@domain.com' : f === 'COMPANY' ? 'Organization' : 'e.g. Q4 launch'} className="bg-transparent border-b border-[#1F1F1F] py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors font-sans rounded-none" />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-mono text-[10px] text-zinc-500">BUDGET</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['–', '–', '–', '+'].map((b, i) => (
                  <button key={i} type="button" className={`py-4 border border-[#1F1F1F] text-xs font-mono transition-colors hover:bg-zinc-900 ${i === 1 ? 'bg-zinc-900 border-zinc-700 text-white' : 'text-zinc-400 bg-transparent'}`}>
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-mono text-[10px] text-zinc-500">PRIMARY GOAL</label>
              <select
                defaultValue=""
                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-left font-sans text-sm text-white transition-colors focus:outline-none focus:border-white rounded-none"
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option value="landing-page">Landing page</option>
                <option value="professional-dashboard">Professional dashboard</option>
                <option value="full-stack-website">Full stack website</option>
                <option value="ui-ux-works">UI/UX works</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-zinc-500">BRIEF</label>
              <textarea placeholder="Tell me about the project, audience, and references…" rows={4} className="bg-transparent border-b border-[#1F1F1F] py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors font-sans resize-none rounded-none"></textarea>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
              <p className="font-mono text-[10px] text-zinc-500">ENCRYPTED · NO MAILING LIST</p>
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors w-full md:w-auto">
                Submit Brief <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
