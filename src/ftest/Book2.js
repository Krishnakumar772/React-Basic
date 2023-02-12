import React from 'react'
import Book3 from './Book3'

export default function Book2() {
    const persons =[
        {
            id:1,
            name:"Krishna",
            age:28,
            skill:"FullStack Developer"
        },
        {
            id:2,
            name:"Anuj",
            age:23,
            skill:"PHP Developer"
        },
        {
            id:3,
            name:"Mohit",
            age:25,
            skill:"Rajat Sharma"
        }
    ]

    //const names=["Anuj","Parnav","Pankaj","Parvati"]
    const personList=persons.map(person =>  <Book3 key={person.id} person={person} />)
  return (
    <div>
        <h1>List Rendring</h1>
    {personList}
      {/*  names.map(name =><h1>{name}</h1>)*/}
      
  
    </div>
  )
}
