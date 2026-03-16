import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext"
import { useTheme } from "../../context/ThemeContext"

const languages = [
  { code: "ID", label: "Indonesia", flag: "🇮🇩" },
  { code: "EN", label: "English", flag: "🇬🇧" },
];

export default function FloatingControls() {
  const [langOpen, setLangOpen] = useState(false);
  const { lang, changeLang } = useLanguage(); 
  const ref = useRef(null);
  const { dark, setDark } = useTheme();
  
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLang = languages.find((l) => l.code === lang);

  return (
      <div ref={ref}
        className="fixed bottom-8 right-8 flex flex-col items-end gap-2 z-50"
      >
        {/* Language Dropdown */}
        {langOpen && (
          <div className="mb-1 flex flex-col gap-1 items-end animate-in fade-in slide-in-from-bottom-2 duration-200">
            {languages
              .filter((l) => l.code !== lang.code)
              .map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    changeLang(l.code);
                    setLangOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium
                    bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200
                    shadow-lg shadow-black/10 dark:shadow-black/40
                    border border-zinc-200 dark:border-zinc-700
                    hover:bg-zinc-50 dark:hover:bg-zinc-700
                    transition-all duration-150 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
          </div>
        )}

        {/* Main Pill */}
        <div
          className={`flex items-center gap-1 p-1.5 rounded-full
            bg-white dark:bg-zinc-800
            shadow-xl shadow-black/15 dark:shadow-black/50
            border border-zinc-200 dark:border-zinc-700
            transition-all duration-300`}
        >
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            title={dark ? "Switch to Light" : "Switch to Dark"}
            className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-lg
              transition-all duration-200 hover:scale-110 active:scale-95
              ${dark
                ? "bg-zinc-700 text-yellow-300 hover:bg-zinc-600"
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
              }`}
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Divider */}
          <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-600 mx-0.5" />

          {/* Language picker */}
          <button
            onClick={() => setLangOpen(!langOpen)}
            title="Change language"
            className={`flex items-center gap-1.5 px-3 cursor-pointer h-10 rounded-full text-sm font-semibold
              transition-all duration-200 hover:scale-105 active:scale-95
              ${langOpen
                ? "bg-zinc-800 text-white dark:bg-white dark:text-zinc-900"
                : "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-600"
              }`}
          >
            <span className="text-base">{currentLang?.flag}</span>
            <span className="tracking-wide">{lang.toUpperCase()}</span>
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
  )
}