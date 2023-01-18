import Input from './component/Input';
import LayoutTest from './component/LayoutTest';
import { useState } from 'react';

function App() {
  const [test , setState] = useState('?');
  return (
    <div className="App">
      <Input a={setState}/>
      <LayoutTest test={<div>a</div>}/>
      <div>{test}</div>
    </div>
  );
}

export default App;
