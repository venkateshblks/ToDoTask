/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { UserCircle } from "../../icons/UserCircle";
import { X2 } from "../../icons/X2";
import { Text } from "../Text";

export const TextField = ({
  showRightIcon = true,
  showLeftIcon = true,
  stateProp,
  size,
  className,
  textActive = true,
  textText = "Text",
  icon = <X2 className="!relative !w-[20px] !h-[20px]" />,
  inputType = "text",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    size: size || "regular",
  });

  return (
    <div
      className={`border border-solid w-[240px] flex items-center rounded-[8px] justify-between relative ${
        state.state === "hover"
          ? "border-foundationgraygray-500"
          : state.state === "focused"
          ? "border-foundationgraygray-600"
          : state.state === "error"
          ? "border-foundation-errorerror-400"
          : state.state === "disabled"
          ? "border-foundationgraygray-200"
          : "border-foundationgraygray-300"
      } ${state.size === "small" ? "px-[10px] py-[4px]" : "px-[12px] py-[4px]"} ${
        state.size === "small" ? "h-[32px]" : state.size === "large" ? "h-[44px]" : "h-[40px]"
      } ${state.state === "disabled" ? "bg-foundationgraygray-50" : "bg-white"} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="flex items-center grow gap-[7px] flex-1 relative">
        {showLeftIcon && (
          <UserCircle
            className={
              state.size === "small"
                ? "!relative !w-[16px] !h-[16px]"
                : state.size === "large"
                ? "!relative !w-[24px] !h-[24px]"
                : "!relative !w-[20px] !h-[20px]"
            }
          />
        )}

        {["default", "disabled", "error", "focused"].includes(state.state) && (
          <Text
            active={textActive}
            blinker={["default", "disabled", "error"].includes(state.state) ? false : undefined}
            className="!flex-[0_0_auto]"
            text={textText}
            textClassName={
              state.size === "small" && ["default", "error", "focused"].includes(state.state)
                ? "!text-foundationtext-colorsprimary-text-color !tracking-[var(--typography-styles-body-regular-letter-spacing)] !text-[length:var(--typography-styles-body-regular-font-size)] ![font-style:var(--typography-styles-body-regular-font-style)] !font-[number:var(--typography-styles-body-regular-font-weight)] !font-typography-styles-body-regular !leading-[var(--typography-styles-body-regular-line-height)]"
                : "!text-foundationtext-colorsprimary-text-color"
            }
            textClassNameOverride={
              state.state === "disabled" && ["large", "regular"].includes(state.size)
                ? "!text-foundationtext-colorssecondary-text-color"
                : state.state === "disabled" && state.size === "small"
                ? "!text-foundationtext-colorssecondary-text-color !tracking-[var(--typography-styles-body-regular-letter-spacing)] !text-[length:var(--typography-styles-body-regular-font-size)] ![font-style:var(--typography-styles-body-regular-font-style)] !font-[number:var(--typography-styles-body-regular-font-weight)] !font-typography-styles-body-regular !leading-[var(--typography-styles-body-regular-line-height)]"
                : undefined
            }
          />
        )}

        {state.state === "hover" && (
          <div className="inline-flex items-center gap-px flex-[0_0_auto] relative">
            <input
              className={`w-fit mt-[-1.00px] text-foundationtext-colorsprimary-text-color relative whitespace-nowrap [background:transparent] border-[none] p-0 ${
                state.size === "small" ? "font-typography-styles-body-regular" : "font-typography-styles-large-regular"
              } ${
                state.size === "small"
                  ? "tracking-[var(--typography-styles-body-regular-letter-spacing)]"
                  : "tracking-[var(--typography-styles-large-regular-letter-spacing)]"
              } ${
                state.size === "small"
                  ? "text-[length:var(--typography-styles-body-regular-font-size)]"
                  : "text-[length:var(--typography-styles-large-regular-font-size)]"
              } ${
                state.size === "small"
                  ? "[font-style:var(--typography-styles-body-regular-font-style)]"
                  : "[font-style:var(--typography-styles-large-regular-font-style)]"
              } ${
                state.size === "small"
                  ? "font-[number:var(--typography-styles-body-regular-font-weight)]"
                  : "font-[number:var(--typography-styles-large-regular-font-weight)]"
              } ${
                state.size === "small"
                  ? "leading-[var(--typography-styles-body-regular-line-height)]"
                  : "leading-[var(--typography-styles-large-regular-line-height)]"
              }`}
              placeholder="Text"
              type={inputType}
            />
            <div className="w-px mr-[-1.00px] h-[16px] relative" />
          </div>
        )}
      </div>
      {showRightIcon && <>{icon}</>}
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
