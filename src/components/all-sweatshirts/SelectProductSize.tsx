import React from "react";
import ArrowRightIcon from "@/components/icons/arrow/ArrowRightIcon";
import Spacer from "@/utilities/small/Spacer";

const SelectProductSize = () => {
  return (
    <>
      <Spacer />
      <div className="text-sm py-3 hover:cursor-pointer flex w-full justify-between items-center ">
        <span>
          <p>Selected size</p>
          <p>M-4</p>
        </span>
        <ArrowRightIcon color="#61677A" heightWidth="7" strokeWidth="1.5" />
      </div>
      <Spacer />
    </>
  );
};

export default SelectProductSize;
