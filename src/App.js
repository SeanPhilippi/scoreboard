import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {
  state = {
      players: [
        {
          name: "Sean",
          score: 50
        },
        {
          name: "Mark",
          score: 35
        },
        {
          name: "Tracey",
          score: 28
        },
        {
          name: "Paul",
          score: 15
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
            key={idx}
          />
        )}
      </div>
    );
  }
}

export default App;
