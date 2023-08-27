"use client";

import BreedsContent from "@/components/BreedsContent";
import SearchRow from "@/components/search/SearchRow";

const Breeds = () => {
  return (
    <div className="flex justify-end pt-[30px] pb-[30px] mr-[30px] min-h-screen">
      <div className="flex flex-col space-y-[10px]">
      <SearchRow
        onSearch={(value: string) => {
          console.log(value);
        }}
      />
      <BreedsContent />
      </div>
    </div>
  );
};

export default Breeds;
