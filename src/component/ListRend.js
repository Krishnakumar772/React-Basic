/*--------------------------List Randring------------------*/
// MAP Method
//the map method to quickly  iterate over an array and return new array
//  key is a special attribute you need to include when creating a list of elemnt 
//why
// key helps react identifie which item in a list have chnaged or addedd or remove
/*
import React from 'react'

export const ListRend = () => {
    const  names=["Krishna", "Rohit","Raman",]
  return (
    <div>ListRend
    {
        names.map(name => <h1>{name}</h1>)
    }
    </div>
  )
}


import React from 'react'

export const ListRend = () => {
    const  names=["Ranja", "Rohit","Raman",]
    const ListName=names.map(name =><h1>{name}</h1>)
  return (
    <div>ListRend
    {ListName}
    </div>
  )
}
*/
import React from 'react'
import ListRend1 from './ListRend1'

export const ListRend = () => {
    const persons = [
        {
            id:1,
            name:"Krishna",
            age:24,
            skill:"Raact"
        },
        {
            id:2,
            name:"Rahul Sharma",
            age:23,
            skill:"Anguler"
        },
        {
            id:3,
            name:"Robin Panvar",
            age:34,
            skill:"Java"
        }

    ]
    const personList =persons.map(person =>(
        <ListRend1 key={person.id} person={person}/>
    ))
  return (
    <div>ListRend
    {personList}
    </div>
  )
}


