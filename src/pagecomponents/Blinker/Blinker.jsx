/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Blinker = ({ blink, className }) => {
  return (
    <div
      className={`w-px h-[16px] ${blink === "on" ? "bg-cover" : ""} ${
        blink === "on" ? "bg-[url(https://c.animaapp.com/uo0iwJ5e/img/line-1-6.svg)]" : ""
      } ${blink === "on" ? "bg-[50%_50%]" : ""} ${blink === "off" ? "relative" : ""} ${className}`}
    >
      {blink === "off" && (
        <img
          className="absolute w-[16px] h-px top-[-355px] left-[-933px] object-cover"
          alt="Line"
          src="https://c.animaapp.com/uo0iwJ5e/img/line-1-1.svg"
        />
      )}
    </div>
  );
};
