import { useEffect } from "react";
import { DirectionAwareHover } from "../components/common/DirectionAwareHover";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../context/LanguageContext";

export default function Achievement() {

  const { translation } = useLanguage();

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
      className="relative flex flex-col  font-inter max-w-7xl mx-auto md:py-20 px-6 lg:px-20 mt-20"
    >
      <div className="ml-14 font-bold py-6">
        <h1 className="text-black dark:text-white text-4xl">{translation("achievements.title")}</h1>
      </div>

      <div className="relative w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        <div data-aos="fade-up" data-aos-delay="0">
          <DirectionAwareHover
            imageUrl="/Certificate/imphen.png"
            className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
          >
            <p className="font-bold text-sm sm:text-lg">
              {translation("achievements.certificate.imphnen")}
            </p>
          </DirectionAwareHover>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <DirectionAwareHover
            imageUrl="/Certificate/magang.png"
            className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
          >
            <p className="font-bold text-sm sm:text-lg">
              {translation("achievements.certificate.magang")}
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
                {translation("achievements.certificate.basicWebFrontEnd")}
              </p>
              <p className="text-sm text-gray-300">
                {translation("achievements.view")}
              </p>
            </DirectionAwareHover>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://www.dicoding.com/dicodingassets/coursecertificate/90b99ae38363cd370cbe866d251949446e0d09c5/view"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <DirectionAwareHover
              imageUrl="/Certificate/BelajarFrontEnd.png"
              className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
            >
              <p className="font-bold text-sm sm:text-lg">
                {translation("achievements.certificate.basicWebFrontEnd")}
              </p>
              <p className="text-sm text-gray-300">
                {translation("achievements.view")}
              </p>
            </DirectionAwareHover>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://www.dicoding.com/dicodingassets/coursecertificate/06ee75306429644a3943618b4db8069e952e3120/view"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <DirectionAwareHover
              imageUrl="/Certificate/javascript.png"
              className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300"
            >
              <p className="font-bold text-sm sm:text-lg">
                {translation("achievements.certificate.basicJavaScript")}
              </p>
              <p className="text-sm text-gray-300">
                {translation("achievements.view")}
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
                {translation("achievements.view")}
              </p>
            </DirectionAwareHover>
          </a>
        </div>


        

      </div>
    </section>
  );
}
