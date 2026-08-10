import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects({ t, projects, activeTab, setActiveTab }) {
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === activeTab);

  return (
    <section
      id="work"
      className="py-12 sm:py-16 md:py-28 px-3 sm:px-6 md:px-8 bg-[#fafbfc]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div>
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              {t.work.label}
            </h2>
            <p className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
              {t.work.title}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {t.work.filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 border
                  ${
                    activeTab === key
                      ? "bg-black text-white border-black shadow-md scale-105"
                      : "bg-white text-gray-700 border-gray-200 hover:border-black hover:text-black"
                  }
                `}
                aria-pressed={activeTab === key}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-16 text-gray-400">
              <span className="text-5xl mb-4 block">🗂️</span>
              <p className="text-lg font-medium">
                No projects found for this filter.
              </p>
            </div>
          )}
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300 cursor-pointer flex flex-col overflow-hidden animate-fadeIn"
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
              style={{
                animationDelay: `${index * 80}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Optional overlay for hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col px-6 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:underline underline-offset-4 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                  {project.title === "Child Safe Detection Monitoring" &&
                    project.techStack && (
                      <span className="block mt-1 text-xs text-gray-500 font-medium">
                        Techstack: {project.techStack.join(", ")}
                      </span>
                    )}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Actions */}
                <div className="mt-auto flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-black transition-all"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animation keyframes */}
      <style>
        {`
          .animate-fadeIn {
            opacity: 0;
            transform: translateY(24px);
            animation: fadeInUp 0.7s cubic-bezier(.4,0,.2,1) forwards;
          }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: none;
            }
          }
        `}
      </style>
    </section>
  );
}
