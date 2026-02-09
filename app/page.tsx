"use client";

import { useNavigationStore } from "@/store/navigationStore";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layout/Navbar";
import SpaceBackground from "@/components/layout/SpaceBackground";
import AboutSection from "@/components/sections/AboutSection";
import JourneySection from "@/components/sections/JourneySection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactsSection from "@/components/sections/ContactsSection";

export default function Page() {
  const activeSection = useNavigationStore((state) => state.activeSection);

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Fixed space background */}
      <SpaceBackground />

      {/* Content */}
      <div className="relative z-10">
        {activeSection === "hero" && <HeroSection />}

        {activeSection === "about" && <AboutSection />}

        {activeSection === "journey" && <JourneySection />}

        {activeSection === "skills" && <SkillsSection />}

        {activeSection === "projects" && <ProjectsSection />}

        {activeSection === "contact" && <ContactsSection />}

      </div>

      {/* Navigation Bar */}
      <Navbar />
    </div>
  );
}
