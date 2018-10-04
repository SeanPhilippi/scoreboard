import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {

  render() {
    return (
      <div className="scoreboard">
        <Header title="scoreboard" totalPlayers={1}/>
        <Player/>
      </div>
    );
  }
}

export default App;
