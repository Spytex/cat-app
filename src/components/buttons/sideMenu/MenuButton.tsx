"use client";

import React, { useState } from "react";
import MenuLinkButton from "./MenuLinkButton";

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
    <MenuLinkButton
      isHovered={isHovered}
      isActive={isActive}
      href={href}
      height={"h-[60px]"}
      width={"w-[60px]"}
      rounded={"rounded-[20px]"}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </MenuLinkButton>
  );
};

export default SideBarButton;
