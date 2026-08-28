import React from "react";
import { motion } from "framer-motion";
import Lanyard from "../components/Lanyard";
import DecryptedText from "../components/DecryptedText";
import MarqueeBoxes from "../components/common/MarqueeBoxes";
import { useLanguage } from "../context/LanguageContext";
import { useScrollAnimation, fadeUpVariants } from "../hooks/useScrollAnimation";

function FadeUp({ children, delay = 0, className = "" }) {
  const { ref, isInView } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const { translation } = useLanguage();

  return (
    <section
      id="about"
      className="dark:bg-black dark:text-white bg-white text-black w-full md:py-16 max-w-7xl mx-auto flex flex-col items-center justify-center font-inter"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">

        {/* Left — heading + descriptions (desktop) */}
        <div className="flex flex-col text-left xl:pl-10 lg:pl-10 px-4">
          <div className="flex flex-col gap-2">
            <FadeUp delay={0}>
              <h1 className="text-4xl xl:pl-10 font-openSans mb-5 md:mb-0 md:text-5xl font-bold md:col-start-1 md:row-start-1 xl:-mt-20">
                {translation("about.title")}
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="xl:pl-10 mb-5 md:mb-0 text-xs italic md:col-start-2 md:row-start-2 max-w-xl">
                {translation("about.subtitle")}
              </p>
            </FadeUp>
          </div>
          <div className="flex-col hidden lg:flex xl:w-xl mt-10 gap-5 xl:pl-10 lg:pl-0 pl-20 max-w-xl">
            <FadeUp delay={0.2} className="text-left">
              <DecryptedText
                text={translation("about.description1")}
                speed={100}
                maxIterations={15}
                className="revealed text-[14px] md:text-base"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </FadeUp>

            <div className="flex flex-col gap-5">
              <FadeUp delay={0.3} className="text-justify sm:text-left">
                <DecryptedText
                  text={translation("about.description2")}
                  speed={100}
                  maxIterations={15}
                  className="revealed text-sm md:text-base"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                />
              </FadeUp>
              <FadeUp delay={0.4} className="text-justify sm:text-left">
                <DecryptedText
                  text={translation("about.description3")}
                  speed={100}
                  maxIterations={15}
                  className="revealed text-sm md:text-base"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                />
              </FadeUp>
            </div>
          </div>
        </div>

        {/* Lanyard canvas */}
        <motion.div
          className="canvas-wrapper relative overflow-auto w-full md:col-start-2 md:row-start-1 md:row-span-2 flex xl:w-[500px] lg:w-[600px] items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Lanyard position={[0, 0, 15]} gravity={[0, -80, 0]} />
        </motion.div>

        {/* Descriptions — mobile */}
        <div className="flex flex-col lg:hidden max-w-7xl gap-5 px-4 md:px-8 -mt-4">
          <FadeUp delay={0.1} className="mx-auto sm:text-left">
            <DecryptedText
              text={translation("about.description1")}
              speed={100}
              maxIterations={15}
              className="revealed text-sm"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </FadeUp>

          <div className="flex flex-col gap-5">
            <FadeUp delay={0.2} className="sm:text-left">
              <DecryptedText
                text={translation("about.description2")}
                speed={100}
                maxIterations={15}
                className="revealed text-sm"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </FadeUp>
            <FadeUp delay={0.3} className="sm:text-left">
              <DecryptedText
                text={translation("about.description3")}
                speed={100}
                maxIterations={15}
                className="revealed text-sm"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        className="w-full overflow-x-hidden mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      >
        <MarqueeBoxes />
      </motion.div>
    </section>
  );
}
