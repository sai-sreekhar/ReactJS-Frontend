import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sai Sreekar",
    };
    console.log("LifecycleB Constructor");
    this.changeState = this.changeState.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  changeState() {
    this.setState({
      name: "Sai",
    });
  }

  render() {
    console.log("LifecycleB render");
    return (
      <div>
        <button onClick={this.changeState}> Change State B</button>
        <h1>LifecycleB</h1>
      </div>
    );
  }
}

export default LifecycleB;
