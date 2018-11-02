import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stopwatch extends Component {

   state = {
      isRunning: false,
      elapsedTime: 0, // accumulated amount of time that has passed by between ticks
      previousTime: 0
   }

   static propTypes = {
      onClick: PropTypes.func,
      isRunning: PropTypes.bool,
      elapsedTime: PropTypes.number,
      previousTime: PropTypes.number
   }

   componentDidMount() {
      this.intervalId = setInterval(() => this.tick(), 100);
   }

   componentWillUnmount() {
      clearInterval(this.intervalId);
   }

   tick = () => {
      if (this.state.isRunning) {
         const now = Date.now();
         this.setState(prevState => {
            return {
               previousTime: now,
               elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }
         })
      }
   }

   handleStopWatch = () => {
      this.setState(prevState => ({
         isRunning: !prevState.isRunning
      }))
      if (!this.state.isRunning) {
         this.setState({ previousTime: Date.now() });
      }
   }

   handleReset = () => {
      this.setState({
         elapsedTime: 0
      })
   }

   render() { 
      const seconds = Math.floor(this.state.elapsedTime / 1000);

      return (
         <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{ seconds }</span>
            <button onClick={this.handleStopWatch}>
               { this.state.isRunning ? 'Stop' : 'Start' }
            </button>
            <button onClick={this.handleReset}>Reset</button>
         </div>
      )
   }
}

export default Stopwatch;