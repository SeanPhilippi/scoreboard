import React from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends React.Component {

   static propTypes = {
      type: PropTypes.string,
      ref: PropTypes.func,
      placeholder: PropTypes.string,
      value: PropTypes.string
   }
   // ref used so render doesn't have to be called upon every keypress
   // instead, called upon submit.  using state here was bulky vs using ref
   playerInput = React.createRef();

   handleSubmit = (e) => {
      // prevent page reload which would reset state
      e.preventDefault();
      this.props.addPlayer(this.playerInput.current.value);
      e.currentTarget.reset();
   }

   render() {
      console.log(this.playerInput);
      
      return (
         <form onSubmit={this.handleSubmit}>
            <input 
               type="text"
               ref={this.playerInput}
               placeholder="Enter a player's name"
            />

            <input 
               type="submit"
               value="Add Player"
            />
         </form>
      )
   }
}

export default AddPlayerForm;