"use client";
import { Fragment, SetStateAction, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MdKeyboardArrowUp } from "react-icons/md";
import ArrowUpIcon from "@/components/icons/arrow/ArrowUpIcon";
import { navigation } from "../../utilities/data/navBarData/categoryData";
import Link from "next/link";
import ImageCategory from "./ImageCategory";
import Sections from "./CategoriesSection";
import MainCategories from "./MainCategories";
import CategoriesSection from "./CategoriesSection";
import PopoverButton from "../buttons/PopoverButton";
import { classNames } from "@/utilities/functions/classNames";

const NavBar = () => {
  // const [openCategory, setOpenCategory] = useState(0);

  // const closePopover = () => {
  //   setOpenCategory(0);
  // };

  // const openPopover = (categoryId: number) => {
  //   setOpenCategory(categoryId);
  // };

  // const isImageSection = (category.imageData.length > 0 || category.sections.length >  0)

  return (
    <nav
      aria-label="Top"
      className="mx-auto w-full px-4 sm:px-6 lg:px-8 relative bg-white"
    >
      <div className="border-b border-gray-200m flex justify-center items-center h-8 pb-4">
        <Popover.Group className="lg:ml-8 lg:self-stretch flex space-x-8">
          {navigation.map((category) => {
            const isNavOpen = category.imageData.length > 0 || category.sections.length > 0;
            return (
              <Popover key={category.id} className="flex">
                {({ open }) => (
                  <>
                    <div className="relative flex items-center justify-center gap-2 transform">
                      <PopoverButton
                        name={category.name}
                        open={open}
                        isNavOpen={isNavOpen}
                      />
                      <div
                        className={classNames(
                          "transform duration-300 ease-in-out",
                          open && "rotate-180",
                          isNavOpen ? "block" : "hidden"
                        )}
                      >
                        <ArrowUpIcon heightWidth="16px"/>
                      </div>
                    </div>

                    <MainCategories {...category} />
                  </>
                )}
              </Popover>
            );
          })}
        </Popover.Group>
      </div>
    </nav>
  );
};

export default NavBar;
