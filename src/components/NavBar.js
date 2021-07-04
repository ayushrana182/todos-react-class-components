import React from "react";

import {
  Col,
  FormControl,
  InputGroup,
  Row,
  Button,
  Container,
} from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
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
              />
            </Col>

            <Col sm={4}>
              <Button>Add</Button>
            </Col>
          </InputGroup>
        </Row>
      </Container>
    );
  }
}

export default NavBar;
