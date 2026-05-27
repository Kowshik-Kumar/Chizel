import React from 'react';

export default function ProcessTimeline() {
  const steps = [
    { num: '01', title: 'DISCOVERY & BLUEPRINTING', duration: '1–2 wks', p: 'PHASE 1 / 5', desc: 'Stakeholder interviews, audit, and a written technical blueprint before a single pixel is moved.' },
    { num: '02', title: 'PORTFOLIO PLANNING', duration: '1 wk', p: 'PHASE 2 / 5', desc: 'Information architecture, content modeling, and case-study scaffolding aligned to business outcomes.' },
    { num: '03', title: 'TECHNICAL DEVELOPMENT', duration: '3–6 wks', p: 'PHASE 3 / 5', desc: 'Type-safe React, edge runtime, accessibility baked in. Built in public on a preview URL.' },
    { num: '04', title: 'PRICING STRATEGY', duration: '1 wk', p: 'PHASE 4 / 5', desc: 'Conversion-tuned tiering, copy systems, and CTA architecture if commerce is in scope.' },
    { num: '05', title: 'OPTIMIZATION & DEPLOYMENT', duration: '1 wk', p: 'PHASE 5 / 5', desc: 'Lighthouse 100s, observability, analytics wiring, and a handoff document built to outlast me.' }
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-black text-white border-b border-[#1F1F1F]">
      <div className="flex flex-col mb-24 gap-4">
        <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase">[ 03 / PIPELINE ]</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight pb-4">
          The process,<br />
          disclosed.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Sequence List */}
        <div className="lg:w-1/4 shrink-0">
          <p className="font-mono text-[10px] text-zinc-500 mb-8 border-b border-[#1F1F1F] pb-4">SEQUENCE</p>
          <ul className="flex flex-col gap-4 font-mono text-xs text-zinc-400">
            {steps.map(s => (
              <li key={s.num} className="hover:text-white transition-colors cursor-pointer">{s.num} · {s.title.split(' ')[0]}</li>
            ))}
          </ul>
        </div>

        {/* Right Details */}
        <div className="lg:w-3/4 flex flex-col gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-[#1F1F1F] last:border-0 grow">
              <div className="font-mono text-4xl text-zinc-600 font-light">{step.num}</div>
              <div className="grow">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans max-w-lg mb-8">{step.desc}</p>
                <div className="flex flex-wrap gap-8 font-mono text-[10px] text-zinc-500">
                  <div className="flex flex-col gap-1">
                    <span>DURATION</span>
                    <span className="text-white">{step.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1 justify-end">
                    <span>{step.p}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
