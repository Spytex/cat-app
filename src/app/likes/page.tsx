"use client";

import SearchRow from "@/components/search/SearchRow";

const Likes = () => {
  return (
    <div className="flex justify-end">
      <SearchRow
        onSearch={(value: string) => {
          console.log(value);
        }}
      />
    </div>
  );
};

export default Likes;
