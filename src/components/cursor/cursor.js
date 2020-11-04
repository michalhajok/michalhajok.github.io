import React, { useState, useEffect, useCallback } from "react";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners]);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default Cursor;
