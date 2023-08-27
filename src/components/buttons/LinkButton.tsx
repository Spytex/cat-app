"use client";

import Link from "next/link";
import React, { useState } from "react";

interface ButtonProps {
  isActive: boolean;
  href: string;
  height?: string;
  width?: string;
  rounded?: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<ButtonProps> = ({
  isActive,
  href,
  height,
  width,
  rounded,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      className={`${height} ${width} ${rounded} font-medium text-[12px] leading-[16px] tracking-[2px] flex justify-center items-center duration-200 
      ${!isActive && !isHovered ? "bg-white" : ""}
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
