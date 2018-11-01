import React, { PureComponent } from 'react';
import Counter from './Counter';
// PureComponent implements a lifecycle method called shouldComponentUpdate() in the background
// checks to see if re-render is required for a component, will only call render if change
// in state or props is detected
class Player extends PureComponent {
  render() {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => this.props.remove(this.props.id) }>✖
          </button>
          {this.props.name} {this.props.lastName}
        </span>
        <Counter 
          increment={this.props.increment} 
          score={this.props.score}
          idx={this.props.idx}
        />
      </div>
    )
  }
}

export default Player;
