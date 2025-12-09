import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);
  function increaseNumber(){
    
    setCount(count+1);
  }



  // let count = 0;
  // function increaseNumber(){
  //   count++;
  //   const para = document.querySelector('p');
  //   para.textContent = `Counter: ${count}`;
  // }

  return(
    <>
    <p>Counter: {count}</p>
    <button onClick={increaseNumber}>Increment: {count}</button>
    </>
  )
}

export default App;