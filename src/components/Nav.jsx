import React, { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";

export default function Nav({ t, language, toggleLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "work", label: t.nav.work },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "education", label: t.nav.education },
    { id: "resume", label: t.nav.resume || "Resume" },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [language]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-3 sm:px-4 md:px-6 py-3 md:py-4 bg-white/80 backdrop-blur-lg border-b border-gray-200/70 md:bg-transparent md:backdrop-blur-none md:border-transparent ${scrolled ? "md:bg-white/80 md:backdrop-blur-lg md:border-gray-200/70 shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-base sm:text-lg md:text-xl font-bold tracking-tighter uppercase">
          Portfolio<span className="text-gray-400">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium uppercase tracking-widest">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActiveSection(id)}
              className={`relative pb-1 transition-colors duration-200 ${
                activeSection === id
                  ? "text-black"
                  : "hover:text-gray-400"
              }`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 w-full bg-black origin-left transition-transform duration-300 ease-out ${
                  activeSection === id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Language Toggle + Mobile Button */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={toggleLanguage}
            className="group relative px-2 sm:px-3 py-2 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white/50 transition-all duration-300 lang-switch"
            title={language === "en" ? "Japanese" : "English"}
          >
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "JA" : "EN"}</span>
            </div>
          </button>

          <button
            className="md:hidden p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
        <div className="md:hidden mt-3 mx-1 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-1 animate-slideInUp">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setActiveSection(id);
                setMobileMenuOpen(false);
              }}
              className={`block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wide transition-colors ${
                activeSection === id
                  ? "bg-[#F2F2F2] text-black"
                  : "text-gray-700 hover:bg-[#F2F2F2]"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
