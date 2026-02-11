"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlackHole from "@/components/layout/BlackHole";
import { useNavigationStore } from "@/store/navigationStore";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Workspace Explorer & Developer";
  const setActiveSection = useNavigationStore((state) => state.setActiveSection);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center pt-20 pb-16">
      <div className="absolute inset-x-0 top-0 h-96 md:h-[500px] lg:h-[600px] flex justify-center items-start overflow-hidden pointer-events-none">
        <motion.div
          className="absolute sm:top-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <BlackHole />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-2 pb-2 sm:mb-4  text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/30 bg-clip-text leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome to My
          <br />
          <span className="">
            Desk{" "}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block text-purple-500/50"
            >
              Space
            </motion.div>
          </span>
        </motion.h1>

        <motion.h3
          className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-teal-500/30"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span>{typedText}</span>
          <span className="animate-pulse ml-1 inline-block h-6 sm:h-8 w-0.5 sm:w-1 bg-teal-500/50" />
        </motion.h3>

        <motion.p
          className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I build. I break. I rebuild.
          The <span className="text-teal-400/50 ">Gravitational pull</span><br />  of curiosity keeps expanding my universe of builds.

        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row mb-6 px-4"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            onClick={() => setActiveSection("projects")}
            className="w-full sm:w-auto bg-gradient-to-r from-sky-600/60 to-black/20 backdrop-blur-md transition-colors duration-300 text-teal-300 px-6 py-3 group">
            <Rocket className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Launch Mission
          </Button>
          <Button
            onClick={() => setActiveSection("journey")}
            variant="outline"
            className="w-full sm:w-auto border-teal-400 bg-teal-600/20 text-white/80  px-6 py-3 transition-colors duration-300"
          >
            <Star className="mr-2 h-4 w-4" />
            Explore Galaxy
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
export default HeroSection
