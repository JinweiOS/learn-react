import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const parentMsg = '笑死了'

const root = ReactDOM.createRoot(document.getElementById('root'))

function receive(event) {
  console.log('hello')
  console.log(event)
}

root.render(<div>
  <App msg={parentMsg}></App>
</div>)