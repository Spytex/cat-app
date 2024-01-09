"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useParams } from "next/navigation";
import Button from "../buttons/Button";
import ContentBox from "./ContentBox";
import LinkButton from "../buttons/LinkButton";

import { useCatContext } from "@/context/CatContext";
import ImageCarousel from "../ImageCarousel";

const OneBreedContent: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const { catData, catImageURL, fetchCatSearch } = useCatContext();

  useEffect(() => {
    Promise.all([fetchCatSearch("5", id.toString())])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

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
          defaultBgColor="bg-pink-100 dark:bg-pink-200 dark:bg-opacity-20"
        >
          BREEDS
        </LinkButton>
        <LinkButton
          isActive={true}
          href="/breeds"
          height="h-[40px]"
          width="w-[90px]"
          rounded="rounded-[10px]"
          fontWeight="font-medium"
          fontSize="text-[20px]"
          leading="leading-[30px]"
          defaultBgColor="bg-pink-100"
        >
          {id}
        </LinkButton>
      </div>
      {isLoading ? (
        <div className="text-center p-4">Loading...</div>
      ) : (
        <React.Fragment>
          <ImageCarousel catData={catData} catImageURL={catImageURL} />
          <div className="pb-[10px]" />
          {catData && catData.length > 0 && (
            <div className="flex relative flex-col border-[2px] border-pink-100 dark:border-pink-200 dark:border-opacity-20 rounded-[20px]">
              <div className="flex items-center flex-col">
                <p className="relative absolute justify-center bg-white dark:bg-gray-300 px-[40px] py-[5px] rounded-[20px] text-[36px] font-medium text-black dark:text-white mt-[-32px]">
                  {catData[0].breeds[0].name}
                </p>
                <p className="text-[20px] font-medium text-gray-200 flex justify-center max-w-[600px] text-center">
                  {catData[0].breeds[0].alt_names}
                </p>
              </div>
              <div className="flex flex-row mt-[20px]">
                <div className="flex flex-col mx-[40px] max-w-[270px]">
                  <p className="text-[16px] font-medium text-black dark:text-white">
                    Temperament:
                  </p>
                  <p className="text-[16px] font-normal text-gray-200">
                    {catData[0].breeds[0].temperament}
                  </p>
                </div>
                <div className="flex flex-col mx-[20px] max-w-[270px] pb-[40px]">
                  <p className="text-[16px] font-medium text-black dark:text-white">
                    Origin:{" "}
                    <span className="text-[16px] font-normal text-gray-200">
                      {catData[0].breeds[0].origin}
                    </span>
                  </p>
                  <p className="text-[16px] font-medium text-black dark:text-white">
                    Weight:{" "}
                    <span className="text-[16px] font-normal text-gray-200">
                      {catData[0].breeds[0].weight.metric} kgs
                    </span>
                  </p>
                  <p className="text-[16px] font-medium text-black dark:text-white">
                    Life span:{" "}
                    <span className="text-[16px] font-normal text-gray-200">
                      {catData[0].breeds[0].life_span} years
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </ContentBox>
  );
};

export default OneBreedContent;
