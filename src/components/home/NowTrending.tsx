import { nowTrending } from "@/utilities/homePageData/nowTrending";
import Link from "next/link";
import React from "react";
import NavigateButton from "../buttons/NavigateButton";

const NowTrending = () => {
  return (
    <div className="px-16 flex flex-col gap-6">
      <p className="text-2xl font-bold text-darkBlack">Now Trending</p>

      <ul className="grid grid-cols-2 gap-16 ">
        {nowTrending.map((Item) => (
          <Link href="#">
            <li className="relative">
              <img src={Item.image} alt={Item.title} />
              <div className="absolute bottom-14 left-14">
                <h4 className="text-white text-3xl font-bold pb-5">{Item.title}</h4>
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
