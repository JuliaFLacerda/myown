import React, { useState, useEffect } from "react";
import { MainWindowOptions } from "./MainWindowOptions";

export function MainWindow(props) {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [closed, setClosed] = useState(false);
  const [size, setSize] = useState({ width: 400, height: 300 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState("");
  const [fullScreen, setFullScreen] = useState(false);

  const BORDER_SIZE = 10;

  const handleMouseDown = (e) => {
    if (resizeDirection) {
      setIsResizing(true);
    } else {
      setIsDragging(true);
      setOffset({
        x: e.clientX - position.left,
        y: e.clientY - position.top,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        left: e.clientX - offset.x,
        top: e.clientY - offset.y,
      });
    } else if (isResizing) {
      let newWidth = size.width;
      let newHeight = size.height;
      let newLeft = position.left;
      let newTop = position.top;

      if (resizeDirection.includes("right")) {
        newWidth = e.clientX - position.left;
      }
      if (resizeDirection.includes("left")) {
        newWidth = size.width - (e.clientX - position.left);
        newLeft = e.clientX;
      }
      if (resizeDirection.includes("bottom")) {
        newHeight = e.clientY - position.top;
      }
      if (resizeDirection.includes("top")) {
        newHeight = size.height - (e.clientY - position.top);
        newTop = e.clientY;
      }

      setSize({
        width: newWidth > 100 ? newWidth : 100,
        height: newHeight > 100 ? newHeight : 100,
      });
      setPosition({
        left: newLeft,
        top: newTop,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeDirection("");
  };

  const handleMouseMoveOverMain = (e) => {
    const withinTopBorder = e.clientY - position.top < BORDER_SIZE;
    const withinLeftBorder = e.clientX - position.left < BORDER_SIZE;
    const withinRightBorder =
      position.left + size.width - e.clientX < BORDER_SIZE;
    const withinBottomBorder =
      position.top + size.height - e.clientY < BORDER_SIZE;

    if (withinTopBorder) {
      if (withinLeftBorder) {
        setResizeDirection("top-left");
      } else if (withinRightBorder) {
        setResizeDirection("top-right");
      } else {
        setResizeDirection("top");
      }
    } else if (withinBottomBorder) {
      if (withinLeftBorder) {
        setResizeDirection("bottom-left");
      } else if (withinRightBorder) {
        setResizeDirection("bottom-right");
      } else {
        setResizeDirection("bottom");
      }
    } else if (withinLeftBorder) {
      setResizeDirection("left");
    } else if (withinRightBorder) {
      setResizeDirection("right");
    } else {
      setResizeDirection("");
    }
  };

  useEffect(() => {
    if (isDragging || isResizing) {
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
  }, [isDragging, isResizing]);

  const handleDoubleClick = () => {
    setFullScreen((prevFullScreen) => !prevFullScreen); // Toggle fullscreen
  };

  return (
    <main
      className={
        fullScreen 
          ? "" 
          : `draggable ${resizeDirection ? `${resizeDirection}-resize` : ""}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMoveOverMain}
      onDoubleClick={handleDoubleClick}
      style={{
        position: "fixed",
        top: fullScreen ? "0" : `${position.top}px`,
        left: fullScreen ? "0" : `${position.left}px`,
        width: fullScreen ? "100%" : `${size.width}px`,
        height: fullScreen ? "100%" : `${size.height}px`,
        borderRadius: fullScreen ? "0" : "12px",
        background: "white",
        display: closed ? "none" : "flex",
        flexDirection: "column",
        zIndex: 2,
        marginTop: fullScreen ? "30px" : "0"
      }}
    >
      {/* Resize handles */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top', 'left', 'right', 'bottom'].map(dir => (
        <div
          key={dir}
          className={`resize-handle ${dir}`}
          onMouseDown={(e) => {
            e.stopPropagation();
            setResizeDirection(dir);
            setIsResizing(true);
          }}
          style={{
            position: 'absolute',
            cursor: `${dir}-resize`,
            width: dir.includes('right') || dir.includes('left') ? '10px' : '100%',
            height: dir.includes('top') || dir.includes('bottom') ? '10px' : '100%',
            left: dir.includes('left') ? '-5px' : (dir.includes('right') ? '100%' : '50%'),
            top: dir.includes('top') ? '-5px' : (dir.includes('bottom') ? '100%' : '50%'),
            transform: dir.includes('left') || dir.includes('right') ? 'translateY(-50%)' : 'translateX(-50%)',
            zIndex: 3,
          }}
        />
      ))}
      
      <MainWindowOptions 
        setClosed={setClosed} 
        closed={closed} 
        fullScreen={fullScreen} 
        setFullScreen={setFullScreen} 
      />
      <hr />
      <section>
        <h1>Creating a cloud infrastructure</h1>
        <br />
        <h3>This is the first part of a series that executes VM migration in multiple abstraction levels...</h3>
        <br />
        <h2>Benchmark</h2>
        <br />
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
          <li>make CROSS_COMPILE=arm-linux-gnueabi- vexpress_defconfig</li>
          <li>make -j4</li>
        </ul>
        <br />
        <h2>Step 3 – Download and compile QEMU</h2>
        <br />
        <ul>
          <li>cd ~</li>
          <li>mkdir qemu-9.1.0</li>
          <li>cd qemu-9.1.0</li>
          <li>sudo wget https://download.qemu.org/qemu-9.1.0.tar.xz</li>
          <li>sudo tar -xf qemu-9.1.0.tar.xz</li>
          <li>cd qemu-9.1.0</li>
          <li>./configure --target-list=arm-softmmu</li>
          <li>make -j4</li>
          <li>sudo make install</li>
        </ul>
        <br />
        <h2>Step 4 – Configure the device tree files</h2>
        <br />
        <ul>
          <li>sudo wget https://cdn.kernel.org/pub/linux/kernel/v6.x/arch/arm/boot/dts/vexpress-v2p-ca9.dtb</li>
          <li>sudo cp vexpress-v2p-ca9.dtb /boot</li>
        </ul>
        <br />
        <h2>Step 5 – Create the root filesystem image</h2>
        <br />
        <ul>
          <li>sudo dd if=/dev/zero of=rootfs.img bs=1M count=512</li>
          <li>sudo mkfs.ext4 rootfs.img</li>
          <li>mkdir -p mnt/rootfs</li>
          <li>sudo mount rootfs.img mnt/rootfs</li>
          <li>cd mnt/rootfs</li>
          <li>sudo apt install busybox</li>
          <li>sudo ln -s /bin/busybox /bin/sh</li>
          <li>sudo ln -s /bin/busybox /bin/ls</li>
          <li>sudo ln -s /bin/busybox /bin/echo</li>
          <li>sudo ln -s /bin/busybox /bin/mkdir</li>
          <li>sudo ln -s /bin/busybox /bin/rm</li>
          <li>sudo ln -s /bin/busybox /bin/insmod</li>
          <li>sudo ln -s /bin/busybox /bin/lsmod</li>
          <li>sudo cp -r /lib /mnt/rootfs</li>
          <li>sudo cp -r /usr /mnt/rootfs</li>
          <li>sudo cp -r /etc /mnt/rootfs</li>
          <li>cd ..</li>
          <li>sudo umount rootfs</li>
        </ul>
      </section>
    </main>
  );
}
