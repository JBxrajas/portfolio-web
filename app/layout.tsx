import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesús Barajas - QA Automation Portfolio",
  description: "Senior QA Automation Tester specializing in Cypress, Playwright, Selenium, and Performance Testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <p className="text-slate-300">&copy; {new Date().getFullYear()} Jesús Barajas Villegas. All rights reserved.</p>
              <div className="flex justify-center space-x-6 text-sm text-slate-400">
                <a href="mailto:jbarajasvillegas@gmail.com" className="hover:text-white transition-colors">
                  Email
                </a>
                <a href="https://github.com/JBxrajas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/jesus-barajas-villegas/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
