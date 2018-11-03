import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';
// PureComponent implements a lifecycle method called shouldComponentUpdate() in the background
// checks to see if re-render is required for a component, will only call render if change
// in state or props is detected
class Player extends PureComponent {
  // 
  static propTypes = {
    increment: PropTypes.func,
    remove: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    idx: PropTypes.number,
    isHighScore: PropTypes.bool
  }

  render() {
    const { remove, id, name, lastName, increment, score, idx } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => remove(id) }>✖
          </button>
          <Icon isHighScore={this.props.isHighScore}/> {/*true or false*/}
          { name } { lastName }
        </span>
        <Counter 
          increment={ increment } 
          score={ score }
          idx={ idx }
        />
      </div>
    )
  }
}

export default Player;
