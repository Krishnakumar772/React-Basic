/*styling  React component
1 css reguler stylessheet
2 inline styling
3 css Modules
4 css in js library
*/
import React from 'react'
import './MyStyle.css';

export default function Stylesheet(props) {
  let className=props.primary?"primary":""
  return (
    <div className={`${className}   font-xl`}>Stylesheet</div>
  )
}
