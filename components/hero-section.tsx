"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5" />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
              variants={itemVariants}
            >
              Computer Engineer who loves to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                create, learn, and problem solve.
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-[var(--text)]/70 max-w-2xl"
              variants={itemVariants}
            >
              Passionate about embedded systems, automation, and building tools that make a difference.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button
                asChild
                size="lg"
                className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary)]/25"
              >
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </div>
          
          {/* Headshot */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Neon ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-[var(--bg)]" />
              </div>
              
              {/* Profile image */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[var(--surface)]">
                  <Image
                    src="/placeholder-uyiz6.png"
                    alt="Jack Stewart - Computer Engineer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
