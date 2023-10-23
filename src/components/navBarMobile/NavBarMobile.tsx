"use client";
import React, { Fragment, SetStateAction, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { navigation } from "../../utilities/navBarData/categoryData";
import Link from "next/link";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import HomePageNav from "./HomePageNav";
import ProfileIcon from "../icons/ProfileIcon";
import LocationIcon from "../icons/LocationIcon";
import BoxIcon from "../icons/BoxIcon";
import FavoriteIcon from "../icons/FavoriteIcon";
import FavoriteSvg from "@/utilities/svgIcons/FavoriteSvg";
import SupportIcon from "../icons/SupportIcon";

const NavBarMobile = () => {
  const isAuth = false;

  return (
    <nav
      aria-label="Top"
      className="w-full relative h-full bg-white block lg:hidden"
    >
      
        <Popover.Group className="px-5 flex flex-col gap-1 mb-8">
          <p className="ml-5 py-5 text-black text-sm font-semibold">Homepage</p>
          {navigation.map((category) => {
            const isNavOpen =
              category.imageData.length > 0 || category.sections.length > 0;
            return (
              <HomePageNav
                key={category.id}
                id={category.id}
                isNavOpen={isNavOpen}
                name={category.name}
              />
            );
          })}
        </Popover.Group>
     

      <div className="bg-gray-100 px-7 w-full py-8 mr-6">
        {isAuth ? (
          <div className="flex flex-col gap-6">

          </div>
        ) : (
          <div className="flex flex-col gap-6 ">

            {/* My Account */}
            <Link href="/authentication" className="flex items-center justify-between hover:cursor-pointer">
              <div className="flex items-center">
                <ProfileIcon height="18px" width="18px" />
                <p>My Account</p>
              </div>
              <ArrowRightIcon/>
            </Link>

            {/* Find a boutique - find store */}
            <Link href="#" className="flex items-center justify-between hover:cursor-pointer text-black hover:text-blue-800">
              <div className="flex items-center">
                <LocationIcon height="18px" width="18px" />
                <p className="underline">Find a boutique</p>
              </div>
            </Link>

            {/* Looking for a guest checkout order? */}
            <Link href="#" className="flex items-center justify-between hover:cursor-pointer text-black hover:text-blue-800">
              <div className="flex items-center gap-2 ml-2">
                <BoxIcon />
                <p className="underline">Looking for a guest checkout order?</p>
              </div>
            </Link>

            {/* Wishlist */}
            <Link href="#" className="flex items-center justify-between hover:cursor-pointer text-black hover:text-blue-800">
              <div className="flex items-center gap-2 ml-2">
                <FavoriteSvg height="18px" width="18px" />
                <p className="underline">Wishlist</p>
              </div>
            </Link>
            

            {/* Help & Support */}
            <Link href="#" className="flex items-center justify-between hover:cursor-pointer text-black hover:text-blue-800">
              <div className="flex items-center gap-2 ml-2">
                <SupportIcon/>
                <p className="underline">Help & Support</p>
              </div>
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBarMobile;

{
  /* <Link href={`/${category.name}`}>
<button>
  {category.name}
</button>
</Link> */
}