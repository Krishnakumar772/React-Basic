import React, { Component } from 'react'

export class Book1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggin:false
      }
    }
  render() {
    return(
        this.state.isLoggin?<div>Welcome Krishna</div>:<div>Welcome Anuj</div>
    )
    /*
    let message

    if(this.state.isLoggin){
        message=<div>welcome Krishna</div>
    }else{
        message=<div>welcome Anuj</div>
    }
    return(
        <div>{message}</div>
    )
    */
    /*
    if(this.state.isLoggin){
        return(
            <div>
             <h1>Welcome Krishna</h1>
           </div>
          )
    }else{
        return (
                <div>
                 <h1>Welcome Krishna</h1>
               </div>
              )
          
    }*/
   
}

}

export default Book1