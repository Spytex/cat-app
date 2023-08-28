"use client";

import BreedsContent from "@/components/content/BreedsContent";
import SearchRow from "@/components/search/SearchRow";
import { useCatContext } from "@/context/CatContext";
import { useRouter } from "next/navigation";

const Breeds = () => {
  const { fetchCatSearch, catBreeds } = useCatContext();

  const router = useRouter();
  const handleSearch = async (value: string) => {
    // Find the breed with the given name
    const breed = catBreeds.find((breed) =>
      breed.name.toLowerCase().includes(value.toLowerCase())
    );

    if (breed) {
      // Redirect to /search with the breed id as a query parameter
      router.push(`/search?id=${breed.id}`);

      // Fetch cat images based on the selected breed
      fetchCatSearch(undefined, breed.id);
    }
  };

  return (
    <div className="flex justify-end pt-[30px] pb-[30px] mr-[30px] min-h-screen">
      <div className="flex flex-col space-y-[10px]">
        <SearchRow />
        <BreedsContent />
      </div>
    </div>
  );
};

export default Breeds;
