import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class Scoreboard extends Component {
  state = {
    players: [
      {
        name: "Sean",
        last: "Philippi",
        score: 50, 
        id: 0
      },
      {
        name: "Mark",
        last: "Philippi",
        score: 35,
        id: 1
      },
      {
        name: "Tracey",
        last: "Philippi",
        score: 28,
        id: 2
      },
      {
        name: "Paul",
        last: "Philippi",
        score: 15,
        id: 3
      },
    ]
  }

  incrementScore = (change, idx) => {
    const newState = this.state;
    newState.players[idx].score += change;
    this.setState(newState);
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
      // pass in prevState to avoid mutating state, and set players to players that do not have an id matching id
      players: prevState.players.filter( p => p.id !== id)
    }))
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
            id={player.id}
            lastName={player.last}
            increment={this.incrementScore}
            idx={idx}
            remove={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

export default Scoreboard;
