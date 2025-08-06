import { motion } from "framer-motion";

interface TechBadgeProps {
  tech: string;
  variant?: "default" | "primary" | "accent";
}

export function TechBadge({ tech, variant = "default" }: TechBadgeProps) {
  const variants = {
    default: "bg-[var(--surface)] text-[var(--text)] border-[var(--text)]/20",
    primary: "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/30",
    accent: "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/30",
  };

  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {tech}
    </motion.span>
  );
}
