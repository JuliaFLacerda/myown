import { useSleep } from "../context/SleepContext";



export const TurnOff = () => {
    window.close();
}

export const Reboot = () => {
    window.location.reload();
}