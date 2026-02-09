"use client";

import { motion } from "framer-motion";

const BlackHole = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute w-[90vmin] h-[90vmin] rounded-full border-2 border-purple-500/10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[80vmin] h-[80vmin] rounded-full border-2 border-blue-500/15"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute w-[70vmin] h-[70vmin]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{ filter: "blur(1px)" }}
        >
          <defs>
            <radialGradient id="diskGradient1">
              <stop offset="30%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="90%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse
            cx="100"
            cy="100"
            rx="95"
            ry="30"
            fill="url(#diskGradient1)"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute w-[60vmin] h-[60vmin]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="diskGradient2">
              <stop offset="30%" stopColor="#ec4899" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.3" />
              <stop offset="90%" stopColor="#6366f1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse
            cx="100"
            cy="100"
            rx="85"
            ry="25"
            fill="url(#diskGradient2)"
            opacity="0.7"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute w-[50vmin] h-[50vmin]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{ filter: "blur(0.5px)" }}
        >
          <defs>
            <radialGradient id="diskGradient3">
              <stop offset="40%" stopColor="#f59e0b" stopOpacity="0" />
              <stop offset="60%" stopColor="#ec4899" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse
            cx="100"
            cy="100"
            rx="75"
            ry="20"
            fill="url(#diskGradient3)"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute w-[35vmin] h-[35vmin] rounded-full"
        style={{
          background: "radial-gradient(circle, #000000 0%, #0a0a0a 40%, transparent 100%)",
          boxShadow: "0 0 60px 20px rgba(139, 92, 246, 0.4), 0 0 100px 40px rgba(99, 102, 241, 0.2), inset 0 0 80px rgba(0, 0, 0, 1)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[30vmin] h-[30vmin] rounded-full bg-black"
        style={{
          boxShadow: "0 0 40px 10px rgba(167, 139, 250, 0.3), inset 0 0 60px rgba(0, 0, 0, 1)",
        }}
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute w-[38vmin] h-[38vmin] rounded-full border border-cyan-400/20"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
export default BlackHole
