import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, place, children } = this.props;
    return (
      <div>
        <h1>
          Welcome {name} to {place}
        </h1>
        {children}
      </div>
    );
  }
}

export default Welcome;
