import { MenuLeftDiv } from "./components/MenuLeftDiv";
import { ChatboxEllipsesOutline } from 'react-ionicons'
import { EnterOutline } from 'react-ionicons'
import { ConstructOutline } from 'react-ionicons'
import { CloudOutline } from 'react-ionicons'
import { CellularOutline } from 'react-ionicons'

export function NavMenuLeft(){

    const icons = ["1", "2"];
    /*
    <ion-icon name="chatbox-ellipses-outline"></ion-icon> sobre mim
    <ion-icon name="enter-outline"></ion-icon> migration = /dev/kvm, qemu kernel, qemu debian, libvirt, virsh
    <ion-icon name="construct-outline"></ion-icon> customizando a distro
    <ion-icon name="cloud-outline"></ion-icon> criando um sistema de cloud caseiro
    <ion-icon name="cellular-outline"></ion-icon> api com java

    */

    return(
        <MenuLeftDiv>
            <ChatboxEllipsesOutline color={'black'} title={"About me"} height="36px" width="36px"/>
            <EnterOutline color={'black'}  title={"VM Migration"} height="36px" width="36px" />
            <ConstructOutline color={'black'}  title={"Cloud system"} height="36px" width="36px" />
            <CloudOutline color={'black'}  title={"Cloud system"} height="36px" width="36px" />
            <CellularOutline color={'black'} title={"APIs"} height="36px" width="36px" />
        </MenuLeftDiv>
    )
}

   /*
            {
                icons.map((i) => {return <div></div>})
            } */