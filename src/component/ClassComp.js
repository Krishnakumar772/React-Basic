// class componet are basically es6 classes
// class comp optinally recive props and reeturn html
// class comp also maintain private internal state



import React,{Component} from 'react';

class ClassComp extends Component {
    render(){
        
        const {name,heroName}=this.props
        //const {state1,state2}=this.state
        return(
            <div>
        <h1>Hello {name} and {heroName}</h1>
        {/*{this.props.children}*/}
        </div>
        );
    }
}

export default ClassComp;


// Class Component and Functional Component

//Functional Component


// Functional comp is a simple function
//Use Func component as much as possible
//Absence of this keyword
//Solution without using state
//Mainaly responsible for ui
// statelesss/Dumb/Presentational


//class Component
//More feaature rich
//Maintain their own private data-state
//Complex UI logic
//Provide lifecycle hook
// Stataful/Smart/Container