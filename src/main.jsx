import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

function updateTime() {
  const ele = (
    <div>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  )
  root.render(ele)
}

setInterval(() => {
  updateTime()
}, 1000)
