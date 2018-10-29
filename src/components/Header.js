import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

class Header extends React.Component {

  render() {
    return (
      <header>
        <Stats players={this.props.players}/>
        <h1>{ this.props.title }</h1>
        <Stopwatch/>
      </header>
    )
  }
}

export default Header;
