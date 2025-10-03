import { useEffect } from "react";
import { DirectionAwareHover } from "../components/common/DirectionAwareHover";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Achievement() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      disableMutationObserver: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      id="achievement"
      className="relative flex flex-col mx-auto font-inter py-20 px-6 lg:px-20 mt-20"
    >
      <div className="ml-14 font-bold py-6">
        <h1 className="text-white text-4xl">Achievement</h1>
      </div>

      <div className="relative w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        <div data-aos="fade-up" data-aos-delay="0">
          <DirectionAwareHover
            imageUrl="/Certificate/imphen.png"
            className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
          >
            <p className="font-bold text-sm sm:text-lg">
              Ingin Menjadi Programmer Handal Namun Enggan Ngoding
            </p>
          </DirectionAwareHover>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://www.dicoding.com/dicodingassets/coursecertificate/d74e4eadeb593da0f16d1e6292489f6ff02827e2/view"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <DirectionAwareHover
              imageUrl="/Certificate/PemogramanWeb.png"
              className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
            >
              <p className="font-bold text-sm sm:text-lg">
                Belajar Dasar Pemrograman Web
              </p>
              <p className="text-sm text-gray-300">
                Klik untuk lihat sertifikat
              </p>
            </DirectionAwareHover>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://www.dicoding.com/dicodingassets/coursecertificate/0b5a00775e014d5a7e7f49314a1b17860dbd9fce/view"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <DirectionAwareHover
              imageUrl="/Certificate/FinancialL.png"
              className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
            >
              <p className="font-bold text-sm sm:text-lg">
                Financial Literacy 101
              </p>
              <p className="text-sm text-gray-300">
                Klik untuk lihat sertifikat
              </p>
            </DirectionAwareHover>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <DirectionAwareHover
            imageUrl="/Certificate/DevCoach181.png"
            className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
          >
            <p className="font-bold text-sm sm:text-lg">
              DevCoach 181: Back-End | Teknik Mengamankan Server RESTful API
            </p>
          </DirectionAwareHover>
        </div>

        <div data-aos="fade-up" data-aos-delay="800">
          <DirectionAwareHover
            imageUrl="/Certificate/DevCoach192.png"
            className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
          >
            <p className="font-bold text-sm sm:text-lg">
              DevCoach 192: Soft Skill | Penangkal Nirwaktu: Atur Prioritas
              dengan Lebih Cerdas!
            </p>
          </DirectionAwareHover>
        </div>

        <div data-aos="fade-up" data-aos-delay="1000">
          <DirectionAwareHover
            imageUrl="/Certificate/DevCoach198.png"
            className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
          >
            <p className="font-bold text-sm sm:text-lg">
              DevCoach 198 | Machine Learning dalam Flutter: Bikin Aplikasi Kamu
              Makin Canggih dengan AI!
            </p>
          </DirectionAwareHover>
        </div>

        <div data-aos="fade-up" data-aos-delay="1200">
          <DirectionAwareHover
            imageUrl="/Certificate/DevCoach200.png"
            className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
          >
            <p className="font-bold text-sm sm:text-lg">
              DevCoach #200: Integrasi IT &amp; AI powered by Asah!
            </p>
          </DirectionAwareHover>
        </div>

      </div>
    </section>
  );
}
