
import React from "react";
import { Sparkle1 } from "../../icons/Sparkle1";
import { User1 } from "../../icons/User1";
import { Label } from "../Label";

export const DataLabel = ({
  size,
  type,
  className,
  text = "Label",
  labelText = "AI Interview",
  labelShowIcon,
  visible = true,
}) => {
  return (
    <div className={`inline-flex flex-col items-start gap-[4px] relative ${className}`}>
      <div
        className={`w-fit mt-[-1.00px] text-foundationtext-colorssecondary-text-color whitespace-nowrap relative ${
          size === "small" ? "font-typography-styles-small-regular" : "font-typography-styles-body-regular"
        } ${
          size === "small"
            ? "tracking-[var(--typography-styles-small-regular-letter-spacing)]"
            : "tracking-[var(--typography-styles-body-regular-letter-spacing)]"
        } ${
          size === "small"
            ? "text-[length:var(--typography-styles-small-regular-font-size)]"
            : "text-[length:var(--typography-styles-body-regular-font-size)]"
        } ${
          size === "small"
            ? "[font-style:var(--typography-styles-small-regular-font-style)]"
            : "[font-style:var(--typography-styles-body-regular-font-style)]"
        } ${
          size === "small"
            ? "font-[number:var(--typography-styles-small-regular-font-weight)]"
            : "font-[number:var(--typography-styles-body-regular-font-weight)]"
        } ${
          size === "small"
            ? "leading-[var(--typography-styles-small-regular-line-height)]"
            : "leading-[var(--typography-styles-body-regular-line-height)]"
        }`}
      >
        {text}
      </div>
      <div
        className={`relative ${
          size === "default" && type === "text"
            ? "font-typography-styles-large-regular"
            : type === "text" && size === "small"
            ? "font-typography-styles-body-regular"
            : ""
        } ${type === "text" ? "w-fit" : ""} ${type === "label" ? "inline-flex" : ""} ${
          size === "default" && type === "text"
            ? "tracking-[var(--typography-styles-large-regular-letter-spacing)]"
            : type === "text" && size === "small"
            ? "tracking-[var(--typography-styles-body-regular-letter-spacing)]"
            : ""
        } ${
          size === "default" && type === "text"
            ? "[font-style:var(--typography-styles-large-regular-font-style)]"
            : type === "text" && size === "small"
            ? "[font-style:var(--typography-styles-body-regular-font-style)]"
            : ""
        } ${
          size === "default" && type === "text"
            ? "text-[length:var(--typography-styles-large-regular-font-size)]"
            : type === "text" && size === "small"
            ? "text-[length:var(--typography-styles-body-regular-font-size)]"
            : ""
        } ${type === "label" ? "items-start" : ""} ${
          type === "text" ? "text-foundationtext-colorsprimary-text-color" : ""
        } ${type === "label" ? "gap-[4px]" : ""} ${type === "label" ? "flex-[0_0_auto]" : ""} ${
          size === "default" && type === "text"
            ? "font-[number:var(--typography-styles-large-regular-font-weight)]"
            : type === "text" && size === "small"
            ? "font-[number:var(--typography-styles-body-regular-font-weight)]"
            : ""
        } ${
          size === "default" && type === "text"
            ? "leading-[var(--typography-styles-large-regular-line-height)]"
            : type === "text" && size === "small"
            ? "leading-[var(--typography-styles-body-regular-line-height)]"
            : ""
        } ${type === "text" ? "whitespace-nowrap" : ""}`}
      >
        {type === "text" && <>Content</>}

        {type === "label" && (
          <>
            <Label
              badgeType="brand"
              className="!flex-[0_0_auto]"
              icon={<Sparkle1 className=" !relative !w-[12px] !h-[12px]" />}
              labelState="secondary"
              showIcon={labelShowIcon}
              size="small"
              text={labelText}
            />
            <>
              {visible && (
                <Label
                  badgeType="brand"
                  className="!flex-[0_0_auto]"
                  icon={<User1 className="!relative !w-[12px] !h-[12px]" color="#3659E2" />}
                  labelState="secondary"
                  size="small"
                  text="Completed"
                />
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
};
