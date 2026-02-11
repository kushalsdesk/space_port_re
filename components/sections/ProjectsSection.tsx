"use client";

import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useNavigationStore, type ProjectId } from "@/store/navigationStore";

const projects = [
  {
    id: "nebula" as ProjectId,
    name: "Nebula Commerce",
    type: "E-commerce Platform",
    description:
      "A stellar e-commerce platform that connects merchants across the digital galaxy. Built with Next.js and powered by cosmic-scale performance.",
    tech: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
    ],
    color: "#B7410E",
    github: "#",
    live: "#",
  },
  {
    id: "quantum" as ProjectId,
    name: "Quantum Dashboard",
    type: "Analytics Platform",
    description:
      "Real-time analytics dashboard that processes data at light speed. Visualizes complex metrics through an intuitive cosmic interface.",
    tech: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Node.js", icon: "/skills/node.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
    ],
    color: "#660000",
    github: "#",
    live: "#",
  },
  {
    id: "stellar" as ProjectId,
    name: "Stellar Chat",
    type: "Communication App",
    description:
      "Instant messaging app that connects teams across different time zones and galaxies. Features real-time collaboration tools.",
    tech: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Express", icon: "/skills/express.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
    ],
    color: "#004526",
    github: "#",
    live: "#",
  },
  {
    id: "cosmic" as ProjectId,
    name: "Cosmic Portfolio",
    type: "Personal Website",
    description:
      "This very portfolio you're exploring! A journey through my digital universe showcasing skills and projects.",
    tech: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Framer Motion", icon: "/skills/framer.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
    ],
    color: "#452c63",
    github: "#",
    live: "#",
  },
];

function ProjectCard({ project }: { project: any }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl mx-auto"
      >
        <Card
          className="bg-black/60 backdrop-blur-sm border-gray-700/50 transition-all duration-300 group"
          style={
            {
              borderColor: project.color + "50",
            } as React.CSSProperties
          }
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = project.color + "80";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = project.color + "50";
          }}
        >
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl font-bold backdrop-blur-sm border-2"
                  style={{
                    backgroundColor: `${project.color}20`,
                    borderColor: `${project.color}60`,
                    color: project.color,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.name[0]}
                </motion.div>
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: project.color }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-400">{project.type}</p>
                </div>
              </div>
            </div>

            <motion.p
              className="text-slate-300 mb-6 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {project.description}
            </motion.p>

            <div className="mb-6">
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech: any, techIndex: number) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg backdrop-blur-sm transition-all"
                    style={
                      {
                        "--hover-border-color": project.color + "80",
                      } as React.CSSProperties
                    }
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = project.color + "80";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(75, 85, 99, 0.5)";
                    }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <span className="text-sm text-slate-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                variant="outline"
                className=" border-gray-600 text-white  md:flex-1 hover:text-white bg-transparent transition-all"
                style={
                  {
                    "--hover-border-color": project.color + "80",
                    "--hover-bg-color": project.color + "10",
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = project.color + "80";
                  e.currentTarget.style.backgroundColor = project.color + "10";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgb(75, 85, 99)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="text-sm sm:text-base">View Code</span>
              </Button>
              <Button
                size="lg"
                className="hover:opacity-90 text-white md:flex-1 font-medium transition-all"
                style={{ backgroundColor: project.color }}
                onClick={() => window.open(project.live, "_blank")}
              >
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="text-sm sm:text-base">Launch Project</span>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

const ProjectSection = () => {
  const activeProject = useNavigationStore((state) => state.activeProject);
  const setActiveProject = useNavigationStore((state) => state.setActiveProject);

  const currentProject = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <section id="projects" className="py-20 relative z-10 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-6 relative flex-1 flex flex-col">
        <div className="mx-auto max-w-6xl text-center mb-12">
          <motion.h2
            className="mb-3 sm:mb-4 mt-8 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400/50 to-teal-400/50 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="mb-8 sm:mb-12 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-teal-400/50 to-purple-400/50 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {projects.map((project) => (
              <Button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className={`
                  px-5 sm:px-7 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 border-0
                  ${activeProject === project.id
                    ? 'text-white scale-105 shadow-lg'
                    : 'text-slate-400 hover:text-white hover:scale-102'
                  }
                `}
                style={{
                  border: activeProject === project.id ? '1px' : 'none',
                  borderColor: activeProject === project.id ? project.color : 'none',
                  boxShadow: activeProject === project.id
                    ? `0 0 30px ${project.color}80`
                    : 'none',
                }}
                onMouseEnter={(e) => {
                  if (activeProject !== project.id) {
                    e.currentTarget.style.backgroundColor = 'rgba(100, 100, 100, 0.35)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeProject !== project.id) {
                    e.currentTarget.style.backgroundColor = 'rgba(100, 100, 100, 0.2)';
                  }
                }}
              >
                <span
                  className="text-sm sm:text-base font-semibold"
                  style={{
                    color: activeProject === project.id ? project.color : "white"
                  }}
                >
                  {project.name}
                </span>
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <ProjectCard project={currentProject} />
        </div>
      </div>
    </section>
  );
}
export default ProjectSection
