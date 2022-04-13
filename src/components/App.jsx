import React, { useState } from "react";

function App() {
  const [headingState, setHeadingText] = useState("Hello");

  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
    console.log("CLICKED");
  }

  function changeOverColor() {
    setMouseOver(true);
  }

  function changeOffColor() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingState}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        id="button"
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOut={changeOffColor}
        onMouseOver={changeOverColor}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
