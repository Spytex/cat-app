"use client";

import React, { useState } from "react";

interface DropdownMenuProps {
  height?: string;
  width?: string;
  rounded?: string;
  placeholder?: string;
  allListPlaceholder?: string;
  defaulValue?: string;
  defaultBgColor?: string;
  defaultTextColor?: string;
  data: { id: string; name: string }[];
  onClick: (value: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  height,
  width,
  rounded,
  placeholder,
  allListPlaceholder = "",
  defaulValue = "",
  defaultBgColor = "bg-white",
  defaultTextColor = "text-black",
  data,
  onClick,
}) => {
  const [selected, setSelected] = useState(defaulValue);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleOptionSelect = (name: string, id: string) => {
    toggleMenu();
    if (name === selected) {
      setSelected(defaulValue);
      return defaulValue;
    } else {
      setSelected(name);
      return id;
    }
  };

  return (
    <div className={`${width} relative`}>
      <div>
        <button
          className={`inline-flex justify-between items-center outline-none w-full ${height} px-[10px] text-[16px] font-normal leading-[24px] ${defaultTextColor} ${defaultBgColor} ${rounded} border-[2px] border-transparent hover:border-pink-100`}
          onClick={toggleMenu}
        >
          {selected === ""
            ? allListPlaceholder + placeholder
            : allListPlaceholder + selected}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={`transform ${
              menuVisible ? "-rotate-180" : ""
            } duration-200`}
          >
            <g clipPath="url(#clip0_1_147)">
              <path
                d="M6.59406 9.17417L11.7538 4.01436C12.0821 3.68616 12.0821 3.15395 11.7538 2.82587C11.4256 2.4978 10.8935 2.4978 10.5655 2.82587L5.99993 7.39154L1.43458 2.82606C1.10635 2.49792 0.574264 2.49792 0.24617 2.82606C-0.0820567 3.15414 -0.0820567 3.68628 0.24617 4.01447L5.40591 9.17431C5.57003 9.33836 5.78492 9.42029 5.9999 9.42029C6.21498 9.42029 6.43002 9.3382 6.59406 9.17417Z"
                fill="#8C8C8C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_147">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="matrix(0 -1 1 0 0 12)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {menuVisible && (
        <div className="absolute z-10 max-h-[200px] overflow-y-auto right-0 w-full mt-2 origin-top-right font-normal leading-[24px] bg-white divide-y divide-gray-100 rounded-lg ring-1 ring-gray-100">
          <div className="px-1 py-1">
            {data.map((option) => (
              <button
                key={option.id}
                className={`text-black group flex rounded-md items-center w-full px-2 py-2 text-[16px] hover:bg-gray-100 ${
                  option.name === selected ? "bg-gray-100" : ""
                }`}
                onClick={() => {
                  const value = handleOptionSelect(option.name, option.id);
                  onClick(value);
                }}
              >
                {allListPlaceholder + option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
