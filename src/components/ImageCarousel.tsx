import React, { useState } from "react";

interface ImageCarouselProps {
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
  catImageURL: {
    id: string;
    url: string;
  };
}
const ImageCarousel: React.FC<ImageCarouselProps> = ({
  catData,
  catImageURL,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? catData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === catData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden rounded-[20px] md:h-[360px]">
        {catData.map((data, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item={index === activeIndex ? "active" : undefined}
          >
            <img
              src={
                index === 1 && data.breeds[0].id === catImageURL.id
                  ? catImageURL.url
                  : data.url
              }
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 bg-white p-[10px] bottom-[-15px] rounded-[20px] flex space-x-[5px] -translate-x-1/2  left-1/2">
        {catData.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-[10px] h-[10px] rounded-full ${
              index === activeIndex ? "bg-pink-200" : "bg-pink-100"
            }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            data-carousel-slide-to={index}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevClick}
        data-carousel-prev
      >
        {/* Previous button content */}
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextClick}
        data-carousel-next
      >
        {/* Next button content */}
      </button>
    </div>
  );
};

export default ImageCarousel;
