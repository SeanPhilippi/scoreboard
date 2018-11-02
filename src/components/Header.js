import React from 'react';
import PropTypes from 'prop-types';
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
// props validation using PropTypes to make debugging easier
Header.propTypes = {
  title: PropTypes.string,
  // arrayOf method to make sure it is an array of objects
  players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;
