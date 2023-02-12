import React from 'react';
/*
function Funct(){
    return <h1>Hello This is Krishna</h1>
}
Funct()
*/
const Funct = props => {
    console.log(props);
    return(
        <div>
     <h1>Hello i am {props.name} And Hero Name {props.heroName}</h1>
    {props.children}
    </div>
    );
}

export default Funct;

// functional comonent are just javascript function that accept input of property and return html describe ui
//they can optionally recive  properties and obj and return jsx

//