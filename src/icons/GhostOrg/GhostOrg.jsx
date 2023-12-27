/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const GhostOrg = ({ color = "#263FA0", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.0049 14.6196H8.40343V17.6993H2.0049V14.6196ZM11.6015 14.6196H17.9959V17.6993H11.6015V14.6196ZM2 8.46014H17.9976V11.5399H2V8.46014ZM2.0049 2.30071H11.6031V5.38043H2.0049V2.30071ZM14.8011 2.30071H18V5.38043H14.8011V2.30071Z"
        fill={color}
      />
    </svg>
  );
};
