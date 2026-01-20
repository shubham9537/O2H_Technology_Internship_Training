// const App = () => {
//   const handleFromChild = (value) => {
//     console.log("Value from child:", value);
//   };

//   return <Child onChange={handleFromChild} />;
// };

// export default App;



// import { useState } from "react";

// const Child = ({ onChange }) => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     const newValue = count + 1;
//     setCount(newValue);
//     onChange(newValue); // send data to parent
//   };

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default Child;
