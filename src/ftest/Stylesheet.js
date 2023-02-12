import React from 'react'
import "./Book.css";

export default function Stylesheet(props) {
  let className=props.primary?"primary":"";
  return (
    <div className={` ${className} secondry`} >Stylesheet</div>
  )
}

