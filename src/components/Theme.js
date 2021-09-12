import React from 'react'

function Theme() {
  return (
    <div>
      <label for="theme" />Theme
      <input 
        type="radio" 
        name="theme" 
        value="theme-1" 
        defaultChecked="true" />
      <input 
        type="radio" 
        name="theme" 
        value="theme-2" />
      <input 
        type="radio" 
        name="theme" 
        value="theme-3" />
    </div>
  )
}

export default Theme
