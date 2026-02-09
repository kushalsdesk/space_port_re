"use client";

import { motion } from "framer-motion";
import MeteorShower from "./MeteorShower";

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Static blinking stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger twinkling stars */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-1 h-1 bg-blue-200 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.05, 0.4, 0.05],
            scale: [0.3, 1.2, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nebula effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-900/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-blue-900/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-purple-900/10 to-transparent rounded-full blur-3xl" />

      {/* Meteor shower */}
      <MeteorShower />
    </div>
  );
}
export default SpaceBackground
