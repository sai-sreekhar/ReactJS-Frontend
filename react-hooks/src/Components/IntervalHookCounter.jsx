import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log("In Timer set count");
    setCount((prevCount) => prevCount + 1); //give empty dependancy
    // setCount(count+1)//give count as dependancy
  };

  useEffect(() => {
    console.log("Calling Timer");
    const interval = setInterval(tick, 1000);
    return () => {
      console.log("releasing timer");
      clearInterval(interval);
    };
  }, []);

  console.log("Before Render");
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default IntervalHookCounter;
