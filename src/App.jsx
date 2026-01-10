import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code,
  Palette,
  Globe,
  User,
  Send,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';
import { translations } from './translations';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: language === 'en' ? "Children Safe Monitoring" : "子どもの安全監視",
      category: language === 'en' ? "AI" : "AI",
      image: "./photo/Screenshot 2025-12-09 114219.png",
      description: language === 'en'
        ? "A web application designed to help parents monitor their children's safety with real-time alerts and location tracking features."
        : "保護者が子どもの安全をリアルタイムアラートと位置情報追跡機能で監視できるように設計されたウェブアプリケーション。",
      technologies: language === 'en' ? ["React", "JavaScript", "Tailwind CSS"] : ["React", "JavaScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: language === 'en' ? "Wedding Planner" : "ウェディングプランナー",
      category: language === 'en' ? "Web" : "ウェブ",
      image: "./photo/Screenshot 2025-11-29 174707.png",
      description: language === 'en'
        ? "A comprehensive web application for planning and managing wedding events with budget tracking, guest lists, and timeline management."
        : "予算追跡、ゲストリスト、タイムライン管理を備えた結婚式のイベント計画と管理のための包括的なウェブアプリケーション。",
      technologies: language === 'en' ? ["React", "JavaScript", "Tailwind CSS"] : ["React", "JavaScript", "Tailwind CSS"]
    },
    {
      id: 3,
      title: language === 'en' ? "Portfolio Website" : "ポートフォリオウェブサイト",
      category: language === 'en' ? "Web" : "ウェブ",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
      description: language === 'en'
        ? "A responsive and modern portfolio website built with React, Tailwind CSS, and Vite to showcase projects and skills."
        : "ReactとTailwind CSSおよびViteで構築された、プロジェクトとスキルを紹介するレスポンシブで最新的なポートフォリオウェブサイト。",
      technologies: language === 'en' ? ["React", "Tailwind CSS", "Vite"] : ["React", "Tailwind CSS", "Vite"]
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#2D2D2D] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4 ${scrolled ? 'bg-[#F2F2F2]/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold tracking-tighter uppercase">
            Portfolio<span className="text-gray-400">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-gray-400 transition-colors duration-200">
              Home
            </a>
            <a href="#work" className="hover:text-gray-400 transition-colors duration-200">
              {t.nav.work}
            </a>
            <a href="#about" className="hover:text-gray-400 transition-colors duration-200">
              {t.nav.about}
            </a>
            <a href="#skills" className="hover:text-gray-400 transition-colors duration-200">
              Skills
            </a>
            <a href="#education" className="hover:text-gray-400 transition-colors duration-200">
              Education
            </a>
            <a href="#contact" className="hover:text-gray-400 transition-colors duration-200">
              {t.nav.contact}
            </a>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="group relative px-3 py-2 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white/50 transition-all duration-300 lang-switch"
              title={language === 'en' ? 'Japanese' : 'English'}
            >
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'JA' : 'EN'}</span>
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 animate-slideInUp">
            <a href="#home" className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase">
              Home
            </a>
            <a href="#work" className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase">
              {t.nav.work}
            </a>
            <a href="#about" className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase">
              {t.nav.about}
            </a>
            <a href="#skills" className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase">
              Skills
            </a>
            <a href="#education" className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase">
              Education
            </a>
            <a href="#contact" className="block hover:text-gray-400 transition-colors text-sm font-medium uppercase">
              {t.nav.contact}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center px-3 sm:px-4 md:px-6 overflow-hidden pt-24 sm:pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-8 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-4 sm:mb-6 md:mb-8 animate-slideInUp">
              {t.hero.title1} <br />
              <span className="text-transparent border-text" style={{ WebkitTextStroke: '1px #2D2D2D' }}>
                {t.hero.title2}
              </span> <br />
              {t.hero.title3}
            </h1>
            <p className="max-w-lg text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-10 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
              <a href="#work" className="group flex items-center justify-center sm:justify-start bg-black text-white px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg active:scale-95">
                {t.hero.viewWork}
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 relative mt-8 md:mt-0">
            <div className="w-full max-w-sm mx-auto lg:max-w-none aspect-[3/4] bg-gray-300 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl rotate-0 sm:rotate-3 transition-transform hover:rotate-0 duration-500 hover:shadow-none">
              <img
                src="./photo/photo_2026-01-10_15-57-22.jpg"
                alt="Professional portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-5 sm:-bottom-10 -left-5 sm:-left-10 w-20 sm:w-32 h-20 sm:h-32 bg-white rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Stats/Ticker Section */}
      <div className="bg-white border-y border-gray-200 py-8 md:py-10 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee space-x-8 md:space-x-12 items-center">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex items-center space-x-8 md:space-x-12">
              <span className="text-2xl md:text-4xl font-bold opacity-10 uppercase tracking-tighter italic">
                {t.ticker.skills[0]}
              </span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="text-2xl md:text-4xl font-bold opacity-10 uppercase tracking-tighter italic">
                {t.ticker.skills[1]}
              </span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="text-2xl md:text-4xl font-bold opacity-10 uppercase tracking-tighter italic">
                {t.ticker.skills[2]}
              </span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <section id="work" className="py-12 sm:py-16 md:py-32 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-20 gap-6 sm:gap-8">
            <div>
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 sm:mb-4">
                {t.work.label}
              </h2>
              <p className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">{t.work.title}</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {t.work.filters.map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab ? 'bg-black text-white shadow-lg scale-105' : 'bg-white border border-gray-200 hover:border-black'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 animate-slideInUp ${index % 2 === 1 ? 'md:mt-20' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/5] shadow-sm mb-6 transition-shadow duration-300 group-hover:shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:underline underline-offset-4 transition-all">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-32 bg-white px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="w-full aspect-square bg-gray-300 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-xs sm:text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">
              {t.about.label}
            </h2>
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">{t.about.title}</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
              {t.about.description}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {t.about.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  <p className="font-semibold text-base sm:text-lg">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-32 bg-[#F2F2F2] px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 sm:mb-4">
              {t.skills.label}
            </h2>
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8">{t.skills.title}</p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-12">
              {t.skills.description}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {t.skills.categories.map((cat, idx) => (
                <div key={idx} className="p-4 sm:p-6 bg-white rounded-lg sm:rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <Code className="w-6 sm:w-8 h-6 sm:h-8 mb-3 sm:mb-4 text-gray-400" />
                  <h4 className="font-bold mb-2 text-sm sm:text-base">{cat.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 md:space-y-12">
            {t.skills.proficiencies.map((skill, i) => (
              <div key={i} className="animate-slideInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest">
                  <span>{skill.label}</span>
                  <span>{skill.progress}</span>
                </div>
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black transition-all duration-1000 ease-out"
                    style={{
                      width: skill.progress,
                      animation: `slideIn 1s ease-out`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-32 bg-[#F2F2F2] px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              {t.education.label}
            </h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.education.title}</p>
            <div className="space-y-6 md:space-y-8">
              <div className="p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold mb-3">{t.education.institution}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm md:text-base"><span className="font-semibold">{t.education.degree}:</span> {t.education.major}</p>
                  <p className="text-sm md:text-base"><span className="font-semibold">Status:</span> {t.education.year}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full aspect-square bg-white rounded-2xl overflow-hidden shadow-xl">
              <img
                src="./photo/AUPP-Building.jpg"
                alt="University campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-32 px-3 sm:px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-20 shadow-lg sm:shadow-xl shadow-gray-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8">
                {t.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12">
                {t.contact.description}
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F2F2F2] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase text-gray-400">{t.contact.email}</p>
                    <p className="font-bold text-sm sm:text-base break-all">2023486sok@aupp.edu.kh</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F2F2F2] rounded-full flex items-center justify-center flex-shrink-0">
                    <Github className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase text-gray-400">GitHub</p>
                    <p className="font-bold text-sm sm:text-base break-all">github.com/Chanmonineath</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  className="w-full bg-[#F2F2F2] border-none rounded-lg sm:rounded-xl p-3 sm:p-4 focus:ring-2 ring-black transition-all outline-none text-base"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  className="w-full bg-[#F2F2F2] border-none rounded-lg sm:rounded-xl p-3 sm:p-4 focus:ring-2 ring-black transition-all outline-none text-base"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  className="w-full bg-[#F2F2F2] border-none rounded-lg sm:rounded-xl p-3 sm:p-4 h-24 sm:h-32 focus:ring-2 ring-black transition-all outline-none resize-none text-base"
                  placeholder={t.contact.form.messagePlaceholder}
                ></textarea>
              </div>
              <button className="w-full flex items-center justify-center bg-black text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg active:scale-95 min-h-[44px]">
                {t.contact.form.send}
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 md:py-20 border-t border-gray-200 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
          <div className="text-base sm:text-lg md:text-xl font-bold tracking-tighter uppercase">
            Portfolio<span className="text-gray-400">.</span>
          </div>
          <p className="text-xs md:text-sm text-gray-400 font-medium text-center md:text-left">
            {t.footer.copyright}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors duration-200 p-2">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200 p-2">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200 p-2">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideIn {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
        `
      }} />
    </div>
  );
};

export default App;
