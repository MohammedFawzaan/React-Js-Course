import { useState } from "react";

const Counter = () => {
  // let [variable, method] = useState(initialValue);
  const [count, setCounter] = useState(0);
  // let counter = 15;
  let addValue = () => {
    // setCounter( updatesValue/callback )
    setCounter((prevCounter) => prevCounter + 1 );
    // setCounter( count + 1 );
  }
  let removeValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
    // setCounter( count - 1 );
  }
  return (
    <>
      <h1>Basic Counter Project</h1>
      <h2>Counter value : {count} </h2>
      <button onClick={addValue} >Add value</button>
      <button onClick={removeValue} >Remove value</button>
    </>
  )
}

export default Counter;