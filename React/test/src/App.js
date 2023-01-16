import Test from './component/test';
import { useState } from 'react';

function App() {
  const [test , setState] = useState('?');
  return (
    <div className="App">
      <Test a={setState}/>
      <div>{test}</div>
    </div>
  );
}

export default App;
