import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { MainWindowOptions } from "./MainWindowOptions";

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
      <section>test test</section>
    </main>
  );
}