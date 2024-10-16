import { useState } from "react";
import { MainWindowOptionDiv } from "./components/MainWindowOptionDiv";
import { MenuOutline } from 'react-ionicons'
import { CloseCircleOutline } from 'react-ionicons'

export function MainWindowOptions(props) {
  function handleDoubleClick() {
    props.setFullScreen(!props.fullScreen); 
  }

  
  function handleCloseClick() {
    props.triggerClose(); 
  }

  return (
    <MainWindowOptionDiv onDoubleClick={handleDoubleClick}>
      <MenuOutline color={'black'} title={"option1"} height="25px" width="25px" />
      <h1>Title</h1>
      <CloseCircleOutline
        color={'black'}
        title={"Close"}
        height="25px"
        width="25px"
        onClick={handleCloseClick} 
      />
    </MainWindowOptionDiv>
  );
}