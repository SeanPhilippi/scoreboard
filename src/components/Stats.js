import React from 'react';

const Stats = (props) => {

  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0)

  return (
    <table className="stats">
      <tr>Players: { props.players.length }</tr>
      <tr>Total Points: { totalPoints }</tr>
    </table>
  )
}

export default Stats;
