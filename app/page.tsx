"use client";

import { useNavigationStore } from "@/store/navigationStore";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SpaceBackground from "@/components/SpaceBackground";

export default function Page() {
  const activeSection = useNavigationStore((state) => state.activeSection);

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Fixed space background */}
      <SpaceBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        {activeSection === "hero" && <HeroSection />}

        {/* Placeholder sections for other views */}
        {activeSection === "about" && (
          <section className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-white/80">About</h1>
              <p className="text-xl text-slate-400">Coming Soon...</p>
            </div>
          </section>
        )}

        {activeSection === "journey" && (
          <section className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-white/80">Journey</h1>
              <p className="text-xl text-slate-400">Coming Soon...</p>
            </div>
          </section>
        )}

        {activeSection === "skills" && (
          <section className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-white/80">Skills</h1>
              <p className="text-xl text-slate-400">Coming Soon...</p>
            </div>
          </section>
        )}

        {activeSection === "projects" && (
          <section className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-white/80">Projects</h1>
              <p className="text-xl text-slate-400">Coming Soon...</p>
            </div>
          </section>
        )}

        {activeSection === "contact" && (
          <section className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-white/80">Contact</h1>
              <p className="text-xl text-slate-400">Coming Soon...</p>
            </div>
          </section>
        )}
      </div>

      {/* Navigation Bar */}
      <Navbar />
    </div>
  );
}
