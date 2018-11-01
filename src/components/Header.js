import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

class Header extends React.Component {

  render() {
    // destructuring to avoid repeating of this.props
    const { players, title } = this.props;
    return (
      <header>
        <Stats players={ players }/>
        <h1>{ title }</h1>
        <Stopwatch/>
      </header>
    )
  }
}

export default Header;
