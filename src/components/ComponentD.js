import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      COMPONENT D - {countContext.count}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>
        Increment
      </button>
    </div>
  );
}

export default ComponentD;
