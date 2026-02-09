"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Journey data with planet mappings
const journeyData = [

  {
    id: "current",
    year: "2024 - Present",
    title: "Backend & Systems | Independent",
    planet: "/images/blue_crystal.png",
    planetColor: "#4299E1",
    resources: [
      { name: "Go", icon: "/skills/golang.svg" },
      { name: "Linux", icon: "/skills/linux.svg" },
      { name: "Neovim", icon: "/skills/neovim.svg" },
      { name: "NestJS", icon: "/skills/nest.svg" },
      { name: "Podman", icon: "/skills/podman.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Postman", icon: "/skills/postman.svg" },
      { name: "Postgresql", icon: "/skills/postgresql.svg" },
    ],
    notes: [
      "Designed and built backend systems using Golang and TypeScript",
      "Implemented REST APIs with monolithic and microservice architectures",
      "Maintained Git-based workflows with branching, pull requests, and merges",
      "Worked in Linux-based environments with Docker and SSH",
      "Building high-performance APIs with Go",
    ],
  },
  {
    id: "startup",
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
    id: "education",
    year: "2017 - 2020",
    title: "BCA | MAKAUT",
    planet: "/images/white_pearl.png",
    planetColor: "#B794F6",
    resources: [
      { name: "Java", icon: "/skills/java.svg" },
      { name: "C#", icon: "/skills/csharp.svg" },
      { name: "PHP", icon: "/skills/php.svg" },
      { name: "Mysql", icon: "/skills/mysql.svg" },
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
  type: string;
  color: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="backdrop-blur-md rounded-lg p-4 border-1 relative"
      style={{
        backgroundColor: `${color}5`,
        borderColor: `${color}60`,
        boxShadow: `0 0 20px ${color}40`,
      }}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}

function Arrow({
  color,
  delay,
  startX,
  startY,
  endX,
  endY,
}: {
  color: string;
  delay: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}) {
  const controlX = startX + (endX - startX) * 0.5;
  const controlY = startY;

  const pathD = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      <defs>
        <linearGradient id={`arrowGradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </linearGradient>
        <marker
          id={`arrowhead-${delay}`}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill={color} opacity="0.6" />
        </marker>
      </defs>
      <motion.path
        d={pathD}
        stroke={`url(#arrowGradient-${delay})`}
        strokeWidth="2"
        fill="none"
        markerEnd={`url(#arrowhead-${delay})`}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
      />
    </svg>
  );
}

function ExperienceView({ experience, index }: { experience: any; index: number }) {
  return (
    <div className="min-h-screen flex items-center justify-center py-5 relative">
      {/* Mobile Layout */}
      <div className="md:hidden w-full px-4 space-y-8">

        <div className="space-y-4">
          {/* Role Island */}
          <InfoIsland type="role" color={experience.planetColor} delay={0.3}>
            <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
            <p className="text-sm" style={{ color: experience.planetColor }}>
              {experience.year}
            </p>
          </InfoIsland>


          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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

          <InfoIsland type="resources" color={experience.planetColor} delay={0.7}>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span>⛏️</span> Resources Mined
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.resources.map((resource: any, idx: number) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 rounded-md backdrop-blur-sm border"
                  style={{
                    backgroundColor: `${experience.planetColor}10`,
                    borderColor: `${experience.planetColor}40`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
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
          <InfoIsland type="notes" color={experience.planetColor} delay={0.9}>
            <ul className="space-y-2">
              {experience.notes.map((note: string, idx: number) => (
                <motion.li
                  key={idx}
                  className="text-sm text-slate-300 flex gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.9 + idx * 0.1 }}
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
            className="flex justify-end"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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

          <div className="space-y-6 relative">
            <InfoIsland type="role" color={experience.planetColor} delay={0.3}>
              <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
              <p className="text-base" style={{ color: experience.planetColor }}>
                {experience.year}
              </p>
            </InfoIsland>


            <InfoIsland type="resources" color={experience.planetColor} delay={0.7}>
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
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
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

            <InfoIsland type="notes" color={experience.planetColor} delay={0.9}>
              <ul className="space-y-3">
                {experience.notes.map((note: string, idx: number) => (
                  <motion.li
                    key={idx}
                    className="text-sm text-slate-300 flex gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.9 + idx * 0.1 }}
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
    </div>
  );
}

export default function SpaceJourney() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="journey" className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="mx-auto max-w-6xl text-center mb-16">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-white/80"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Space <span className="text-purple-400">Odyssey</span>
          </motion.h2>

          <motion.div
            className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </div>

        {/* Journey Experiences */}
        <div className="space-y-32">
          {journeyData.map((experience, index) => (
            <ExperienceView key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
