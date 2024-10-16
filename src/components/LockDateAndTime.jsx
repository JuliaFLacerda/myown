import { useEffect, useState } from "react";
import { LockDateAndTimeDiv } from "./LockDateAndTimeDiv";



export function LockDateAndTime(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000); // Update every 1 second
  
      return () => clearInterval(intervalId);
    }, []);
  
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const formattedDate = time.toLocaleDateString([], {
        month: 'long',  // Full month name (e.g., "October")
        day: 'numeric', // Day of the month (e.g., 12)
        year: 'numeric' // Full year (e.g., 2024)
      });
  

    return(
        <LockDateAndTimeDiv>
            <h1>{formattedTime}</h1>
            <h2>{formattedDate}</h2>
        </LockDateAndTimeDiv>
    )
}