import React, { useState, useEffect } from 'react';
import { useReducer } from "react";
import { DataLabel } from "../DataLabel";
import classNames from 'classnames';

export const Rectangle = ({ stateProp, className ,taskk}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:4000/api/getData');
      if (!response.ok) {     
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  

  return (<>
   { data.map((k)=>{
    // console.log(taskk)
    const shouldRender = k.status === taskk;
    
    return shouldRender?(
      <>
         <div key={k.id} className={` bg-transparent w-[270px] relative  px-[7px] overflow-hidden rounded-[8px]
    ${
      state.state === "default" ? "flex" : ""
    } ${state.state === "default" ? "flex-col" : ""} ${state.state === "default" ? "items-start" : ""} ${
      state.state === "default" ? "gap-[10px]" : ""
    } 
    ${
      state.state === "hover"
        ? "shadow-[0px_0px_8px_#3659e229,0px_4px_8px_#263fa00a]"
        : "shadow-[0px_0px_8px_#3659e229]"
    }
     ${state.state === "default" ? "p-[16px]" : ""} ${state.state === "hover" ? "h-[114px]" : ""} ${className}
     `}
  >
   
      <div 
        className={` font-typography-styles-large-semi-bold tracking-[var(--typography-styles-large-semi-bold-letter-spacing)] text-[length:var(--typography-styles-large-semi-bold-font-size)] [font-style:var(--typography-styles-large-semi-bold-font-style)] text-black font-[number:var(--typography-styles-large-semi-bold-font-weight)] leading-[var(--typography-styles-large-semi-bold-line-height)] whitespace-nowrap ${
          state.state === "default" ? "w-fit" : ""
        } ${state.state === "hover" ? "left-[16px]" : ""} ${state.state === "default" ? "mt-[-1.00px]" : ""} ${
          state.state === "hover" ? "top-[15px]" : ""
        } ${state.state === "hover" ? "absolute" : "relative"}`}
      >
        {k.taskName}
      </div>
      <div
        className={` inline-flex items-start gap-[24px] ${state.state === "hover" ? "left-[16px]" : ""} ${
          state.state === "hover" ? "top-[50px]" : ""
        } ${state.state === "default" ? "flex-[0_0_auto]" : ""} ${state.state === "hover" ? "absolute" : "relative"}`}
      >
        <DataLabel
          className="!flex-[0_0_auto]"
          labelShowIcon={false}
          labelText={k.startDate}
          size="small"
          text="Start date"
          type="label"
          visible={false}
        />
        <DataLabel
          className="!flex-[0_0_auto]"
          labelShowIcon={false}
          labelText={k.deadline}
          size="small"
          text="Deadline"
          type="label"
          visible={false}
        />
      </div>
    </div> 
     
    </> )  : null;
  })
}</>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter ":
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
