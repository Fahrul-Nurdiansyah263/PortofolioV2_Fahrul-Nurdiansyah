import React from "react";
import TextPressure from "../components/TextPressure"
import { useTheme } from "../context/ThemeContext"

export default function Home() {
    const { dark } = useTheme();
    return (
        <div id="#home" className="dark:bg-black bg-white py-20  mx-auto h-auto  xl:h-screen sm:py-0">
            <div className="relative ml-5 dark:bg-black bg-white  sm:ml-20 pt-5">
                <TextPressure
                    text="Fahrul    "
                    flex={true}
                    alpha={false}
                    stroke={false}
                    weight={true}
                    italic={true}
                    textColor={dark ? "#ffffff" : "#000000"}
                    strokeColor="#ff0000"
                    minFontSize={30}
                />
            </div>
            <div className="relative ml-5 dark:bg-black bg-white sm:ml-19 mt-10">
                <TextPressure
                    text="Nurdiansyah "
                    flex={true}
                    alpha={false}
                    stroke={false}
                    weight={true}
                    italic={true}
                    textColor={dark ? "#ffffff" : "#000000"}
                    strokeColor="#ff0000"
                    minFontSize={1}
                />
            </div>
        </div>
    );
}
