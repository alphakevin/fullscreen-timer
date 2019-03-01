import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const pad = (n) => (n < 10)? `0${n}` : n;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      t: 0,
    }
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        t: prevState.t + 1,
      }))
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }

  render() {
    const { t } = this.state;
    const second = t % 60;
    const minute = parseInt((t - second) / 60);
    return (
      <div className="App">
        <div
          className="clock"
          onClick={() => this.toggleFullScreen()}
        >
          {pad(minute)}:{pad(second)}
        </div>
      </div>
    );
  }
}

export default App;
