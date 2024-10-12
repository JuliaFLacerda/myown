import React, { useState } from "react";
import GlobalStyle from './assets/GlobalStyle'; 
import { Background } from './Background'; 
import { Header } from './Header'; 
import Terminal from './Terminal'; 
import ContentProvider from "./provider/ContentProvider";
import LockScreen from "./LockScreen";
import { SleepProvider } from "./context/SleepContext";

function App() {
  const [showTerminal, setShowTerminal] = useState(true); 
  const [locked, setLocked] = useState(true);

  return (
    <>
      <GlobalStyle />
      {}
      {showTerminal ? (
        <Terminal setShowTerminal={setShowTerminal} />
      ) : locked ? <SleepProvider><LockScreen setLocked={setLocked} /> </SleepProvider>: (
        <ContentProvider>
          <Header />
          <Background />
        </ContentProvider>
      )}
    </>
  );
}

export default App;
