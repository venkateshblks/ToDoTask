/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { Calendar2 } from "../../icons/Calendar2";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { X2 } from "../../icons/X2";
import { Button } from "../Button";
import { FormField } from "../FormField";
import { TextField } from "../TextField";

export const Frame = ({
  cardState,
  formFieldTextFieldIcon = (
    <Calendar2 className="!relative !w-[20px] !h-[20px]" />
  ),
  override = <Calendar2 className="!relative !w-[20px] !h-[20px]" />,
  formFieldTextFieldIcon1 = (
    <ChevronDown1 className="!relative !w-[20px] !h-[20px]" />
  )
}) => {
  const [state, dispatch] = useReducer(reducer, {
    cardState: cardState || "unfilled"
  });

  return (
    <div className="inline-flex flex-col items-start overflow-hidden rounded-[10px] relative">
      <div className="[border-bottom-style:solid] border-foundationbrandbrand-75 w-[670px] flex items-center px-[24px] py-[10px] h-[52px] border-b justify-between bg-white relative">
        <div className="font-typography-styles-large-regular w-fit tracking-[var(--typography-styles-large-regular-letter-spacing)] [font-style:var(--typography-styles-large-regular-font-style)] text-[length:var(--typography-styles-large-regular-font-size)] text-foundationbrandbrand-700 font-[number:var(--typography-styles-large-regular-font-weight)] leading-[var(--typography-styles-large-regular-line-height)] whitespace-nowrap relative">
          {["card-state3", "filled", "unfilled"].includes(state.cardState) && (
            <>Add new task</>
          )}

          {state.cardState === "card-state4" && <>Edit task</>}
        </div>
        <X2 className="!relative !w-[20px] !h-[20px]" />
      </div>
      <div
        className="w-[670px] flex flex-col items-start gap-[24px] flex-[0_0_auto] px-[24px] py-[16px] bg-white relative"
        onClick={() => {
          dispatch("click");
        }}
      >
        {["card-state4", "filled", "unfilled"].includes(state.cardState) && (
          <FormField
            axis="vertical"
            className="!self-stretch !flex-[0_0_auto] !w-full"
            hintText={false}
            size="large"
            text="Name of the Task"
            textFieldShowLeftIcon={false}
            textFieldShowRightIcon={false}
            textFieldTextActive={state.cardState === "unfilled" ? false : true}
            textFieldTextText={
              state.cardState === "unfilled" ? "Text" : "Create a to-do app"
            }
          />
        )}

        {state.cardState === "card-state3" && (
          <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-[4px] relative">
            <div className="relative w-fit mt-[-1.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
              Name of the Task
            </div>
            <TextField
              className="!self-stretch !w-full"
              showLeftIcon={false}
              showRightIcon={false}
              size="large"
              stateProp="default"
              textActive={false}
              textText="Text"
            />
            <p className="relative w-fit font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundation-errorerror-500 text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
              Please fill the task name
            </p>
          </div>
        )}

        <div className="w-full flex self-stretch items-start gap-[10px] flex-[0_0_auto] relative">
          {["card-state4", "filled", "unfilled"].includes(state.cardState) && (
            <>
              <FormField
                axis="vertical"
                className="!flex-1 !grow !w-[unset]"
                hintText={false}
                size="large"
                text="Start date"
                textFieldIcon={formFieldTextFieldIcon}
                textFieldShowLeftIcon={false}
                textFieldTextActive={
                  state.cardState === "unfilled" ? false : true
                }
                textFieldTextText={
                  state.cardState === "unfilled" ? "DD/MM/YYYY" : "01/12/2023"
                }
              />
              <FormField
                axis="vertical"
                className="!flex-1 !grow !w-[unset]"
                hintText={false}
                size="large"
                text="Deadline"
                textFieldIcon={override}
                textFieldShowLeftIcon={false}
                textFieldTextActive={
                  state.cardState === "unfilled" ? false : true
                }
                textFieldTextText={
                  state.cardState === "unfilled" ? "DD/MM/YYYY" : "06/12/2023"
                }
              />
            </>
          )}

          {state.cardState === "card-state3" && (
            <>
              <div className="flex-1 grow flex flex-col items-start gap-[4px] relative">
                <div className="relative w-fit mt-[-1.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
                  Start date
                </div>
                <TextField
                  className="!self-stretch !w-full"
                  icon={<Calendar2 className="!relative !w-[20px] !h-[20px]" />}
                  showLeftIcon={false}
                  size="large"
                  stateProp="default"
                  textActive={false}
                  textText="DD/MM/YYYY"
                />
                <p className="relative w-fit font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundation-errorerror-500 text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
                  Please fill the start date
                </p>
              </div>
              <div className="flex-1 grow flex flex-col items-start gap-[4px] relative">
                <div className="relative w-fit mt-[-1.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
                  Deadline
                </div>
                <TextField
                  className="!self-stretch !w-full"
                  icon={<Calendar2 className="!relative !w-[20px] !h-[20px]" />}
                  showLeftIcon={false}
                  size="large"
                  stateProp="default"
                  textActive={false}
                  textText="DD/MM/YYYY"
                />
                <p className="relative w-fit font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundation-errorerror-500 text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
                  Please fill the deadline date
                </p>
              </div>
            </>
          )}
        </div>
        <FormField
          axis="vertical"
          className="!self-stretch !flex-[0_0_auto] !w-full"
          hintText={false}
          size="large"
          text="Status"
          textFieldIcon={formFieldTextFieldIcon1}
          textFieldShowLeftIcon={false}
          textFieldTextActive
          textFieldTextText="To Do"
        />
      </div>
      <div className="border-foundationbrandbrand-75 w-[670px] border-t flex items-center [border-top-style:solid] gap-[10px] flex-[0_0_auto] px-[24px] py-[10px] justify-end bg-white relative">
        <Button
          size="small"
          sizeSmallStateClassName="!flex-[0_0_auto]"
          stateProp="default"
          text="Cancel"
          type="secondary"
        />
        <Button
          onSizeSmallStateClick={() => {
            dispatch("click_120");
          }}
          size="small"
          sizeSmallStateClassName="!flex-[0_0_auto]"
          stateProp="default"
          text={state.cardState === "card-state4" ? "Save" : "Add"}
          type="primary"
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.cardState === "unfilled") {
    switch (action) {
      case "click_120":
        return {
          cardState: "card-state3"
        };
    }
  }

  switch (action) {
    case "click":
      return {
        ...state,
        cardState: "filled"
      };
  }

  return state;
}
