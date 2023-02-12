import React from 'react'

export default function ChildMethod(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('child')}>Click Me</button>
    </div>
  )
}
