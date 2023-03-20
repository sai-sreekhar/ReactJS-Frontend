import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("CallBack Value", this.state.count);
    //   }
    // );
    this.setState((prevState, props) => ({
      count: prevState.count + parseInt(props.addValue),
    }));

    // console.log(this.state.count);
  }

  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <div>
        Count = {this.state.count}
        <div>
          <button onClick={() => this.incrementCount()}>Increment</button>
        </div>
      </div>
    );
  }
}

export default Counter;
