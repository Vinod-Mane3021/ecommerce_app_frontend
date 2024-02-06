import React from "react";
import ArrowRightIcon from "@/components/icons/arrow/ArrowRightIcon";

interface Props {
  image: string;
}

const SelectProductColor = ({ image }: Props) => {
  return (
    <div className="flex items-center py-3 justify-between hover:cursor-pointer">
      <div className="flex gap-5 text-sm items-center">
        <img className="h-[50px] rounded-lg" src={image} alt="" />
        <span>
          <p>Khaki Green • KX5</p>
          <p>See the {4} available colors</p>
        </span>
      </div>
      <ArrowRightIcon color="#61677A" heightWidth="7" strokeWidth="1.5" />
    </div>
  );
};

export default SelectProductColor;
