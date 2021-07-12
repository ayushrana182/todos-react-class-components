import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  Row,
} from "react-bootstrap";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => {
        this.setState({ ...this.state, todos });
      });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        this.setState({ ...this.state, posts });
      });
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col sm={5}>
            <Card style={{ marginLeft: "40px" }}>
                <Card.Title
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  Todos:
                </Card.Title>
                <Button>Add</Button>

                {this.state.todos
                  .filter((p) => this.props.user.id === p.userId)
                  .map((todo) => (
                    <div>
                      <Card>
                        <Card.Body>Title: {todo.title}</Card.Body>

                        <Card.Body>Completed: {todo.completed.toString()}</Card.Body>

                        {/* <div>User name: {this.props.users.find(({ id }) => id === post.userId)?.name}</div> */}

                        <Card.Footer>
                          <Button variant="success">Mark Completed</Button>
                        </Card.Footer>
                      </Card>
                    </div>
                  ))}
              </Card>
            </Col>

            <Col sm={5}>
              <Card style={{ marginLeft: "40px" }}>
                <Card.Title
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  Posts:
                </Card.Title>
                <Button>Add</Button>

                {this.state.posts
                  .filter((p) => this.props.user.id === p.userId)
                  .map((post) => (
                    <div>
                      <Card>
                        <Card.Body>Title: {post.title}</Card.Body>

                        <Card.Body>Body: {post.body}</Card.Body>

                        {/* <div>User name: {this.props.users.find(({ id }) => id === post.userId)?.name}</div> */}

                      </Card>
                    </div>
                  ))}
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Todo;
