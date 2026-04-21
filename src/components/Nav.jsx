import React, { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";

export default function Nav({ t, language, toggleLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4 ${scrolled ? "bg-[#F2F2F2]/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg md:text-xl font-bold tracking-tighter uppercase">
          Portfolio<span className="text-gray-400">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium uppercase tracking-widest">
          <a
            href="#home"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {t.nav.home}
          </a>
          <a
            href="#work"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {t.nav.work}
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {t.nav.about}
          </a>
          <a
            href="#skills"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {t.nav.skills}
          </a>
          <a
            href="#education"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {t.nav.education}
          </a>
          <a
            href="#resume"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {t.nav.resume || "Resume"}
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Language Toggle + Mobile Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="group relative px-3 py-2 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white/50 transition-all duration-300 lang-switch"
            title={language === "en" ? "Japanese" : "English"}
          >
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "JA" : "EN"}</span>
            </div>
          </button>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4 animate-slideInUp">
          <a
            href="#home"
            className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase"
          >
            {t.nav.home}
          </a>
          <a
            href="#work"
            className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase"
          >
            {t.nav.work}
          </a>
          <a
            href="#about"
            className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase"
          >
            {t.nav.about}
          </a>
          <a
            href="#skills"
            className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase"
          >
            {t.nav.skills}
          </a>
          <a
            href="#education"
            className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase"
          >
            {t.nav.education}
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase"
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
}
