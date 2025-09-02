"use client";
import React from "react";
import { ExternalLink, Mail, Twitter, Instagram } from "lucide-react";

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Generator", href: "#generator" },
      { label: "Why Use", href: "#why-use" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  // {
  //   title: "Support",
  //   links: [
  //     { label: "Help Center", href: "/help", external: true },
  //     {
  //       label: "Contact Us",
  //       href: "mailto:loverinfolee@gmail.com",
  //       external: true,
  //     },
  //     { label: "Privacy Policy", href: "/privacy", external: true },
  //     { label: "Terms of Service", href: "/terms", external: true },
  //   ],
  // },
];

const scrollToSection = (href: string) => {
  if (href.startsWith("#")) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0095F6] mb-4">
                  TikTok Comment Generator
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Create engaging TikTok comments and authentic-looking
                  screenshots instantly. Free, unlimited access to powerful
                  social media tools.
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0095F6] transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0095F6] transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:loverinfolee@gmail.com"
                  className="text-gray-400 hover:text-[#0095F6] transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-[#0095F6] transition-colors duration-200 flex items-center"
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-300 hover:text-[#0095F6] transition-colors duration-200 text-left"
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 TikTok Comments Generator. All rights reserved.
              </div>
              {/* <div className="flex space-x-6 text-sm">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-[#0095F6] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-[#0095F6] transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
                  className="text-gray-400 hover:text-[#0095F6] transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
