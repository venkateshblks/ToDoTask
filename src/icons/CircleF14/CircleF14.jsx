/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CircleF14 = ({ color = "#F16100", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10.8C3.34896 10.8 1.2 8.65104 1.2 6C1.2 3.34896 3.34896 1.2 6 1.2C8.65104 1.2 10.8 3.34896 10.8 6C10.8 8.65104 8.65104 10.8 6 10.8Z"
        fill={color}
      />
    </svg>
  );
};
