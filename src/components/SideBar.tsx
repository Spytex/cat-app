"use client";

import React from "react";
import SideBarButton from "./buttons/sideMenu/SideBarButton";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import ThemeButton from "./buttons/ThemeButton";

const SideBar: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "VOTING",
      link: "/voting",
      imgPath: "/vote-table.png",
      backgroundColor: "bg-blue",
    },
    {
      name: "BREEDS",
      link: "/breeds",
      imgPath: "/pet-breeds.png",
      backgroundColor: "bg-green",
    },
    {
      name: "GALLERY",
      link: "/gallery",
      imgPath: "/images-search.png",
      backgroundColor: "bg-orange",
    },
  ];

  return (
    <div className={"ml-[147px] h-screen sticky top-0 tablet:ml-0"}>
      <div className="mb-[80px] pt-[30px] flex justify-between">
        <Logo />
        <ThemeButton />
      </div>
      <p className="text-black text-[44px] leading-[58px] font-medium mb-[10px]">
        Hi!👋
      </p>
      <p className="text-gray-200 text-[20px] font-normal mb-[60px]">
        Welcome to the purr-fect place
      </p>
      <p className="text-black text-[20px] font-medium mb-[20px]">
        Lets start using The Cat API
      </p>
      <div className={"flex flex-row gap-[16px]"}>
        {navLinks.map(({ name, link, imgPath, backgroundColor }) => (
          <SideBarButton
            key={name}
            href={link}
            backgroundColor={backgroundColor}
            imgPath={imgPath}
            isActive={pathname === link}
          >
            {name}
          </SideBarButton>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
