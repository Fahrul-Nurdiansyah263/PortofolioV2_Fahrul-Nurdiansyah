import React from "react";
import TextPressure from "../components/TextPressure"
import { useTheme } from "../context/ThemeContext"

export default function Hero() {
    const { dark } = useTheme();
    return (
        <div id="#home" className="dark:bg-black bg-white py-20 max-w-6xl px-4 md:px-10 xl:px-0 mx-auto h-auto  xl:h-screen sm:py-0">
            <div className="relative dark:bg-black bg-white pt-5 xl:pt-20">
                <TextPressure
                    text="Welcome to"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    italic={true}
                    textColor={dark ? "#ffffff" : "#000000"}
                    strokeColor="#ff0000"
                    minFontSize={3}
                />
            </div>
            <div className="relative dark:bg-black bg-white mt-10">
                <TextPressure
                    text="My Portofolio"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    italic={true}
                    textColor={dark ? "#ffffff" : "#000000"}
                    strokeColor="#ff0000"
                    minFontSize={1}
                />
            </div>
        </div>
    );
}
