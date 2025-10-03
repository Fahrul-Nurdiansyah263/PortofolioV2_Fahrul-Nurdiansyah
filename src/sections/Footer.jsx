import React from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className="bg-black">
            <div className="container mx-auto px-6 py-8">
                <div className="border-t border-gray-800" />

                <div className="flex flex-col items-center justify-between pt-8 sm:flex-row">

                    <p className="text-sm text-gray-500 text-center sm:text-left mb-4 sm:mb-0">
                        © {new Date().getFullYear()} Fahrul Nurdiansyah. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-2xl">
                        <a
                            href="https://github.com/Fahrul-Nurdiansyah263"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Kunjungi profil GitHub saya"
                            title="GitHub"
                            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.instagram.com/arul.26_?igsh=b3dmd2dnMTh3Njlp"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Kunjungi profil Instagram saya"
                            title="Instagram"
                            className="text-gray-400 hover:text-[#E4405F] hover:scale-110 transition-all duration-300"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="mailto:nurdiansyahfahrul263@gmail.com"
                            aria-label="Kirim email ke saya"
                            title="Email"
                            className="text-gray-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                        >
                            <FaEnvelope />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}