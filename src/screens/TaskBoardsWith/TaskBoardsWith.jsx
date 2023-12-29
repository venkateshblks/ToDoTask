import React , { useState }from "react";
import { Component } from "../../components/Component";
import { Frame } from "../../components/Frame";
import { Rectangle } from "../../components/Rectangle";
import { StatusBadge } from "../../components/StatusBadge";
import { GhostOrg } from "../../icons/GhostOrg";
import { Plus1 } from "../../icons/Plus1";
import { FrameScreen } from "./FrameScreen";
// import { Pframe } from "../../pagecomponents/Frame/Frame";

export const TaskBoardsWith = (props) => {
  // alert(props.props)
  const [showFrameScreen, setShowFrameScreen] = useState(false);
  // const K='hrello'
  const handleButtonClick = () => {
    // Toggle the state to show/hide FrameScreen
    setShowFrameScreen((prev) => !prev);
    // alert(handleC)
  };
 
  return (
    
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      {/* <Pframe/> */}
      <div className="bg-[#ffffff] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[240px] h-[1024px] top-0 left-0 bg-[#ffffff] shadow-[0px_0px_8px_#3659e229]">
          <div className="inline-flex flex-col items-start gap-[24px] relative">
            <div className="flex w-[240px] items-center gap-[10px] px-[24px] py-[16px] relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-foundationbrandbrand-50">
              <GhostOrg className="!relative !w-[20px] !h-[20px]" color="#263FA0" />
              <div className="relative w-fit mt-[-1.00px] font-typography-styles-heading-6-bold font-[number:var(--typography-styles-heading-6-bold-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-heading-6-bold-font-size)] tracking-[var(--typography-styles-heading-6-bold-letter-spacing)] leading-[var(--typography-styles-heading-6-bold-line-height)] whitespace-nowrap [font-style:var(--typography-styles-heading-6-bold-font-style)]">
                Task boards
              </div>
            </div>
            <div className="flex flex-col w-[240px] items-start gap-[10px] px-[10px] py-0 relative flex-[0_0_auto]">
              <Frame className="!self-stretch !flex-[0_0_auto] !w-full" stateProp="hover" />
              <Frame className="!self-stretch !flex-[0_0_auto] !w-full" stateProp="default" text="SBI Outsource" />
              <Frame className="!self-stretch !flex-[0_0_auto] !w-full" stateProp="default" text="HPCL Project 1" />
            </div>
            <div className="flex h-[32px] items-center gap-[10px] px-[24px] py-[10px] relative self-stretch w-full bg-white border-t [border-top-style:solid] border-foundationbrandbrand-50">
              <Plus1 className="!relative !w-[12px] !h-[12px]" />
            <button onClick={handleButtonClick} >  <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] font-typography-styles-small-regular font-[number:var(--typography-styles-small-regular-font-weight)] text-foundationbrandbrand-500 text-[length:var(--typography-styles-small-regular-font-size)] tracking-[var(--typography-styles-small-regular-letter-spacing)] leading-[var(--typography-styles-small-regular-line-height)] whitespace-nowrap [font-style:var(--typography-styles-small-regular-font-style)]">
                Add new Project
              </div></button>
            </div>
          </div>
        </div>
        <div className="absolute w-[1200px] h-[1024px] top-0 left-[240px]">
          {/* <img
            className="left-[304px] absolute w-[5px] h-[826px] top-[133px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/eSquVIIx/img/line-1.svg"
            />
          <img
            className="left-[598px] absolute w-[5px] h-[826px] top-[133px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/eSquVIIx/img/line-1.svg"
            />
          <img
            className="left-[892px] absolute w-[5px] h-[826px] top-[133px] object-cover"
            alt="Line"
            src="https://c.animaapp.com/eSquVIIx/img/line-1.svg"
            /> */}
          <div className="inline-flex flex-col items-start gap-[20px] absolute top-[84px] left-[24px]">
            <div className="inline-flex flex-col items-start gap-[19px] relative flex-[0_0_auto]">
              <StatusBadge badgeType="brand" className="!h-[32px] !px-[12px] !py-[4px]" text="To Do" />
            </div>
            <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
              <Rectangle className="!flex-[0_0_auto]" stateProp="default" />
              <Component className="!flex-[0_0_auto]" hover={false} stateProp="to-do-add" />
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[20px] absolute top-[84px] left-[318px]">
            <div className="inline-flex flex-col items-start gap-[19px] relative flex-[0_0_auto]">
              <StatusBadge
                badgeType="warning"
                className="!h-[32px] !px-[12px] !py-[4px] !bg-secondary-colourpinkpink-50"
                divClassName="!text-secondary-colourpinkpink-500"
                text1="In Progress"
              />
            </div>
            <Component className="!flex-[0_0_auto]" hover={false} stateProp="in-progress-add" />
          </div>
          <div className="inline-flex flex-col items-start gap-[20px] absolute top-[84px] left-[612px]">
            <div className="inline-flex flex-col items-start gap-[19px] relative flex-[0_0_auto]">
              <StatusBadge
                badgeType="success"
                className="!h-[32px] !px-[12px] !py-[4px] !bg-foundation-infoinfo-50"
                divClassName="!text-foundation-infoinfo-500"
                text="In Review"
              />
            </div>
            <Component className="!flex-[0_0_auto]" hover={false} stateProp="in-review-add" />
          </div>
          <div className="inline-flex flex-col items-start gap-[20px] absolute top-[84px] left-[906px]">
            <div className="inline-flex flex-col items-start gap-[19px] relative flex-[0_0_auto]">
              <StatusBadge badgeType="success" className="!h-[32px] !px-[12px] !py-[4px]" text="Completed" />
            </div>
            <Component className="!flex-[0_0_auto]" hover={false} stateProp="completed-add" />
          </div>
          <div className="flex w-[1200px] items-center gap-[10px] px-[24px] py-[16px] absolute top-0 left-0 border-b [border-bottom-style:solid] border-foundationbrandbrand-50">
            <div className="relative w-fit mt-[-1.00px] font-typography-styles-heading-6-semi-bold font-[number:var(--typography-styles-heading-6-semi-bold-font-weight)] text-foundationtext-colorsprimary-text-color text-[length:var(--typography-styles-heading-6-semi-bold-font-size)] tracking-[var(--typography-styles-heading-6-semi-bold-letter-spacing)] leading-[var(--typography-styles-heading-6-semi-bold-line-height)] whitespace-nowrap [font-style:var(--typography-styles-heading-6-semi-bold-font-style)]">
              Freelance Project
            </div>
          </div>
        </div>
      </div>
        
        {showFrameScreen && 
        <div className="fixed top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
       {/* <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full md:max-w-lg"> */}
          <FrameScreen/>
     </div>
    // </div>
    }
    </div>
    
  );

};
