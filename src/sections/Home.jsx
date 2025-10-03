import React from "react";
import TextPressure from "../components/TextPressure"

export default function Home() {
    return (
        <div id="#home" className="bg-black py-20 h-auto mb-10 sm:h-screen sm:py-0">
            <div className="relative ml-5  sm:ml-20 pt-5">
                <TextPressure
                    text="Fahrul    "
                    flex={true}
                    alpha={false}
                    stroke={false}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={30}
                />
            </div>
            <div className="relative ml-5 sm:ml-19 mt-10">
                <TextPressure
                    text="Nurdiansyah "
                    flex={true}
                    alpha={false}
                    stroke={false}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={1}
                />
            </div>
        </div>
    );
}
