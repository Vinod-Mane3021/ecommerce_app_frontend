// import { classNames } from "@/utilities/classNames/classNames";
import { classNames } from "@/utilities/functions/classNames";
import { PopoverButtonProps } from "@/types/navBarTypes";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const PopoverButton = ({ name, open, isNavOpen }: PopoverButtonProps) => {
  return isNavOpen ? (
    <Popover.Button
      className={classNames(
        "relative z-10 text-darkGray text-sm -mb-px flex items-center pt-px transition-colors duration-300 ease-out",
        open ? "text-darkGray font-bold" : "text-gray-700 hover:text-gray-800"
      )}
      // onClick={() => open ? closePopover() : openPopover(category.id)}
    >
      {name}
    </Popover.Button>
  ) : (
    <button>
      <Link 
        href={`/${name.toLowerCase()}`} 
        className="text-darkGray text-sm font-semibold">
        {name}
      </Link>
    </button>
  );
};

export default PopoverButton;
