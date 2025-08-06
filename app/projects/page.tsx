"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectFilters, type ProjectCategory } from "@/components/project-filters";
import { ProjectGrid } from "@/components/project-grid";
import type { Project } from "@/components/project-card";

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Dual-Axis PCB Gimbal",
    description: "Stepper-based pitch/roll mount with Python serial control",
    summary: "Precision gimbal system for camera stabilization using stepper motors and Arduino control.",
    image: "/electronic-gimbal.png",
    tech: ["Arduino", "A4988", "Python", "KiCad"],
    highlights: [
      "Precise stepper motor control for smooth movement",
      "Python-based serial communication interface",
      "Custom PCB design for compact integration"
    ],
    githubUrl: "https://github.com",
    category: "embedded"
  },
  {
    id: "2",
    title: "STM32 Ultrasonic Timing",
    description: "Non-blocking HC-SR04 input capture for precise distance measurement",
    summary: "High-precision distance measurement system using STM32 input capture functionality.",
    image: "/stm32-hc-sr04.png",
    tech: ["STM32", "HAL", "C"],
    highlights: [
      "Non-blocking input capture implementation",
      "Microsecond precision timing accuracy",
      "Robust error handling and filtering"
    ],
    githubUrl: "https://github.com",
    category: "embedded"
  },
  {
    id: "3",
    title: "Robot Framework HIL Automation",
    description: "Serial-driven test loops with CI-ready orchestration",
    summary: "Hardware-in-the-loop testing framework for automated embedded system validation.",
    image: "/automated-testing-setup.png",
    tech: ["Robot Framework", "Python", "PySerial"],
    highlights: [
      "Automated hardware testing workflows",
      "CI/CD pipeline integration",
      "Comprehensive test reporting and logging"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    category: "automation"
  },
  {
    id: "4",
    title: "Hospital Safety Scraper",
    description: "Selenium to Excel pipeline with robust selectors and retries",
    summary: "Automated data collection system for hospital safety metrics with Excel reporting.",
    image: "/placeholder-u2lwe.png",
    tech: ["Python", "Selenium", "Pandas"],
    highlights: [
      "Robust web scraping with retry mechanisms",
      "Automated Excel report generation",
      "Error handling and data validation"
    ],
    githubUrl: "https://github.com",
    category: "automation"
  },
  {
    id: "5",
    title: "Keypad Terminal UI",
    description: "STM32 keypad with LCD interface and debounced input",
    summary: "User-friendly terminal interface with keypad input and LCD display for embedded applications.",
    image: "/stm32-keypad-lcd.png",
    tech: ["STM32", "HAL", "C"],
    highlights: [
      "Debounced keypad input handling",
      "Clear LCD user interface design",
      "Responsive menu navigation system"
    ],
    githubUrl: "https://github.com",
    category: "embedded"
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = activeFilter === "all" 
    ? sampleProjects 
    : sampleProjects.filter(project => project.category === activeFilter);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
          My Projects
        </h1>
        <p className="text-lg text-[var(--text)]/70 max-w-2xl mx-auto">
          A collection of embedded systems, automation tools, and engineering solutions I've built.
        </p>
      </motion.div>

      <ProjectFilters 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
