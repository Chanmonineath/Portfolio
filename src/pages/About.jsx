import React from "react";

export default function About({ t }) {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-32 bg-white px-3 sm:px-4 md:px-6"
    >
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
          {/* Removed title as requested */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
            {t.about.description.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {/* Render the first highlight as a heading, rest as bullets */}
            {t.about.highlights.length > 0 && (
              <div className="mb-1">
                <span className="font-bold text-base sm:text-lg">
                  {t.about.highlights[0]}
                </span>
              </div>
            )}
            {t.about.highlights.slice(1).map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 sm:space-x-4"
              >
                <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                <p className="font-semibold text-base sm:text-lg">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
