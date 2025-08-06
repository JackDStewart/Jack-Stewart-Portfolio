import { Github, Linkedin } from 'lucide-react';
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--primary)]/10 bg-[var(--surface)] mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-[var(--text)]/60">
            © 2024 Jack Stewart. Built with Next.js & Tailwind CSS.
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com"
              className="text-[var(--text)]/60 hover:text-[var(--primary)] transition-colors p-2 rounded-md hover:bg-[var(--bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-[var(--text)]/60 hover:text-[var(--primary)] transition-colors p-2 rounded-md hover:bg-[var(--bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
