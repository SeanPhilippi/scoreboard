import React from 'react';
import Counter from './Counter';

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <span className="player-name">
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
