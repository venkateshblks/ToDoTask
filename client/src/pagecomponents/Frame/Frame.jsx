import React ,{useCallback, useState} from "react";
import { useReducer } from "react";
import { Calendar2 } from "../../pageicons/Calendar2";
import { ChevronDown1 } from "../../pageicons/ChevronDown1";
import { X2 } from "../../pageicons/X2";
import { Button } from "../Button";
import { FormField } from "../FormField";
import { TextField } from "../TextField";
import { TaskBoardsWith } from "../../screens/TaskBoardsWith/TaskBoardsWith";
import axios from 'axios'
// import { Component } from "../../components/Component";
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
    { value: 'review', label: 'In Review' },
    { value: 'completed', label: 'Completed' },
  ];
  const [state, dispatch] = useReducer(reducer, {
    cardState: cardState || "unfilled"
  });
  const [showFrameScreen, setShowFrameScreen] = useState(false);
  const [s, setS] = useState(false);
  const handleButtonClick = (e) => {
    e.preventDefault()
    setShowFrameScreen(true)
    // if (childComponentCallback) {
    //   childComponentCallback();
    // }
  };
  const [formData, setFormData] = useState({
    taskName: '',
    startDate: '',
    deadline: '',
    status: 'todo',
  });

  const handleC = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    
    // console.log(value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleButtonC = async (e) => {
    e.preventDefault()
    // if(formData==null)
    // return 
     if (!formData.taskName || !formData.startDate || !formData.deadline){
       console.log('data not added')
       setShowFrameScreen(true);
       return 
      //  setShowFrameScreen(true);
     }
     
    // console.log(formData)

    try {
      setS(true);
      const response = await axios.post('https://todotest-lac.vercel.app/api/addTask', formData);
      console.log(response.data);
      setShowFrameScreen(true);
      window.location.reload()

     

    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      setS(false);
    }
  };


  const [formValue, setFormValue] = useState('' );
  const handleChange = (event) => {
    setFormValue(event.target.value);
    console.log(formValue)
  };
  
  return (<>
  {/* {showFrameScreen && null} */}
  {showFrameScreen ||
  
    <div className="inline-flex flex-col items-start overflow-hidden rounded-[10px] relative">
      <div className="[border-bottom-style:solid] border-foundationbrandbrand-75 w-[670px] flex items-center px-[24px] py-[10px] h-[52px] border-b justify-between bg-white relative">
        <div className="font-typography-styles-large-regular w-fit tracking-[var(--typography-styles-large-regular-letter-spacing)] [font-style:var(--typography-styles-large-regular-font-style)] text-[length:var(--typography-styles-large-regular-font-size)] text-foundationbrandbrand-700 font-[number:var(--typography-styles-large-regular-font-weight)] leading-[var(--typography-styles-large-regular-line-height)] whitespace-nowrap relative">
          {["card-state3", "filled", "unfilled"].includes(state.cardState) && (
            <>Add new task</>
          )}

          {state.cardState === "card-state4" && <>Edit task</>}
        </div>
       <button onClick={handleButtonClick}> <X2   className=" cursor-pointer !relative !w-[20px] !h-[20px]" /></button>
      </div>
      <form  method='POST'>
      <div
        className="w-[670px] flex flex-col items-start gap-[24px] flex-[0_0_auto] px-[24px] py-[16px] bg-white relative"
        onClick={() => {
          dispatch("click");
        }}
      >
      <label htmlFor="status" className="relative w-fit mt-[-1.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">Name of the Task</label>

        {["card-state4", "filled", "unfilled"].includes(state.cardState) && (
          
          <input
            axis="vertical"
            className="   appearance-none border rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white w-full"
            size="large"
            name="taskName"

            text="Name of the Task"
             value={formData.taskName}
             onChange={handleC}
            required
          />
  )}  

  
        {state.cardState === "card-state3" && (
          <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-[4px] relative">
            <div className="relative w-fit mt-[-1.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
              Name of the Task
            </div>
            <TextField
              className="deadline"
              value={formData.taskName}
            />
            <p className="relative w-fit font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundation-errorerror-500 text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
              Please fill the task name
            </p>
          </div>
        )}
 <div className="flex space-x-4">
  <label htmlFor="Start date" className="relative mr-20 mt-[-1.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
  Start date 
  </label>
  <div className="flex items-center ">
    <label htmlFor="Deadline" className="absolute left-80  font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Deadline
    </label>
   
  </div>
</div>
        <div className="w-full flex self-stretch items-start gap-[10px] flex-[0_0_auto] relative">
          {["card-state4", "filled", "unfilled"].includes(state.cardState) && (
            <>
             <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleC} 
                axis="vertical"
                className='appearance-none  border border-solid border-blue-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white w-1/2 flex-shrink-0 flex-basis-auto relative font-nunito-sans text-gray-500 text-base font-normal leading-6 text-left whitespace-nowrap z-2'
                size="large"
                text="Start date"
                required
              />

              <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleC}
                axis="vertical"
                className='appearance-none  border border-solid border-blue-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white w-1/2 flex-shrink-0 flex-basis-auto relative font-nunito-sans text-gray-500 text-base font-normal leading-6 text-left whitespace-nowrap z-2'
                size="large"
                text="Deadline"
                required
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
    <div className="flex flex-col  space-y-4 m-6">
    
                     <label htmlFor="status" className="relative w-fit mt-[-1.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
                      Status</label>

      <div className="relative w-full">
        <select
            name="status"

          id="status"
          className="appearance-none border rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white w-full" // Set width to full frame
          onChange={handleC}
          
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
        <div className="flex items-center justify-center flex-no-wrap gap-1 relative w-69 h-22 mx-0 px-8 py-10 rounded">
  
  <button onClick={handleButtonClick} className="cursor-pointer rounded-[8px] border-none bg-foundationbrandbrand-50  flex-shrink-0 flex-auto relative px-8  h-9 font-nunito-sans text-blue-600 text-base font-normal leading-4 text-left whitespace-nowrap z-1">
    Cancel
  </button>
</div>
        <div className="  flex items-center justify-center flex-no-wrap gap-1 relative w-69 h-22 mx-0 px-8 py-10 rounded">  
  <button type="submit" onClick={handleButtonC}  className="cursor-pointer  rounded-[8px] border-none bg-foundationbrandbrand-500  flex-shrink-0 flex-auto relative px-8  h-9 font-nunito-sans text-white  text-base font-normal leading-4 text-left whitespace-nowrap z-1">
    Add
  </button>
  {s && <p>Submiting...</p>}
</div>
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
