"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

interface catImageURL {
  id: string;
  url: string;
}

interface CatBreed {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  life_span: string;
  alt_names: string;
}

interface CatContextData {
  catData: {
    breeds: CatBreed[];
    categories: string;
    id: string;
    url: string;
    width: number;
    height: number;
  }[];
  catBreeds: CatBreed[];
  catImageURL: catImageURL;
  setCatImageURL: (objectData: catImageURL) => void;
  fetchCatSearch: (limit?: string, breed_ids?: string) => void;
  clearCatData: () => void;
  fetchCatBreeds: () => void;
}

const CatContext = createContext<CatContextData | undefined>(undefined);

export const useCatContext = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error("useCatContext must be used within a CatProvider");
  }
  return context;
};

export const CatProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [catData, setCatData] = useState([]);
  const [catBreeds, setCatBreeds] = useState<CatBreed[]>([]);
  const [catImageURL, setCatImageURL] = useState<catImageURL>({
    id: "",
    url: "",
  });

  const clearCatData = async () => {
    setCatData([]);
  };

  const fetchCatSearch = async (limit?: string, breed_ids?: string) => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?api_key=${
          process.env.NEXT_PUBLIC_CAT_API
        }&breed_ids=${breed_ids || ""}&limit=${limit || ""}&has_breeds=1`
      );
      const data = await response.json();
      setCatData(data);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  const fetchCatBreeds = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");
      const data: CatBreed[] = await response.json();
      setCatBreeds(data);
    } catch (error) {
      console.error("Error fetching cat breeds:", error);
    }
  };

  const contextValue: CatContextData = useMemo(
    () => ({
      catData,
      catBreeds,
      catImageURL,
      setCatImageURL,
      fetchCatSearch,
      clearCatData,
      fetchCatBreeds,
    }),
    [catData, catBreeds, catImageURL]
  );

  return (
    <CatContext.Provider value={contextValue}>{children}</CatContext.Provider>
  );
};
