import React, { Component } from "react";
//import { Button } from "antd";

// A placeholder Category2 component
const Category2 = () => <div>Category 2 Component</div>;

class ClassClick extends Component {
  state = {
    activeCategory: 0,
  };

  // Each time the button is clicked, it will increment the activeCategory
  handleNextCatClick = () => {
    this.setState((prevState) => ({
      activeCategory: prevState.activeCategory + 1,
    }));
  };

  renderCategory = () => {
    const { activeCategory } = this.state; // Destructure state
    switch (activeCategory) {
      case 0:
        return <Category2 />;
      // Add more cases like case 1, case 2, etc., as needed
      case 1:
        return <div>Category 1 Component</div>;
      default:
        return null;
    }
  };

  renderNextCatButton = () => {
    return (
      <div>
        
        <button type="primary" onClick={this.handleNextCatClick}>
          Next Category
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <hr></hr>
        
        {this.renderCategory()}
        <br></br>
        {this.renderNextCatButton()}
      </div>
    );
  }
}

export default ClassClick;
