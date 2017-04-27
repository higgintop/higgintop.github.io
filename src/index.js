import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation';
import Content from './components/content';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="main-container">
        <Navigation />
        <Content />
      </div>
    );
  }
}
// 2. Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
