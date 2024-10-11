
import { useState } from "react";
import { BackgroundDiv } from "./components/BackgroundDiv";
import { MainWindow } from "./MainWindow";
import { NavMenuLeft } from "./NavMenuLeft";



export function Background(){




  const [windows, setWindows] = useState([]);

  const contentMap = {
    icon1: <div>This is content for Icon 1</div>,
    icon2: <div>This is content for Icon 2</div>,
    icon3: <div>This is content for Icon 3</div>
  };

  const addWindow = (iconId) => {
    setWindows((prevWindows) => {
      if (prevWindows.some(window => window.iconId === iconId)) return prevWindows;

      const content = contentMap[iconId];
      return [...prevWindows, {iconId, content}];
    });
  };

    return(
        <BackgroundDiv>
            <NavMenuLeft addWindow={addWindow}/>
            {
                windows.map(
                    (w) => <MainWindow content={w.content} />
                )
            }
        </BackgroundDiv>
    )
}