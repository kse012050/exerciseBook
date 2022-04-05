import { useState } from 'react'
import logo from './logo.svg'
import './app.css'
import Test from './component/test'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Test></Test>
      </>
  )
}

export default App
