import React from 'react'

export default function ListRend1({person}) {
  return (
    <div>
    <h1>I am A React Developer</h1>
       <h1> i am{person.name} and i am {person.age} old i know {person.skill}</h1> 
    </div>
  )
}
