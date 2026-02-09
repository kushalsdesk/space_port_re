"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Meteor {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
}

const MeteorShower = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    // Generate random meteor streaks with start and end points
    const newMeteors = Array.from({ length: 6 }, (_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 50;
      const angle = Math.random() * 45 + 30;
      const distance = Math.random() * 400 + 300;

      return {
        id: i,
        startX,
        startY,
        endX: startX + (Math.cos((angle * Math.PI) / 180) * distance) / window.innerWidth * 100,
        endY: startY + (Math.sin((angle * Math.PI) / 180) * distance) / window.innerHeight * 100,
        duration: Math.random() * 1.5 + 1.5,
        delay: Math.random() * 4,
      };
    });
    setMeteors(newMeteors);
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {meteors.map((meteor) => (
        <motion.line
          key={meteor.id}
          x1={`${meteor.endX}%`}
          y1={`${meteor.endY}%`}
          x2={`${meteor.endX}%`}
          y2={`${meteor.endY}%`}
          stroke="url(#meteorGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            x2: `${meteor.startX}%`,
            y2: `${meteor.startY}%`,
            strokeOpacity: [0.8, 0.4, 0],
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 6 + 4,
          }}
        />
      ))}
      <defs>
        <linearGradient id="meteorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 1)" />
          <stop offset="50%" stopColor="rgba(168, 85, 247, 0.8)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
        </linearGradient>
        <filter id="meteorGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

export default MeteorShower
