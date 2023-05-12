import React, { useCallback, useState } from 'react';

export default function State() {
    let numberTest = 0;
    const [number , setNumber] = useState(0);
    console.log('랜더링 테스트');
  
    const clickEvent = useCallback(()=>{
      numberTest += numberTest;
      setNumber(number + 1);
    },[number])
    return (
      <div className="App">
        <div> number :  {number}</div>
        <div> numberTest :  {numberTest}</div>
        <button onClick={clickEvent}>증가</button>
        <h2>React 함수형 프로그래밍!</h2>
        <p>
          즉, 새로고침이나 기능을 실행시키면 함수를 다시 호출한다 <br/>
          그렇기 떄문에 변수가 다시 선언된다<br/>
          그래서 numberTest를 증가 시켜도 0으로 다시 선언하기 때문에 0으로 고정되기 때문에<br/>
          변수를 쓸 때는 useState를 사용 하는 것이다<br/>
        </p>
      </div>
    )
}

