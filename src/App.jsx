import React, { useState } from "react";
import GlobalStyle from './assets/GlobalStyle'; 
import { Background } from './Background'; 
import { Header } from './Header'; 
import Terminal from './Terminal'; 
import ContentProvider from "./provider/ContentProvider";

function App() {
  const [showTerminal, setShowTerminal] = useState(true); 

  return (
    <>
      <GlobalStyle />
      {}
      {showTerminal ? (
        <Terminal setShowTerminal={setShowTerminal} />
      ) : (
        <ContentProvider>
          <Header />
          <Background />
        </ContentProvider>
      )}
    </>
  );
}

export default App;
