import { MenuLeftDiv } from "./components/MenuLeftDiv";




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
            <button>a</button>
            <button>b</button>
            <button>c</button>
        </MenuLeftDiv>
    )
}

   /*
            {
                icons.map((i) => {return <div></div>})
            } */