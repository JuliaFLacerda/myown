import { MainWindowOptionDiv } from "./components/MainWindowOptionDiv";
import { MenuOutline } from 'react-ionicons'
import { CloseCircleOutline } from 'react-ionicons'


export function MainWindowOptions(props){



    return(
        <MainWindowOptionDiv>
            <MenuOutline color={'black'}  title={"option1"} height="25px" width="25px" />
            <h1>Title</h1>
            <CloseCircleOutline color={'black'}  title={"option2"} height="25px" width="25px" onClick={() => {props.setClosed(true); console.log(props.closed)}}/>

        </MainWindowOptionDiv>
    )
}