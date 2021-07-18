import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { set } from "lodash";

import AddUser from "./AddUser";
import Todos from "./TodosAndPosts";
import OtherData from "./OtherData";

class TodoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      users: [],
      bool: false,
      add: false,
      selectedTodo: null,
      selectedUser: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ ...this.state, users });
      });
  }

  setUserField(id, field, value) {
    this.setState({
      ...this.state,
      users: this.state.users.map((u) => {
        const newUser = {
          ...u,
        };
        if (u.id === id) {
          set(newUser, field, value);
        }
        return newUser;
      }),
    });
  }

  addUser(user) {
    this.setState({
      ...this.state,
      add: false,
      users: [...this.state.users, user],
    });
  }

  toggleEditable(id) {
    this.setState({
      ...this.state,
      users: this.state.users.map((u) => ({
        ...u,
        editable: u.id === id ? !u.editable : u.editable,
      })),
    });
  }

  removeUser(id) {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  }

  render() {
    const searchQuery = this.state.filter.toLowerCase();

    return (
      <>
        <Container>
          <Row>
            <InputGroup
              size="sm"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 19,
              }}
            >
              <Col sm={4}>
                <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="Search"
                  value={this.state.filter}
                  onChange={(evt) =>
                    this.setState({
                      ...this.state,
                      filter: evt.target.value,
                    })
                  }
                />
              </Col>

              <Col sm={4}>
                <Button onClick={() => this.setState({ add: true })}>
                  Add
                </Button>
              </Col>
            </InputGroup>
          </Row>
        </Container>
        <Container style={{ width: "80%" }}>
          {this.state.add ? (
            <AddUser addUser={(user) => this.addUser(user)} />
          ) : (
            <> </>
          )}
          {this.state.users
            .filter(
              (user) =>
                user.email.toLowerCase().includes(searchQuery) ||
                user.name.toLowerCase().includes(searchQuery)
            )
            .map((user) => (
              <Card
                border="danger"
                key={user.id}
                style={{ marginTop: 5, marginBottom: 5 }}
              >
                <Row>
                  <Col sm={3}>
                    <Card.Body>ID: {user.id}</Card.Body>
                  </Col>
                  <Col sm={3} style={{ marginTop: "10px" }}>
                    <Button
                      onClick={() =>
                        this.setState({
                          ...this.state,
                          selectedUser:
                            user === this.state.selectedUser ? null : user,
                        })
                      }
                    >
                      Select
                    </Button>
                  </Col>
                  <Col sm={8}>
                    <Card.Body>
                      Name:{" "}
                      <FormControl
                        readOnly={!user.editable}
                        value={user.name}
                        onChange={(evt) =>
                          this.setUserField(user.id, "name", evt.target.value)
                        }
                      />
                    </Card.Body>
                  </Col>

                  <Col sm={8}>
                    <Card.Body>
                      Email:{" "}
                      <FormControl
                        readOnly={!user.editable}
                        value={user.email}
                        onChange={(evt) =>
                          this.setUserField(user.id, "email", evt.target.value)
                        }
                      />
                    </Card.Body>
                  </Col>

                  <Row>
                    <Col></Col>
                  </Row>
                  <Col sm={8}>
                    <OtherData
                      setUserField={(field, value) =>
                        this.setUserField(user.id, field, value)
                      }
                      user={user}
                      readOnly={!user.editable}
                    />
                  </Col>
                  <Row>
                    <Col
                      sm={{ span: 1, offset: 4 }}
                      style={{ marginRight: "15px" }}
                    >
                      <Button onClick={() => this.toggleEditable(user.id)}>
                        Update
                      </Button>
                    </Col>

                    <Col sm={{ span: 1, offset: 2 }}>
                      <Button onClick={() => this.removeUser(user.id)}>
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  {this.state.selectedUser === user && (
                    <Todos user={user} users={this.state.users} />
                  )}
                </Row>
              </Card>
            ))}
        </Container>
      </>
    );
  }
}

export default TodoCard;
