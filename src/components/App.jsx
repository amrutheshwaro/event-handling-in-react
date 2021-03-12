import React, { useState } from "react";

function App() {
  const [isMousedOver, setIsMousedOver] = useState(false);

  const handleMouseOver = function () {
    console.log("Moused over");
    setIsMousedOver(true);
  };

  const handleMouseOut = function () {
    setIsMousedOver(false);
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
