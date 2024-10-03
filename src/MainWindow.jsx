import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { MainWindowOptions } from "./MainWindowOptions";
import { CloudText } from "./assets/sectionsarray";

export function MainWindow(props) {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [closed, setClosed] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        left: e.clientX - offset.x,
        top: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <main
      className="draggable"
      onMouseDown={handleMouseDown}
      style={{
        position: "fixed",
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: '50%',
        height: '550px',
        borderRadius: '12px',
        background: 'white',
        display: closed ? 'none' : 'flex',
        flexDirection: 'column',
      }}
    >
        <MainWindowOptions setClosed={setClosed} closed={closed}/>
        <hr />
      <section>
        <h1>Creating a cloud infrastructure</h1>
        <br></br>
        <h3>This is the first part of a series that executes VM migration in multiple abstraction levels. Here I will demonstrate two approaches: compiling the linux kernel and creating a filebox to run a QEMU ARM machine, and building a VM from a pre-stabilished distro image and a virtual disk. QEMU is the tool used by many higher level virtual machines tools, like libvirt and virsh. Here you can change fundamental aspects of VM generation and management, standing only before the linux /dev/kvm programming interface(link livro) itself. For example, ARM virtual machines tend to be better than x86 virtual machines(link artigo), and you can perform that using a bash parameter.</h3>
        <br></br>
        <h2>Benchmark</h2>
        <br></br>
        <ul>
        <li>Linux Kernel 6.11</li>
        <li>Asus Vivobook X1504ZA(8GB DDR4, Intel Core i5 1235u, 512GB SSD) with Debian 12 Gnome</li>
        <li>Dropbear-2024.85</li>
        <li>Busybox 1.37.0</li>
        </ul>
        <br />
        <h2>Step 1 – Installing necessary tools</h2>
        <br />
        <ul>
    <li>sudo apt install gcc-arm-linux-gnueabi</li>
    <li>sudo apt-get install libncurses5-dev</li>
    <li>sudo apt install build-essential</li>
    <li>sudo apt-get install flex</li>
    <li>sudo apt-get install bison</li>
    <li>sudo apt install zlib1g-dev</li>
    <li>sudo apt install libglib2.0-0 libglib2.0-dev</li>
    <li>sudo apt install libsdl1.2-dev</li>
    <li>sudo apt install libpixman-1-dev libfdt-dev</li>
    <li>sudo apt install python3-venv</li>
    <li>sudo apt install python3-pip</li>
    <li>sudo apt install python3-sphinx</li>
    <li>sudo apt install ninja-build</li>
    <li>sudo apt-get install libtommath-dev</li>
        </ul>
        <br />
        <h2>Step 2 – Compiling the kernel to ARM EABI</h2>
        <br />
        <ul>
    <li>cd ~</li>
    <li>mkdir qemu</li>
    <li>cd qemu</li>
    <li>sudo wget https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-6.11.tar.gz</li>
    <li>sudo tar -xzvf linux-6.11.tar.gz</li>
    <li>cd linux-6.11</li>
    <li>make CROSS_COMPILE=arm-linux-gnueabi- ARCH=arm vexpress_defconfig</li>
    <li>make CROSS_COMPILE=arm-linux-gnueabi- ARCH=arm menuconfig</li>
    <li>on menu: </li>
    <li>sudo nano .config</li>
    <li>CONFIG_ARM_EABI=y</li>
    <li>CONFIG_ARM_EABI_COMPAT=y</li>
    <li>sudo make CROSS_COMPILE=arm-linux-gnueabi- ARCH=arm</li>
    <li>It can take a while</li>
    <li>sudo cp /qemu/linux-6.11/arch/arm/boot/dts/arm/vexpress-v2p-ca9.dtb ../</li>
    <li>sudo cp arch/arm/boot/zImage ../</li>
</ul>
 <br />
 <h2>Step 3 – Installing Qemu</h2>
 <br />
 <ul>
    <li>cd ~</li>
    <li>wget https://download.qemu.org/qemu-9.1.0.tar.xz</li>
    <li>tar xvJf qemu-9.1.0.tar.xz</li>
    <li>cd qemu-9.1.0</li>
    <li>mkdir build</li>
    <li>cd build</li>
    <li>../configure --target-list=arm-softmmu –audio-drv-list=</li>
    <li>sudo make</li>
    <li>sudo make install</li>
</ul>
<br />
      </section>
    </main>
  );
}