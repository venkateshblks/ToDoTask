import React,{ useState,useEffect } from "react";
import { TaskBoardsWith } from "./TaskBoardsWith";
import { FrameScreen } from "./FrameScreen";
import axios from "axios"


export const App=()=>{
   
  const [name, setName] = useState('')
  const [home, setHome] = useState('')

  useEffect(() => {
    axios.get('https://scaling-invention-5p4vgvwxg6jc7wqw-4000.app.github.dev/home').then(function (response) {
      setHome(response.data)
    })
  }, [])

  async function postName(e) {
    e.preventDefault()
    try {
      await axios.post('https://scaling-invention-5p4vgvwxg6jc7wqw-4000.app.github.dev/post_name', {
        name,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <form onSubmit={postName}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Send Name</button>
      </form>
      {home}
    </div>
  )
    return (<TaskBoardsWith  />)
}