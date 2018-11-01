import React, { PureComponent } from 'react';
import Counter from './Counter';
// PureComponent implements a lifecycle method called shouldComponentUpdate() in the background
// checks to see if re-render is required for a component, will only call render if change
// in state or props is detected
class Player extends PureComponent {
  render() {
    const { remove, id, name, lastName, increment, score, idx } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => remove(id) }>✖
          </button>
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
