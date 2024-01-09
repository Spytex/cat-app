import { useCatContext } from "@/context/CatContext";
import Link from "next/link";
import React, { useState } from "react";

interface GridPatternProps {
  catData: {
    breeds: {
      id: string;
      name: string;
    }[];
    categories: string;
    id: string;
    url: string;
    width: number;
    height: number;
  }[];
  sortOrder?: "asc" | "desc";
}

const GridPattern: React.FC<GridPatternProps> = ({
  catData,
  sortOrder = "asc",
}) => {
  const { setCatImageURL } = useCatContext();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gridItems = [
    {
      width: "w-[200px]",
      height: "h-[300px]",
      rowSpan: "row-span-2",
      colSpan: "col-span-1",
    },
    {
      width: "w-[200px]",
      height: "h-[140px]",
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
    },
    {
      width: "w-[200px]",
      height: "h-[140px]",
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
    },
    {
      width: "w-[420px]",
      height: "h-[300px]",
      rowSpan: "row-span-2",
      colSpan: "col-span-2",
    },
    {
      width: "w-[200px]",
      height: "h-[140px]",
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
    },
    {
      width: "w-[200px]",
      height: "h-[140px]",
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
    },
    {
      width: "w-[200px]",
      height: "h-[140px]",
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
    },
    {
      width: "w-[200px]",
      height: "h-[300px]",
      rowSpan: "row-span-2",
      colSpan: "col-span-1",
    },
    {
      width: "w-[420px]",
      height: "h-[300px]",
      rowSpan: "row-span-2",
      colSpan: "col-span-2",
    },
    {
      width: "w-[200px]",
      height: "h-[140px]",
      rowSpan: "row-span-1",
      colSpan: "col-span-1",
    },
  ];

  let sortedCatData = [...catData];
  if (sortedCatData.length > 0) {
    try {
      sortedCatData = sortedCatData.sort((a, b) => {
        const nameA = a.breeds[0].name.toLowerCase();
        const nameB = b.breeds[0].name.toLowerCase();
        if (sortOrder === "asc") {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
    } catch (error) {
      console.error("Error sorting data:", error);
    }
  }

  return (
    <div className="h-[calc(100vh_-_230px)] overflow-y-scroll" id="grid-pattern">
      <div className="grid grid-cols-3 gap-[20px]">
        {sortedCatData.map((data, index) => (
          <div
            key={index}
            className={`bg-gray-100 dark:bg-black-100 rounded-[24px] ${
              gridItems[index % 10].height
            } ${gridItems[index % 10].width} ${gridItems[index % 10].rowSpan} ${
              gridItems[index % 10].colSpan
            } relative`}
            onMouseOver={() => setHoveredIndex(index)}
            onMouseOut={() => setHoveredIndex(null)}
          >
            <img
              src={data.url}
              alt="Grid Item"
              className="rounded-[20px] w-full h-full object-cover object-center "
            />
            {hoveredIndex === index && (
              <div>
                <Link
                  href={`/breeds/${data.breeds[0].id}`}
                  className="absolute inset-0 flex items-end justify-center rounded-[20px] bg-pink-200 bg-opacity-60"
                  onClick={() =>
                    setCatImageURL({
                      id: data.breeds[0].id,
                      url: data.url,
                    })
                  }
                >
                  <div className="inset-0 flex items-center justify-center w-full h-[34px] bg-white dark:bg-gray-300 text-pink-200 text-[16px] font-normal leading-[24px] rounded-[10px] m-[10px]">
                    {data.breeds[0].name}
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GridPattern;
