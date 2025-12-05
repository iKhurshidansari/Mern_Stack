

function App(){
  let count = 0;
  function increaseNumber(){
    count++;
  }
  return(
    <>
    <p>Counter: {count}</p>
    <button onClick={increaseNumber}>Increment</button>
    </>
  )
}

export default App;