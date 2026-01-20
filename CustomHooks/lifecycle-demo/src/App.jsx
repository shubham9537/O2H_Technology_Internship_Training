import { useState } from "react";
import LifecycleDemo from "./LifecycleDemo";

function App() {
  const [show, setShow] = useState(true);
  console.log("App Rendered. Show is:", show);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Component
      </button>

      {show && <LifecycleDemo />}
    </div>
  );
}

export default App;




// import { useState } from "react";

// const Child = ({ count, onIncrement }) => {
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={onIncrement}>Increment</button>
//     </div>
//   );
// };


//2
// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prev => prev + 1); 
//   };

//   return (
//     <div>
//       <Child count={count} onIncrement={increment} />
//     </div>
//   );
// };

// export default App;

