import React from 'react'
import Button from './Button'

function Keypad() {
  return (
    <div className="keypad">
      <div className="key-row">
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="del" />
      </div>
      <div className="key-row">
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="+" />
      </div>
      <div className="key-row">
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="-" />
      </div>
      <div className="key-row">
        <Button label="." />
        <Button label="0" />
        <Button label="/" />
        <Button label="x" />
      </div>
      <div className="key-row">
        <Button label="Reset" />
        <Button label="=" />
      </div>
    </div>
  )
}

export default Keypad
