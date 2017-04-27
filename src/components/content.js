// This is the inner content that changes upon navigational button clicks
import React, { Component } from 'react';


class Content extends Component {

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
    switch (this.props.selectedButton) {
        case "home":
            return <h3>Home page content</h3>
        case "work":
            return <h3>Work content</h3>
        case "about":
            return <h3>About content</h3>
        case "contact":
            return <h3>Contact content</h3>
    }
    return (
      <div className="content-container">
        <h3>Some content</h3>
      </div>
    );
  }

}

export default Content;
