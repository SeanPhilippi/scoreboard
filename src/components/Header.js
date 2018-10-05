import React from 'react';
import PropTypes from 'prop-types'
import Stats from './Stats';

const Header = (props) => {

  return (
    <header>
      <h1>{ props.title }</h1>
      <Stats players={props.players}/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}

export default Header;
