import React, { Component } from "react";
import { Button, Card, FormControl, Row } from "react-bootstrap";

let id = 0;

export default class AddTodoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
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
              marginTop: "10px"
            }}
          >
            Add New Todo
          </Card.Title>
          <Card.Body>
            Title:{" "}
            <FormControl
              onChange={(evt) =>
                this.setState({
                  ...this.state,
                  title: evt.target.value
                })
              }
              value={this.state.title}
              placeholder="Enter a Title"
            />
          </Card.Body>

          <Row
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "10px"
            }}
          >
            <Button
              onClick={() =>
                this.props.addTodo({
                  ...this.state,
                  completed: false,
                  id: id++
                })
              }
            >
              Add
            </Button>

            <Button variant="danger" onClick={this.props.onClose}>
              Cancel
            </Button>
          </Row>
        </Card>
      </div>
    );
  }
}
