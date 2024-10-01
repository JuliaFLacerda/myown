
import { BackgroundDiv } from "./components/BackgroundDiv";
import { MainWindow } from "./MainWindow";
import { NavMenuLeft } from "./NavMenuLeft";



export function Background(){

    return(
        <BackgroundDiv>
            <NavMenuLeft />
            <MainWindow />
        </BackgroundDiv>
    )
}