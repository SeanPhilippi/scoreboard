import React from 'react';

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-increment"> + </button>
    </div>
  )
}

export default Counter;
