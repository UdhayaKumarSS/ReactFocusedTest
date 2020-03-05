import React, { useState, useEffect, useCallback } from "react";
import HOC from "./HOC";

function App({ height }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [newHeight, setNewHeight] = useState();

  const getWindowWidth = useCallback(() => {
    setWidth(window.innerWidth);
    window.setDivHeight();
  }, []);

  // React test step1:
  // displays the ‘live’ width of the browser window
  useEffect(() => {
    window.onresize = getWindowWidth;
  }, [getWindowWidth, height]);

  // React test step3:
  // set the height of the div manually
  useEffect(() => {
    setNewHeight(height);
  }, [height]);

  // React test step2:
  // set the height of the div
  function handleOnKeyDown(event) {
    const value = document.getElementById("textbox").value;

    if (event.keyCode === 8) {
      setNewHeight(Number(value.toString().slice(0, -1)));
      return;
    }
    const changedHeight = value + event.key;

    if (Number(changedHeight)) {
      setNewHeight(changedHeight);
    }
  }

  return (
    <div //Step: 1
      style={{
        border: "1px solid",
        width: "500px",
        height: `${newHeight}px`
      }}
    >
      <span>{width}</span>
      <br />
      <input //Step: 2
        id="textbox"
        onKeyDown={handleOnKeyDown}
        type="number"
        value={newHeight}
      />
    </div>
  );
}

export default HOC(App);

