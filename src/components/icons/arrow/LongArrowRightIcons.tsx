'use client'
import { IconProps } from "@/types/IconType";

interface Props {
    heightWidth: string
    color: string
}

const LongArrowRightIcons = ({heightWidth, color} : Props) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={heightWidth}
      height={heightWidth}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M3806 3840 c-62 -19 -97 -83 -81 -147 4 -19 171 -192 498 -520 l491
-493 -2316 -2 -2317 -3 -28 -21 c-15 -11 -35 -39 -43 -62 -13 -37 -12 -45 3
-76 9 -19 29 -43 44 -53 26 -17 133 -18 2342 -21 l2315 -2 -486 -488 c-268
-268 -492 -500 -497 -515 -25 -65 0 -126 62 -152 70 -29 56 -41 708 612 410
410 610 617 614 636 4 15 4 39 0 55 -4 18 -203 224 -608 631 -514 515 -644
638 -669 630 -2 0 -16 -5 -32 -9z"
        />
      </g>
    </svg>
  );
};

export default LongArrowRightIcons;
