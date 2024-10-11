

export default function CloudInfrastructure(){
    return<><h1>Creating a cloud infrastructure</h1>
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
    </ul></>
}