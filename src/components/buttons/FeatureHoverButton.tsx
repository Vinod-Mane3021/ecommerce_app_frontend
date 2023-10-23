import React from "react";

interface Props {
  bgColor: string;
  hoverBgColor: string;
  hoverTextColor: string;
  text: string;
}

const FeatureHoverButton = ({
  bgColor,
  hoverBgColor,
  text,
  hoverTextColor,
}: Props) => {
  return (
    <button
      className={`bg-${bgColor} px-7 py-3 rounded-full hover:bg-${hoverBgColor} hover:text-${hoverTextColor} hover:duration-300`}
    >
      {text}
    </button>
  );
};

export default FeatureHoverButton;
