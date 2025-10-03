import React from "react";
import Lanyard from "../components/Lanyard";
import DecryptedText from "../components/DecryptedText";
import MarqueeBoxes from "../components/common/MarqueeBoxes";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white w-full sm:px-8 lg:px-20 py-16 flex flex-col items-center justify-center gap-16 font-inter"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-y-8 items-center">
        <h1 className="text-4xl pl-10 md:text-5xl font-bold md:col-start-1 md:row-start-1 sm:pl-30 sm:mb-[-120px]  ">
          About Me
        </h1>
        <div className="canvas-wrapper w-full md:col-start-2 md:row-start-1 md:row-span-2 flex items-center justify-center">
          <Lanyard position={[0, 0, 15]} gravity={[0, -80, 0]} />
        </div>

        <div className="flex flex-col  max-w-7xl gap-5 px-8 mt-[-40px] md:col-start-1 md:row-start-2 sm:pl-30 sm:mt-[-150px] sm:px-3 ">
          
          <div className="text-justify mx-auto  sm:text-left">
            <DecryptedText
              text="Halo! Saya Fahrul Nurdiansyah seorang pengembang web yang bersemangat dalam mengubah ide-ide kompleks menjadi aplikasi web yang elegan dan fungsional. Perjalanan saya di dunia digital dimulai sejak saya memasuki kuliah yaitu pada tahun 2022, dan sejak saat itu, saya tidak pernah berhenti belajar dan mengeksplorasi teknologi baru."
              speed={100}
              maxIterations={15}
              className="revealed text-[16px]"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </div>

          <div className="flex flex-col gap-5">
             <div className="text-justify sm:text-left">
                <DecryptedText
                text="Saya sangat menikmati proses memecahkan masalah dan berkolaborasi dalam tim untuk menciptakan solusi yang berdampak positif. Bagi saya, coding bukan hanya tentang menulis baris kode, tapi tentang membangun jembatan antara manusia dan teknologi."
                speed={100}
                maxIterations={15}
                className="revealed text-[16px]"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                />
            </div>
            <div className="text-justify sm:text-left">
                <DecryptedText
                text="Di luar coding, saya percaya pentingnya komunikasi yang baik, manajemen waktu, dan pembelajaran berkelanjutan. Dengan kombinasi keterampilan teknis dan soft skill ini, saya berusaha menghadirkan solusi yang tidak hanya berfungsi, tetapi juga memberikan pengalaman terbaik bagi pengguna."
                speed={100}
                maxIterations={15}
                className="revealed text-[16px]"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-hidden mt-8">
        <MarqueeBoxes />
      </div>
    </section>
  );
}