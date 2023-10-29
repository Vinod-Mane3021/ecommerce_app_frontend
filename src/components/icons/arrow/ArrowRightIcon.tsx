import React from "react";

interface Props {
  color: string;
  heightWidth: string
  strokeWidth: string
}

const ArrowRightIcon = ({ color, heightWidth, strokeWidth }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={`w-${heightWidth} h-${heightWidth} hover:cursor-pointer`}
      color={color}
      // onMouseEnter={}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default ArrowRightIcon;
