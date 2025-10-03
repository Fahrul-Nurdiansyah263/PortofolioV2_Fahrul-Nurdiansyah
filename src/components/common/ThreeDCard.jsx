import React from "react";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

export default function ThreeDCard({ githubUrl, judul, deskripsi, img, icon }) {
  return (
    <a href={githubUrl}>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 dark:bg-black border rounded-xl p-4 dark:border-white/[0.2] border-black/[0.1] w-full h-auto">
          <CardItem translateZ={40} className="text-lg font-bold text-neutral-600 dark:text-white">{judul}</CardItem>

          <CardItem translateZ={80} rotateX={15} rotateZ={-8} className="w-full mt-3">
            {img ? (
              <img
                src={img}
                alt={judul}
                className="w-full h-48 object-cover rounded-lg"
                onError={(e) => (e.target.style.display = "none")} 
              />
            ) : null}
          </CardItem>

          <CardItem as="p" translateZ={50} className="text-sm text-neutral-500 dark:text-neutral-300 mt-2">
            {deskripsi}
          </CardItem>

          <div className="flex justify-between items-center mt-8">
            <CardItem translateZ={15} translateX={-20} as="button" className="px-3 py-1 rounded-xl text-xs dark:text-white">
              <div className="flex gap-2 text-xl">{icon}</div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </a>
  );
}
