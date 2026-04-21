import React from "react";

export default function Education({ t }) {
  return (
    <section
      id="education"
      className="py-16 md:py-32 bg-[#F2F2F2] px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
            {t.education.label}
          </h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t.education.title}
          </p>
          <div className="space-y-6 md:space-y-8">
            <div className="p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3">
                {t.education.institution}
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm md:text-base">
                  <span className="font-semibold">{t.education.degree}:</span>{" "}
                  {t.education.major}
                </p>
                <p className="text-sm md:text-base">
                  <span className="font-semibold">Status:</span>{" "}
                  {t.education.year}
                </p>
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
  );
}
