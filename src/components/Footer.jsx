import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="py-8 sm:py-12 md:py-20 border-t border-gray-200 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
        <div className="text-base sm:text-lg md:text-xl font-bold tracking-tighter uppercase">
          Portfolio<span className="text-gray-400">.</span>
        </div>
        <p className="text-xs md:text-sm text-gray-400 font-medium text-center md:text-left">
          {t.footer.copyright}
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Chanmonineath"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-colors duration-200 p-2"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/chanmonineath-sok/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition-colors duration-200 p-2"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:2023486sok@aupp.edu.kh"
            aria-label="Email"
            className="hover:text-gray-400 transition-colors duration-200 p-2"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
