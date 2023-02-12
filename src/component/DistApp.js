/*------------------Distructing-------------------------------*/
// Dist have es6 Feature
// improve more code readblity
// the first way distructring in the parameter itself
// the second way ditructing in function body






import React from 'react';

const DistApp = (/*{name,heroName}*/ props )=> {
    const {name,heroName}=props;
    return(
        <div>
     <h1>Hello i am {name} And Hero Name {heroName}</h1>
   
    </div>
    );
}
export default DistApp;


// class ClassComp extends Component {
//     render(){
        
//         const {name,heroName}=this.props
//         const {state1,state2}=this.state
//         return(
//             <div>
//         <h1>Hello {name} and {heroName}</h1>
//         {/*{this.props.children}*/}
//         </div>
//         );
//     }
// }

//export default ClassComp;

