import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaHtml5,
  FaLaravel,
  FaJs,
  FaGoogleDrive,
  FaGithub,
  FaPhp,
  FaPython,
  FaBootstrap,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss, SiGooglefonts, SiMysql } from "react-icons/si";
import { RiSupabaseFill, RiGeminiFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { AiOutlineOpenAI } from "react-icons/ai";

const techIcons1 = [
  { Icon: FaReact, name: "React", color: "text-sky-400" },
  { Icon: FaHtml5, name: "HTML5", color: "text-orange-600" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-500" },
  { Icon: RiSupabaseFill, name: "Supabase", color: "text-green-500" },
  { Icon: FaLaravel, name: "Laravel", color: "text-red-500" },
  { Icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
  { Icon: FaFlutter, name: "Flutter", color: "text-sky-500" },
  { Icon: IoLogoFirebase, name: "Firebase", color: "text-amber-400" },
  { Icon: FaGithub, name: "GitHub", color: "text-neutral-400" },
];

const techIcons2 = [
  { Icon: FaPhp, name: "PHP", color: "text-indigo-500" },
  { Icon: FaPython, name: "Python", color: "text-blue-700" },
  { Icon: SiGooglefonts, name: "G Fonts", color: "text-yellow-600" },
  { Icon: RiGeminiFill, name: "Gemini", color: "text-blue-500" },
  { Icon: AiOutlineOpenAI, name: "OpenAI", color: "text-teal-500" },
  { Icon: SiMysql, name: "MySQL", color: "text-sky-700" },
  { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
  { Icon: FaCss3Alt, name: "CSS", color: "text-blue-600" },
];

const MarqueeItem = ({ type, item }) => {
  if (type === "icon") {
    const { Icon, name, color } = item;
    return (
      <div
        className="w-24 h-16 sm:w-40 sm:h-24 bg-[#1f1f1f] text-white
                   p-2 sm:p-3 mx-1 sm:mx-2 rounded-md shadow-lg
                   flex flex-col items-center justify-center
                   text-xs sm:text-sm"
      >
        <Icon className={`text-xl sm:text-3xl mb-1 ${color}`} />
        <span className="text-[10px] sm:text-xs text-center">{name}</span>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div
        className="w-24 h-10 sm:w-60 sm:h-24 bg-[#1f1f1f] text-white
                   p-2 sm:p-3 mx-1 sm:mx-2 rounded-md shadow-lg
                   flex items-center justify-center
                   text-[8px] sm:text-[10px] text-center"
      >
        {item}
      </div>
    );
  }

  return null;
};

const MarqueeBoxes = () => {
  const renderMarqueeRow = (items, type, direction) => (
    <div className="py-3">
      <Marquee direction={direction} pauseOnHover speed={30} gradient={false}>
        {items.map((item, index) => (
          <MarqueeItem key={index} item={item} type={type} />
        ))}
      </Marquee>
    </div>
  );

  return (
    <div className="w-full overflow-hidden px-9 relative">
      {renderMarqueeRow(techIcons1, "icon", "right")}
      {renderMarqueeRow(techIcons2, "icon", "left")}
    </div>
  );
};

export default MarqueeBoxes;
