import React,{Component} from "react";
import Childcom from "./childcom";
class Parentcom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: 'Parent', // Correctly initializing state
    };
    this.greetParent = this.greetParent.bind(this); // Binding the method
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  render() {
    return (
      <div>
        <Childcom greetParent={this.greetParent} /> {/* Passing the method as a prop */}
      </div>
    );
  }
}

export default Parentcom;
