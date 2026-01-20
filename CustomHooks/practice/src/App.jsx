import React,{useState} from "react";


const Child = ({ onChange }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("Incrementing from:", count);
    const newValue = count + 1;
    setCount(newValue);
    console.log("Before onChange:", newValue);
    onChange(newValue); 
    console.log("Incremented to:", newValue);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};


const App = () => {
  const handleFromChild = (value) => {
    console.log("Value from child:", value);
    
  };

  return <Child onChange={handleFromChild} />;
};

export default App;



