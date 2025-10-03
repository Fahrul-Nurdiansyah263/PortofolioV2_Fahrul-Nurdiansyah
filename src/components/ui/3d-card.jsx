import React, { createContext, useState, useRef, useContext, useEffect } from "react";
import { cn } from "../../lib/utils";

const MouseEnterContext = createContext();

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) throw new Error("useMouseEnter must be used within a provider");
  return context;
};

export const CardContainer = ({ children, className, containerClassName }) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  const onMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    ref.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const onLeave = () => {
    setHover(false);
    if (ref.current) ref.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[hover, setHover]}>
      <div className={cn("py-3 flex justify-center", containerClassName)} style={{ perspective: "800px" }}>
        <div
          ref={ref}
          onMouseEnter={() => setHover(true)}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className={cn("transition-all duration-200", className)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }) => (
  <div className={cn("h-72 w-72 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>
    {children}
  </div>
);

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [hover] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.transform = hover
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : `translateX(0) translateY(0) translateZ(0) rotateX(0) rotateY(0) rotateZ(0)`;
  }, [hover, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>
      {children}
    </Tag>
  );
};
