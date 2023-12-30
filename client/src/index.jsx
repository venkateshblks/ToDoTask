import React ,{useState} from "react";
import ReactDOMClient from "react-dom/client";
// import { FrameScreen, TaskBoardsWith } from "./screens/TaskBoardsWith";
// import { Pframe } from "./pagecomponents/Frame";
import { App } from "./screens/TaskBoardsWith/App";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App/>);
