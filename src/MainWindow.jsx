import React, { useState, useEffect, useContext } from "react";
import { MainWindowOptions } from "./MainWindowOptions";
import CloudInfrastructure from "./components/content/CloudInfrastructure";
import ContentContext from "./context/ContentContext";

export function MainWindow(props) {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [closed, setClosed] = useState(false);
  const [size, setSize] = useState({ width: 400, height: 300 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState("");
  const [fullScreen, setFullScreen] = useState(false);
  const { content, setContent } = useContext(ContentContext);

  const [isClosing, setIsClosing] = useState(false); // State to track the closing animation

  // Function to trigger the closing animation
  const triggerClose = (iconId) => {
    setIsClosing(true); // Start closing animation
    setTimeout(() => {
      setIsClosing(false);
      props.removeWindows(iconId) // Unrender the component after animation
      console.log(props.windows)
    }, 350); // Match the timeout with the CSS animation duration
  };

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
  }, [isDragging, isResizing, props.contentName]);

  const handleDoubleClick = () => {
    setFullScreen((prevFullScreen) => !prevFullScreen); // Toggle fullscreen
  };

  return (
    <main
    className={`main-window ${isClosing ? "closing" : ""} ${fullScreen ? "" : "draggable"} ${resizeDirection ? `${resizeDirection}-resize` : ""}`}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMoveOverMain}
    onDoubleClick={props.handleDoubleClick}
    style={{
      position: "fixed",
      top: fullScreen ? "0" : `${position.top}px`,
      left: fullScreen ? "0" : `${position.left}px`,
      width: fullScreen ? "100%" : `${size.width}px`,
      height: fullScreen ? "100%" : `${size.height}px`,
      borderRadius: fullScreen ? "0" : "12px",
      background: "white",
      display: "flex",
      flexDirection: "column",
      zIndex: fullScreen? 1000 : 2,
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
        triggerClose={() => triggerClose(props.iconId)}
      />
      <hr />
        <section>
          {props.content}
        </section>
    </main>
  );
}
