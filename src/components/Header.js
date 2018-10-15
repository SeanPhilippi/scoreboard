import React from 'react';
import Stats from './Stats';

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>{ this.props.title }</h1>
        <Stats players={this.props.players}/>
      </header>
    )
  }
}

export default Header;
