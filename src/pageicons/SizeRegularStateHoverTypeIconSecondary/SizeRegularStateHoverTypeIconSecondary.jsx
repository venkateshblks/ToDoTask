
import React from "react";

export const SizeRegularStateHoverTypeIconSecondary = ({ color = "#3151CE", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="44"
      viewBox="0 0 44 44"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="43" rx="7.5" stroke={color} width="43" x="0.5" y="0.5" />
      <path d="M18 14L26 22L18 30" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
};
