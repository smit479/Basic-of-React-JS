import React,{Component} from "react";

class Welcome extends Component{
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
        const {name,heroName} =this.props
        //const {name,heroName} =this.props
        return <h1>Welcome1 {name} & {heroName}</h1>
    }
    
   

}
export default Welcome