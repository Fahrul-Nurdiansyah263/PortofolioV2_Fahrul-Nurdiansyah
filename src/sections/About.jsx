import React from "react";
import Lanyard from "../components/Lanyard";
import DecryptedText from "../components/DecryptedText";
import MarqueeBoxes from "../components/common/MarqueeBoxes";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { translation } = useLanguage();
  return (
    <section
      id="about"
      className="dark:bg-black dark:text-white bg-white text-black w-full py-16 max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 font-inter">
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl xl:pl-10 pl-20 md:text-5xl font-bold md:col-start-1 md:row-start-1 xl:-mt-20  ">
            {translation("about.title")}
          </h1>
          <div className="flex-col hidden lg:flex xl:w-xl mt-10 gap-5 xl:pl-10 pl-20">
            <div className="text-left">
              <DecryptedText
                text={translation("about.description1")}
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
                  text={translation("about.description2")}
                  speed={100}
                  maxIterations={15}
                  className="revealed text-[16px]"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                />
              </div>
              <div className="text-justify sm:text-left">
                <DecryptedText
                  text={translation("about.description3")}
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

        <div className="canvas-wrapper relative overflow-auto w-full md:col-start-2 md:row-start-1 md:row-span-2 flex xl:w-[900px] lg:w-[600px] items-center justify-center">
          <Lanyard position={[0, 0, 15]} gravity={[0, -80, 0]} />
        </div>

        <div className="flex flex-col lg:hidden max-w-7xl gap-5 px-4 md:px-8 lg:mt-[-40px] md:col-start-1 md:row-start-2">
          <div className=" mx-auto  sm:text-left">
            <DecryptedText
              text={translation("about.description1")}
              speed={100}
              maxIterations={15}
              className="revealed text-[16px]"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="sm:text-left">
              <DecryptedText
                text={translation("about.description2")}
                speed={100}
                maxIterations={15}
                className="revealed text-[16px]"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </div>
            <div className="sm:text-left">
              <DecryptedText
                text={translation("about.description3")}
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
