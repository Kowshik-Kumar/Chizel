import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const stripeItems = [
    'PERFORMANCE',
    'DESIGN',
    'DEVELOPMENT',
    'STRATEGY',
    'BRANDING',
    'MOTION',
    
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-12 flex flex-col justify-end border-b border-[#1F1F1F] px-6 lg:px-12 bg-black text-white">
      
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gaps-12 lg:gap-24 w-full h-full items-end pb-12">
        <div className="flex flex-col gap-6 w-full pb-8">
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">— Independent web studio · Est. 2021</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.85] font-black uppercase tracking-tighter w-full mb-4">
            WE CHIZEL<br />
            DIGITAL<br />
            EXPERIENCES.
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full mt-4">
            <a href="#work" className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-sans text-sm font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors w-max">
              Explore Work <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="max-w-xs text-sm text-zinc-400 font-sans leading-relaxed">
              A one-person studio crafting performant interfaces for brands that refuse the template.
            </p>
          </div>
        </div>

        <div className="w-full relative h-[60vh] lg:h-[70vh] flex flex-col justify-end">
          <div className="absolute inset-0 bg-zinc-900 border border-[#1F1F1F] overflow-hidden">
            <img src="/assets/hero-structure.jpg" alt="Abstract architectural block sculpture" className="w-full h-full object-cover object-center grayscale opacity-80" />
            
            <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] text-white/70 uppercase tracking-widest mix-blend-difference">
              <span>OBJ_001.CHZL</span>
              <span>RENDER · LIVE</span>
            </div>
            
            <div className="absolute bottom-4 left-4 flex justify-between items-end w-[calc(100%-2rem)]">
              <div className="flex flex-col font-mono text-[10px] text-white uppercase tracking-widest mix-blend-difference">
                <span>MONOLITH / 04</span>
                <span className="text-white/60">Brutalist composition study</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white mix-blend-difference" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Moving stripe */}
      <div className="relative mt-12 w-full overflow-hidden border-y border-[#1F1F1F] bg-black py-2.5">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center gap-14 pr-14 font-mono text-lg md:text-[22px] uppercase leading-none tracking-[0.18em] text-zinc-500">
              {stripeItems.map((item, index) => (
                <React.Fragment key={`${group}-${item}-${index}`}>
                  <span className="shrink-0">{item}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full shrink-0 ${index === stripeItems.length - 1 ? 'bg-red-500' : index % 3 === 0 ? 'bg-violet-500' : index % 3 === 1 ? 'bg-sky-400' : 'bg-emerald-400'}`}
                  />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
