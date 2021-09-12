import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import Display from './Display'
import Header from './Header'
import Keypad from './Keypad'

function Calculator() {

  const [displayedNum, setDisplayedNum] = useState("498,345");

  return (
    <div className="calculator">
      <Header/>
      <Display value={displayedNum} />
      <Keypad />
    </div>
  )
}

export default Calculator
