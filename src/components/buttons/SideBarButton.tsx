"use client";

import React, { useState } from "react";
import Link from "next/link";
import LinkButton from "./LinkButton";

interface SideBarButtonProps {
  isActive: boolean;
  href: string;
  backgroundColor: string;
  imgPath: string;
  children: React.ReactNode;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  isActive,
  href,
  backgroundColor,
  imgPath,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={"flex flex-col gap-[10px] w-[138px]"}>
      <Link
        className={`${backgroundColor} h-[198px] border-4 rounded-[20px] flex justify-center items-center duration-200  
        ${!isActive && !isHovered ? "border-white border-opacity-60" : ""}
        ${isHovered && !isActive ? "border-white border-opacity-100" : ""} 
        ${isActive ? "border-pink-100 border-opacity-100" : ""}`}
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imgPath} alt="Button Icon" />
      </Link>

      <LinkButton
        isHovered={isHovered}
        isActive={isActive}
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        height={"h-[36px]"}
        rounded={"rounded-[10px]"}
      >
        {children}
      </LinkButton>
    </div>
  );
};

export default SideBarButton;
