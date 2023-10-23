// import { classNames } from "@/utilities/classNames/classNames";
import { classNames } from "@/utilities/classNames/classNames";
import { PopoverButtonProps } from "@/utilities/types/navBarTypes";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const PopoverButton = ({ name, open, isNavOpen }: PopoverButtonProps) => {
  return (
    isNavOpen ? (
      <Popover.Button
        className={classNames(
          open ? "text-black font-bold" : "text-gray-700 hover:text-gray-800",
          "relative z-10 -mb-px flex items-center pt-px text-base transition-colors duration-300 ease-out"
        )}
        // onClick={() => open ? closePopover() : openPopover(category.id)}
      >
        {name}
      </Popover.Button>
    ) : (
      <button>
        <Link href={`/${name.toLowerCase()}`}> {name} </Link>
      </button>
    )
  );
};

export default PopoverButton;




