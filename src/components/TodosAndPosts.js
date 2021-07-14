import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  Row,
} from "react-bootstrap";
import React from "react";
import Todo from "./Todo";
import Post from "./Post";
import AddTodo from "./AddTodo";
import AddPost from "./AddPost";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      posts: [],

      addTodo: false,
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

  addPost(post) {
    this.setState({
      ...this.state,
      addPosts: false,
      posts: [...this.state.posts, post],
    });
  }

  addTodo(todo) {
    this.setState({
      ...this.state,
      addTodos: false,
      todos: [...this.state.todos, todo],
    });
  }

  handleMarkTodoCompleted = (e) => {
    const todoId = parseInt(e.currentTarget.dataset.id, 10);

    this.setState((currentState) => ({
      todos: currentState.todos.map((todo) => {
        if (todo.id === todoId) {
          console.log("found todo ", todo.id);
          return { ...todo, completed: true };
        }
        return todo;
      }),
    }));
  };

  render() {
    return (
      <>
        <Container style={{ marginTop: "10px" }}>
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
                <Button
                  onClick={() =>
                    this.setState({
                      ...this.state,
                      addTodos: !this.state.addTodos,
                    })
                  }
                >
                  Add a new Todo
                </Button>
                {this.state.addTodos && (
                  <AddTodo addTodo={(todo) => this.addTodo(todo)} />
                )}

                {this.state.todos
                  .filter((p) => this.props.user.id === p.userId)
                  .map((todo) => (
                    <Todo
                      todo={todo}
                      key={todo.id}
                      handleMarkTodoCompleted={this.handleMarkTodoCompleted}
                    />
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
                <Button
                  onClick={() =>
                    this.setState({
                      ...this.state,
                      addPosts: !this.state.addPosts,
                    })
                  }
                >
                  Add a new Post
                </Button>
                {this.state.addPosts && (
                  <AddPost addPost={(post) => this.addPost(post)} />
                )}

                {this.state.posts
                  .filter((p) => this.props.user.id === p.userId)
                  .map((post) => (
                    <Post post={post} key={post.id} />
                  ))}
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Todos;
