import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

export class NewCakeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
    };
    this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
  }

  onChangeEventHandler(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Number of cakes - {this.props.numOfCakes}</h2>
        <button onClick={() => this.props.buyCake()}>Buy cake</button>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeEventHandler}
        />
        <br />
        <button onClick={() => this.props.buyCake(this.state.value)}>
          Buy {this.state.value} Cakes
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
