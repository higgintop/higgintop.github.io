import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation';
import Content from './components/content';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedButton: "home"
    };
  }

  render () {
    console.log("STATE", this.state)
    return (
      <div className="main-container">
        <Navigation
          selectedButton={this.state.selectedButton}
          onButtonSelect={(selectedButton) => this.setState({selectedButton})} />
        <Content
          selectedButton={this.state.selectedButton} />
      </div>
    );
  }
}
// 2. Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
