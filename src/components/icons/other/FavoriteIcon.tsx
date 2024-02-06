import FavoriteSvg from "../../../../public/svgIcons/FavoriteSvg";
import { IconProps } from "@/types/IconType";
import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";


const FavoriteIcon = ({height, width} : IconProps) => {
  const cartItems = 9
  return (
    <div className="relative p-2 rounded-full hover:bg-gray-200 cursor-pointer duration-300">
      <div className="h-4 w-4 rounded-full bg-darkGray flex items-center justify-center absolute left-6 bottom-5">
        <p className="text-white" style={{fontSize: 10}}>{cartItems}</p>
      </div>
      <FavoriteSvg height={height} width={width}/>
    </div>
  );
};

export default FavoriteIcon;
