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
    return (
      <div className="content-container">
        <h3>Some content</h3>
      </div>
    );
  }

}

export default Content;
