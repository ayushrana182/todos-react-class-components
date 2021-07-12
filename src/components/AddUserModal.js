import React, { Component } from "react";
import { Button, Card, FormControl, Row } from "react-bootstrap";

export default class AddUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
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
            Add New User
          </Card.Title>
          <Card.Body>
            Name:{" "}
            <FormControl
              onChange={(evt) =>
                this.setState({
                  ...this.state,
                  name: evt.target.value,
                })
              }
              value={this.state.name}
              placeholder="Enter a Name"
            />
          </Card.Body>

          <Card.Body>
            Email:{" "}
            <FormControl
              onChange={(evt) =>
                this.setState({
                  ...this.state,
                  email: evt.target.value,
                })
              }
              value={this.state.email}
              placeholder="Enter an Email"
            />
          </Card.Body>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
            <Button onClick={() => this.props.addUser(this.state)}>Add</Button>
            <Button variant="danger" onClick={this.props.onClose}>
              Cancel
            </Button>
          </Row>
        </Card>
      </div>
    );
  }
}
