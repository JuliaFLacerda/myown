import { useState } from "react";
import { MainWindowOptionDiv } from "./components/MainWindowOptionDiv";
import { MenuOutline } from 'react-ionicons'
import { CloseCircleOutline } from 'react-ionicons'

export function MainWindowOptions(props) {
  function handleDoubleClick() {
    props.setFullScreen(!props.fullScreen); // Toggle fullscreen mode
  }

  // Trigger the closing animation and actual close
  function handleCloseClick() {
    props.triggerClose(); // Calls the parent method to close the main window
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
        onClick={handleCloseClick} // Handle close action
      />
    </MainWindowOptionDiv>
  );
}