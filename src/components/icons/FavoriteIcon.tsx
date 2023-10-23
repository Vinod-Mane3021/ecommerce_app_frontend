import FavoriteSvg from "@/utilities/svgIcons/FavoriteSvg";
import { IconProps } from "@/utilities/types/IconType";
import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";


const FavoriteIcon = ({height, width} : IconProps) => {
  const cartItems = 99
  return (
    <div className="relative p-2 rounded-full hover:bg-gray-200 cursor-pointer duration-300">
      <div className="h-[17px] w-[17px] rounded-full bg-black flex items-center justify-center absolute left-6 bottom-5">
        <p className="text-white text-xs">{cartItems}</p>
      </div>
      {/* <MdOutlineFavoriteBorder size={28} color="#27374D"/> */}
      <FavoriteSvg height={height} width={width}/>
    </div>
  );
};

export default FavoriteIcon;
