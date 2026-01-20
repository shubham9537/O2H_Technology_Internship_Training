import React, { useState } from "react";
import { useDidMount } from "./hooks/useDidMount";
import { useDidUpdate } from "./hooks/useDidUpdate";
import { useWillUnmount } from "./hooks/useWillUnmount";

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);

  useDidMount(() => {
    console.log("Mounted");
  });

  useDidUpdate(() => {
    console.log("Updated");
  }, [count]);

  useWillUnmount(() => {
    console.log("Unmounted");
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Update
      </button>
    </div>
  );
};

export default LifecycleDemo;




