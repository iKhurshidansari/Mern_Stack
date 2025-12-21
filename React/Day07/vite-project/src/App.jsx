import { useCallback, useMemo, useState } from 'react'
import Sum from './sum'
import Post from './post';



function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(100000);

  // function calculatePrime(){
  //   let total = 0;
  //   if(number>1)
  //     total++;

  //   for(let i =3; i<=number; i++){
  //     total++;
  //     for(let j =2; j<i;j++ ){
  //       if(i%j==0){
  //         total --;
  //         break;
  //       }
  //     }
  //   }
  //   return total;
  // }

  const handleClick = useCallback(()=>{
    console.log("Handle Click", count);
    
  },[count]);

  const prime = useMemo(()=>{
    let total = 0;
    if(number>1)
      total++;

    for(let i =3; i<=number; i++){
      total++;
      for(let j =2; j<i;j++ ){
        if(i%j==0){
          total --;
          break;
        }
      }
    }
    return total;
  },[number])

  const obj = useMemo(()=>{
    return {name: "Rohit", age:20};
  },[])

  console.log("app render");
  

  return (
    <>
     <h1>Counter: {count} </h1>
     <button onClick={()=> setCount(count+1)} >Increment</button>
     <h2>Your Current Number:{number} </h2>
     <button onClick={()=> setNumber(number+100)}>Increment Number</button>
      <h3>Total Prime Number: {prime}</h3>
      <button onClick={handleClick}>Click</button>
     <Sum number = {number}></Sum>
     <Post value={obj}> </Post>
    </>
  )
}

export default App
