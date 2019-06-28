import React, { Component } from 'react';
import './App.css';


const stopwatchStyles = {
  border:'1px solid red',
  width:'200px',
  margin:'50px auto 0'
}

const countDownStyles = {
  border:'1px solid blue',
  width:'200px',
  margin:'50px auto 0'
}

class App extends Component {
  state = {
    timer: 0,
    startWatch: null,
    countDown: 0,
    countDownTimer: 0,
    startCountDown: false
  }

  handleChange(e){
    e.preventDefault();
    this.setState({countDown: e.target.value});
  }

  handleClickStopwatch = (e, buttonType) => {
    e.preventDefault();
    let time = this.state.timer;

    if(buttonType === 'start'){
      this.startWatch = setInterval(()=>{
        time++
        this.setState({timer:time})
      },1000);
    } else if(buttonType === 'stop'){
      clearInterval(this.startWatch)
    } else {
      clearInterval(this.startWatch)
      time = 0;
    }
    this.setState({timer:time})
  }

  handleClickTimer = (e, buttonType) => {
    e.preventDefault();
    let countDownTimer = this.state.countDown;

    if(buttonType === 'start'){
      this.setState({startCountDown:true})
      this.startWatch = setInterval(()=>{
        countDownTimer--;
        this.setState({countDown: countDownTimer})
      },1000);
    } else if(buttonType === 'stop'){
      clearInterval(this.startWatch)
    } else {
      clearInterval(this.startWatch)
      countDownTimer = 0;
      this.setState({
        startCountDown: false,
        countDown:countDownTimer
      })
    }
  }

  render(){
    const { timer, countDown, startCountDown } = this.state;

    let setImage = 'imageStyle';

    if(countDown <= 0 && startCountDown === true){
      clearInterval(this.startWatch)
      setImage += ' show';
    } else {
      setImage = 'imageStyle'
    }

    return (
      <div className="App">
        <div className="stopwatch" style={stopwatchStyles}>
          <div>Timer: { timer }</div>
          <button onClick={(e) => this.handleClickStopwatch(e,'start')}>START</button>
          <button onClick={(e) => this.handleClickStopwatch(e,'stop')}>STOP</button>
          <button onClick={(e) => this.handleClickStopwatch(e,'reset')}>RESET</button>
        </div>
        <div className="timer" style={countDownStyles}>
          <div>Timer: {countDown}</div>
          <img className={setImage} src="https://media.giphy.com/media/qi29MoLjWNPUI/giphy.gif" alt='Count Down'/>
          <input type='text' name="counter" onChange={this.handleChange.bind(this)}/><br/>
          <button onClick={(e) => this.handleClickTimer(e,'start')}>START</button>
          <button onClick={(e) => this.handleClickTimer(e,'stop')}>STOP</button>
          <button onClick={(e) => this.handleClickTimer(e,'reset')}>RESET</button>
        </div>
      </div>
    )
  }
}

export default App;
