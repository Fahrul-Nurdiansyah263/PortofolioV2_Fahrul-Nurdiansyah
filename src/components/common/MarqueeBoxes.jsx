import React from "react";
import Marquee from "react-fast-marquee";

import {
  FaReact,
  FaLaravel,
  FaJs,
  FaGithub,
  FaPhp,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiMysql,
  SiTypescript,
  SiVercel,
  SiInertia,
} from "react-icons/si";

import { RiGeminiFill, RiOpenaiFill } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";
import { BsClaude } from "react-icons/bs";

const techIcons1 = [
  {
    Icon: FaReact,
    name: "React",
    color: "text-sky-400",
  },
  {
    Icon: SiNextdotjs,
    name: "Next.js",
    color: "text-gray-900 dark:text-white",
  },
  {
    Icon: FaLaravel,
    name: "Laravel",
    color: "text-red-500",
  },
  {
    Icon: SiInertia,
    name: "Inertia.js",
    color: "text-purple-500",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "text-cyan-400",
  },
  {
    Icon: FaJs,
    name: "JavaScript",
    color: "text-yellow-400",
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    color: "text-blue-500",
  },
  {
    Icon: FaPhp,
    name: "PHP",
    color: "text-indigo-400",
  },
];

const techIcons2 = [
  {
    Icon: SiSupabase,
    name: "Supabase",
    color: "text-emerald-400",
  },
  {
    Icon: SiMysql,
    name: "MySQL",
    color: "text-sky-500",
  },
  {
    Icon: FaGitAlt,
    name: "Git",
    color: "text-orange-500",
  },
  {
    Icon: FaGithub,
    name: "GitHub",
    color: "text-gray-800 dark:text-white",
  },
  {
    Icon: SiVercel,
    name: "Vercel",
    color: "text-gray-900 dark:text-white",
  },
  {
    Icon: TbBrandVscode,
    name: "VS Code",
    color: "text-blue-500",
  },
  {
    Icon: BsClaude,
    name: "Claude",
    color: "text-orange-400",
  },
  {
    Icon: RiGeminiFill,
    name: "Gemini",
    color: "text-blue-500",
  },
  {
    Icon: RiOpenaiFill,
    name: "ChatGPT",
    color: "text-emerald-500",
  },
];

const MarqueeItem = ({ item }) => {
  const { Icon, name, color } = item;

  return (
    <div
      className="
        group flex items-center gap-3
        px-5 py-3 mx-2
        rounded-full
        border border-gray-200 dark:border-white/10
        bg-gray-100/70 dark:bg-white/[0.04]
        backdrop-blur-sm
        transition-all duration-300
        hover:bg-gray-200 dark:hover:bg-white/[0.08]
        hover:border-gray-300 dark:hover:border-white/20
      "
    >
      <Icon
        className={`
          text-xl sm:text-2xl
          ${color}
          transition-transform duration-300
          group-hover:scale-110
        `}
      />

      <span
        className="
          whitespace-nowrap
          text-sm sm:text-base
          font-medium
          text-gray-700 dark:text-gray-200
        "
      >
        {name}
      </span>
    </div>
  );
};

const MarqueeBoxes = () => {
  const renderMarqueeRow = (items, direction) => (
    <div className="py-2">
      <Marquee
        direction={direction}
        pauseOnHover
        speed={35}
        gradient={false}
        autoFill
      >
        {items.map((item, index) => (
          <MarqueeItem
            key={`${item.name}-${index}`}
            item={item}
          />
        ))}
      </Marquee>
    </div>
  );

  return (
    <section className="w-full overflow-hidden py-6">
      {renderMarqueeRow(techIcons1, "right")}
      {renderMarqueeRow(techIcons2, "left")}
    </section>
  );
};

export default MarqueeBoxes;