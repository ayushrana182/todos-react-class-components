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

class TodoCard extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usersList) => {
        this.setState({ users: usersList });
      });
  }

  constructor(props) {
    super(props);
    this.state1 = {
      filter: "",
    };
  }

  changeName = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
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
              onChange={this.changeName}
            >
              <Col sm={4}>
                <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="Search"
                />
              </Col>

              <Col sm={4}>
                <Button>Add</Button>
              </Col>
            </InputGroup>
          </Row>
        </Container>
        <Container style={{ width: "80%" }}>
          {this.state.users
            .filter((user) =>
              (user.name || user.email).includes(this.changeName)
            )
            .map((user) => (
              <Card key={user.id}>
                <Row>
                  <Col sm={8}>
                    <Card.Body>ID: {user.id}</Card.Body>
                  </Col>
                  <Col sm={8}>
                    <Card.Body>
                      Name: <FormControl readOnly value={user.name} />
                    </Card.Body>
                  </Col>

                  <Col sm={8}>
                    <Card.Body>
                      Email: <FormControl readOnly value={user.email} />
                    </Card.Body>
                  </Col>

                  <Col></Col>

                  <Row>
                    <Col sm={{ span: 2, offset: 1 }}>
                      <Button variant="secondary">Other Data</Button>
                    </Col>
                    <Col sm={{ span: 1, offset: 3 }}>
                      <Button>Update</Button>
                    </Col>

                    <Col sm={{ span: 1, offset: 2 }}>
                      <Button>Delete</Button>
                    </Col>
                  </Row>
                </Row>
              </Card>
            ))}
        </Container>
      </>
    );
  }
}

export default TodoCard;
