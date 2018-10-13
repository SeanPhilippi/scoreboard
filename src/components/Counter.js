import React from 'react';

class Counter extends React.Component {

  incrementScore() {
    console.log('Hi, from inside increment');
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-decrement"> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  }
}

export default Counter;
