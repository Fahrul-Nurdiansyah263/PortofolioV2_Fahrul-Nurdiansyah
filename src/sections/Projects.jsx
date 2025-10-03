import React from "react";
import ThreeDCard from "../components/common/ThreeDCard";
import {
    FaReact, FaHtml5, FaLaravel, FaJs, FaGoogleDrive,
    FaGithub, FaPhp, FaPython, FaBootstrap, FaCss3Alt
} from "react-icons/fa";
import { SiTailwindcss, SiGooglefonts, SiMysql } from "react-icons/si";
import { RiSupabaseFill, RiGeminiFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { AiOutlineOpenAI } from "react-icons/ai";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col mx-auto font-inter">
            <div className="flex justify-center items-center font-bold py-6 mt-12">
                <h1 className="text-white text-4xl">Projects</h1>
            </div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">

                <ThreeDCard
                    judul="RuliLearning"
                    deskripsi="RuliLearning adalah aplikasi LMS berbasis web dengan React dan Supabase. Serta menggunakan Augmented Reality untuk menampilkan 3d secara nyata"
                    img="/Projects/RuliLearning_React.png"
                    githubUrl="https://github.com/Fahrul-Nurdiansyah263/RuliLearning_React?tab=readme-ov-file"
                    icon={<>
                        <FaReact className="text-sky-400 " />
                        <SiTailwindcss className="text-cyan-500" />
                        <RiSupabaseFill className="text-green-500" />
                        <img
                            src="https://dashboard.mywebar.com/_nuxt/img/fed54bf.svg"
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
                <ThreeDCard
                    judul="tanyaArul"
                    deskripsi="Asisten tanya jawab berbasis web dengan React + Gemini AI."
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
                <ThreeDCard
                    judul="FahrulMovies21"
                    deskripsi="Aplikasi web sederhana untuk menampilkan informasi film dengan Bootstrap."
                    img="/Projects/FahrulMovies21.png"
                    githubUrl="https://github.com/Fahrul-Nurdiansyah263/FahrulMovies21"
                    icon={<>
                        <FaReact className="text-sky-400 " />
                        <FaBootstrap className="text-purple-600" />
                    </>
                    }
                />
                <ThreeDCard
                    judul="Ruli - Voice Assistants"
                    deskripsi="Ruli: Asisten virtual Python untuk perintah suara, pencarian Wikipedia, membuka situs, dan memutar lagu."
                    img="/Projects/ruli-virtual.png"
                    githubUrl="https://github.com/Fahrul-Nurdiansyah263/ruli-ai"
                    icon={<>
                        <FaPython className="text-blue-700" />
                    </>
                    }
                />
                <ThreeDCard
                    judul="Web Perpustakaan"
                    deskripsi="Aplikasi web sederhana yang dirancang untuk memfasilitasi pengelolaan data buku dan peminjaman di perpustakaan. "
                    img="/Projects/web-perpustakaan.png"
                    githubUrl="https://github.com/Fahrul-Nurdiansyah263/web-perpustakaan"
                    icon={<>
                        <FaHtml5 className="text-orange-600" />
                        <FaCss3Alt className="text-blue-600" />
                        <FaBootstrap className="text-purple-600" />
                        <FaPhp className="text-indigo-500" />
                    </>
                    }
                />
                <ThreeDCard
                    judul="RuliLearning"
                    deskripsi="RuliLearning: LMS web berbasis Laravel untuk materi gratis dan premium, menggunakan Midtrans untuk pembayaran dan mengirim email konfirmasi setelah pembayaran berhasil."
                    img="/Projects/RuliLearning_React.png"
                    githubUrl="https://github.com/Fahrul-Nurdiansyah263/RuliLearning-Laravel_Version"
                    icon={<>
                        <FaLaravel className="text-red-500" />
                        <SiTailwindcss className="text-cyan-500" />
                        <SiMysql className="text-sky-700" />
                        <img
                            src="https://midtrans.com/assets/img/logo.svg"
                            alt="Midtrans"
                            loading="lazy"
                            className="w-6 h-6 object-contain"
                            style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}
                        />
                        <img
                            src=" https://dashboard.mywebar.com/_nuxt/img/fed54bf.svg"
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
                <ThreeDCard
                    judul="RuliKlinik"
                    deskripsi="RuliKlinik adalah aplikasi web Laravel untuk manajemen klinik, dengan fitur pendaftaran pasien via email, pengelolaan data oleh admin, serta soft deletes "
                    img="/Projects/RuliKlinik.png"
                    githubUrl="https://github.com/Fahrul-Nurdiansyah263/RuliKlink-Laravel/tree/main"
                    icon={<>
                        <FaLaravel className="text-red-500" />
                        <FaBootstrap className="text-purple-600" />
                        <img
                            src="https://mailtrap.io/wp-content/uploads/2025/04/mailtrap-new-light-1.svg"
                            alt="Midtrans"
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
                <ThreeDCard
                    judul="Catatan"
                    img=""
                    deskripsi="Aplikasi catatan berbasis Flutter yang menggunakan Firebase untuk penyimpanan data dan Google Generative AI untuk fitur obrolan cerdas. "
                    githubUrl="https://github.com/Fahrul-Nurdiansyah263/catatan_flutter-firebase"
                    icon={<>
                        <FaFlutter className="text-sky-500" />
                        <IoLogoFirebase className="text-amber-400" />
                        <RiGeminiFill className="text-blue-500" />
                    </>
                    }
                />
            </div>

        </section>
    );
}