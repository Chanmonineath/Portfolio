import React from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function Home({ t }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-3 sm:px-4 md:px-6 overflow-hidden pt-24 sm:pt-20 md:pt-0"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="lg:col-span-8 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] mb-4 sm:mb-6 md:mb-8 animate-slideInUp">
            {t.hero.title1} <br />
            <span
              className="text-transparent border-text"
              style={{ WebkitTextStroke: "1px #2D2D2D" }}
            >
              {t.hero.title2}
            </span>{" "}
            <br />
            {t.hero.title3}
          </h1>
          <p
            className="max-w-lg text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-10 animate-slideInUp"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.description}
          </p>
          <div
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-slideInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#work"
              className="group flex items-center justify-center sm:justify-start bg-black text-white px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg active:scale-95"
            >
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

      <a
        href="#work"
        aria-label="Scroll to projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
      </a>
    </section>
  );
}
