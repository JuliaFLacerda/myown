import React, { useState, useEffect, createContext, useContext } from "react";


const SleepContext = createContext();


export const SleepProvider = ({ children }) => {
  const [isSleeping, setIsSleeping] = useState(false);

 
  const enterSleepMode = () => {
    setIsSleeping(true);
  };

 
  const wakeUp = () => {
    setIsSleeping(false);
  };

  
  useEffect(() => {
    if (isSleeping) {
      const handleWakeUp = () => {
        wakeUp(); 
      };

      document.addEventListener("mousemove", handleWakeUp);
      document.addEventListener("keydown", handleWakeUp);
      document.addEventListener("click", handleWakeUp);

      return () => {
        document.removeEventListener("mousemove", handleWakeUp);
        document.removeEventListener("keydown", handleWakeUp);
        document.removeEventListener("click", handleWakeUp);
      };
    }
  }, [isSleeping]);

  return (
    <SleepContext.Provider value={{ isSleeping, enterSleepMode }}>
      {children}

     
      {isSleeping && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            zIndex: 9999,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem"
          }}
        >
          <p>Sleep Mode - Move the mouse or press a key to wake up</p>
        </div>
      )}
    </SleepContext.Provider>
  );
};


export const useSleep = () => {
  return useContext(SleepContext);
};