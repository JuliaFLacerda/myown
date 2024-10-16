import { useEffect, useState } from "react";
import { LockDateAndTime } from "./components/LockDateAndTime";
import LockMenu from "./components/LockMenu";
import { LockProfilePicture } from "./components/LockProfilePicture";
import { LockScreenDiv } from "./components/LockScreenDiv";



export default function LockScreen({ setLocked }){

    
  const Unlock = () => {
    setLocked(false);
  };

  
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      Unlock(); 
    }
  };

  
  useEffect(() => {
   
    window.addEventListener("keydown", handleKeyPress);

    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); 

    return(
        <LockScreenDiv>
            <LockDateAndTime />
            <LockProfilePicture onClick={Unlock}/>
            <LockMenu />
        </LockScreenDiv>
    )
}