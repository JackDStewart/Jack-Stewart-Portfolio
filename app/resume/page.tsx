"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResumePage() {
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
    <div className="container mx-auto px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)]">
            Resume
          </h1>
          <p className="text-lg text-[var(--text)]/70">
            Computer Engineering Student & Problem Solver
          </p>
          <Button
            size="lg"
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary)]/25"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume (PDF)
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <Card className="bg-[var(--surface)] border-[var(--primary)]/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-[var(--text)]/80">
                  <Mail className="h-4 w-4 text-[var(--primary)]" />
                  <span className="text-sm">email@example.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[var(--text)]/80">
                  <Phone className="h-4 w-4 text-[var(--primary)]" />
                  <span className="text-sm">(555) 555-5555</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[var(--text)]/80">
                  <Github className="h-4 w-4 text-[var(--primary)]" />
                  <span className="text-sm">github.com/jackstewart</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[var(--text)]/80">
                  <Linkedin className="h-4 w-4 text-[var(--primary)]" />
                  <span className="text-sm">linkedin.com/in/jackstewart</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Summary */}
        <motion.div variants={itemVariants}>
          <Card className="bg-[var(--surface)] border-[var(--primary)]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-[var(--text)]">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--text)]/80 leading-relaxed">
                Passionate Computer Engineering student with hands-on experience in embedded systems, 
                automation frameworks, and full-stack development. Proven ability to design and implement 
                complex technical solutions, from PCB-based hardware systems to automated testing pipelines. 
                Strong foundation in C/C++, Python, and modern web technologies, with a focus on creating 
                efficient, maintainable, and user-centered solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants}>
          <Card className="bg-[var(--surface)] border-[var(--primary)]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-[var(--text)]">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-[var(--primary)] font-medium">University Name</p>
                  <p className="text-[var(--text)]/70">Expected Graduation: 2025</p>
                  <p className="text-[var(--text)]/80 mt-2">
                    Relevant Coursework: Embedded Systems, Digital Signal Processing, 
                    Computer Architecture, Software Engineering, Circuit Analysis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Skills */}
        <motion.div variants={itemVariants}>
          <Card className="bg-[var(--surface)] border-[var(--primary)]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-[var(--text)]">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-2">Programming Languages</h4>
                  <p className="text-[var(--text)]/80">C/C++, Python, JavaScript, Assembly, MATLAB</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-2">Embedded Systems</h4>
                  <p className="text-[var(--text)]/80">STM32, Arduino, HAL, RTOS, Serial Communication</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-2">Tools & Frameworks</h4>
                  <p className="text-[var(--text)]/80">KiCad, Git, Robot Framework, Selenium, React</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-2">Hardware & Protocols</h4>
                  <p className="text-[var(--text)]/80">PCB Design, I2C, SPI, UART, PWM, ADC</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects */}
        <motion.div variants={itemVariants}>
          <Card className="bg-[var(--surface)] border-[var(--primary)]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-[var(--text)]">Key Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">Dual-Axis PCB Gimbal System</h3>
                  <p className="text-[var(--primary)] font-medium">Arduino, Python, KiCad</p>
                  <ul className="text-[var(--text)]/80 mt-2 space-y-1">
                    <li>• Designed and implemented stepper motor control system for precision camera stabilization</li>
                    <li>• Developed Python-based serial communication interface for real-time control</li>
                    <li>• Created custom PCB layout for compact integration and improved reliability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">STM32 Ultrasonic Distance Measurement</h3>
                  <p className="text-[var(--primary)] font-medium">STM32, C, HAL</p>
                  <ul className="text-[var(--text)]/80 mt-2 space-y-1">
                    <li>• Implemented non-blocking input capture for microsecond-precision timing</li>
                    <li>• Developed robust error handling and signal filtering algorithms</li>
                    <li>• Achieved consistent sub-millimeter accuracy in distance measurements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">Automated Testing Framework</h3>
                  <p className="text-[var(--primary)] font-medium">Robot Framework, Python, CI/CD</p>
                  <ul className="text-[var(--text)]/80 mt-2 space-y-1">
                    <li>• Built hardware-in-the-loop testing system for embedded device validation</li>
                    <li>• Integrated with CI/CD pipeline for automated regression testing</li>
                    <li>• Reduced manual testing time by 80% while improving test coverage</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
