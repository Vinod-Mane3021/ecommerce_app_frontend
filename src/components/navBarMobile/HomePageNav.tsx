import React from "react";
import ArrowRightIcon from "../icons/arrow/ArrowRightIcon";
import Link from "next/link";
import { Popover } from "@headlessui/react";

interface HomePageNavProps {
  id: number
  isNavOpen: boolean
  name: string
}

const HomePageNav = ( {id, isNavOpen, name} : HomePageNavProps ) => {
  return (
    <Popover key={id} className="flex">
      {({ open }) => (
        <>
          {isNavOpen ? (
            <div className="w-full h-12 px-5 flex items-center justify-between hover:bg-gray-200 cursor-pointer duration-300 rounded-lg">
              <button>{name}</button>
              <ArrowRightIcon />
            </div>
          ) : (
            <Link
              className="w-full h-12 px-5 flex items-center justify-between hover:bg-gray-200 cursor-pointer duration-300 rounded-lg"
              href={`/${name.toLowerCase()}`}
            >
              <button>{name}</button>
            </Link>
          )}
        </>
      )}
    </Popover>
  );
};

export default HomePageNav;
