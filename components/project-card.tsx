"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';
import { TechBadge } from "./tech-badge";
import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  tech: string[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: "embedded" | "automation" | "web";
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03, 
        rotateY: 2, 
        rotateX: 1,
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group"
    >
      <Card className="h-full bg-[var(--surface)] border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-[var(--text)]/70">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechBadge key={tech} tech={tech} variant="primary" />
            ))}
          </div>
          
          <ul className="space-y-1 text-sm text-[var(--text)]/80">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[var(--accent)] mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
          
          <div className="flex gap-2 pt-2">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[var(--primary)]/30 hover:bg-[var(--primary)] hover:text-white"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[var(--accent)]/30 hover:bg-[var(--accent)] hover:text-white"
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
