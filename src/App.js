import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class Scoreboard extends Component {
  state = {
      players: [
        {
          name: "Sean",
          score: 50, 
          id: 1
        },
        {
          name: "Mark",
          score: 35,
          id: 2
        },
        {
          name: "Tracey",
          score: 28,
          id: 3
        },
        {
          name: "Paul",
          score: 15,
          id: 4
        },
      ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="scoreboard" players={this.state.players}/>

        {/* Players list */}
        {this.state.players.map((player, idx) =>
          <Player
            name={player.name}
            score={player.score}
            key={player.id.toString()}
          />
        )}
      </div>
    );
  }
}

export default Scoreboard;
