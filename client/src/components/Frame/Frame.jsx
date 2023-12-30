

import React from "react";
import { useReducer } from "react";

export const Frame = ({ stateProp, className, text = "Freelance Project" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`w-[240px] flex items-center gap-[10px] px-[24px] py-[10px] rounded-[8px] relative ${
        state.state === "hover" ? "bg-foundationbrandbrand-50" : "bg-white"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="font-typography-styles-large-regular w-fit mt-[-1.00px] tracking-[var(--typography-styles-large-regular-letter-spacing)] text-[length:var(--typography-styles-large-regular-font-size)] [font-style:var(--typography-styles-large-regular-font-style)] text-foundationtext-colorsprimary-text-color font-[number:var(--typography-styles-large-regular-font-weight)] leading-[var(--typography-styles-large-regular-line-height)] whitespace-nowrap relative">
        {text}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}
