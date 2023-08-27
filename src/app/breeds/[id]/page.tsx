"use client";

import OneBreedContent from "@/components/content/OneBreedContent";
import SearchRow from "@/components/search/SearchRow";

const Breed = () => {
  return (
    <div className="flex justify-end pt-[30px] pb-[30px] mr-[30px] min-h-screen">
      <div className="flex flex-col space-y-[10px]">
        <SearchRow
          onSearch={(value: string) => {
            console.log(value);
          }}
        />
        <OneBreedContent />
      </div>
    </div>
  );
};

export default Breed;
