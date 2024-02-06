import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Sections from "./CategoriesSection";
import CloseIcon from "@/components/icons/other/CloseIcon";
import ImageCategory from "./ImageCategory";
import { CategoryProps, ImageDataProps, SectionsProps } from "@/types/navBarTypes";
import CategoriesSection from "./CategoriesSection";

// main categories sections
const MainCategories = ({sections, imageData, name} : CategoryProps ) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
        <Popover.Panel className="absolute h-full inset-x-0 top-full text-sm text-gray-500 duration-300 ease-in-out ">
        <div className="relative bg-white">
          {/* h-[650px] */}
          <div className="mx-auto max-w-full scrollbar-hide">
            <div className="gap-y-10 px-10 py-10 flex justify-evenly">
            
              <div className="row-start-1 grid grid-cols-5 gap-y-10 text-sm w-screen">
                {sections?.map((section: SectionsProps, index) => (
                  <CategoriesSection
                    key={index}
                    id={section.id}
                    name={section.name}
                    items={section.items}
                    mainCategory={name}
                  />
                ))}
              </div>
              <CloseIcon closePanel={() => {}} />
            </div>


            <div className="px-10 flex gap-3 pb-10">
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
