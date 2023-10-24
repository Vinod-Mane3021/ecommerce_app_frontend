import React from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

const LacosteInside = () => {
  return (
    <div className="w-full text-white bg-darkGray py-10 my-10 flex flex-col h-full gap-5 relative pb-20">
      {/* Top content */}
      <div className="px-4 md:px-8 lg:px-16 w-full flex items-center justify-between">
        {/* title and logo */}
        <div className="flex items-center gap-5">
          <p className="text-xl md:text-2xl font-bold">Lacoste Inside</p>
          <img
            className="w-12 md:w-16"
            src="/images/logoBlack&White.png"
            alt=""
          />
        </div>

        {/* slider icons and counter */}
        <div className="absolute bottom-5 right-5 md:static">
          <div className="flex items-center text-white font-bold text-lg gap-[4px]">
            <ArrowLeftIcon color="#fff" />
            <p>{1}</p>
            <p className="text-gray-300">/</p>
            <p>{5}</p>
            <ArrowRightIcon color="#fff" />
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="flex flex-col overflow-x-hidden md:flex-row items-center justify-center md:justify-normal px-0 md:px-8 lg:px-16  gap-14 h-full">
        {/* bottom video */}
        <video
          className="h-[300px] md:h-[310px] lg:h-[450px] xl:h-[550px] min-w-fit hover:cursor-pointer"
          controls loop autoPlay muted
          src="/images/homePage/LacosteInside/BRAND_BLOC_DESK _MEN.webm"
          typeof="video/webm"
        ></video>

        {/* bottom right content */}
        <div className="px-4 md:px-0 flex flex-col gap-5 min-h-fit justify-end">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">
              L003 Neo Sneakers: The <br />
              Comeback
            </h2>
            <p className="text-xs">
              Discover the L003 Neo sneaker for men in a winter <br />
              color palette. Green, khaki, orange, brown... the new <br />
              colorways reveal a bold, sports-inspired silhouette <br />
              inspired by sport.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button className="bg-white w-fit text-sm text-darkGray px-6 py-[10px] rounded-full border-[0.01px] border-transparent hover:bg-darkGray hover:text-white hover:border-gray-500 duration-300">
              Shop L003 Neo
            </button>
            <button className="bg-white w-fit text-sm text-darkGray px-6 py-[10px] rounded-full border-[0.01px] border-transparent hover:bg-darkGray hover:text-white hover:border-gray-500 duration-300">
              Shop All Men's Footwear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LacosteInside;
