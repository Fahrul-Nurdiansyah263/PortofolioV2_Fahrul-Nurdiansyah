import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { MdArrowOutward } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const { translation } = useLanguage();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mt-15 mx-auto flex flex-col lg:py-30 py-25 px-4"
    >
      <motion.div
        variants={containerVariants}
        className="dark:text-white max-w-3xl mx-auto flex flex-col justify-center items-center gap-5"
      >
        <motion.h1
          variants={itemVariants}
          className="font-jakarta font-medium text-5xl sm:text-6xl lg:text-7xl text-center tracking-tight"
        >
          {translation("hero.title")}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-jakarta font-normal text-base sm:text-lg text-center italic text-neutral-600 dark:text-neutral-300 max-w-2xl"
        >
          {translation("hero.subtitle")}
        </motion.p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-row flex-wrap gap-4 items-center justify-center mt-6"
      >
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="flex font-openSans font-normal dark:bg-white dark:text-black bg-black text-white rounded-full px-3 py-1 text-sm md:text-base md:px-5 md:py-2 flex-row gap-2 items-center justify-center shadow-sm hover:shadow-md transition-shadow"
        >
          {translation("hero.button.primary")}
          <MdArrowOutward />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#footer"
          className="dark:text-white dark:border-white border border-black px-3 py-1 text-sm md:text-base md:px-5 md:py-2 rounded-full font-normal transition-colors"
        >
          {translation("hero.button.secondary")}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}