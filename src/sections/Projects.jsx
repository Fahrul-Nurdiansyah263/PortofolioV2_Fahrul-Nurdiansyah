import React from "react";
import ThreeDCard from "../components/common/ThreeDCard";
import {
    FaReact, FaHtml5, FaLaravel, FaJs, FaGoogleDrive,
    FaGithub, FaPhp, FaPython, FaBootstrap, FaCss3Alt
} from "react-icons/fa";
import {
    SiGooglefonts, SiMysql, SiTypescript, SiFilament, SiNextdotjs,
    SiTailwindcss,
    SiAxios,
    SiReactquery,
    SiReactrouter,
    SiFramer,
  SiVite,
} from "react-icons/si";
import { RiSupabaseFill, RiGeminiFill } from "react-icons/ri";
import { AiOutlineOpenAI } from "react-icons/ai";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
    const { translation } = useLanguage();
    return (
        <section id="projects" className="flex flex-col mx-auto font-inter">
            <div className="flex justify-center items-center font-bold py-6 mt-12">
                <h1 className="dark:text-white text-4xl">{translation("projects.title")}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
                <div data-aos="fade-up" data-aos-delay="0">
                    <ThreeDCard
                        title={translation("projects.items.ruliConnect.title")}
                        description={translation("projects.items.ruliConnect.description")}
                        img="/Projects/ruliconnect.png"
                        githubUrl="https://github.com/Fahrul-Nurdiansyah263/RuliConnect"
                        icon={<>
                            <SiNextdotjs className="text-black dark:text-white" />
                            <SiTailwindcss className="text-cyan-500" />
                            <RiSupabaseFill className="text-green-500" />
                            <SiGooglefonts className="text-yellow-600" />
                            <RiGeminiFill className="text-blue-500" />
                            <AiOutlineOpenAI className="text-teal-500" />
                        </>
                        }
                    />
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <ThreeDCard
                        title={translation("projects.items.tanyaArul.title")}
                        description={translation("projects.items.tanyaArul.description")}
                        img="/Projects/tanyaArul.png"
                        githubUrl="https://github.com/Fahrul-Nurdiansyah263/tanyaArulV2"
                        icon={<>
                            <FaReact className="text-sky-400 " />
                            <SiTailwindcss className="text-cyan-500" />
                            <SiGooglefonts className="text-yellow-600" />
                            <RiGeminiFill className="text-blue-500" />
                            <AiOutlineOpenAI className="text-teal-500" />
                        </>
                        }
                    />
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <ThreeDCard
                        title={translation("projects.items.ruligamelist.title")}
                        description={translation("projects.items.ruligamelist.description")}
                        img="/Projects/RuliGameList.png"
                        githubUrl="https://github.com/Fahrul-Nurdiansyah263/RuliGameReact"
                        icon={<>
                            <FaReact className="text-sky-400" />
                            <SiTypescript className="text-blue-500" />
                            <SiTailwindcss className="text-cyan-400" />
                            <SiReactquery className="text-red-500" />
                            <SiAxios className="text-purple-500" />
                            <SiReactrouter className="text-red-400" />
                            <SiFramer className="text-pink-500" />
                        </>
                        }
                    />
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <ThreeDCard
                        title={translation("projects.items.voiceAssistant.title")}
                        description={translation("projects.items.voiceAssistant.description")}
                        img="/Projects/ruli-virtual.png"
                        githubUrl="https://github.com/Fahrul-Nurdiansyah263/ruli-ai"
                        icon={<>
                            <FaPython className="text-blue-700" />
                        </>
                        }
                    />
                </div>
                <div data-aos="fade-up" data-aos-delay="0">
                    <ThreeDCard
                        title={translation("projects.items.baksoMasJoni.title")}
                        description={translation("projects.items.baksoMasJoni.description")}
                        img="/Projects/baksomasjoni.png"
                        githubUrl="https://github.com/Fahrul-Nurdiansyah263/Bakso-Mas-Joni-APP---FIX"
                        icon={
                            <>
                                <FaLaravel className="text-red-600" />
                                <SiFilament className="text-orange-500" />
                                <SiMysql className="text-blue-600" />
                                <SiTailwindcss className="text-cyan-500" />
                                <RiGeminiFill className="text-blue-500" />
                            </>
                        }
                    />
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <ThreeDCard
                        title={translation("projects.items.ruliLearningLaravel.title")}
                        description={translation("projects.items.ruliLearningLaravel.description")}
                        img="/Projects/RuliLearning_React.png"
                        githubUrl="https://github.com/Fahrul-Nurdiansyah263/RuliLearning-Laravel_Version"
                        icon={<>
                            <FaLaravel className="text-red-500" />
                            <SiFilament className="text-[#e92c2c]" />
                            <SiTailwindcss className="text-cyan-500" />
                            <SiMysql className="text-sky-700" />
                            <img
                                src="https://seeklogo.com/images/M/midtrans-logo-2C8B2F7E0F-seeklogo.com.png"
                                alt="Midtrans"
                                loading="lazy"
                                className="w-6 h-6 object-contain"
                                style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}
                            />
                            <SiGooglefonts className="text-yellow-600" />
                            <RiGeminiFill className="text-blue-500" />
                            <AiOutlineOpenAI className="text-teal-500" />
                        </>
                        }
                    />
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <ThreeDCard
                        title={translation("projects.items.ruliKlinik.title")}
                        description={translation("projects.items.ruliKlinik.description")}
                        img="/Projects/RuliKlinik.png"
                        githubUrl="https://github.com/Fahrul-Nurdiansyah263/RuliKlink-Laravel/tree/main"
                        icon={<>
                            <FaLaravel className="text-red-500" />
                            <FaBootstrap className="text-purple-600" />
                            <img
                                src="https://mailtrap.io/wp-content/uploads/2025/04/mailtrap-new-light-1.svg"
                                alt="Mailtrap"
                                loading="lazy"
                                className="w-6 h-6 object-contain"
                                style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}
                            />
                            <SiMysql className="text-sky-700" />
                            <SiGooglefonts className="text-yellow-600" />
                            <RiGeminiFill className="text-blue-500" />
                            <AiOutlineOpenAI className="text-teal-500" />
                        </>
                        }
                    />
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <ThreeDCard
                        title={translation("projects.items.vetrack.title")}
                        img="/Projects/vetrack.png"
                        description={translation("projects.items.vetrack.description")}
                        githubUrl="https://github.com/Fahrul-Nurdiansyah263/VeTrack"
                        icon={<>
                            <FaLaravel className="text-red-500" />
                            <FaPhp className="text-indigo-500" />
                            <SiMysql className="text-blue-500" />
                            <SiTailwindcss className="text-cyan-400" />
                            <SiVite className="text-purple-500" />
                        </>
                        }
                    />
                </div>
            </div>

        </section>
    );
}
