import Input from './component/Input';
import LayoutTest from './component/LayoutTest';
import { useState } from 'react';

function App() {
  const [test , setState] = useState('?');
  return (
    <div className="App">
      <LayoutTest>
        <Input a={setState}/>

      </LayoutTest>
      <div>{test}</div>
    </div>
  );
}

export default App;
