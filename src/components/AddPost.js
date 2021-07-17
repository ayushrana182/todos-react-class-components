import React, { Component } from "react";
import AddPostModal from "./AddPostModal";

export default class AddPost extends Component {
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
          <AddPostModal
            addPost={this.props.addPost}
            onClose={this.closeChild}
          />
        )}
      </div>
    );
  }
}
