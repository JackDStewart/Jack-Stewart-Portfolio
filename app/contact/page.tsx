"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function ContactPage() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "email@example.com",
      href: "mailto:email@example.com",
      description: "Best way to reach me for professional inquiries",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(555) 555-5555",
      href: "tel:+15555555555",
      description: "Available for calls during business hours",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/jackstewart",
      href: "https://github.com",
      description: "Check out my latest projects and contributions",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jackstewart",
      href: "https://linkedin.com",
      description: "Connect with me professionally",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)]">
            Get In Touch
          </h1>
          <p className="text-lg text-[var(--text)]/70 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            or just chatting about engineering and technology. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.label}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full bg-[var(--surface)] border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/10">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-[var(--primary)]/10">
                        <Icon className="h-6 w-6 text-[var(--primary)]" />
                      </div>
                      <CardTitle className="text-xl text-[var(--text)]">
                        {method.label}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a
                      href={method.href}
                      className="block text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] rounded-md"
                    >
                      {method.value}
                    </a>
                    <p className="text-[var(--text)]/70 text-sm">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 border-[var(--primary)]/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 text-[var(--text)]/80">
                  <MapPin className="h-5 w-5 text-[var(--primary)]" />
                  <span>Available for remote work and local opportunities</span>
                </div>
                <p className="text-[var(--text)]/70 max-w-2xl mx-auto">
                  Whether you're looking for an intern, have a project collaboration in mind, 
                  or just want to discuss the latest in embedded systems and automation, 
                  I'd love to hear from you. I typically respond within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
