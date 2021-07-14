import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";


export default class Todo extends Component {

  render() {
    
    return (
      <div>
        <Card >
          <Card.Body>
            {" "}
            <h5> Title:</h5> {this.props.todo.title}
          </Card.Body>

          <Card.Body>
            {" "}
            <h5> Completed: </h5>{" "}
            {this.props.todo.completed === false ? (
              <>
                {" "}
                <Card.Footer >
                  This task is incomplete.{" "}
                  <Button variant="success" data-id={this.props.todo.id} onClick={this.props.handleMarkTodoCompleted}>Mark Complete</Button>

                </Card.Footer>
              </>
            ) : (
              <>
                <Card.Footer>This task is completed.</Card.Footer>{" "}
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
