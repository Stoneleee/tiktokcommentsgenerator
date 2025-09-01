"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: "Generator",
    href: "#generator"
  },
  {
    label: "Why Use",
    href: "#why-use"
  },
  {
    label: "Testimonials",
    href: "#testimonials"
  },
  {
    label: "FAQ",
    href: "#faq"
  }
];

export default function NavigationMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('generator');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.querySelector(section) as HTMLElement;
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Update URL hash
      window.history.pushState(null, '', href);
      
      // Scroll to element with offset for fixed header
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-[#0095F6]">
              TikTok Comment Generator
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === item.href
                    ? 'text-[#0095F6] border-b-2 border-[#0095F6] pb-1'
                    : 'text-gray-700 hover:text-[#0095F6]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-[#0095F6] hover:bg-[#0095F6]/90"
              onClick={() => scrollToSection("#generator")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#0095F6] p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-medium py-2 transition-colors duration-200 ${
                    activeSection === item.href
                      ? 'text-[#0095F6] bg-blue-50 border-l-4 border-[#0095F6] pl-3'
                      : 'text-gray-700 hover:text-[#0095F6]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="w-full bg-[#0095F6] hover:bg-[#0095F6]/90"
                onClick={() => scrollToSection("#generator")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
