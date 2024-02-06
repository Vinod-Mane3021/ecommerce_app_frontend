import { ImageDataProps } from "@/types/navBarTypes";
import Link from "next/link";
import React from "react";

const ImageCategory = ({ id, image, name, route }: ImageDataProps ) => {
  return (
    <Link
      href="#"
      className="flex flex-col gap-2 hover:cursor-pointer hover:underline"
    >
      <img className="h-48" src={image} alt="category image" />
      <p className="text-darkGray font-bold">{name}</p>
    </Link>
  );
};

export default ImageCategory;
