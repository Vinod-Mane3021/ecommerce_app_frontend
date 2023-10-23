import FeatureHoverButton from "@/components/buttons/FeatureHoverButton";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative hover:cursor-pointer">
      {/* image */}
      
      <div className="flex items-center justify-center overflow-x-hidden xl:flex-none xl:mx-0">
        <img
          className="h-[500px] xl:h-full min-w-fit xl:min-w-full"
          src="/images/homePage/BigImages/homeImg.png"
          alt="home-page-image"
          />
      </div>
      <div className="absolute bottom-5 md:bottom-20 left-5 md:left-20 flex flex-col gap-2">
        <h1 className="text-white font-bold text-4xl md:text-5xl">
          25% off Fall Styles + New <br /> Markdowns up to 60% off
        </h1>
        <p className="text-white text-sm">No Code Needed, Price as Marked</p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-sm py-4">
          <Link href="/sale">
            <FeatureHoverButton
              bgColor="white"
              hoverBgColor="[#292929]"
              hoverTextColor="white"
              text="Shop 25% Off"
            />
          </Link>

          <Link href="/sale">
            <FeatureHoverButton
              bgColor="white"
              hoverBgColor="[#292929]"
              hoverTextColor="white"
              text="Shop New Markdowns"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
