import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  const decrement = () => (count > 0 ? setCount(count - 1) : "");

  return (
    <div className="counter"> 
    <p>{count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </div>
    );
}

export default Counter;
