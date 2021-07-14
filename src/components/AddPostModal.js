import React, { Component } from "react";
import { Button, Card, FormControl, Row } from "react-bootstrap";

export default class AddUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }
  render() {
    return (
      <div>
        <Card border="primary">
          <Card.Title
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            Add New Post
          </Card.Title>
          <Card.Body>
            Title:{" "}
            <FormControl
              onChange={(evt) =>
                this.setState({
                  ...this.state,
                  title: evt.target.value,
                })
              }
              value={this.state.title}
              placeholder="Some Title"
            />
          </Card.Body>

          <Card.Body>
            Body:{" "}
            <FormControl
              onChange={(evt) =>
                this.setState({
                  ...this.state,
                  body: evt.target.value,
                })
              }
              value={this.state.body}
              placeholder="Some Body"
            />
          </Card.Body>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
            <Button onClick={() => this.props.addPost(this.state)}>Add</Button>
            <Button variant="danger" onClick={this.props.onClose}>
              Cancel
            </Button>
          </Row>
        </Card>
      </div>
    );
  }
}
