"use client";

import React from "react";

interface ButtonProps {
  isHovered: boolean;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Button: React.FC<ButtonProps> = ({
  isHovered,
  isActive,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      className={`h-[36px] rounded-[10px] font-medium text-[12px] leading-[16px] tracking-[2px] duration-200 
      ${!isActive && !isHovered ? "bg-white" : ""}
      ${isHovered && !isActive ? "bg-pink-100" : ""} 
      ${
        isActive
          ? "bg-pink-200 text-white fill-white"
          : "text-pink-200 fill-pink-200"
      }`}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
