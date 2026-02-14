"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    icon: "/contacts/github.svg",
    url: "https://github.com/kushalsdesk",
    description: "Explore my code repositories",
  },
  {
    name: "LinkedIn",
    icon: "/contacts/linkedin.svg",
    url: "https://www.linkedin.com/in/kushal-mondal-dev/",
    description: "Connect professionally",
  },
  {
    name: "LeetCode",
    icon: "/contacts/leetcode.svg",
    url: "https://leetcode.com/u/caracaldev",
    description: "View my coding solutions",
  },
  {
    name: "WhatsApp",
    icon: "/contacts/whatsapp.svg",
    url: "https://wa.me/9609085874",
    description: "Chat on WhatsApp",
  },
  {
    name: "Email",
    icon: "/contacts/mail.svg",
    url: "mailto:kushalmondal.dev@outlook.com",
    description: "Send a direct message",
  },
  {
    name: "Discord",
    icon: "/contacts/discord.svg",
    url: "https://discord.com/users/Lone_Impala",
    description: "Chat on Discord",
  },
];

function SocialButton({ social, index }: { social: any; index: number }) {
  const handleClick = () => {
    if (social.url.startsWith("mailto:")) {
      window.location.href = social.url;
    } else {
      window.open(social.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <Button
        variant="outline"
        className="w-full h-auto p-3 sm:p-4 lg:p-6 border-gray-700/50 hover:border-teal-400/50 bg-black/30 backdrop-blur-sm group transition-all duration-300"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 w-full">
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700/50 transition-colors"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </motion.div>
          <div className="flex-1 text-left min-w-0">
            <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors text-sm sm:text-base truncate">
              {social.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 truncate">
              {social.description}
            </p>
          </div>
          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 group-hover:text-teal-400 transition-colors flex-shrink-0" />
        </div>
      </Button>
    </motion.div>
  );
}

const ContactSection = () => {
  return (
    <footer
      id="contact"
      className="py-12 mb-10 sm:py-16 lg:py-20 relative z-10 border-t border-gray-800/50"
    >
      <div className="container px-4 md:px-6 relative max-w-7xl mx-auto">
        <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            className="mb-8 sm:mb-12 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-teal-400/50 to-purple-400/50 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ready to collaborate on the next big mission? Connect with me across
            the digital cosmos through these communication channels.
          </motion.p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto mb-12 sm:mb-16">
          {socialLinks.map((social, index) => (
            <SocialButton key={social.name} social={social} index={index} />
          ))}
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="text-center pt-6 sm:pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Kushal Mondal • Space Explorer &
            Developer
          </p>
          <motion.p
            className="text-slate-500 text-xs mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Transmitting from the Digital Universe
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
export default ContactSection
