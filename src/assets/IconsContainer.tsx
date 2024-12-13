import React, { FC } from "react";

export enum icon {
  chevron = "chevron",
}

interface IIcon {
  iconName: icon;
}

const Icon: FC<IIcon> = ({ iconName }) => {
  let iconSvg: React.ReactNode = <svg></svg>;
  switch (iconName) {
    case "chevron":
      iconSvg = (
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;

    default:
      break;
  }
  return <div>{iconSvg}</div>;
};

export default Icon;
