import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function changeCount(count) {
  return count + 1;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount(value => value + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
