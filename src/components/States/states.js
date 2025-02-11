import React, { Component } from "react";

class States extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      message: "Welcome Visitor",
    };
  }
//prevState  => previous State of Component
  changeMessage() {
    this.setState((prevState) => ({
      number: prevState.number + 1, // Increment the number using prevState
      message: "Thanks for Subscribing",
    }));
  }

  render() {
    const {message,number} =this.state
    return (
      <div>
        <h1>{message}</h1>
        <h1>{number}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default States;
