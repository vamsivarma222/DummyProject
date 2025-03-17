import React, { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>Hello, this is a toggled message!</p>}
    </div>
  );
}

export default ToggleMessage;
