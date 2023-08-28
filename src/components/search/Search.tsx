"use client";

import { useCatContext } from "@/context/CatContext";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

const Search: React.FC = () => {
  const router = useRouter();

  const { fetchCatBreeds, catBreeds } = useCatContext();

  const [value, setValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetchCatBreeds();
  }, []);

  const breedSuggestions = catBreeds
    .filter((breed) => breed.name.toLowerCase().includes(value.toLowerCase()))
    .slice(0, 5);

  const handleSearch = (value: string) => {
    const breed = catBreeds.find((breed) =>
      breed.name.toLowerCase().includes(value.toLowerCase())
    );

    if (breed) {
      router.push(`/breeds/${breed.id}`); // temporary /breeds/${breed.id} instead of /search?id=${breed.id}
    }
  };

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(value);
    }
  };

  return (
    <div className="relative w-full text-black">
      <input
        type="search"
        name="search"
        placeholder="Search for breeds by name"
        className={`bg-white h-[60px] px-[20px] w-full rounded-[20px] text-[20px] leading-[30px] font-normal border-[2px]
        ${!isHovered && !isActive ? "border-white placeholder-gray-200" : ""}
        ${isHovered && !isActive ? "border-pink-100 placeholder-white" : ""}
        ${isActive ? "outline-none border-pink-200 placeholder-white" : ""}`}
        onChange={(event) => searchHandler(event)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsActive(true)}
        onBlur={() => {
          if (value === "") {
            setIsActive(false);
          }
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseOut={() => {
          setIsHovered(false);
        }}
      />

      {isActive && value != "" && breedSuggestions.length > 0 && (
        <div className="absolute w-full bg-white border border-gray-100 rounded-[20px] z-30 mt-1 overflow-y-auto">
          <div className="px-1 py-1">
            {breedSuggestions.map((breed) => (
              <div
                key={breed.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md z-30"
                onClick={() => {
                  setValue(breed.name);
                  setIsActive(false);
                  handleSearch(breed.name);
                }}
              >
                {breed.name}
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        type="submit"
        onClick={() => handleSearch(value)}
        className="absolute right-0 top-0 mt-[10px] mr-[10px] w-[40px] h-[40px] fill-pink-200 bg-pink-100 flex justify-center items-center rounded-[10px] hover:bg-pink-200 hover:fill-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g clipPath="url(#clip0_1_1288)">
            <path d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z" />
          </g>
          <defs>
            <clipPath id="clip0_1_1288">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Search;
