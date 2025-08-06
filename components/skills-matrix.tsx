"use client";

import { motion } from "framer-motion";
import { TechBadge } from "./tech-badge";

const skillCategories = [
  {
    title: "Embedded Systems",
    skills: ["STM32", "Arduino", "C/C++", "HAL", "RTOS", "KiCad"],
    variant: "primary" as const,
  },
  {
    title: "Firmware & Programming",
    skills: ["C", "Python", "Assembly", "Debugging", "Serial Communication", "I2C/SPI"],
    variant: "accent" as const,
  },
  {
    title: "Automation & Testing",
    skills: ["Robot Framework", "Selenium", "PySerial", "CI/CD", "Test Automation", "Data Processing"],
    variant: "primary" as const,
  },
  {
    title: "Web & Tooling",
    skills: ["JavaScript", "React", "Next.js", "Python", "Git", "Linux"],
    variant: "accent" as const,
  },
];

export function SkillsMatrix() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          className="space-y-4"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-[var(--text)]">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <TechBadge key={skill} tech={skill} variant={category.variant} />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
