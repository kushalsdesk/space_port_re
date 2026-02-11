"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useNavigationStore, type JourneyExperience } from "@/store/navigationStore";
import { Button } from "@/components/ui/button";

const journeyData = [
  {
    id: "current" as JourneyExperience,
    year: "2024 - Present",
    title: "Backend & Systems | Independent",
    planet: "/images/blue_crystal.png",
    planetColor: "#4299E1",
    resources: [
      { name: "Go", icon: "/skills/golang.svg" },
      { name: "Linux", icon: "/skills/linux.svg" },
      { name: "NestJS", icon: "/skills/nest.svg" },
      { name: "Podman", icon: "/skills/podman.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Postman", icon: "/skills/postman.svg" },
      { name: "Postgresql", icon: "/skills/postgresql.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
    ],
    notes: [
      "Designed and built backend systems using Golang and TypeScript",
      "Implemented REST APIs with monolithic and microservice architectures",
      "Maintained Git-based workflows with branching, pull requests, and merges",
      "Worked in Linux-based environments with Docker and SSH",
    ],
  },
  {
    id: "startup" as JourneyExperience,
    year: "2021 - 2024",
    title: "Software Engineer | Leads4Needs",
    planet: "/images/green_biome.png",
    planetColor: "#48BB78",
    resources: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Node.js", icon: "/skills/node.svg" },
      { name: "Express.js", icon: "/skills/express.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Git", icon: "/skills/git.svg" },
    ],
    notes: [
      "Built web application using Next.js (pages router) and Redux",
      "Implemented client-side data flows using production APIs",
      "Worked on authentication flows, dashboards, and business listings",
      "Wrote JavaScript and TSX for real product features",
    ],
  },
  {
    id: "education" as JourneyExperience,
    year: "2017 - 2020",
    title: "BCA | MAKAUT",
    planet: "/images/white_pearl.png",
    planetColor: "#B794F6",
    resources: [
      { name: "Java", icon: "/skills/java.svg" },
      { name: "PHP", icon: "/skills/php.svg" },
      { name: "Mysql", icon: "/skills/mysql.svg" },
      { name: "Network", icon: "/skills/network.svg" },
    ],
    notes: [
      "Built foundational programming skills",
      "Explored web technologies and databases",
      "Developed problem-solving mindset",
    ],
  },
];

