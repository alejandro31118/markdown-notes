import React, { useState } from 'react'
import './app.css'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <p>Hello React, goodbye Vue</p>
        <p>
          <button onClick={() => setCount(prev => prev + 1)}>Increase count: {count}</button>
        </p>
      </header>
    </div>
  )
}

export default App
