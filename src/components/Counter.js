import React from 'react';

class Counter extends React.Component {

  render() {
    return (
      <div className="counter">
        <button 
          className="counter-decrement" 
          onClick={() => this.props.increment(-1, this.props.idx)}> - 
        </button>
        <span className="counter-score">{this.props.score}</span>
        <button 
          className="counter-increment" 
          onClick={ () => this.props.increment(1, this.props.idx) }> + 
        </button>
      </div>
    )
  }
}

export default Counter;
