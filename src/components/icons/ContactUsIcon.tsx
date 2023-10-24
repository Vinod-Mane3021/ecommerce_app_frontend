import { IconHeightWidthProps } from "@/utilities/types/IconType";
import React from "react";

const ContactUsIcon = ({heightWidth} : IconHeightWidthProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={heightWidth}
      height={heightWidth}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    //   className={``}
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M2440 5019 c-616 -36 -1183 -414 -1464 -975 -62 -124 -97 -218 -132
-353 -27 -106 -54 -293 -54 -380 l0 -59 -158 -4 c-189 -6 -254 -24 -366 -99
-88 -59 -143 -119 -191 -210 -65 -123 -70 -158 -70 -494 0 -220 4 -315 14
-355 61 -247 267 -426 514 -449 l72 -6 7 -96 c38 -484 376 -904 849 -1054 119
-37 247 -55 402 -55 119 0 137 -2 137 -16 0 -36 62 -143 111 -192 102 -102
203 -131 449 -131 247 0 346 29 448 131 80 79 115 160 120 274 3 69 0 105 -13
145 -44 134 -142 234 -273 278 -55 19 -85 21 -282 21 -197 0 -227 -2 -282 -21
-128 -43 -234 -148 -269 -266 l-12 -43 -132 0 c-214 0 -364 35 -531 124 -214
114 -390 311 -475 531 -38 97 -69 239 -69 318 l0 57 59 0 c48 0 63 4 84 24 14
13 29 35 32 48 3 12 6 415 8 893 l3 870 26 110 c100 425 330 761 681 996 286
192 635 282 996 257 632 -42 1185 -471 1387 -1075 80 -239 77 -194 81 -1163 2
-476 5 -876 8 -888 3 -13 18 -35 32 -48 26 -24 28 -24 227 -24 224 0 276 8
386 62 95 47 207 161 252 258 59 125 63 153 63 485 0 254 -3 310 -18 364 -59
215 -231 381 -443 426 -40 8 -124 15 -196 15 l-128 0 0 59 c0 89 -27 276 -54
382 -134 515 -490 945 -969 1169 -182 86 -414 146 -595 156 -53 3 -110 6 -127
7 -16 2 -82 0 -145 -4z m-1650 -2575 l0 -626 -157 4 c-151 4 -161 5 -218 33
-122 59 -205 175 -225 310 -12 87 -13 468 -1 552 13 84 50 162 106 222 94 100
176 129 368 130 l127 1 0 -626z m3844 611 c158 -41 275 -177 297 -343 12 -92
11 -461 -1 -547 -20 -135 -104 -251 -225 -310 -57 -28 -67 -30 -217 -33 l-158
-4 0 626 0 626 123 0 c77 0 144 -6 181 -15z m-1819 -2319 c94 -43 140 -128
133 -240 -5 -76 -37 -132 -103 -178 -53 -37 -119 -48 -285 -48 -75 0 -162 5
-191 10 -65 12 -123 51 -164 108 -25 37 -30 55 -33 116 -4 63 0 80 22 124 14
28 41 62 59 76 67 52 87 55 307 56 194 0 208 -1 255 -24z"
        />
      </g>
    </svg>
  );
};

export default ContactUsIcon;
