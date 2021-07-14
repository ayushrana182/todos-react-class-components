import React, { Component } from "react";
import AddTodoModal from "./AddTodoModal";

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
          <AddTodoModal
            addTodo={this.props.addTodo}
            onClose={this.closeChild }
          />
        )}
      </div>
    );
  }
}
