import React from "react";

interface Props {
    heightWidth: string
}

const MenuDotsIcon = ({heightWidth} : Props) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={heightWidth}
      height={heightWidth}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      className="hover:cursor-pointer"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M2441 4624 c-253 -68 -410 -331 -346 -579 67 -256 329 -415 580 -350
190 50 330 207 358 401 48 331 -270 615 -592 528z"
        />
        <path
          d="M2441 3024 c-253 -68 -410 -331 -346 -579 67 -256 329 -415 580 -350
190 50 330 207 358 401 48 331 -270 615 -592 528z"
        />
        <path
          d="M2441 1424 c-253 -68 -410 -331 -346 -579 67 -256 329 -415 580 -350
190 50 330 207 358 401 48 331 -270 615 -592 528z"
        />
      </g>
    </svg>
  );
};

export default MenuDotsIcon;
