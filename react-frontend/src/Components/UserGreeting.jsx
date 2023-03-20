import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
    this.logInHandler = this.logInHandler.bind(this);
  }

  logInHandler() {
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome Sai Sreekar</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>
    //     </div>
    //   );
    // }

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Sai Sreekar</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>{message}</div>
    //     <div>
    //       <button onClick={this.logInHandler}>Login</button>
    //     </div>
    //   </div>
    // );

    return (
      <div>
        <button onClick={this.logInHandler}>Login</button>
        {this.state.isLoggedIn ? (
          <div>Welcome Sai Sreekar</div>
        ) : (
          <div>Welcome Guest</div>
        )}
      </div>
    );
  }
}

export default UserGreeting;
