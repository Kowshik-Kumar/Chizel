import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesBento from "@/components/sections/ServicesBento";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CaseStudies from "@/components/sections/CaseStudies";
import ProjectPlanner from "@/components/sections/ProjectPlanner";
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white" id="top">
      <Navbar />
      <Hero />
      <ServicesBento />
      <ProcessTimeline />
      <CaseStudies />
      <ProjectPlanner />
      
      {/* Footer */}
      <footer className="bg-black py-16 px-6 md:px-12 border-t border-[#1F1F1F]">
        <div className="flex flex-col gap-16">
          <div className="text-[10vw] font-black uppercase tracking-tighter leading-none text-white">
            CHIZEL.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 font-mono text-[10px] text-zinc-500 uppercase tracking-widest border-t border-[#1F1F1F] pt-8">
            <div className="flex flex-col gap-2">
              <p>© 2026 CHIZEL STUDIO. INDEPENDENT.</p>
              <p>CRAFTED IN BROOKLYN, NY</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">TWITTER <ArrowUpRight className="w-3 h-3" /></a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">DRIBBBLE <ArrowUpRight className="w-3 h-3" /></a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">GITHUB <ArrowUpRight className="w-3 h-3" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
