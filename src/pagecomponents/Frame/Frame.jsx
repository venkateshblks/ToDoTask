
import React ,{useCallback, useState} from "react";
import { useReducer } from "react";
import { Calendar2 } from "../../pageicons/Calendar2";
import { ChevronDown1 } from "../../pageicons/ChevronDown1";
import { X2 } from "../../pageicons/X2";
import { Button } from "../Button";
import { FormField } from "../FormField";
import { TextField } from "../TextField";
import { TaskBoardsWith } from "../../screens/TaskBoardsWith/TaskBoardsWith";
export const Pframe = ({
 
 
  cardState,
  formFieldTextFieldIcon = (
    <Calendar2 className="!relative !w-[20px] !h-[20px]" />
  ),
  override = <Calendar2 className="!relative !w-[20px] !h-[20px]" />,
  formFieldTextFieldIcon1 = (
    <ChevronDown1 className="!relative !w-[20px] !h-[20px]" />
  )
}) => {
  const statusOptions = [
    { value: 'todo', label: 'To Do' },
    { value: 'inprogress', label: 'In Progress' },
    { value: 'inprogress', label: 'Review' },
    { value: 'completed', label: 'Completed' },
  ];
  
  const [state, dispatch] = useReducer(reducer, {
    cardState: cardState || "unfilled"
  });
  const [showFrameScreen, setShowFrameScreen] = useState(false);
  // const K='hrello'
  const handleButtonClick = () => {
    // Toggle the state to show/hide FrameScreen
  // useCallback(()=>{  setShowFrameScreen(true);},[])
  setShowFrameScreen(true);
    // alert(handleC)
    // alert(showFrameScreen)
  };
  // if(showFrameScreen){

  //   <TaskBoardsWith/>
  // }
  // else{
  //   useCallback(()=>{  setShowFrameScreen(false);},[])
  // }
  return (<>
  {/* {showFrameScreen ? <YourComponent /> : null} */}
  {showFrameScreen && null}
  {showFrameScreen ||
  
    <div className="inline-flex flex-col items-start overflow-hidden rounded-[10px] relative">
      <form>
      <div className="[border-bottom-style:solid] border-foundationbrandbrand-75 w-[670px] flex items-center px-[24px] py-[10px] h-[52px] border-b justify-between bg-white relative">
        <div className="font-typography-styles-large-regular w-fit tracking-[var(--typography-styles-large-regular-letter-spacing)] [font-style:var(--typography-styles-large-regular-font-style)] text-[length:var(--typography-styles-large-regular-font-size)] text-foundationbrandbrand-700 font-[number:var(--typography-styles-large-regular-font-weight)] leading-[var(--typography-styles-large-regular-line-height)] whitespace-nowrap relative">
          {["card-state3", "filled", "unfilled"].includes(state.cardState) && (
            <>Add new task</>
          )}

          {state.cardState === "card-state4" && <>Edit task</>}
        </div>
       <button onClick={handleButtonClick}> <X2   className="!relative !w-[20px] !h-[20px]" /></button>
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
              className=""
              // showLeftIcon={false}
              // showRightIcon={false}
              // size="large"
              // stateProp="default"
              // // textActive={false}
              // textText="Text"
            />
            <p className="relative w-fit font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundation-errorerror-500 text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
              Please fill the task name
            </p>
          </div>
        )}
  
        <div className="w-full flex self-stretch items-start gap-[10px] flex-[0_0_auto] relative">
          {["card-state4", "filled", "unfilled"].includes(state.cardState) && (
            <>
            {/* <FormField
            type='date'
  axis="vertical"
  className="!w-[unset]"
  hintText={false}
  size="large"
  text="Deadline"
  textFieldShowLeftIcon={false}
  textFieldTextActive={false}
  textFieldTextText="DD/MM/YYYY"
/> */}
              <FormField
              type="date"
                axis="vertical"
                // className="!flex-1 !grow !w-[unset] !self-stretch !w-full border border-solid border-gray-300 rounded px-4 py-2"
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
               {/* <label for="startDate" class="relative w-fit mt-[-1.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">Start Date</label> */}

              <FormField
        //  className="!flex-1 !grow !w-[unset] !self-stretch !w-full border border-solid border-gray-300 rounded px-4 py-2"
                  type="date"
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
        </div></div>

        {/* <FormField
          axis="vertical"
          className="!self-stretch !flex-[0_0_auto] !w-full"
          hintText={false}
          size="large"
          text="Status"
          textFieldIcon={formFieldTextFieldIcon1}
          textFieldShowLeftIcon={false}
          textFieldTextActive
          textFieldTextText="To Do"
        /> */}
          {/* <div>
      <label htmlFor="status">Status:</label>
      <select
        id="status"
        className="!self-stretch !flex-[0_0_auto] !w-full"
        className="appearance-none border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white"
        className="!flex-1 !grow !w-[unset]"

        value={selectedStatus}
        onChange={handleStatusChange}
      >
        <option value="">Select Status</option>
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
      </div> */}


{/* 
      <div className="flex items-center space-x-4">
      <label htmlFor="status" className="text-sm font-medium text-gray-600">
        Status:
      </label>
      <div className="relative">
        <select
          id="status"
          className="appearance-none border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white"
          // value={selectedStatus}
          // onChange={handleStatusChange}
        >
          <option value="" disabled>Select Status</option>
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M5 10l5 5 5-5z"
            />
          </svg>
        </div>
      </div>
    </div> */}



    <div className="flex flex-col  space-y-4 m-6">
    
                     <label for="status" class="relative w-fit mt-[-1.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">Status</label>

      <div className="relative w-full">
        <select
          id="status"
          className="appearance-none border rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white w-full" // Set width to full frame
          // value={selectedStatus}
          // onChange={handleStatusChange}
        >
          <option value="" disabled>Select Status</option>
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M5 10l5 5 5-5z"
            />
          </svg>
        </div>
      </div>
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
      </form>
    </div> }</>
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
