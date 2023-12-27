/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const StatusBadge = ({
  showDot = false,
  badgeType,
  className,
  text = "Completed",
  divClassName,
  text1 = "Pending",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-[10px] px-[8px] py-[4px] rounded-[20px] justify-center relative ${
        badgeType === "error"
          ? "bg-foundation-errorerror-50"
          : badgeType === "warning"
          ? "bg-foundation-warningwarning-50"
          : badgeType === "neutral"
          ? "bg-foundationgraygray-50"
          : badgeType === "brand"
          ? "bg-foundationbrandbrand-50"
          : "bg-foundation-successsuccess-50"
      } ${className}`}
    >
      <div className="inline-flex items-center gap-[4px] flex-[0_0_auto] justify-center relative">
        <div
          className={`font-typography-styles-small-regular w-fit mt-[-1.00px] tracking-[var(--typography-styles-small-regular-letter-spacing)] text-[length:var(--typography-styles-small-regular-font-size)] [font-style:var(--typography-styles-small-regular-font-style)] relative font-[number:var(--typography-styles-small-regular-font-weight)] whitespace-nowrap leading-[var(--typography-styles-small-regular-line-height)] ${
            badgeType === "error"
              ? "text-foundation-errorerror-500"
              : badgeType === "warning"
              ? "text-foundation-warningwarning-600"
              : badgeType === "neutral"
              ? "text-foundationgraygray-700"
              : badgeType === "brand"
              ? "text-foundationbrandbrand-500"
              : "text-foundation-successsuccess-500"
          } ${divClassName}`}
        >
          {["brand", "success"].includes(badgeType) && <>{text}</>}

          {badgeType === "error" && <>Cancelled</>}

          {badgeType === "warning" && <>{text1}</>}

          {badgeType === "neutral" && <>Incomplete</>}
        </div>
      </div>
    </div>
  );
};
