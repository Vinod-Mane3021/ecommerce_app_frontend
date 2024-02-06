import { IconProps } from "@/types/IconType";
import React from "react";

const FilledFavoriteIcon = ({height, width} : IconProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M1340 4705 c-198 -32 -427 -126 -589 -242 -664 -479 -785 -1423 -263
-2049 75 -91 2009 -1987 2043 -2003 25 -13 33 -13 58 0 26 13 1833 1778 1996
1950 174 184 299 433 351 699 27 141 25 390 -5 530 -59 277 -175 499 -364 697
-433 453 -1073 561 -1582 266 -118 -68 -215 -144 -326 -256 l-99 -101 -98 100
c-112 114 -209 190 -336 262 -236 136 -520 189 -786 147z"
        />
      </g>
    </svg>
  );
};

export default FilledFavoriteIcon;
