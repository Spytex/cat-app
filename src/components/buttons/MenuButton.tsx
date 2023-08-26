"use client";

import React, { useState } from "react";
import Link from "next/link";
import LinkButton from "./LinkButton";

interface SideBarButtonProps {
  isActive: boolean;
  href: string;
  children: React.ReactNode;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  isActive,
  href,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkButton
      isHovered={isHovered}
      isActive={isActive}
      href={href}
      height={"h-[60px]"}
      width={"w-[60px]"}
      rounded={"rounded-[20px]"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </LinkButton>
  );
};

export default SideBarButton;
