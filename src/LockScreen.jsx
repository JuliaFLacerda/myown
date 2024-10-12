import { useEffect, useState } from "react";
import { LockDateAndTime } from "./components/LockDateAndTime";
import LockMenu from "./components/LockMenu";
import { LockProfilePicture } from "./components/LockProfilePicture";
import { LockScreenDiv } from "./components/LockScreenDiv";



export default function LockScreen({ setLocked }){

      // Unlock function that sets locked to false
  const Unlock = () => {
    setLocked(false);
  };

  // Handle key press (specifically for "Enter" key)
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      Unlock();  // Unlock if Enter key is pressed
    }
  };

  // Add event listener for key presses
  useEffect(() => {
    // Attach keydown listener when component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

    return(
        <LockScreenDiv>
            <LockDateAndTime />
            <LockProfilePicture onClick={Unlock}/>
            <LockMenu />
        </LockScreenDiv>
    )
}