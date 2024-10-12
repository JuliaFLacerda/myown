import { LockMenuOptionDiv } from "./LockMenuOptionDiv";


export default function LockMenuOption(props){
    return(
        <LockMenuOptionDiv>
             <button onClick={props.functionality}/>
             <h3>{props.name}</h3>
        </LockMenuOptionDiv>
    )
}