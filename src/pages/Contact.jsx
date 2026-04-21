import React from "react";
import { Mail, Github, Send } from "lucide-react";

export default function Contact({ t }) {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-32 px-3 sm:px-4 md:px-6"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-20 shadow-lg sm:shadow-xl shadow-gray-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8">
              {t.contact.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12">
              {t.contact.description}
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F2F2F2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase text-gray-400">
                    {t.contact.email}
                  </p>
                  <p className="font-bold text-sm sm:text-base break-all">
                    2023486sok@aupp.edu.kh
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#F2F2F2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Github className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase text-gray-400">
                    GitHub
                  </p>
                  <p className="font-bold text-sm sm:text-base break-all">
                    github.com/Chanmonineath
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="space-y-4 sm:space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                {t.contact.form.name}
              </label>
              <input
                type="text"
                className="w-full bg-[#F2F2F2] border-none rounded-lg sm:rounded-xl p-3 sm:p-4 focus:ring-2 ring-black transition-all outline-none text-base"
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                {t.contact.form.email}
              </label>
              <input
                type="email"
                className="w-full bg-[#F2F2F2] border-none rounded-lg sm:rounded-xl p-3 sm:p-4 focus:ring-2 ring-black transition-all outline-none text-base"
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                {t.contact.form.message}
              </label>
              <textarea
                className="w-full bg-[#F2F2F2] border-none rounded-lg sm:rounded-xl p-3 sm:p-4 h-24 sm:h-32 focus:ring-2 ring-black transition-all outline-none resize-none text-base"
                placeholder={t.contact.form.messagePlaceholder}
              ></textarea>
            </div>
            <button className="w-full flex items-center justify-center bg-black text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg active:scale-95 min-h-[44px]">
              {t.contact.form.send}
              <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
