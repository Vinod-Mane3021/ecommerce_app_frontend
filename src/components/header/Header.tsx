import React from "react";
import SearchBar from "../SearchFeilds/SearchBar";
import LocationIcon from "@/components/icons/ecommerce/LocationIcon";
import FavoriteIcon from "@/components/icons/other/FavoriteIcon";
import ProfileIcon from "@/components/icons/ecommerce/ProfileIcon";
import CartIcon from "@/components/icons/ecommerce/CartIcon";
import MenuIcon from "@/components/icons/ecommerce/MenuIcon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-32 md:16 md:h-20 w-full px-5 bg-white">
      <div className="h-1/2 md:h-full flex flex-row items-center justify-between gap-5 md:justify-center">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center justify-center">
          <p className="uppercase hidden md:block text-gray-800 font-semibold text-xl">lacoste</p>
          <img className="h-9 md:h-6" src="/images/logo.png" alt="logo-image" />
        </Link>
        {/* search bar */}
        <div className="h-full w-8/12 flex-row gap-5 hidden md:flex md:items-center md:justify-center">
          <SearchBar />
        </div>
        <div className="h-full flex flex-row items-center justify-center gap-2">
          {/* location */}
          <LocationIcon height="25px" width="25px" />
          {/* favorite icon */}
          <FavoriteIcon height="25px" width="25px" />
          {/* profile icon */}
          <ProfileIcon height="25px" width="25px" />
          {/* divider */}
          <div className="w-[0.85px] h-[30%] bg-gray-400"></div>
          <CartIcon />
          <MenuIcon/>
        </div>
      </div>
      <div className="h-1/2 w-full flex flex-row items-center justify-center gap-5 md:hidden">
          <SearchBar />
      </div>
    </header>
  );
};

export default Header;
