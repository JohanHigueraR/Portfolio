"use client"
import About from "../components/About";
import ProjectsPreview from "../components/ProyectsPreview";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import SectionWrapper from "../components/SectionWrapper";
import SectionDivider from "../components/SectionDivider";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll()
  return (
    <main className="">
    <SectionWrapper id="about">
      <About />
    </SectionWrapper>
    
    <SectionDivider />
    
    <SectionWrapper id="projects" className="bg-surface/10">
      <ProjectsPreview />
    </SectionWrapper>
    
    <SectionDivider />
    
    <SectionWrapper id="experience">
      <Experience />
    </SectionWrapper>
    
    <SectionDivider />
    
    <SectionWrapper id="contact" className="bg-surface/10">
      <Contact />
    </SectionWrapper>
  </main>
  );
}


