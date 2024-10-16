
import { useState } from "react";
import { BackgroundDiv } from "./components/BackgroundDiv";
import { MainWindow } from "./MainWindow";
import { NavMenuLeft } from "./NavMenuLeft";
import CloudInfrastructure from "./components/content/CloudInfrastructure";



export function Background(){




  const [windows, setWindows] = useState([{iconId: 4, content: <CloudInfrastructure />}]);

  const contentMap = {
    icon1: <div>This is content for Icon 1</div>,
    icon2: <div>This is content for Icon 2</div>,
    icon3: <div>This is content for Icon 3</div>,
    icon4: <CloudInfrastructure />
  };

  const addWindow = (iconId) => {
    setWindows((prevWindows) => {
      if (prevWindows.some(window => window.iconId === iconId)) return prevWindows;

      const content = contentMap[iconId];
      return [...prevWindows, {iconId, content}];
    });
  };

  const removeWindow = (iconId) => {
  setWindows((prevWindows) => {
    console.log('Before:', prevWindows);
    const updatedWindows = prevWindows.filter((w) => w.iconId !== iconId);
    console.log('After:', updatedWindows);
    return updatedWindows;
  });
};


    return(
        <BackgroundDiv>
            <NavMenuLeft addWindow={addWindow}/>
            {
                windows.map(
                    (w) => <MainWindow content={w.content} iconId={w.iconId} removeWindows={removeWindow} windows={windows} />
                )
            }
        </BackgroundDiv>
    )
}