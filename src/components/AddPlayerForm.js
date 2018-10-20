import React from 'react';

class AddPlayerForm extends React.Component {

   state = {
      value: '', 
   }

   handleValueChange = (e) => {
      this.setState({ value: e.target.value});
   }

   handleSubmit = (e) => {
      // prevent page reload which would reset state
      e.preventDefault();
      this.props.addPlayer(this.state.value);
   }

   render() {
      console.log(this.state.value)
      return (
         <form onSubmit={this.handleSubmit}>
            <input 
               type="text"
               value={this.state.value}
               onChange={this.handleValueChange}
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