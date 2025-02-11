import React,{Component} from "react";

class childcom extends Component{

    // constructor(props){
    //     super(props)
    //     this.setState = {
    //         parentName : 'Parent'
    //     }
    //     this.greetParent = this.greetParent.bind(this)
    // }
    // greetParent(){
    //     alert(`Hello ${this.state.parentName}`)
    // }
    // Without Props
    // render(){
    //     return <h1>Hello World Class Component</h1>
    // }

    // With Props
    // render(){
    //     const {name,heroName} =this.props
    //     return <h1>Welcome {this.props.name} & {this.props.heroName}</h1>
    // }

    // Taking Specific Props
    render(){
        //const {name,heroName} =this.props
        //const {name,heroName} =this.props
        
        return <div>
            <hr></hr>
            
            <button onClick={this.props.greetParent }>Greet Parent</button>
        </div>
        
    }
    
   

}
export default childcom