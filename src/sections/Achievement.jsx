import React from "react";
import { motion } from "motion/react";
import { DirectionAwareHover } from "../components/common/DirectionAwareHover";
import { useLanguage } from "../context/LanguageContext";
import { useScrollAnimation, fadeUpVariants } from "../hooks/useScrollAnimation";

function AchievementCard({ children, delay = 0, href }) {
  const { ref, isInView } = useScrollAnimation();

  const inner = (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      className="h-full"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        {inner}
      </a>
    );
  }

  return inner;
}

export default function Achievement() {
  const { translation } = useLanguage();

  const certificates = [
    {
      id: "magang",
      title: translation("achievements.certificate.magang"),
      imageUrl: "/Certificate/magang.png",
      href: null,
      delay: 0.1,
    },
    {
      id: "belajar-frontend",
      title: translation("achievements.certificate.basicWebFrontEnd"),
      imageUrl: "/Certificate/BelajarFrontEnd.png",
      href: "https://www.dicoding.com/dicodingassets/coursecertificate/90b99ae38363cd370cbe866d251949446e0d09c5/view",
      delay: 0.2,
    },
    {
      id: "pemrograman-web",
      title: translation("achievements.certificate.basicWeb"),
      imageUrl: "/Certificate/PemogramanWeb.png",
      href: "https://www.dicoding.com/dicodingassets/coursecertificate/d74e4eadeb593da0f16d1e6292489f6ff02827e2/view",
      delay: 0.3,
    },
    {
      id: "javascript",
      title: translation("achievements.certificate.basicJavaScript"),
      imageUrl: "/Certificate/javascript.png",
      href: "https://www.dicoding.com/dicodingassets/coursecertificate/06ee75306429644a3943618b4db8069e952e3120/view",
      delay: 0.4,
    },
    {
      id: "financial-literacy",
      title: translation("achievements.certificate.financialLiteracy"),
      imageUrl: "/Certificate/FinancialL.png",
      href: "https://www.dicoding.com/dicodingassets/coursecertificate/0b5a00775e014d5a7e7f49314a1b17860dbd9fce/view",
      delay: 0.5,
    },
    {
      id: "imphen",
      title: translation("achievements.certificate.imphnen"),
      imageUrl: "/Certificate/imphen.png",
      href: null,
      delay: 0.6,
    },
  ];

  return (
    <section
      id="achievement"
      className="relative flex flex-col font-inter max-w-7xl mx-auto md:py-20 px-6 lg:px-20 mt-20"
    >
      <div className="ml-14 font-bold py-6">
        <h1 className="text-black dark:text-white text-4xl">{translation("achievements.title")}</h1>
      </div>

      <div className="relative w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {certificates.map((cert) => (
          <AchievementCard key={cert.id} delay={cert.delay} href={cert.href}>
            <DirectionAwareHover
              imageUrl={cert.imageUrl}
              className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
            >
              <p className="font-bold text-center text-sm sm:text-lg">{cert.title}</p>
              {cert.href && (
                <p className="text-sm text-gray-300">{translation("achievements.view")}</p>
              )}
            </DirectionAwareHover>
          </AchievementCard>
        ))}
      </div>
    </section>
  );
}
