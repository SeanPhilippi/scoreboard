import React from 'react';

class Stats extends React.Component {
  render() {
    return (
      <span className="stats">Players: { this.props.players.length }</span>
    )
  }
}

export default Stats;
