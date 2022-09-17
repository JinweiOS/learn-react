import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import './App.css'
import Hello from './components/hello'

const msg = '粮草'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  receive(event) {
    console.log('hahah', event)
  }

  render() {
    return (
      <Hello handleClick={this.receive.bind(this)}></Hello>
    )
  }
}

export default App
