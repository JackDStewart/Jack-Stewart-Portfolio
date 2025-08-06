"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import { SkillsMatrix } from "@/components/skills-matrix";
import { Timeline } from "@/components/timeline";
import Image from "next/image";

export default function AboutPage() {
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
    <div className="container mx-auto px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            About Me
          </h1>
          <p className="text-lg text-[var(--text)]/70 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for engineering.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.section variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--text)]">
              Hello, I'm Jack Stewart
            </h2>
            <div className="space-y-4 text-[var(--text)]/80 leading-relaxed">
              <p>
                I'm a passionate Computer Engineering student with a deep love for embedded systems, 
                automation, and creating innovative solutions to complex problems. My journey in 
                engineering has been driven by curiosity and a desire to build things that make a 
                real difference.
              </p>
              <p>
                From designing PCB-based gimbal systems to developing automated testing frameworks, 
                I enjoy working at the intersection of hardware and software. I believe that the 
                best engineering solutions come from understanding both the technical constraints 
                and the human needs they serve.
              </p>
              <p>
                When I'm not coding or tinkering with electronics, you'll find me exploring new 
                technologies, contributing to open-source projects, or working on personal 
                engineering challenges that push my skills to the next level.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary)]/25"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-colors duration-300">
              <Image
                src="/embedded-systems-student.png"
                alt="Jack Stewart working on engineering projects"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Skills Matrix */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl font-bold text-[var(--text)] text-center">
            Technical Skills
          </h2>
          <SkillsMatrix />
        </motion.section>

        {/* Timeline */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl font-bold text-[var(--text)] text-center">
            My Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            <Timeline />
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
