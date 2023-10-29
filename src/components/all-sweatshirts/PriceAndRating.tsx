import React from "react";
interface Props {
  originalPrice: number;
  price: number;
}

const PriceAndRating = ({ originalPrice, price }: Props) => {
  return (
    <div className="w-full">
      <span className="flex justify-between items-center">
        <p className="text-green-800 text-xs md:text-sm lg:text-base font-bold">
          ${price}
        </p>
        <p className="hover:cursor-pointer">rating 2*</p>
      </span>
      <p className="text-[10px] sm:text-xs md:text-sm line-through text-gray-600">
        ${originalPrice}.00
      </p>
    </div>
  );
};

export default PriceAndRating;
