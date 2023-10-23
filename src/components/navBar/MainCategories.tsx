import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Sections from "./CategoriesSection";
import CloseIcon from "../icons/CloseIcon";
import ImageCategory from "./ImageCategory";
import { CategoryProps, ImageDataProps, SectionsProps } from "@/utilities/types/navBarTypes";
import CategoriesSection from "./CategoriesSection";

// main categories sections
const MainCategories = ({sections, imageData} : CategoryProps ) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 duration-300 ease-in-out ">
        <div className="relative bg-white">
          <div className="mx-auto max-w-[90%]">
            <div className="gap-y-10 py-14 flex justify-evenly">
            
              <div className="row-start-1 grid grid-cols-5 gap-y-10 text-sm w-screen">
                {sections?.map((section: SectionsProps) => (
                  <CategoriesSection
                    key={section.id}
                    id={section.id}
                    name={section.name}
                    items={section.items}
                  />
                ))}
              </div>
              <CloseIcon closePanel={() => {}} />
            </div>


            <div className="flex gap-3 pb-10">
              {imageData?.map((Item: ImageDataProps) => (
                <ImageCategory
                  key={Item.id}
                  id={Item.id}
                  image={Item.image}
                  name={Item.name}
                  route={Item.route}
                />
              ))}
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default MainCategories;
