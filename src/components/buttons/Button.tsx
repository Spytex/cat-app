"use client";

import React, { useState } from "react";

interface ButtonProps {
  height?: string;
  width?: string;
  rounded?: string;
  defaultBgColor?: string;
  hoverBgColor?: string;
  defaultFillColor?: string;
  hoverFillColor?: string;
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  height,
  width,
  rounded,
  defaultBgColor = "bg-white dark:bg-opacity-10",
  hoverBgColor = "bg-pink-200",
  defaultFillColor = "fill-pink-200",
  hoverFillColor = "fill-white",
  className,
  children,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`${height} ${width} ${rounded} font-medium text-[12px] leading-[16px] tracking-[2px] flex justify-center items-center duration-200 ${className}
      ${
        isHovered
          ? `${hoverBgColor} text-white ${hoverFillColor}`
          : `${defaultBgColor} text-pink-200 ${defaultFillColor}`
      }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
