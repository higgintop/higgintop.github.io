import React, { Component } from 'react';

class NavigationButton extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { onClick, isSelected, label } = this.props;

    return (
      <div>
        <button
          onClick={onClick}
          className={isSelected ? "highlighted-btn" : ""}>
            {label}
        </button>
      </div>
    );
  }
}

export default NavigationButton;
