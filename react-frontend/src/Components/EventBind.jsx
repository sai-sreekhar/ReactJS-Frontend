import React, { Component } from "react";

export class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Sir",
    };
    // this.onClickHandler = this.onClickHandler.bind(this);
  }

//   onClickHandler() {
//     console.log(this);
//     this.setState({
//       message: "Good Bye Sir",
//     });
//   }

  onClickHandler = () => {
    this.setState({
      message: "Good Bye Sir",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.onClickHandler}>Click Me!!</button>
        {/* <button onClick={()=>this.onClickHandler()}>Click Me!!</button> */}
        {/* <button onClick={this.onClickHandler.bind(this)}>Click Me!!</button> */}
      </div>
    );
  }
}

export default EventBind;
