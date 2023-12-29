

import React,{useState} from "react";
import { useReducer } from "react";
import { Plus4 } from "../../icons/Plus4";
import { Pframe } from "../../pagecomponents/Frame/Frame";
import { FrameScreen } from "../../screens/TaskBoardsWith/FrameScreen";

export const Component = ({ stateProp, hover, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "to-do-add",
    hover: hover || false,
  });
  const [showFrameScreen, setShowFrameScreen] = useState(false);
  // const K='hrello'
  const handleButtonClick = () => {
    // Toggle the state to show/hide FrameScreen
    setShowFrameScreen((prev) => !prev);
    // alert(handleC)
  };

  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
    <div
      className={`inline-flex flex-col items-start gap-[24px] relative ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      
      <button onClick={handleButtonClick}
        className={`w-[270px] flex items-center gap-[4px] px-[8px] py-[10px] h-[32px] rounded-[8px] justify-center relative all-[unset] box-border ${
          state.state === "completed-add" && state.hover
            ? "bg-foundation-successsuccess-100"
            : state.state === "to-do-add" && !state.hover
            ? "bg-foundationbrandbrand-50"
            : state.state === "to-do-add" && state.hover
            ? "bg-foundationbrandbrand-75"
            : state.state === "in-progress-add" && !state.hover
            ? "bg-secondary-colourpinkpink-50"
            : state.state === "in-progress-add" && state.hover
            ? "bg-secondary-colourpinkpink-100"
            : state.state === "in-review-add" && !state.hover
            ? "bg-secondary-colourblueblue-50"
            : state.state === "in-review-add" && state.hover
            ? "bg-secondary-colourblueblue-100"
            : "bg-foundation-successsuccess-50"
        }`}
      >
        <Plus4
          className="!relative !w-[12px] !h-[12px]"
          color={
            state.state === "to-do-add"
              ? "#3659E2"
              : state.state === "in-progress-add"
              ? "#EE46BC"
              : state.state === "in-review-add"
              ? "#3FA1E3"
              : "#12BB23"
          }
        />
        <div className="inline-flex mt-[-4.00px] items-center gap-[10px] flex-[0_0_auto] px-[8px] py-0 justify-center mb-[-4.00px] relative">
          <div
            className={`font-typography-styles-small-regular w-fit mt-[-1.00px] tracking-[var(--typography-styles-small-regular-letter-spacing)] text-[length:var(--typography-styles-small-regular-font-size)] [font-style:var(--typography-styles-small-regular-font-style)] font-[number:var(--typography-styles-small-regular-font-weight)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap relative ${
              state.state === "completed-add" && state.hover
                ? "text-foundation-successsuccess-600"
                : state.state === "to-do-add" && !state.hover
                ? "text-foundationbrandbrand-500"
                : state.state === "to-do-add" && state.hover
                ? "text-foundationbrandbrand-600"
                : state.state === "in-progress-add" && !state.hover
                ? "text-secondary-colourpinkpink-500"
                : state.state === "in-progress-add" && state.hover
                ? "text-secondary-colourpinkpink-600"
                : state.state === "in-review-add" && !state.hover
                ? "text-foundation-infoinfo-500"
                : state.state === "in-review-add" && state.hover
                ? "text-foundation-infoinfo-600"
                : "text-foundation-successsuccess-500"
            }`}
          >
            Add new
          </div>
        </div>
      </button></div>
      {showFrameScreen && 
        <div className=" top-0 left-1/4 ">
       {/* <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full md:max-w-lg"> */}
          <FrameScreen/>
     </div>
//  </div>
    }
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}
