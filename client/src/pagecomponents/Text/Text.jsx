import React from "react";
import { Blinker } from "../Blinker";

export const Text = ({ blinker = true, active, className, text = "Text", textClassName, textClassNameOverride }) => {
  return (
    <div className={`inline-flex items-center gap-px relative ${className}`}>
      {!active && (
        <>
          <>{blinker && <Blinker blink="on" className="!relative" />}</>
        </>
      )}

      <div
        className={`font-typography-styles-large-regular w-fit mt-[-1.00px] tracking-[var(--typography-styles-large-regular-letter-spacing)] text-[length:var(--typography-styles-large-regular-font-size)] [font-style:var(--typography-styles-large-regular-font-style)] font-[number:var(--typography-styles-large-regular-font-weight)] leading-[var(--typography-styles-large-regular-line-height)] whitespace-nowrap relative ${
          active ? "text-foundation-graygray-900" : "text-foundationtext-colorsteritiary-text-color"
        } ${!active ? textClassNameOverride : active ? textClassName : undefined}`}
      >
        {text}
      </div>
      {active && (
        <>
          <>{blinker && <Blinker blink="on" className="!mr-[-1.00px] !relative" />}</>
        </>
      )}
    </div>
  );
};
