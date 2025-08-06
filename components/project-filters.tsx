"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export type ProjectCategory = "all" | "embedded" | "automation" | "web";

interface ProjectFiltersProps {
  activeFilter: ProjectCategory;
  onFilterChange: (filter: ProjectCategory) => void;
}

const filters: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "embedded", label: "Embedded" },
  { key: "automation", label: "Automation" },
  { key: "web", label: "Web" },
];

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {filters.map((filter) => (
        <motion.div key={filter.key} className="relative">
          <Button
            variant={activeFilter === filter.key ? "default" : "outline"}
            onClick={() => onFilterChange(filter.key)}
            className={`px-6 py-2 font-medium transition-all duration-200 ${
              activeFilter === filter.key
                ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-lg shadow-[var(--primary)]/25"
                : "border-[var(--primary)]/30 text-[var(--text)] hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]/50"
            }`}
          >
            {filter.label}
          </Button>
          
          {activeFilter === filter.key && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--primary)]"
              layoutId="filter-indicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
