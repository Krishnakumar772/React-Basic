import React from 'react'

export default function KeyIndex() {
    const names=["Krishna","Pankaj","Rohit","Pankaj"];
    const nameList=names.map((name,index) => <h1 key={index}>{index}{name}</h1>)
  return (
    <div>
    <div>{nameList}</div>
        <h1>I am A React Developer</h1>
    </div>
  )
}

// when to use index as a key
//the item in your list do not a have uniq id
//the list is a static list and will not chnage
//the list will never recorded or filtered