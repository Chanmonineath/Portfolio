import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  Languages,
  User,
  Terminal,
} from "lucide-react";

const Resume = () => {
  const data = {
    name: "SOK CHANMONINEATH",
    title: "ICT Senior @ AUPP | Full-Stack Developer",
    location: "Phnom Penh, Cambodia",
    phone: "+855 11 569 348",
    email: "neathhchan@gmail.com",
    github: "github.com/Channonineath",
    linkedin: "linkedin.com/in/chanmonineath-sok",
    profile:
      "A senior majoring in ICT at the American University of Phnom Penh, passionate about Information Technologies with hands-on experiences in various projects using different programming languages, frameworks, and AI integration, particularly in developing practical solutions that improve efficiency and user experience. Motivated to expand technical skills and contribute to meaningful projects in a professional environment.",
    education: [
      {
        degree: "B.S. in Information and Communication Technology",
        school: "American University of Phnom Penh",
        period: "2023 – Present",
        details: "GPA: 3.65",
        special:
          "Japanese IT Pathway Program – Next-Make (Japanese language & practical IT skills)",
      },
      {
        degree: "High School Diploma",
        school: "Toul Svay Prey High School",
        period: "Completed",
        details: "Grade B on National Exam",
      },
      {
        degree: "General English Program",
        school: "Australian Centre for Education (ACE)",
        period: "Completed",
        details: "IELTS Completed",
      },
    ],
    achievements: [
      "Techno Digital Talent Scholarship – 100% – AUPP",
      "Scholarship – 75% – Cambodia Academy of Digital Technology (CADT)",
      "Innovative Tech Challenge Season 2 – Top 6 – Developed 'Skin Apsor'",
      "AUPP Technology Center Volunteer Team – Operations Team Administrator",
      "Coursera: Master Full-Stack Web Development (Laravel & PHP)",
      "Coursera: React Basics",
    ],
    projects: [
      {
        title: "Child Safe Detection Monitoring",
        stack: "Python, YOLO",
        desc: "Real-time object detection for child safety monitoring.",
      },
      {
        title: "Pigeon – Social Media Platform",
        stack: "TypeScript, Svelte, Turso, Vercel",
        desc: "Full-stack app with post creation and user interaction.",
      },
      {
        title: "Skin Apsor",
        stack: "Computer Vision, E-commerce",
        desc: "Face scanning for skincare analysis (Tech Challenge Top 6).",
      },
      {
        title: "Story-Hub",
        stack: "React, Tailwind, MongoDB",
        desc: "Community storytelling platform.",
      },
      {
        title: "WedEase",
        stack: "HTML, CSS, JS, MongoDB",
        desc: "Smart wedding planning web app for guest lists and RSVPs.",
      },
    ],
    skills: {
      technical: ["TypeScript", "JavaScript", "Python", "PHP"],
      frontend: ["Svelte", "React", "HTML", "CSS", "Tailwind"],
      backend: ["Node.js", "Express", "Laravel"],
      database: ["MongoDB", "MySQL", "Turso"],
      ai: ["OpenCV", "YOLO"],
      languages: [
        "Khmer (Native)",
        "English (Fluent)",
        "Japanese (Conversational)",
      ],
    },
    reference: {
      name: "Dr. Tek Ming, Ng",
      title: "Dean, Faculty of Digital Technologies, AUPP",
      email: "n.ming@aupp.edu.kh",
      phone: "+65 9106 5486",
    },
  };

  const SectionTitle = ({ icon: Icon, title, sub }) => (
    <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
      <div className="bg-black text-white p-1.5 rounded">
        <Icon size={18} />
      </div>
      <div>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 leading-none">
          {title}
        </h2>
        {sub && (
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            {sub}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-8 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto bg-white shadow-2xl overflow-hidden border border-gray-200">
        {/* Header / Contact Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-4 border-black">
          <div className="md:col-span-8 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-1 bg-black"></div>
              <span className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase">
                Engineer Profile
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">
              {data.name}
            </h1>
            <p className="text-xl text-gray-600 font-medium tracking-tight">
              {data.title}
            </p>
          </div>

          <div className="md:col-span-4 bg-gray-50 p-8 md:p-12 border-l border-gray-200 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <MapPin size={16} className="text-gray-400" /> {data.location}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Phone size={16} className="text-gray-400" /> {data.phone}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Mail size={16} className="text-gray-400" /> {data.email}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Github size={16} className="text-gray-400" /> {data.github}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Linkedin size={16} className="text-gray-400" /> {data.linkedin}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Main Content Area */}
          <div className="md:col-span-8 p-8 md:p-12 space-y-12">
            {/* Profile */}
            <section>
              <SectionTitle icon={User} title="PROFILE" sub="自己紹介" />
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-gray-100 pl-4">
                "{data.profile}"
              </p>
            </section>

            {/* Projects */}
            <section>
              <SectionTitle
                icon={Terminal}
                title="TECHNICAL PROJECTS"
                sub="プロジェクト"
              />
              <div className="grid gap-6">
                {data.projects.map((proj, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {proj.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded text-gray-500 uppercase">
                        {proj.stack}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionTitle icon={BookOpen} title="EDUCATION" sub="学歴" />
              <div className="space-y-6">
                {data.education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l-2 border-gray-100"
                  >
                    <div className="absolute w-3 h-3 bg-black rounded-full -left-[7px] top-1.5 border-2 border-white shadow-sm"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <span className="text-xs font-bold text-gray-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{edu.details}</p>
                    {edu.special && (
                      <div className="mt-2 text-xs bg-gray-50 p-2 rounded border border-gray-100 text-gray-600">
                        <span className="font-bold text-black uppercase mr-2">
                          Focus:
                        </span>
                        {edu.special}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="md:col-span-4 bg-gray-50 p-8 border-l border-gray-200 space-y-12">
            {/* Skills */}
            <section>
              <SectionTitle icon={Code} title="SKILLS" sub="技術スキル" />
              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.technical.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.frontend.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    AI & CV
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.ai.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <SectionTitle icon={Award} title="HONORS" sub="実績" />
              <div className="space-y-3">
                {data.achievements.map((ach, i) => (
                  <div key={i} className="flex gap-2">
                    <div className="mt-1 h-1 w-1 bg-black rounded-full shrink-0"></div>
                    <p className="text-xs text-gray-600 leading-tight">{ach}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <SectionTitle icon={Languages} title="LANGUAGES" sub="言語" />
              <div className="space-y-2">
                {data.skills.languages.map((l) => (
                  <div
                    key={l}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-gray-700">{l.split(" ")[0]}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">
                      {l.split(" ")[1]}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reference */}
            <section className="bg-white p-4 border border-gray-200 rounded-lg">
              <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-tighter">
                Reference
              </h4>
              <p className="text-sm font-bold text-gray-800">
                {data.reference.name}
              </p>
              <p className="text-[10px] text-gray-500 mb-2 leading-tight">
                {data.reference.title}
              </p>
              <div className="text-[10px] text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                  <Mail size={10} /> {data.reference.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={10} /> {data.reference.phone}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
