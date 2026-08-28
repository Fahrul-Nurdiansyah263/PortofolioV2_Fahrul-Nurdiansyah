import React from "react";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

export default function ThreeDCard({ onClick, title, description, img, icon }) {
  return (
    <CardContainer className="inter-var cursor-pointer group" onClick={onClick}>
      <CardBody className="bg-gray-50 dark:bg-black border rounded-xl p-4 dark:border-white/[0.2] border-black/[0.1] w-full h-auto transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <CardItem translateZ={40} className="text-lg font-bold text-black dark:text-white">
          {title}
        </CardItem>

        <CardItem translateZ={80} rotateX={15} rotateZ={-8} className="w-full mt-3 overflow-hidden rounded-lg">
          {img ? (
            <img
              src={img}
              alt={title}
              className="w-full lg:h-48 md:h-40 h-30 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              onError={(e) => (e.target.style.display = "none")}
            />
          ) : null}
        </CardItem>

        <CardItem as="p" translateZ={50} className="text-sm text-neutral-700 dark:text-neutral-300 mt-2 line-clamp-2">
          {description}
        </CardItem>

        <div className="flex justify-between items-center mt-6">
          <CardItem translateZ={15} translateX={-20} as="div" className="px-3 py-1 rounded-xl text-xs dark:text-white">
            <div className="flex gap-2 text-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {icon}
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
