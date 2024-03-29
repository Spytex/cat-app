"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Button from "../buttons/Button";
import ContentBox from "./ContentBox";
import LinkButton from "../buttons/LinkButton";
import DropdownMenu from "../DropdownMenu";
import GridPattern from "../GridPattern";
import { useCatContext } from "@/context/CatContext";

const BreedsContent: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { catData, catBreeds, fetchCatSearch, fetchCatBreeds } =
    useCatContext();

  const [gridLimit, setGridLimit] = useState("10");
  const [breedId, setBreedId] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchCatSearch(gridLimit, breedId), fetchCatBreeds()])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [gridLimit, breedId]);

  const breeds = catBreeds;

  const limits = [
    { id: "5", name: "5" },
    { id: "10", name: "10" },
    { id: "15", name: "15" },
    { id: "20", name: "20" },
  ];

  return (
    <ContentBox>
      <div className="flex flex-row space-x-[10px]">
        <Button
          height="h-[40px]"
          width="w-[40px]"
          rounded="rounded-[10px]"
          defaultBgColor="bg-pink-100 dark:bg-pink-200 dark:bg-opacity-20"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g clipPath="url(#clip0_1_1332)">
              <path d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z" />
            </g>
            <defs>
              <clipPath id="clip0_1_1332">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
        <LinkButton
          isActive={pathname === "/breeds"}
          href="/breeds"
          height="h-[40px]"
          width="w-[143px]"
          rounded="rounded-[10px]"
          fontWeight="font-medium"
          fontSize="text-[20px]"
          leading="leading-[30px]"
        >
          BREEDS
        </LinkButton>
        <DropdownMenu
          width="w-[226px]"
          height="h-[40px]"
          defaultBgColor="bg-gray-100"
          rounded="rounded-[10px]"
          placeholder="Select a breed"
          defaultTextColor="text-gray-200"
          data={breeds}
          onClick={(value) => {
            setBreedId(value);
          }}
        />
        <DropdownMenu
          width="w-[101px]"
          height="h-[40px]"
          defaultBgColor="bg-gray-100"
          rounded="rounded-[10px]"
          allListPlaceholder="Limit: "
          defaulValue={gridLimit}
          defaultTextColor="text-gray-200"
          data={limits}
          onClick={(value) => {
            setGridLimit(value);
          }}
        />
        <Button
          width="w-[40px]"
          height="h-[40px]"
          rounded="rounded-[10px]"
          defaultBgColor="bg-gray-100"
          defaultFillColor="fill-gray-200"
          hoverBgColor="bg-gray-100"
          hoverFillColor="fill-pink-200"
          className="border-[2px] border-transparent hover:border-pink-100"
          onClick={() => {
            setSortOrder("desc");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 0.195262C4.26035 -0.0650874 4.68246 -0.0650874 4.94281 0.195262L8.94281 4.19526L8 5.13807L5.13807 2.27614V20H3.80474V2.27614L0.942809 5.13807L0 4.19526L4 0.195262ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 9.93411e-09 15.1381 9.93411e-09C13.2971 9.93411e-09 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
            />
          </svg>
        </Button>
        <Button
          width="w-[40px]"
          height="h-[40px]"
          rounded="rounded-[10px]"
          defaultBgColor="bg-gray-100"
          defaultFillColor="fill-gray-200"
          hoverBgColor="bg-gray-100"
          hoverFillColor="fill-pink-200"
          className="border-[2px] border-transparent hover:border-pink-100"
          onClick={() => {
            setSortOrder("asc");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
            />
          </svg>
        </Button>
      </div>
      {isLoading ? (
        <div className="text-center p-4">Loading...</div>
      ) : (
        <GridPattern catData={catData} sortOrder={sortOrder} />
      )}
    </ContentBox>
  );
};

export default BreedsContent;
