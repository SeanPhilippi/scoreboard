import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class Scoreboard extends Component {
  state = {
    players: [
      {
        name: "Sean",
        last: "Philippi",
        score: 50, 
        id: 1
      },
      {
        name: "Mark",
        last: "Faire",
        score: 35,
        id: 2
      },
      {
        name: "Tracey",
        last: "Miller",
        score: 28,
        id: 3
      },
      {
        name: "Paul",
        last: "Rankin",
        score: 15,
        id: 4
      },
    ]
  }

  // player id counter
  prevPlayerId = 4;

  incrementScore = (change, idx) => {
    const newState = this.state;
    newState.players[idx].score += change;
    this.setState(newState);
  }

  // handleAddPlayer = (name) => {
  //   const newPlayer = {
  //     name: name,
  //     score: 0,
  //     id: this.prevPlayerId += 1
  //   }
  //   this.setState(prevState => ({
  //     players: prevState.players.push(newPlayer)
  //   }))
  // }

  // name is this.state.value which was received via handleValueChange() in onChange attribute
  // of input element and passed down to AddPlayerForm element's addPlayer prop
  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    })
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
        <Header players={this.state.players} />

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

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default Scoreboard;
