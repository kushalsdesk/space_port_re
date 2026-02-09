"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: "/skills/node.svg",
    color: "#339933",
  },
  {
    name: "Go",
    icon: "/skills/golang.svg",
    color: "#00ADD8",
  },


  {
    name: "Express",
    icon: "/skills/express.svg",
    color: "#FFFFFF",
  },
  {
    name: "NestJS",
    icon: "/skills/nest.svg",
    color: "#E0234E",
  },

  {
    name: "GraphQL",
    icon: "/skills/graphql.svg",
    color: "#E10098",
  },


  {
    name: "React",
    icon: "/skills/react.svg",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "/skills/nextjs.svg",
    color: "#FFFFFF",
  },
  {
    name: "Zustand",
    icon: "/skills/zustand.svg",
    color: "#FFA500",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.svg",
    color: "#FF0055",
  },

  {
    name: "PostgreSQL",
    icon: "/skills/postgresql.svg",
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.svg",
    color: "#47A248",
  },
  {
    name: "Redis",
    icon: "/skills/redis.svg",
    color: "#DC382D",
  },

  {
    name: "Docker",
    icon: "/skills/docker.svg",
    color: "#2496ED",
  },
  {
    name: "Podman",
    icon: "/skills/podman.svg",
    color: "#892CA0",
  },
  {
    name: "Git",
    icon: "/skills/git.svg",
    color: "#F05032",
  },
  {
    name: "Linux",
    icon: "/skills/linux.svg",
    color: "#FCC624",
  },
  {
    name: "Neovim",
    icon: "/skills/neovim.svg",
    color: "#57A143",
  },
  {
    name: "Postman",
    icon: "/skills/postman.svg",
    color: "#FF6C37",
  },
];

function TechIcon({ tech, index }: { tech: any; index: number }) {
  return (
    <motion.div
      className="relative group flex flex-col items-center"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        type: "spring",
        stiffness: 120,
      }}
    >
      <motion.div
        className="relative w-9 h-9 md:w-16 md:h-16 flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full blur-xl opacity-30 lg:opacity-30 lg:group-hover:opacity-70 transition-opacity duration-300"
          style={{ backgroundColor: tech.color }}
        />

        <motion.div
          className="absolute inset-0 rounded-full blur-2xl  opacity-0 lg:group-hover:opacity-50 transition-opacity duration-300"
          style={{ backgroundColor: tech.color }}
        />

        <Image
          src={tech.icon}
          alt={tech.name}
          width={30}
          height={30}
          className="relative z-10 w-full h-full object-contain filter drop-shadow-md"
        />
      </motion.div>

      <motion.div
        className="mt-3 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm border rounded-full text-xs sm:text-sm font-medium whitespace-nowrap md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderColor: tech.color + "60",
          color: tech.color,
        }}
      >
        {tech.name}
      </motion.div>
    </motion.div>
  );
}

export default function SpaceSkills() {
  return (
    <section id="skills" className="py-20 relative z-10 min-h-screen flex items-center overflow-hidden">
      <div className="mx-auto container px-4 md:px-6 relative w-full">
        <div className="mx-auto max-w-6xl text-center mb-12 sm:mb-16">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tech <span className="text-purple-400">Arsenal</span>
          </motion.h2>

          <motion.div
            className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Navigate through my cosmic toolkit of technologies, flowing through
            the digital void in a stellar formation.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 sm:gap-10 md:hidden">
            {techStack.map((tech, index) => (
              <TechIcon key={tech.name} tech={tech} index={index} />
            ))}
          </div>

          <div className="hidden md:block relative">
            <motion.div
              className="flex justify-start gap-12 lg:gap-16 mb-12 lg:mb-16 ml-0"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {techStack.slice(0, 5).map((tech, index) => (
                <TechIcon key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>

            <motion.div
              className="flex justify-end gap-12 lg:gap-16 mb-12 lg:mb-16 mr-0"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {techStack.slice(5, 10).map((tech, index) => (
                <TechIcon key={tech.name} tech={tech} index={index + 5} />
              ))}
            </motion.div>

            <motion.div
              className="flex justify-start gap-12 lg:gap-16 mb-12 lg:mb-16 ml-0"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {techStack.slice(10, 15).map((tech, index) => (
                <TechIcon key={tech.name} tech={tech} index={index + 10} />
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center gap-12 lg:gap-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {techStack.slice(15).map((tech, index) => (
                <TechIcon key={tech.name} tech={tech} index={index + 15} />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-900/10 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
}
