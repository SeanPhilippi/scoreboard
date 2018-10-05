import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    return (
      <div className="scoreboard" initialPlayers={this.props.players}>
        <Header title="scoreboard" totalPlayers={1}/>

        {/* Players list */}
        {this.props.initialPlayers.map(player =>
          <Player
            name={player.name}
            score={player.score}
          />
        )}
      </div>
    );
  }
}

export default App;
