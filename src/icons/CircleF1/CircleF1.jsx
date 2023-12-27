/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CircleF1 = ({ color = "#3FA1E3", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="8"
      viewBox="0 0 8 8"
      width="8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1332_93)">
        <path
          d="M4.00005 7.19999C2.23269 7.19999 0.800049 5.76735 0.800049 3.99999C0.800049 2.23263 2.23269 0.799988 4.00005 0.799988C5.76741 0.799988 7.20005 2.23263 7.20005 3.99999C7.20005 5.76735 5.76741 7.19999 4.00005 7.19999Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1332_93">
          <rect fill="white" height="8" width="8" />
        </clipPath>
      </defs>
    </svg>
  );
};
