import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/User/UserActions";

class UserContainer extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     userData: [],
  //   };
  // }

  componentDidMount() {
    console.log("Component did mount");
    this.props.fetchUsers();
  }

  render() {
    console.log("Daa", this.props.userData.users);
    return this.props.userData.loading ? (
      <h2>Loading</h2>
    ) : this.props.userData.error ? (
      <h2>{this.props.userData.error}</h2>
    ) : (
      <div>
        <h2>User List</h2>
        <div>
          {/* <p>{this.props.userData.users[0].name}</p> */}
          {this.props.userData &&
            this.props.userData.users &&
            this.props.userData.users.map((user) => <p>{user}</p>)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
