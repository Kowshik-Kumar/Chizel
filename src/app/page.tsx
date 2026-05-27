import Hero from "@/components/sections/Hero";
import ServicesBento from "@/components/sections/ServicesBento";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CaseStudies from "@/components/sections/CaseStudies";
import ProjectPlanner from "@/components/sections/ProjectPlanner";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white" id="top">
      <Hero />
      <ServicesBento />
      <ProcessTimeline />
      <CaseStudies />
      <ProjectPlanner />
    </div>
  );
}
