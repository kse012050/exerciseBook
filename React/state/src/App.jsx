// import './App.css';

import { useCallback, useEffect, useState } from "react";

function App() {
  let numberTest = 0;
  const [number , setNumber] = useState(0);
  console.log('랜더링 테스트');
  console.log(number);
  console.log(numberTest);
  // const clickEvent = ()=>{
  //   number = number + 1;
  //   console.log(number);
  // }
  // function clickEvent(){
  //   setNumber(number + 1);
  // }

  const clickEvent = useCallback(()=>{
    // number = number + 1;
    // console.log(number);
    numberTest += numberTest;
    setNumber(number + 1);
  },[number])
  return (
    <div className="App">
      <div> number :  {number}</div>
      <div> numberTest :  {numberTest}</div>
      <button onClick={clickEvent}>증가</button>
    </div>
  );
}

export default App;
