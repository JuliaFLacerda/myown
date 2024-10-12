import { useSleep } from "../context/SleepContext";
import { LockMenuDiv } from "./LockMenuDiv";
import LockMenuOption from "./LockMenuOption";
import { Reboot, TurnOff } from "./LockScreenIconFunctionalities";


export default function LockMenu(){

    const { enterSleepMode } = useSleep(); 

    
    return(
        <LockMenuDiv>
            <LockMenuOption functionality={enterSleepMode} name={"sleep"}/>
            <LockMenuOption functionality={TurnOff} name={"turnoff"} />
            <LockMenuOption functionality={Reboot} name={"reboot"} />
        </LockMenuDiv>
    )
}