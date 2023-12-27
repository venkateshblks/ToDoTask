/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { X2 } from "../../icons/X2";
import { TextField } from "../TextField";

export const FormField = ({
  errorMessage = false,
  showLabel = true,
  hintText = true,
  axis,
  size,
  className,
  text = "Label",
  textFieldShowLeftIcon,
  textFieldShowRightIcon,
  textFieldTextActive = true,
  textFieldTextText = "Text",
  textFieldIcon = <X2 className="!relative !w-[20px] !h-[20px]" />,
}) => {
  return (
    <div
      className={`items-start relative ${
        axis === "vertical"
          ? "w-[240px]"
          : axis === "horizontal" && ["large", "small"].includes(size)
          ? "w-[303px]"
          : ""
      } ${size === "medium" && axis === "horizontal" ? "inline-flex" : "flex"} ${
        axis === "vertical" ? "flex-col" : ""
      } ${axis === "horizontal" ? "gap-[8px]" : "gap-[4px]"} ${className}`}
    >
      {showLabel && (
        <div
          className={`relative ${axis === "horizontal" ? "inline-flex" : ""} ${
            axis === "vertical" ? "mt-[-1.00px]" : ""
          } ${axis === "vertical" ? "[font-style:var(--typography-styles-small-regular-font-style)]" : ""} ${
            axis === "horizontal" ? "items-center" : ""
          } ${axis === "horizontal" ? "flex-[0_0_auto]" : ""} ${
            axis === "vertical" ? "text-foundationtext-colorsprimary-text-color" : ""
          } ${axis === "vertical" ? "leading-[var(--typography-styles-small-regular-line-height)]" : ""} ${
            axis === "vertical" ? "font-typography-styles-small-regular" : ""
          } ${axis === "vertical" ? "w-fit" : ""} ${
            axis === "vertical" ? "font-[number:var(--typography-styles-small-regular-font-weight)]" : ""
          } ${axis === "vertical" ? "whitespace-nowrap" : ""} ${
            axis === "vertical" ? "text-[length:var(--typography-styles-small-regular-font-size)]" : ""
          } ${axis === "horizontal" ? "gap-[10px]" : ""} ${
            axis === "vertical" ? "tracking-[var(--typography-styles-small-regular-letter-spacing)]" : ""
          } ${
            size === "small" && axis === "horizontal"
              ? "h-[32px]"
              : size === "medium" && axis === "horizontal"
              ? "h-[40px]"
              : axis === "horizontal" && size === "large"
              ? "h-[44px]"
              : ""
          }`}
        >
          {axis === "horizontal" && (
            <div className="font-typography-styles-small-regular w-fit tracking-[var(--typography-styles-small-regular-letter-spacing)] [font-style:var(--typography-styles-small-regular-font-style)] text-[length:var(--typography-styles-small-regular-font-size)] text-foundationtext-colorsprimary-text-color relative font-[number:var(--typography-styles-small-regular-font-weight)] whitespace-nowrap leading-[var(--typography-styles-small-regular-line-height)]">
              {text}
            </div>
          )}

          {axis === "vertical" && <>{text}</>}
        </div>
      )}

      {axis === "vertical" && (
        <>
          <TextField
            className="!self-stretch !w-full"
            icon={textFieldIcon}
            showLeftIcon={textFieldShowLeftIcon}
            showRightIcon={textFieldShowRightIcon}
            size={size === "medium" ? "regular" : size === "large" ? "large" : "small"}
            stateProp="default"
            textActive={textFieldTextActive}
            textText={textFieldTextText}
          />
          <>
            {hintText && (
              <div className="font-typography-styles-small-regular w-fit tracking-[var(--typography-styles-small-regular-letter-spacing)] [font-style:var(--typography-styles-small-regular-font-style)] text-[length:var(--typography-styles-small-regular-font-size)] text-foundationtext-colorsteritiary-text-color relative font-[number:var(--typography-styles-small-regular-font-weight)] whitespace-nowrap leading-[var(--typography-styles-small-regular-line-height)]">
                Hint
              </div>
            )}
          </>
        </>
      )}

      {axis === "horizontal" && (
        <div
          className={`flex-col items-start gap-[4px] relative ${size === "medium" ? "inline-flex" : "flex"} ${
            ["large", "small"].includes(size) ? "grow" : ""
          } ${size === "medium" ? "flex-[0_0_auto]" : "flex-1"}`}
        >
          <TextField
            className="!w-[265px]"
            icon={
              <X2
                className={
                  size === "small"
                    ? "!relative !w-[12px] !h-[12px]"
                    : size === "medium"
                    ? "!relative !w-[16px] !h-[16px]"
                    : size === "large"
                    ? "!relative !w-[20px] !h-[20px]"
                    : undefined
                }
              />
            }
            size={size === "medium" ? "regular" : size === "large" ? "large" : "small"}
            stateProp="default"
            textActive
            textText="Text"
          />
          {hintText && (
            <div className="font-typography-styles-small-regular w-fit tracking-[var(--typography-styles-small-regular-letter-spacing)] [font-style:var(--typography-styles-small-regular-font-style)] text-[length:var(--typography-styles-small-regular-font-size)] text-foundationtext-colorsteritiary-text-color relative font-[number:var(--typography-styles-small-regular-font-weight)] whitespace-nowrap leading-[var(--typography-styles-small-regular-line-height)]">
              Hint
            </div>
          )}
        </div>
      )}
    </div>
  );
};
