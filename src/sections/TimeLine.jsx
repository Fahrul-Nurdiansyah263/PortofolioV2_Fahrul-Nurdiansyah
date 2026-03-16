import React from "react";
import { Timeline } from "../components/ui/timeline";
import { useLanguage  } from "../context/LanguageContext";

export function TimelineDemo() {
  const { translation } = useLanguage();
  const data = [
    {
      title: translation("timeline.early2025"),
      content: (
        <div>
          <h3 className="dark:text-white text-black font-bold text-3xl md:text-4xl mb-4">TanyaArul</h3>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {translation("timeline.tanyaArul.description")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <img
              src="/Projects/tanyaArul.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="/Projects/tanyaArul_ChatBot.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="dark:text-white text-black font-bold text-3xl md:text-4xl mb-4">RuliLearning</h3>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
             {translation("timeline.ruliLearning.description")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <img
              src="/Projects/RuliLearning_React.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="/Projects/RuliLearning_Backend.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Internship",
      content: (
        <div>
          <h3 className="dark:text-white text-black font-bold text-2xl md:text-4xl mb-4 flex flex-col">{translation("timeline.internship.role")}<span>{translation("timeline.internship.company")}</span> <span>{translation("timeline.internship.period")}</span></h3>
          <div className="mb-8">
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              {translation("timeline.experience.convertedFigma")}
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              {translation("timeline.experience.implementedTheme")}
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              {translation("timeline.experience.improvedUI")}
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              {translation("timeline.experience.fixedFrontend")}
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
