import React from 'react';

class Counter extends React.Component {

  render() {
    const { increment, idx, score } = this.props;
    return (
      <div className="counter">
        <button 
          className="counter-decrement" 
          onClick={ () => increment(-1, idx) }> - 
        </button>
        <span className="counter-score">{ score }</span>
        <button 
          className="counter-increment" 
          onClick={ () => increment(1, idx) }> + 
        </button>
      </div>
    )
  }
}

export default Counter;
