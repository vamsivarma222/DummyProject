import React, { useState } from "react";

function ChangeColor() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <h2>Click the buttons to change background color</h2>
      <button onClick={() => setBgColor("red")}>Red</button>
      <button onClick={() => setBgColor("blue")}>Blue</button>
      <button onClick={() => setBgColor("green")}>Green</button>
    </div>
  );
}

export default ChangeColor;
