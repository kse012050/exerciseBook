// import Input from './component/Input';
// import LayoutTest from './component/LayoutTest';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [test , setState] = useState([
    {
      text : '왼쪽 첫번째' , 
      check : false
    },
    {
      text : '왼쪽 두번째' , 
      check : false
    }
  ]);

  const testChange = useEffect((i)=>{
   console.log('?') 
    let a = test;
    a[i].check = !a[i].check;
    console.log(a);
    setState(a)
  })

  return (
    <div className="App">
      aa
      {test.map((t , i)=>{
        return(
          <div key={i}>
            <label>{t.text}</label>
            <input type="checkbox" onChange={testChange(i)}/>
            <span>{t.check + ''}</span>
          </div>
          )
      })}
    </div>
  );
}

export default App;
