"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2024",
    title: "Computer Engineering Student",
    description: "Pursuing Bachelor's degree with focus on embedded systems and automation",
    current: true,
  },
  {
    year: "2023",
    title: "Advanced Embedded Projects",
    description: "Developed STM32-based systems and automation frameworks",
    current: false,
  },
  {
    year: "2022",
    title: "Started Computer Engineering",
    description: "Began studies with strong foundation in programming and electronics",
    current: false,
  },
];

export function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {timelineItems.map((item, index) => (
        <motion.div
          key={item.year}
          className="flex gap-4"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                item.current
                  ? "bg-[var(--primary)] border-[var(--primary)]"
                  : "bg-[var(--surface)] border-[var(--primary)]/50"
              }`}
            />
            {index < timelineItems.length - 1 && (
              <div className="w-0.5 h-16 bg-[var(--primary)]/30 mt-2" />
            )}
          </div>
          
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-[var(--primary)]">
                {item.year}
              </span>
              {item.current && (
                <span className="px-2 py-1 text-xs bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">
                  Current
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-1">
              {item.title}
            </h3>
            <p className="text-[var(--text)]/70">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