function InfoIsland({
  color,
  delay,
  children,
}: {
  color: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="backdrop-blur-md w-full rounded-lg p-4  relative"
      style={{
        backgroundColor: `${color}15`,
        borderColor: `${color}60`,
        boxShadow: `0 0 20px ${color}40`,
      }}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{
        duration: 0.2,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function ExperienceView({ experience }: { experience: any }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={experience.id}
        className="w-full min-h-[70vh] flex items-center justify-center py-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        {/* Mobile Layout */}
        <div className="md:hidden w-full px-4 space-y-8">
          <div className="space-y-8">
            {/* Role Island */}
            <InfoIsland color={experience.planetColor} delay={0}>
              <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
              <p className="text-sm" style={{ color: experience.planetColor }}>
                {experience.year}
              </p>
            </InfoIsland>

            {/* Planet */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              <div className="relative w-64 h-64">
                <Image
                  src={experience.planet}
                  alt={experience.title}
                  width={256}
                  height={256}
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Resources Island */}
            <InfoIsland color={experience.planetColor} delay={0.1}>
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span>⛏️</span> Resources Mined
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.resources.map((resource: any, idx: number) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-md backdrop-blur-sm "
                    style={{
                      backgroundColor: `${experience.planetColor}10`,
                      borderColor: `${experience.planetColor}40`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15, delay: 0.1 + idx * 0.02 }}
                  >
                    <Image
                      src={resource.icon}
                      alt={resource.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="text-xs text-white">{resource.name}</span>
                  </motion.div>
                ))}
              </div>
            </InfoIsland>

            {/* Notes Island */}
            <InfoIsland color={experience.planetColor} delay={0.15}>
              <ul className="space-y-2">
                {experience.notes.map((note: string, idx: number) => (
                  <motion.li
                    key={idx}
                    className="text-sm text-slate-300 flex gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.15, delay: 0.15 + idx * 0.02 }}
                  >
                    <span style={{ color: experience.planetColor }}>•</span>
                    <span>{note}</span>
                  </motion.li>
                ))}
              </ul>
            </InfoIsland>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block w-full max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Planet - Left Side */}
            <motion.div
              className="flex justify-end relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative w-[512px] h-[512px]">
                <Image
                  src={experience.planet}
                  alt={experience.title}
                  width={512}
                  height={512}
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Info Islands - Right Side */}
            <div className="space-y-6 relative">
              {/* Role Island */}
              <InfoIsland color={experience.planetColor} delay={0.05}>
                <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                <p className="text-base" style={{ color: experience.planetColor }}>
                  {experience.year}
                </p>
              </InfoIsland>

              {/* Resources Island */}
              <InfoIsland color={experience.planetColor} delay={0.1}>
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span>⛏️</span> Resources Mined
                </h4>
                <div className="flex flex-wrap gap-3">
                  {experience.resources.map((resource: any, idx: number) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm border"
                      style={{
                        backgroundColor: `${experience.planetColor}10`,
                        borderColor: `${experience.planetColor}40`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15, delay: 0.1 + idx * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={resource.icon}
                        alt={resource.name}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </InfoIsland>

              {/* Notes Island */}
              <InfoIsland color={experience.planetColor} delay={0.15}>
                <ul className="space-y-3">
                  {experience.notes.map((note: string, idx: number) => (
                    <motion.li
                      key={idx}
                      className="text-sm text-slate-300 flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.15, delay: 0.15 + idx * 0.02 }}
                    >
                      <span style={{ color: experience.planetColor }}>•</span>
                      <span>{note}</span>
                    </motion.li>
                  ))}
                </ul>
              </InfoIsland>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function SpaceJourney() {
  const activeJourneyExperience = useNavigationStore((state) => state.activeJourneyExperience);
  const setActiveJourneyExperience = useNavigationStore((state) => state.setActiveJourneyExperience);

  const activeExperience = journeyData.find(exp => exp.id === activeJourneyExperience) || journeyData[0];

  return (
    <section id="journey" className="py-12 relative z-10 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-6 relative flex-1 flex flex-col">
        {/* Section Header */}
        <div className="mx-auto max-w-6xl text-center mb-8">
          <motion.h2
            className="mb-3 sm:mb-4 mt-8 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400/50 to-teal-400/50 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Space Odyssey
          </motion.h2>

          <motion.div
            className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-teal-400/50 to-purple-400/50 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />

          {/* Navigation Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {journeyData.map((journey) => (
              <Button
                key={journey.id}
                onClick={() => setActiveJourneyExperience(journey.id)}
                variant="outline"
                className={`
                  relative px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300
                  ${activeJourneyExperience === journey.id
                    ? ' border-2 scale-105'
                    : ' border border-gray-700/50 '
                  }
                `}
                style={{
                  backgroundColor: activeJourneyExperience === journey.id
                    ? `${journey.planetColor}20`
                    : 'rgba(0,0,0,0.3)',
                  borderColor: activeJourneyExperience === journey.id
                    ? journey.planetColor
                    : undefined,
                  boxShadow: activeJourneyExperience === journey.id
                    ? `0 0 20px ${journey.planetColor}60`
                    : undefined,
                }}
                onMouseEnter={(e) => {
                  if (activeJourneyExperience !== journey.id) {
                    e.currentTarget.style.borderColor = `${journey.planetColor}80`;
                    e.currentTarget.style.backgroundColor = `${journey.planetColor}10`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeJourneyExperience !== journey.id) {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)';
                  }
                }}
              >
                <span className="text-sm text-white sm:text-base">{journey.year}</span>
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Experience View */}
        <div className="flex-1 flex items-center">
          <ExperienceView experience={activeExperience} />
        </div>
      </div>
    </section>
  );
}
