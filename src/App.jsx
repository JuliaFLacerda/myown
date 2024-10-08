import React, { useState } from "react";
import GlobalStyle from './assets/GlobalStyle'; // Correct import path
import { Background } from './Background'; // Correct import path
import { Header } from './Header'; // Correct import path
import Terminal from './Terminal'; // Terminal remains the same

function App() {
  const [showTerminal, setShowTerminal] = useState(true); // Terminal shows initially

  return (
    <>
      <GlobalStyle />
      {/* Only show Terminal first, and render the rest after it's done */}
      {showTerminal ? (
        <Terminal setShowTerminal={setShowTerminal} />
      ) : (
        <>
          <Header />
          <Background />
        </>
      )}
    </>
  );
}

export default App;
