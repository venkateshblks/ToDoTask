import React,{ useState } from "react";
import { TaskBoardsWith } from "./TaskBoardsWith";
import { FrameScreen } from "./FrameScreen";


export const App=()=>{
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json()).then((data) => setData(data.message));
        console.log(data)
    }, []);
   
  return (
    <div>
        <p>{!data ? "Loading..." : data}</p>
     {/* {data} */}
      {/* <TaskBoardsWith  /> */}
    </div>
  );
   
    
    // return (<TaskBoardsWith  />)
}