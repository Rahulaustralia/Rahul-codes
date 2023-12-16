import React, { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  let [togell, setTogell] = useState(false);

  useEffect(() => {
    let time;
    if (togell) {
      time = setInterval(() => {
        setCount((value) => value + 1);
      }, 50);
    }
    return () => clearInterval(time);
  }, [togell]);

  function handleStart() {
    setTogell(true);
  }

  function handleStop() {
    setTogell(false);
  }

  function handleReset() {
    window.location.reload();
  }

  return (
    <div>
      <div>
        <div className="border border-danger w-50 p-5 m-auto mt-5 rounded">
          <h1 style={{ textAlign: "center" }}>{count}</h1>
          <button
            className="btn btn-success w-25 "
            onClick={handleStart}
            disabled={togell}
          >
            start
          </button>
          <button
            className="btn btn-danger w-25 m-5"
            onClick={handleStop}
            disabled={!togell}
          >
            stop
          </button>
          <button className="btn btn-info w-25" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
