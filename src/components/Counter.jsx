import { useState } from "react";


function Counter() {

 


  let [count,setCount]=useState(0)





  const increment = () => {
   setCount(count+1)
  };

  return (
    <>
      <h2>My Counter</h2>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Counter;
