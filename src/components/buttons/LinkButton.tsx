"use client";

import Link from "next/link";
import React, { useState } from "react";

interface ButtonProps {
  isActive: boolean;
  href: string;
  height?: string;
  width?: string;
  rounded?: string;
  fontSize?: string;
  fontWeight?: string;
  leading?: string;
  defaultBgColor?: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<ButtonProps> = ({
  isActive,
  href,
  height,
  width,
  rounded,
  fontSize="text-[12px]",
  fontWeight="font-medium",
  leading="leading-[16px]",
  defaultBgColor = "bg-white",
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      className={`${height} ${width} ${rounded} ${fontSize} ${fontWeight} ${leading} tracking-[2px] flex justify-center items-center duration-200 
      ${!isActive && !isHovered ? defaultBgColor : ""}
      ${isHovered && !isActive ? "bg-pink-100" : ""} 
      ${
        isActive
          ? "bg-pink-200 text-white fill-white"
          : "text-pink-200 fill-pink-200"
      }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
