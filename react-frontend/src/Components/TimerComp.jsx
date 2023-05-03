import React, { Component } from "react";

class TimerComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      shouldEnableButton: true,
    };

    this.timerId = null;
    this.handleStart = this.handleStart.bind(this);
    this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
  }

  onChangeEventHandler(event) {
    this.setState({
      time: parseInt(event.target.value),
    });
  }

  handleStart() {
    if (this.state.time <= 0) {
      return;
    }

    //disable button
    this.setState({
      shouldEnableButton: false,
    });
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }

    console.log("Button Clicked");
    this.timerId = setInterval(() => {
      this.setState({
        time: this.state.time - 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.timerId != null && this.state.time <= 0) {
      clearInterval(this.timerId);
      this.timerId = null;
      this.setState({
        shouldEnableButton: true,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Timer Component</h1>
        <h2>Time: {this.state.time}</h2>
        <input type="number" onChange={this.onChangeEventHandler} disabled={!this.state.shouldEnableButton}/>
        <br />
        <button
          onClick={this.handleStart}
          disabled={!this.state.shouldEnableButton}
        >
          Start
        </button>
      </div>
    );
  }
}

export default TimerComp;
