/*-------------------------props--------------------------------*/
// props are input to the comopnent they are pass down  data from parent to child
// props are imutable they are value can not change

const Funct = props => {
    console.log(props);
    return(
        <div>
     <h1>Hello i am {props.name} And Hero Name {props.heroName}</h1>
    {props.children}
    </div>
    );
}

class ClassComp extends Component {
    render(){
        return(
            <div>
        <h1>Hello {this.props.name}</h1>
        {this.props.children}
        </div>
        );
    }
}
