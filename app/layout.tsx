import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jack Stewart - Computer Engineer",
  description: "Computer Engineer who loves to create, learn, and problem solve. Passionate about embedded systems, automation, and building tools that make a difference.",
  keywords: ["Computer Engineering", "Embedded Systems", "Automation", "STM32", "Arduino", "Python"],
  authors: [{ name: "Jack Stewart" }],
  creator: "Jack Stewart",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jackstewart.dev",
    title: "Jack Stewart - Computer Engineer",
    description: "Computer Engineer who loves to create, learn, and problem solve.",
    siteName: "Jack Stewart Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Stewart - Computer Engineer",
    description: "Computer Engineer who loves to create, learn, and problem solve.",
  },
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
