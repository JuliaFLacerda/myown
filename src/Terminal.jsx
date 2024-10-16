import React, { useState, useEffect } from "react";
import "./assets/Terminal.css";

const Terminal = ({ setShowTerminal }) => {
    const commands = [
        "Loading Linux 6.x.x-xxx-amd64 ...",
        "Loading initial ramdisk ...",
        "Decompressing Linux... done.",
        "Booting the kernel.",
        "[    0.000000] Linux version 6.x.x-xxx-amd64 (debian-kernel@lists.debian.org) (gcc version 12.x.x (Debian x.x.x)) #1 SMP Debian 6.x.x-xxx (xxxx-xx-xx)",
        "[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-6.x.x-xxx-amd64 root=UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx ro quiet",
        "[    0.000000] x86/fpu: Supporting XSAVE feature: 'x87 floating point registers'",
        "[    0.000000] x86/fpu: Supporting XSAVE feature: 'SSE registers'",
        "[    0.000000] x86/fpu: Supporting XSAVE feature: 'AVX registers'",
        "[    0.000000] x86/fpu: Supporting XSAVE feature: 'AVX-512 opmask'",
        "[    0.000000] x86/fpu: Supporting XSAVE feature: 'AVX-512 ZMM registers'",
        "[    0.000000] x86/fpu: Supporting XSAVE feature: 'AVX-512 Hi256'",
        "[    0.000000] x86/fpu: Supporting XSAVE feature: 'AVX-512 Hi16'",
        "[    0.000000] DMI: [system manufacturer] [system model], BIOS [BIOS version] [BIOS date]",
        "[    0.000000] tsc: Fast TSC calibration using PIT",
        "[    0.000000] e820: BIOS-provided physical RAM map:",
        "[    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009ffff] usable",
        "[    0.000000] BIOS-e820: [mem 0x0000000000100000-0x00000000bfffffff] usable",
        "[    0.000000] BIOS-e820: [mem 0x00000000c0000000-0x00000000c07fffff] reserved",
        "[    0.000000] BIOS-e820: [mem 0x00000000e0000000-0x00000000efffffff] reserved",
        "[    0.000000] Memory: 8192000K/16777216K available (xxxx kernel code, xxxx initrd, xxxx reserved)",
        "[    0.000000] CPU: Processor family x86_64 (Family 6, Model 142, Stepping 10)",
        "[    0.000000] CPU: 8 logical processors (8 physical cores)",
        "[    0.000000] ACPI: IRQ9 used by override.",
        "[    0.000000] ACPI: GPE block detected",
        "[    1.234567] ata1: SATA link up 6.0 Gbps (SStatus 133 SControl 300)",
        "[    1.234567] ata1: dev 0 ATA-9: Samsung SSD xxxx, FW:xxxxx, 500GB",
        "[    1.234567] ata1.00: configured for UDMA/133",
        "[    1.234567] scsi 0:0:0:0: Direct-Access ATA Samsung SSD xxxx PQ: 0 ANSI: 5",
        "[    2.123456] EXT4-fs (sda1): mounted filesystem with ordered data mode. Opts: (null)",
        "[    3.000000] Run /init as init process",
        "[    4.000000] systemd[1]: Started Journal Service.",
        "[    4.123456] systemd[1]: Reached target Basic System.",
        "[    5.000000] systemd[1]: Starting Network Service...",
        "[    5.123456] systemd[1]: Starting Login Service..."
      ];

  
      const [commandIndex, setCommandIndex] = useState(0);
      const [displayedOutput, setDisplayedOutput] = useState("");
    
      const totalTime = 1700;
      const commandDelay = totalTime / commands.length;
    
      useEffect(() => {
        if (commandIndex < commands.length) {
          const timeout = setTimeout(() => {
            setDisplayedOutput((prev) => prev + commands[commandIndex] + "\n");
            setCommandIndex(commandIndex + 1);
          }, commandDelay);
          return () => clearTimeout(timeout);
        } else {
          setTimeout(() => {
            setShowTerminal(false); 
          }, commandDelay);
        }
      }, [commandIndex, commandDelay, commands, setShowTerminal]);
    
      return (
        <div className="terminal-wrapper">
          <div className="terminal">
            <pre>{displayedOutput}</pre>
            <div id="cursor"></div>
          </div>
        </div>
      );
    };
    
    export default Terminal;