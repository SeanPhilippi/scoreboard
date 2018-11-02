import React from 'react';
import PropTypes from 'prop-types';

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

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

export default Counter;
