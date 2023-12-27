/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CircleF14 } from "../../icons/CircleF14";

export const Label = ({
  showIcon = true,
  showDot = true,
  badgeType,
  labelState,
  size,
  className,
  text = "Completed",
  icon = <CircleF14 className="!relative !w-[12px] !h-[12px]" color="#3659E2" />,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-[10px] px-[8px] py-[4px] rounded-[8px] justify-center relative ${
        size === "small" ? "h-[24px]" : ""
      } ${
        badgeType === "success" && labelState === "primary"
          ? "bg-foundation-successsuccess-500"
          : badgeType === "error" && labelState === "secondary"
          ? "bg-foundation-errorerror-50"
          : badgeType === "error" && labelState === "primary"
          ? "bg-foundation-errorerror-500"
          : badgeType === "warning" && labelState === "secondary"
          ? "bg-foundation-warningwarning-50"
          : labelState === "primary" && badgeType === "warning"
          ? "bg-foundation-warningwarning-500"
          : badgeType === "neutral" && labelState === "secondary"
          ? "bg-foundationgraygray-50"
          : badgeType === "neutral" && labelState === "primary"
          ? "bg-foundationgraygray-500"
          : badgeType === "brand" && labelState === "secondary"
          ? "bg-foundationbrandbrand-50"
          : badgeType === "brand" && labelState === "primary"
          ? "bg-foundationbrandbrand-500"
          : "bg-foundation-successsuccess-50"
      } ${className}`}
    >
      <div
        className={`inline-flex items-center gap-[4px] flex-[0_0_auto] justify-center relative ${
          size === "small" ? "mt-[-2.00px]" : ""
        } ${size === "small" ? "mb-[-2.00px]" : ""}`}
      >
        {showIcon && <>{icon}</>}

        <div
          className={`font-typography-styles-small-regular w-fit mt-[-1.00px] tracking-[var(--typography-styles-small-regular-letter-spacing)] text-[length:var(--typography-styles-small-regular-font-size)] [font-style:var(--typography-styles-small-regular-font-style)] font-[number:var(--typography-styles-small-regular-font-weight)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap relative ${
            labelState === "primary"
              ? "text-white"
              : badgeType === "error" && labelState === "secondary"
              ? "text-foundation-errorerror-500"
              : badgeType === "warning" && labelState === "secondary"
              ? "text-foundation-warningwarning-600"
              : badgeType === "neutral" && labelState === "secondary"
              ? "text-foundationgraygray-500"
              : badgeType === "brand" && labelState === "secondary"
              ? "text-foundationbrandbrand-500"
              : "text-foundation-successsuccess-500"
          }`}
        >
          {["brand", "success"].includes(badgeType) && <>{text}</>}

          {badgeType === "error" && <>Cancelled</>}

          {badgeType === "warning" && <>Pending</>}

          {badgeType === "neutral" && <>Incomplete</>}
        </div>
      </div>
    </div>
  );
};
