import React, { Component } from "react";
import AddUserModal from "./AddUserModal";

export default class AddTodo extends Component {
  closeChild = () => {
    this.setState({
      showChild: false,
    });
  };

  constructor(...args) {
    super(...args);
    this.state = {
      showChild: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.showChild && (
          <AddUserModal
            addUser={this.props.addUser}
            onClose={this.closeChild}
          />
        )}
      </div>
    );
  }
}
