import { useContext, useState } from "react";
import { MenuLeftDiv } from "./components/MenuLeftDiv";
import { ChatboxEllipsesOutline } from 'react-ionicons'
import { EnterOutline } from 'react-ionicons'
import { ConstructOutline } from 'react-ionicons'
import { CloudOutline } from 'react-ionicons'
import { CellularOutline } from 'react-ionicons'
import ContentContext from "./context/ContentContext";

export function NavMenuLeft({ addWindow }){

    const icons = ["1", "2"];
    /*
    <ion-icon name="chatbox-ellipses-outline"></ion-icon> sobre mim
    <ion-icon name="enter-outline"></ion-icon> migration = /dev/kvm, qemu kernel, qemu debian, libvirt, virsh
    <ion-icon name="construct-outline"></ion-icon> customizando a distro
    <ion-icon name="cloud-outline"></ion-icon> criando um sistema de cloud caseiro
    <ion-icon name="cellular-outline"></ion-icon> api com java

    */
   const { content, setContent } = useContext(ContentContext);

   function handleClick(e){
    setContent(<div></div>)
   }

   const handleIconClick = (iconId) => {
    addWindow(iconId);
  };


    return(
        <MenuLeftDiv>
            <ConstructOutline color={'black'}  title={"cloudinfra"} data-contentName="cloudinfra" height="36px" width="36px" onClick={() => handleIconClick('icon1')} />
            <ChatboxEllipsesOutline color={'black'} title={"aboutme"} height="36px" width="36px" onClick={() => handleIconClick('icon2')} />
            <EnterOutline color={'black'}  title={"VM Migration"} height="36px" width="36px" onClick={() => handleIconClick('icon3')}/>
            <CloudOutline color={'black'}  title={"cloudinfra"} height="36px" width="36px" />
            <CellularOutline color={'black'} title={"APIs"} height="36px" width="36px"  />
        </MenuLeftDiv>
    )
}

   /*
            {
                icons.map((i) => {return <div></div>})
            } */