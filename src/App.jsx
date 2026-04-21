import React, { useState } from "react";
import { translations } from "./translations";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  const projects = [
    {
      id: 1,
      title:
        language === "en"
          ? "Children Safe Detection Monitoring"
          : "子どもの安全監視",
      category: language === "en" ? "AI" : "AI",
      image: "./photo/Screenshot 2025-12-09 114219.png",
      description:
        language === "en"
          ? "Real-time object detection for child safety monitoring."
          : "保護者が子どもの安全をリアルタイムで監視できる、位置情報追跡とアラート機能を備えたアプリケーション。",
      techStack: ["Python", "YOLO"],
    },
    {
      id: 2,
      title: language === "en" ? "Wedding Planner" : "ウェディングプランナー",
      category: language === "en" ? "Web" : "ウェブ",
      image: "./photo/Screenshot 2025-11-29 174707.png",
      description:
        language === "en"
          ? "A smart wedding planning web application that helps couples manage guest lists, RSVPs, and digital invitations."
          : "予算追跡、ゲストリスト、タイムライン管理を備えた結婚式のイベント計画と管理のための包括的なウェブアプリケーション。",
      techStack: ["HTML", "CSS", "Javascript", "MongoDB"],
    },
    {
      id: 3,
      title:
        language === "en" ? "Portfolio Website" : "ポートフォリオウェブサイト",
      category: language === "en" ? "Web" : "ウェブ",
      image: "./photo/Screenshot 2026-04-22 021935.png",
      description:
        language === "en"
          ? "A responsive and modern portfolio website built with React, Tailwind CSS, and Vite to showcase projects and skills."
          : "React、Tailwind CSS、Viteで構築された、プロジェクトとスキルを紹介するレスポンシブでモダンなポートフォリオサイト。",
      techStack: ["React", "Tailwind CSS", "Vite"],
    },
    {
      id: 4,
      title: language === "en" ? "Button Counter" : "ボタンカウンター",
      category: language === "en" ? "Web" : "ウェブ",
      image: "./photo/Screenshot 2026-04-22 020008.png",
      description:
        language === "en"
          ? "Created an interactive counter with persistent data storage."
          : "インタラクティブなカウンターで、データの永続化をサポートするアプリケーション。",
      techStack: ["TypeScript", "Svelte", "CSS", "Turso", "Vercel"],
    },
    {
      id: 5,
      title: language === "en" ? "Pigeon" : "Pigeon",
      category: language === "en" ? "Web" : "ウェブ",
      image: "./photo/Screenshot 2026-04-22 021103.png",
      description:
        language === "en"
          ? "A social media app with post creation and user interaction features."
          : "投稿作成やユーザー間のインタラクション機能を備えたソーシャルメディアアプリ。",
      techStack: ["TypeScript", "Svelte", "CSS", "Turso", "Vercel"],
    },
    {
      id: 6,
      title: language === "en" ? "Story-Hub" : "Story-Hub",
      category: language === "en" ? "Web" : "ウェブ",
      image: "./photo/Screenshot 2026-04-22 021823.png",
      description:
        language === "en"
          ? "A community-based storytelling platform for creating, sharing, and reading user-generated stories."
          : "ユーザーがストーリーを作成・共有・閲覧できるコミュニティ型のストーリープラットフォーム。",
      techStack: ["React", "Tailwind CSS", "JavaScript", "MongoDB"],
    },
    {
      id: 7,
      title: language === "en" ? "Japanese Quiz Game" : "日本語クイズゲーム",
      category: language === "en" ? "Web" : "ウェブ",
      image: "./photo/Screenshot 2026-04-22 020143.png",
      description:
        language === "en"
          ? "A quiz game that tests users' knowledge of Japanese language and culture with multiple-choice questions and interactive features."
          : "日本語と言語文化に関する知識を問う、選択式のインタラクティブなクイズゲーム。",
      techStack: ["TypeScript", "Svelte", "CSS", "Turso", "Vercel"],
    },
  ];

  const toggleLanguage = () => setLanguage((l) => (l === "en" ? "ja" : "en"));

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#2D2D2D] font-sans selection:bg-black selection:text-white">
      <Nav t={t} language={language} toggleLanguage={toggleLanguage} />

      <Home t={t} />

      <div className="bg-white border-y border-gray-200 py-8 md:py-10 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee space-x-8 md:space-x-12 items-center">
          {[1, 2, 3, 4, 5].map((i) => (
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

      <Projects
        t={t}
        projects={projects}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <About t={t} />

      <Skills t={t} />

      <Education t={t} />

      <div id="resume">
        <Resume />
      </div>

      <Contact t={t} />

      <Footer t={t} />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes slideIn {
            from { width: 0; }
            to { width: 100%; }
          }
        `,
        }}
      />
    </div>
  );
};

export default App;
