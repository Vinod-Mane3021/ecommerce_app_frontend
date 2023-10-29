import { ItemsProps, SectionsProps } from "@/utilities/types/navBarTypes";
import Link from "next/link";
import React from "react";

const CategoriesSection = ({ id, name, items }: SectionsProps) => {
  return (
    <div>
      <p
        id={`${name}-heading`}
        className="font-bold text-gray-900 hover:underline cursor-pointer"
      >
        {name}
      </p>
      <ul
        role="list"
        aria-labelledby={`${name}-heading`}
        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
      >
        {items?.map((item: ItemsProps) => (
          <li key={item.name} className="flex">
            <Link
              href={item.href}
              className="hover:text-gray-800 hover:underline cursor-pointer"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSection;
