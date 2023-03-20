import React, { Component } from "react";

export default class ClassClick extends Component {
  clickHandler() {
    console.log("Button Clicked in class component");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
