import React from "react";
import { Code } from "lucide-react";

export default function Skills({ t }) {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-32 bg-[#F2F2F2] px-3 sm:px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 sm:mb-4">
            {t.skills.label}
          </h2>
          {/* Removed title as requested */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-12">
            {t.skills.description}
          </p>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {t.skills.categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 bg-white rounded-lg sm:rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <Code className="w-6 sm:w-8 h-6 sm:h-8 mb-3 sm:mb-4 text-gray-400" />
                <h4 className="font-bold mb-2 text-sm sm:text-base">
                  {cat.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 md:space-y-12">
          {t.skills.proficiencies.map((skill, i) => (
            <div
              key={i}
              className="animate-slideInUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest">
                <span>{skill.label}</span>
                <span>{skill.progress}</span>
              </div>
              <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black transition-all duration-1000 ease-out"
                  style={{
                    width: skill.progress,
                    animation: `slideIn 1s ease-out`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
