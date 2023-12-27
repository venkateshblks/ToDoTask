import React from "react";
import ReactDOMClient from "react-dom/client";
import { TaskBoardsWith } from "./screens/TaskBoardsWith";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<TaskBoardsWith />);
