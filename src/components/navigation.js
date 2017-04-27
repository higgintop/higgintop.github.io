// Navigation emcompasses the 4 buttons (Home, Work, About, Contact)
import React, { Component } from 'react';
import NavigationButton from './navigation_button';


class Navigation extends Component {

  // method constructor
  constructor(props) {
    super(props);

    // initialize state for very first time
    this.state = {
      selectedButton: "home"
    };
  }


  // define a method/function on a class
  // always update state with 'this.setState'
  render () {
    return (
      <div className="navigation">
        <NavigationButton
          label="home"
          isSelected={this.state.selectedButton === "home"}
          onClick={() => this.handleClick("home")}
        />
        <NavigationButton
          label="work"
          isSelected={this.state.selectedButton === "work"}
          onClick={() => this.handleClick("work")}
        />
        <NavigationButton
          label="about"
          isSelected={this.state.selectedButton === "about"}
          onClick={() => this.handleClick("about")}
        />
        <NavigationButton
          label="contact"
          isSelected={this.state.selectedButton === "contact"}
          onClick={() => this.handleClick("contact")}
        />
      </div>
    );
  }

  handleClick(selectedButton) {
    this.setState({selectedButton: selectedButton});
  }
}

export default Navigation;
