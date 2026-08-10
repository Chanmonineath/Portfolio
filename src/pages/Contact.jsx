import React from "react";
import { Mail, Github, ArrowUpRight } from "lucide-react";

export default function Contact({ t }) {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-32 px-3 sm:px-4 md:px-6"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-20 shadow-lg sm:shadow-xl shadow-gray-200/50">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8">
          {t.contact.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12">
          {t.contact.description}
        </p>
        <div className="space-y-4 sm:space-y-6">
          <a
            href="mailto:2023486sok@aupp.edu.kh"
            className="group flex items-center justify-between space-x-3 sm:space-x-4 bg-[#F2F2F2] rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-black hover:text-white transition-all duration-300"
          >
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase text-gray-400 group-hover:text-gray-300">
                  {t.contact.email}
                </p>
                <p className="font-bold text-sm sm:text-base break-all">
                  2023486sok@aupp.edu.kh
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href="https://github.com/Chanmonineath"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between space-x-3 sm:space-x-4 bg-[#F2F2F2] rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-black hover:text-white transition-all duration-300"
          >
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Github className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase text-gray-400 group-hover:text-gray-300">
                  GitHub
                </p>
                <p className="font-bold text-sm sm:text-base break-all">
                  github.com/Chanmonineath
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
