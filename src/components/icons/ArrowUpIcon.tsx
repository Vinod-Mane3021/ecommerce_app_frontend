import React from "react";

interface Props {
  heightWidth: string
}

const ArrowUpIcon = ({ heightWidth }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.2"
      stroke="currentColor"
      height={heightWidth}
      width={heightWidth}
      className={`transition ease-in-out duration-300`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export default ArrowUpIcon;
