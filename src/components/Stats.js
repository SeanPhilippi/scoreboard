import React from 'react';
import PropTypes from 'prop-types';

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

Stats.propTypes = {
  // checks that there is an array of objects with a score prop that is a number
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}

export default Stats;
