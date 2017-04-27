// Navigation emcompasses the 4 buttons (Home, Work, About, Contact)
import React, { Component } from 'react';
import NavigationButton from './navigation_button';


class Navigation extends Component {

  // method constructor
  constructor(props) {
    super(props);

    // // initialize state for very first time
    // this.state = {
    //   selectedButton: "home"
    // };
  }


  // define a method/function on a class
  // always update state with 'this.setState'
  render () {
    console.log("PROPS", this.props);
    return (
      <div className="navigation">
        <NavigationButton
          label="home"
          isSelected={this.props.selectedButton === "home"}
          onButtonSelect={this.props.onButtonSelect}
        />
        <NavigationButton
          label="work"
          isSelected={this.props.selectedButton === "work"}
          onButtonSelect={this.props.onButtonSelect}
        />
        <NavigationButton
          label="about"
          isSelected={this.props.selectedButton === "about"}
          onButtonSelect={this.props.onButtonSelect}
        />
        <NavigationButton
          label="contact"
          isSelected={this.props.selectedButton === "contact"}
          onButtonSelect={this.props.onButtonSelect}
        />
      </div>
    );
  }

  handleClick(selectedButton) {
    this.setState({selectedButton: selectedButton});
  }
}

export default Navigation;
