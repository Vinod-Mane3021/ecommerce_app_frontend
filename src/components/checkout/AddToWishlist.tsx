import React from "react";

interface Props {
  heightWidth: string
}

const AddToWishlist = ({ heightWidth } : Props) => {
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
        fill="#000000"
        stroke="none"
      >
        <path
          d="M785 5095 l-25 -24 0 -2511 0 -2511 25 -24 c13 -14 34 -25 47 -25 12
0 63 23 113 52 49 29 433 251 853 494 l762 442 853 -494 c468 -272 862 -494
875 -494 13 0 34 11 47 25 l25 24 0 2511 0 2511 -25 24 -24 25 -1751 0 -1751
0 -24 -25z m3425 -2505 c0 -1309 -2 -2380 -4 -2380 -3 0 -760 438 -1403 811
-122 71 -231 129 -242 129 -12 0 -386 -211 -832 -470 -446 -258 -812 -470
-815 -470 -2 0 -4 1071 -4 2380 l0 2380 1650 0 1650 0 0 -2380z"
        />
        <path
          d="M1872 3600 c-211 -56 -389 -223 -459 -433 -24 -73 -27 -96 -26 -212
0 -150 18 -230 84 -380 143 -327 515 -717 971 -1016 58 -38 101 -59 119 -59
20 0 69 27 153 83 441 298 796 674 935 992 66 150 84 230 84 380 1 116 -2 139
-26 212 -54 161 -176 304 -326 381 -111 56 -207 76 -340 69 -165 -8 -294 -63
-413 -176 l-68 -63 -68 63 c-163 154 -403 216 -620 159z m288 -141 c118 -27
236 -110 306 -217 45 -68 61 -81 95 -82 33 0 49 13 94 83 67 104 188 189 305
216 220 51 463 -59 567 -255 90 -170 81 -364 -27 -591 -137 -289 -436 -603
-842 -887 l-98 -67 -96 66 c-308 215 -584 477 -735 698 -72 104 -151 267 -174
356 -80 313 56 579 345 672 62 20 190 24 260 8z"
        />
        <path
          d="M1931 3305 c-107 -33 -203 -134 -235 -244 -21 -73 -20 -113 5 -145
43 -55 129 -18 129 56 0 94 102 198 194 198 76 0 120 88 67 132 -28 22 -95 23
-160 3z"
        />
      </g>
    </svg>
  );
};

export default AddToWishlist;