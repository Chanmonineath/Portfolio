import React from "react";
import { User, Code2, Award } from "lucide-react";

export default function About({ t }) {
  const a = t.about;

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-28 px-3 sm:px-6 md:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
        {/* Section header */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
            {a.label}
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            {a.title}
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-3">
            {a.subtitle}
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Bio & core statement */}
          <div className="lg:col-span-7 bg-[#F2F2F2] border border-gray-200 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between space-y-5 sm:space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white text-black text-xs font-medium border border-gray-200">
                <User className="w-3.5 h-3.5" />
                {a.summaryLabel}
              </div>
              <p className="text-black leading-relaxed text-sm sm:text-base">
                {a.summary}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {a.stack}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-300 flex items-center justify-between text-xs text-gray-600 font-mono">
              <span>📍 {a.location}</span>
              <span className="text-black font-semibold">{a.seeking}</span>
            </div>
          </div>

          {/* Workspace visual */}
          <div className="lg:col-span-5 relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 bg-gray-100 min-h-[220px] sm:min-h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent p-5 sm:p-6 flex flex-col justify-end">
              <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">
                {a.workspaceLabel}
              </span>
              <h3 className="text-black font-bold text-sm sm:text-base mt-1">
                {a.workspaceTitle}
              </h3>
            </div>
          </div>

          {/* Key projects */}
          <div className="lg:col-span-6 bg-[#F2F2F2] border border-gray-200 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-white text-black border border-gray-200">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-black">
                {a.projectsTitle}
              </h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-black">
              {a.projects.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-gray-400 font-mono mt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong>{item.title}</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Honors & leadership */}
          <div className="lg:col-span-6 bg-[#F2F2F2] border border-gray-200 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-white text-black border border-gray-200">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-black">
                {a.honorsTitle}
              </h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-black">
              {a.honors.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-gray-400 mt-0.5">★</span>
                  <span>
                    <strong>{item.title}</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
