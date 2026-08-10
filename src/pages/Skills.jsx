import React from "react";
import { Layout, Brain, GitBranch } from "lucide-react";

const categoryIcons = [Layout, Brain, GitBranch];

export default function Skills({ t }) {
  const s = t.skills;

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-28 px-3 sm:px-6 md:px-8 bg-[#F2F2F2]"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
            {s.label}
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            {s.title}
          </p>
        </div>

        {/* Bento skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {s.categories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-5 sm:p-6 rounded-2xl sm:rounded-3xl space-y-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#F2F2F2] border border-gray-200 text-black">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#F2F2F2] text-gray-600 border border-gray-200">
                    {cat.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-black text-base">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {cat.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-gray-700">{skill.label}</span>
                        <span className="text-gray-500">
                          {skill.progress}
                        </span>
                      </div>
                      <div className="w-full bg-[#F2F2F2] h-1.5 rounded-full overflow-hidden border border-gray-200">
                        <div
                          className="bg-black h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: skill.progress }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
