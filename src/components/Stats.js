import React from 'react';

class Stats extends React.Component {

  render() {
    const { players } = this.props;
    const totalPoints = players.reduce((total, player) => {
      return total + player.score;
    }, 0)

    return (
      <table className="stats">
        <tbody>
          <tr>Players: { players.length }</tr>
          <tr>Total Points: { totalPoints }</tr>
        </tbody>
      </table>
    )
  }
}

export default Stats;
