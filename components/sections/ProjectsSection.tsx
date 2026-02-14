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
    id: "first" as ProjectId,
    name: "Lumora | Toys & Lifestyle",
    type: "E-commerce Platform",
    description:
      "Discover intentional, skill-building toys that feel like lifestyle. Explore Lumora\'s curated collection of educational, decorative, and miniature toys.",
    tech: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
    ],
    color: "#F59E0B",
    image: "/projects/nebula-commerce.png",
    github: "#",
    live: "#",
  },
  {
    id: "second" as ProjectId,
    name: "Notes & Tones | Guitar Cheatsheet",
    type: "Learning Platform",
    description:
      "Understand Guitar Learning by yourself with provided Docs that can explain every bit one can play and why should they play it",
    tech: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Node.js", icon: "/skills/node.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
    ],
    color: "#EF4444",
    image: "/projects/quantum-dashboard.png",
    github: "#",
    live: "#",
  },
  {
    id: "third" as ProjectId,
    name: "GreenPenny | Finance Tracker",
    type: "Analytics App",
    description:
      "Track expenses, manage bills, and grow your wealth with intelligent insights",
    tech: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Express", icon: "/skills/express.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
    ],
    color: "#10B981",
    image: "/projects/stellar-chat.png",
    github: "#",
    live: "#",
  },
  {
    id: "fourth" as ProjectId,
    name: "Treat Earth Well | Article Platform",
    type: "Article App",
    description:
      "Here we talk about earth & our relationship, try to concern people with their activity to save our planet, specially with Technical Machines",
    tech: [
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Framer Motion", icon: "/skills/framer.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
    ],
    color: "#8B5CF6",
    image: "/projects/cosmic-portfolio.png",
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
        className="w-full max-w-4xl mx-auto"
      >
        <Card
          className="bg-black/60 backdrop-blur-sm transition-all duration-300 group overflow-hidden"
          style={{
            borderWidth: '2px',
            borderColor: project.color + "60",
          } as React.CSSProperties}
        >
          <CardContent className="p-0">
            {/* Single column layout for all screen sizes */}
            <div className="flex flex-col">
              {/* Project Image */}
              <motion.div
                className="relative w-full aspect-video bg-gray-900/50"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}40 0%, transparent 70%)`
                  }}
                />
                <div className="relative w-full h-full flex items-center justify-center  p-2 sm:p-5">
                  <div className="relative w-full h-full rounded-lg">
                    {/* Placeholder for project image */}
                    <Image
                      src="images/blackhole.png"
                      alt="Placeholder"
                      width={220}
                      height={240}
                      className="object-contain w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 flex flex-col">
                <div>
                  {/* Header */}
                  <motion.div
                    className="mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p
                      className="text-sm sm:text-base font-medium"
                      style={{ color: project.color }}
                    >
                      {project.type}
                    </p>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack - Icons Only */}
                  <motion.div
                    className="mb-6 sm:mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech: any, techIndex: number) => (
                        <motion.div
                          key={tech.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg backdrop-blur-sm transition-all group/tech"
                          style={{
                            backgroundColor: `${project.color}10`,
                            border: `1px solid ${project.color}30`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + techIndex * 0.05 }}
                          whileHover={{
                            scale: 1.15,
                            boxShadow: `0 0 20px ${project.color}40`
                          }}
                          title={tech.name}
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={24}
                            height={24}
                            className="object-contain w-6 h-6"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="md:flex-1 border-2 border-gray-600 text-white hover:text-white bg-transparent transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = project.color;
                      e.currentTarget.style.backgroundColor = `${project.color}15`;
                      e.currentTarget.style.boxShadow = `0 0 20px ${project.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgb(75, 85, 99)";
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    <span className="text-base font-medium">View Code</span>
                  </Button>
                  <Button
                    size="lg"
                    className="md:flex-1 text-white font-medium transition-all duration-300 border-2"
                    style={{
                      backgroundColor: project.color,
                      borderColor: project.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 30px ${project.color}80`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span className="text-base">Launch Project</span>
                  </Button>
                </motion.div>
              </div>
            </div>
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
          <motion.div
            className="mb-8 sm:mb-12 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-blue-400/80 to-purple-400/60 mx-auto"
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
                  px-5 sm:px-7 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300
                  ${activeProject === project.id
                    ? 'text-white scale-105'
                    : 'text-slate-400 hover:text-white'
                  }
                `}
                style={{
                  backgroundColor: activeProject === project.id
                    ? `${project.color}20`
                    : 'rgba(50, 50, 50, 0.5)',
                  border: activeProject === project.id
                    ? `2px solid ${project.color}`
                    : '2px solid rgba(100, 100, 100, 0.3)',
                  boxShadow: activeProject === project.id
                    ? `0 0 30px ${project.color}60`
                    : 'none',
                }}
                onMouseEnter={(e) => {
                  if (activeProject !== project.id) {
                    e.currentTarget.style.backgroundColor = 'rgba(100, 100, 100, 0.4)';
                    e.currentTarget.style.borderColor = `${project.color}50`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeProject !== project.id) {
                    e.currentTarget.style.backgroundColor = 'rgba(50, 50, 50, 0.5)';
                    e.currentTarget.style.borderColor = 'rgba(100, 100, 100, 0.3)';
                  }
                }}
              >
                <span className="text-sm sm:text-base font-semibold">
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
