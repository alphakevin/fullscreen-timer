import React, { Component } from 'react';
import clsx from 'clsx';
// import logo from './logo.svg';
import './App.css';

const pad = (n) => (n < 10)? `0${n}` : n;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      t: 0,
      paused: true,
      mode: 'stopwatch',
      fullscreen: false,
      adjusting: false,
      editing: null, // minute, second, null
      showCursor: false,
    }
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 500);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillMount() {
    clearInterval(this.timer);
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  tick() {
    const { mode, paused, showCursor, editing } = this.state;
    if (editing) {
      this.setState({ showCursor: !showCursor });
    }
    if (paused) return;
    this.setState((prevState) => {
      const t = prevState.t + (mode === 'countdown' ? -1 : 1) * 0.5;
      if (t <= 0) {
        return {
          t: 0,
          paused: true,
        }
      } else {
        return {
          t,
        }
      }
    });
  }

  toggleFullScreen = () => {
    const { fullscreen } = this.state;
    if (!fullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
    this.setState({ fullscreen: !fullscreen });
  }

  resetTimer = () => {
    this.setState({
      t: 0,
      paused: true
    });
  }

  switchMode = (mode) => {
    this.setState({
      mode: mode || (this.state.mode === 'stopwatch' ? 'countdown' : 'stopwatch'),
    })
  }

  pauseTimer = () => {
    this.setState({
      paused: !this.state.paused,
      editing: false,
    })
  }

  toggleEditing = () => {
    const { editing } = this.state;
    this.setState({
      editing: editing ? null : 'second',
    });
  }

  handleCursorMove(direction) {
    const state = { ...this.state };
    state.paused = true;
    switch (direction) {
      case 'up':
      case 'down':
        if (!state.editing) {
          state.editing = 'second';
        }
        state.t += (direction === 'up' ? 1 : -1) * (state.editing === 'second' ? 1 : 60);
        if (state.t < 0) {
          state.t = 0;
        }
        break;
      case 'left':
        state.editing = 'minute';
        break;
      case 'right':
        state.editing = 'second';
        break;
      default:
        break;
    }
    this.setState(state);
  }

  handleKeyDown = (event) => {
    switch (event.key) {
      case 'F':
      case 'f':
        this.toggleFullScreen();
        break;
      case 'R':
      case 'r':
        this.resetTimer();
        break;
      case 'S':
      case 's':
        this.switchMode();
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        this.handleCursorMove(event.key.toLowerCase().replace('arrow', ''))
        break;
      case 'Enter':
        this.toggleEditing();
        break;
      case ' ':
        this.pauseTimer();
        break;
      default:
        break;
    }
  }

  render() {
    const { t, paused, editing, mode, showCursor, fullscreen } = this.state;
    const second = parseInt(t % 60);
    const minute = parseInt((t - second) / 60);
    return (
      <div className="App">
        <div
          className={clsx('clock', { 'show-cursor': showCursor })}
          onDoubleClick={() => this.toggleFullScreen()}
        >
          <span className={clsx('time minute', { editing: editing === 'minute' })}>{pad(minute)}</span>
          :
          <span className={clsx('time second', { editing: editing === 'second' })}>{pad(second)}</span>
        </div>
        <ul className="tips">
          <li>
            <kbd onClick={this.toggleFullScreen}>F</kbd>
            -
            <span className="tip">{fullscreen ? 'exit': 'enter'} fullscreen</span>
          </li>
          <li>
            <kbd onClick={() => this.handleCursorMove('left')}>←</kbd>
            <kbd onClick={() => this.handleCursorMove('right')}>→</kbd>
            <kbd onClick={() => this.handleCursorMove('up')}>↑</kbd>
            <kbd onClick={() => this.handleCursorMove('down')}>↓</kbd>
            -
            <span className="tip">edit timer</span>
          </li>
          <li>
            <kbd onClick={this.resetTimer}>R</kbd>
            -
            <span className="tip">reset timer</span>
          </li>
          <li>
            <kbd onClick={this.switchMode}>S</kbd>
            -
            {mode === 'countdown' ?
              <span className="tip"><b>countdown</b> or <a onClick={() => this.switchMode('stopwatch')}>stopwatch</a></span>
              :
              <span className="tip"><a onClick={() => this.switchMode('countdown')}>countdown</a> or <b>stopwatch</b></span>
            }
          </li>
          <li>
            <kbd onClick={this.pauseTimer}>Space</kbd>
            -
            <span className="tip">{paused ? 'start' : 'pause'} timer</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
