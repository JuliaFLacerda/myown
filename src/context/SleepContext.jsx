import React, { useState, useEffect, createContext, useContext } from "react";

// Create SleepContext
const SleepContext = createContext();

// SleepProvider component
export const SleepProvider = ({ children }) => {
  const [isSleeping, setIsSleeping] = useState(false);

  // Function to enter sleep mode
  const enterSleepMode = () => {
    setIsSleeping(true);
  };

  // Function to wake up from sleep mode
  const wakeUp = () => {
    setIsSleeping(false);
  };

  // Listen for user activity (mousemove, keydown, or click) to wake up
  useEffect(() => {
    if (isSleeping) {
      const handleWakeUp = () => {
        wakeUp(); // Exit sleep mode on any user activity
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

      {/* Black overlay when in sleep mode */}
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

// Custom hook for using SleepContext
export const useSleep = () => {
  return useContext(SleepContext);
};