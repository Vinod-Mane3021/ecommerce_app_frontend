'use client'

import React, {useState} from "react";

interface Props {
    closePanel: () => void
}

const CloseIcon = ({closePanel} : Props) => {
    // const [color, setColor] = useState('darkGray')
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.3"
      stroke="currentColor"
      color='#383b47'
      className={`w-7 h-7`}
      // onMouseEnter={() => setColor('red')}
      // onMouseLeave={() => setColor('darkGray')}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseIcon;



