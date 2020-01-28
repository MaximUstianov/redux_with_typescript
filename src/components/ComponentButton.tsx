import React from 'react'
import '../index.css'

interface ButtonProps {
  getColor: any,
}

const ComponentButton: React.FC<ButtonProps> = props => {
  return (
    <div>
      <button onClick={props.getColor}>Click me!</button>
    </div>
  )
}
export default ComponentButton
