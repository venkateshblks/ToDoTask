/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { ChevronRight5 } from "../../icons/ChevronRight5";
import { SizeRegularStateHoverTypeIconSecondary } from "../../icons/SizeRegularStateHoverTypeIconSecondary";

export const Button = ({
  iconLeftInstance = false,
  icon = true,
  iconRight = false,
  size,
  stateProp,
  type,
  sizeSmallStateClassName,
  text = "Button",
  onSizeSmallStateClick,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "small",
    state: stateProp || "default",
    type: type || "primary",
  });

  return (
    <>
      {["error", "icon-button", "loader", "primary", "secondary", "success"].includes(state.type) && (
        <div
          className={`items-center rounded-[8px] justify-center relative ${
            state.size === "small" && state.type === "icon-button" && ["default", "hover"].includes(state.state)
              ? "w-[32px]"
              : state.size === "regular" && state.type === "icon-button" && ["default", "hover"].includes(state.state)
              ? "w-[40px]"
              : state.type === "icon-button" && state.size === "large"
              ? "w-[44px]"
              : state.state === "active" && state.size === "small" && state.type === "icon-button"
              ? "w-[31px]"
              : state.state === "active" && state.size === "regular" && state.type === "icon-button"
              ? "w-[39px]"
              : ""
          } ${state.type === "icon-button" ? "flex" : "inline-flex"} ${
            ["error", "icon-button", "primary", "secondary", "success"].includes(state.type) ? "gap-[4px]" : ""
          } ${
            state.type === "icon-button" || (state.size === "regular" && state.type === "loader")
              ? "p-[10px]"
              : state.type === "loader" && state.size === "large"
              ? "px-[12px] py-[10px]"
              : "px-[8px] py-[10px]"
          } ${
            (state.size === "small" && state.state === "default" && state.type === "icon-button") ||
            (state.size === "small" && state.state === "hover" && state.type === "icon-button") ||
            (state.size === "small" && state.type === "error") ||
            (state.size === "small" && state.type === "loader") ||
            (state.size === "small" && state.type === "primary") ||
            (state.size === "small" && state.type === "secondary") ||
            (state.size === "small" && state.type === "success")
              ? "h-[32px]"
              : state.size === "large"
              ? "h-[44px]"
              : state.state === "active" && state.size === "small" && state.type === "icon-button"
              ? "h-[31px]"
              : state.state === "active" && state.size === "regular" && state.type === "icon-button"
              ? "h-[39px]"
              : "h-[40px]"
          } ${
            state.state === "default" && ["icon-button", "primary"].includes(state.type)
              ? "bg-foundationbrandbrand-500"
              : state.type === "success" && state.state === "default"
              ? "bg-foundation-successsuccess-500"
              : state.type === "error" && state.state === "default"
              ? "bg-foundation-errorerror-500"
              : state.type === "success" && state.state === "hover"
              ? "bg-foundation-successsuccess-600"
              : state.type === "error" && state.state === "hover"
              ? "bg-foundation-errorerror-600"
              : state.type === "success" && state.state === "active"
              ? "bg-foundation-successsuccess-700"
              : state.type === "error" && state.state === "active"
              ? "bg-foundation-errorerror-700"
              : state.state === "default" && state.type === "secondary"
              ? "bg-foundationbrandbrand-50"
              : state.type === "secondary" && state.state === "hover"
              ? "bg-foundationbrandbrand-75"
              : state.state === "active" && state.type === "secondary"
              ? "bg-foundationbrandbrand-100"
              : state.state === "hover" && ["icon-button", "primary"].includes(state.type)
              ? "bg-foundationbrandbrand-600"
              : "bg-foundationbrandbrand-700"
          } ${sizeSmallStateClassName}`}
          onClick={onSizeSmallStateClick}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
        >
          {["error", "loader", "primary", "secondary", "success"].includes(state.type) && (
            <div
              className={`inline-flex items-center gap-[10px] flex-[0_0_auto] justify-center relative ${
                state.size === "small" ? "mt-[-4.00px]" : ""
              } ${
                state.type === "loader"
                  ? "px-[4px] py-0"
                  : (state.size === "large" && state.type === "error") ||
                    (state.size === "large" && state.type === "primary") ||
                    (state.size === "large" && state.type === "secondary") ||
                    (state.size === "large" && state.type === "success")
                  ? "px-[10px] py-0"
                  : "px-[8px] py-0"
              } ${state.size === "small" ? "mb-[-4.00px]" : ""}`}
            >
              <div
                className={`w-fit mt-[-1.00px] relative whitespace-nowrap ${
                  state.size === "large"
                    ? "font-typography-styles-large-regular"
                    : state.size === "small"
                    ? "font-typography-styles-small-regular"
                    : "font-typography-styles-body-regular"
                } ${
                  state.size === "large"
                    ? "tracking-[var(--typography-styles-large-regular-letter-spacing)]"
                    : state.size === "small"
                    ? "tracking-[var(--typography-styles-small-regular-letter-spacing)]"
                    : "tracking-[var(--typography-styles-body-regular-letter-spacing)]"
                } ${
                  state.size === "large"
                    ? "text-[length:var(--typography-styles-large-regular-font-size)]"
                    : state.size === "small"
                    ? "text-[length:var(--typography-styles-small-regular-font-size)]"
                    : "text-[length:var(--typography-styles-body-regular-font-size)]"
                } ${
                  state.size === "large"
                    ? "[font-style:var(--typography-styles-large-regular-font-style)]"
                    : state.size === "small"
                    ? "[font-style:var(--typography-styles-small-regular-font-style)]"
                    : "[font-style:var(--typography-styles-body-regular-font-style)]"
                } ${
                  state.type === "secondary" && ["default", "hover"].includes(state.state)
                    ? "text-[#1a71c1]"
                    : state.state === "active" && state.type === "secondary"
                    ? "text-[#155b9b]"
                    : "text-[#ffffff]"
                } ${
                  state.size === "large"
                    ? "font-[number:var(--typography-styles-large-regular-font-weight)]"
                    : state.size === "small"
                    ? "font-[number:var(--typography-styles-small-regular-font-weight)]"
                    : "font-[number:var(--typography-styles-body-regular-font-weight)]"
                } ${
                  state.size === "large"
                    ? "leading-[var(--typography-styles-large-regular-line-height)]"
                    : state.size === "small"
                    ? "leading-[var(--typography-styles-small-regular-line-height)]"
                    : "leading-[var(--typography-styles-body-regular-line-height)]"
                }`}
              >
                {text}
              </div>
            </div>
          )}

          {state.type === "icon-button" && (
            <ChevronRight5
              className={
                state.size === "regular"
                  ? "!relative !w-[16px] !h-[16px]"
                  : state.size === "large"
                  ? "!relative !w-[20px] !h-[20px]"
                  : state.state === "active" && state.size === "small"
                  ? "!relative !w-[14px] !h-[14px] !mt-[-1.50px] !mb-[-1.50px] !ml-[-1.50px] !mr-[-1.50px]"
                  : "!relative !w-[14px] !h-[14px] !mt-[-1.00px] !mb-[-1.00px] !ml-[-1.00px] !mr-[-1.00px]"
              }
            />
          )}

          {state.type === "loader" && (
            <div
              className={`w-[12px] bg-[100%_100%] h-[11.97px] relative ${
                state.size === "large"
                  ? "bg-[url(https://c.animaapp.com/uo0iwJ5e/img/ellipse-1-1.svg)]"
                  : state.size === "small"
                  ? "bg-[url(https://c.animaapp.com/uo0iwJ5e/img/ellipse-1.svg)]"
                  : "bg-[url(https://c.animaapp.com/uo0iwJ5e/img/ellipse-1-2.svg)]"
              }`}
            />
          )}
        </div>
      )}

      {state.type === "icon-secondary" && (
        <SizeRegularStateHoverTypeIconSecondary
          className={
            state.size === "regular"
              ? "!absolute !w-[40px] !h-[40px] !top-0 !left-0"
              : state.size === "large"
              ? "!absolute !w-[44px] !h-[44px] !top-0 !left-0"
              : "!absolute !w-[32px] !h-[32px] !top-0 !left-0"
          }
          color={state.state === "hover" ? "#3151CE" : state.state === "active" ? "#263FA0" : "#3659E2"}
        />
      )}
    </>
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
