import React, { useState, useEffect } from "react";

// React Test Step: 3
export default function HOC(Component) {
  return function Child() {
    const [height, setHeight] = useState();

    // calls ‘setDivHeight’ function
    useEffect(() => {
      setHeight(window.setDivHeight(20));
    }, []);

    return <Component height={height} />;
  };
}

