import Link from "next/link";
import React from "react";

interface GridPatternProps {
  images: string[];
}

const GridPattern: React.FC<GridPatternProps> = ({ images }) => {
  const gridItems = [
    { width: "200px", height: "300px", rowSpan: "2", colSpan: "1" },
    { width: "200px", height: "140px", rowSpan: "1", colSpan: "1" },
    { width: "200px", height: "140px", rowSpan: "1", colSpan: "1" },
    { width: "420px", height: "300px", rowSpan: "2", colSpan: "2" },
    { width: "200px", height: "140px", rowSpan: "1", colSpan: "1" },
    { width: "200px", height: "140px", rowSpan: "1", colSpan: "1" },
    { width: "200px", height: "140px", rowSpan: "1", colSpan: "1" },
    { width: "200px", height: "300px", rowSpan: "2", colSpan: "1" },
    { width: "420px", height: "300px", rowSpan: "2", colSpan: "2" },
    { width: "200px", height: "140px", rowSpan: "1", colSpan: "1" },
  ];

  return (
    <div className="grid grid-cols-3 gap-[20px]">
      {images.map((url, index) => (
        <div
          className={`bg-gray-100 rounded-[20px] w-[${
            gridItems[index % 10].width
          }] h-[${gridItems[index % 10].height}] row-span-${
            gridItems[index % 10].rowSpan
          } col-span-${gridItems[index % 10].colSpan}`}
        >
          <Link href={`/breeds/${index}`}>
            <img
              src={url}
              alt="Grid Item"
              className="rounded-[20px] w-full h-full object-cover object-center"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GridPattern;
