import React, { Component } from 'react';
import './App.css';

const stopwatchStyles = {
  border:'1px solid red',
  width:'200px',
  margin:'50px auto 0'
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="stopwatch" style={stopwatchStyles}>
          <div>Timer: <span>0</span></div>
          <button>START</button>
          <button>STOP</button>
          <button>RESET</button>
        </div>
        <div className="timer">

        </div>
      </div>
    )
  }
}

export default App;
