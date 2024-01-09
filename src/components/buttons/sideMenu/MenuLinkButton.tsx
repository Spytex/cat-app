import Link from "next/link";
import React from "react";

interface ButtonProps {
  isHovered: boolean;
  isActive: boolean;
  href: string;
  height?: string;
  width?: string;
  rounded?: string;
  children: React.ReactNode;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

const MenuLinkButton: React.FC<ButtonProps> = ({
  isHovered,
  isActive,
  href,
  height,
  width,
  rounded,
  children,
  onMouseOver,
  onMouseOut,
}) => {
  return (
    <Link
      className={`${height} ${width} ${rounded} font-medium text-[12px] leading-[16px] tracking-[2px] flex justify-center items-center duration-200 
      ${!isActive && !isHovered ? "bg-white dark:bg-opacity-10" : ""}
      ${isHovered && !isActive ? "bg-pink-100" : ""} 
      ${
        isActive
          ? "bg-pink-200 text-white fill-white"
          : "text-pink-200 fill-pink-200"
      }`}
      onMouseOver={() => onMouseOver()}
      onMouseOut={() => onMouseOut()}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MenuLinkButton;
