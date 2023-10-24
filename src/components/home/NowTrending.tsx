import { nowTrending } from "@/utilities/homePageData/nowTrending";
import Link from "next/link";
import React from "react";
import NavigateButton from "../buttons/NavigateButton";

const NowTrending = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-16">
      <p className="text-2xl font-bold text-darkGray">Now Trending</p>

      <ul className="grid grid-cols-1  sm:grid-cols-2 gap-8 md:gap-16">
        {nowTrending.map((Item) => (
          <Link key={Item.title} href="#">
            <li className="relative">
              <img src={Item.image} alt={Item.title} />
              <div className="absolute bottom-7 left-7 lg:bottom-14 lg:left-14">
                <h4 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold pb-5">{Item.title}</h4>
                <NavigateButton/>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NowTrending;
