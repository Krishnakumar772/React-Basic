// jsx is a XML like syntax extension to Ecmascript Basically it just Provide syntactic sugar
// for the React CreateElement() function
//jsx nither string nor html
// jsx tag have tagName,attribute and children
// jsx makes your code similer and elegent

import React from 'react'

export const Jsxcom = () => {
  /*return (
    <div><h1>Hello i am learning jsx, jsx is nither string not html</h1></div>
  )
  */
 return React.createElement("div",null,React.createElement("h1",null,"Hello Visvash"))
}

// JSX differnce
//class->clasName
//for ->htmlFor
//camel case property naming convetion
//onclick->onClick