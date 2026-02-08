"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useNavigationStore, type Section } from "@/store/navigationStore";

const navItems: { name: string; id: Section; icon: string }[] = [
  { name: "Home", id: "hero", icon: "/nav/home.svg" },
  { name: "About", id: "about", icon: "/nav/user.svg" },
  { name: "Journey", id: "journey", icon: "/nav/timeline.svg" },
  { name: "Skills", id: "skills", icon: "/nav/skills.svg" },
  { name: "Projects", id: "projects", icon: "/nav/projects.svg" },
  { name: "Contact", id: "contact", icon: "/nav/email.svg" },
];

export default function SpaceNavigation() {
  const activeSection = useNavigationStore((state) => state.activeSection);
  const setActiveSection = useNavigationStore((state) => state.setActiveSection);

  return (
    <div className="fixed bottom-2 mx-auto w-full z-50">
      <motion.nav
        className="flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-1 sm:gap-2 rounded-md bg-black/60 backdrop-blur-md border border-gray-700/50 px-2 sm:px-4 py-2 sm:py-3 shadow-2xl"
          layout
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`relative flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-md transition-all duration-300 ${activeSection === item.id
                ? "bg-gradient-to-r from-black-500 to-grey-600 text-white scale-105"
                : "text-slate-400 hover:text-white hover:bg-gray-800/50"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={item.name}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className="object-contain"
              />

              {/* Orbital ring for active item */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 border border-teal-400/30 rounded-md"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </motion.nav>
    </div>
  );
}
