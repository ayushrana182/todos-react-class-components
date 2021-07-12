import React, { Component } from "react";
import { Button, Card, Col, FormControl } from "react-bootstrap";

export default class OtherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false,
    };
  }

  render() {
    return (
      <div>
        <Col sm={{ span: 2, offset: 1 }}>
          <Button
            variant="secondary"
            onMouseOver={() => this.setState({ bool: true })}
            onClick={() => this.setState({ bool: false })}
          >
            Other Data
          </Button>
        </Col>

        {this.state.bool ? (
          <div>
            <Card
              style={{
                width: "60%",
                marginLeft: "10px",
                marginTop: "5px",
                marginBottom: "5px",
                backgroundColor: "#6c757d",
                color: "white",
              }}
            >
              <Col sm={8}>
                <Card.Body>
                  Street
                  <FormControl
                    readOnly={this.props.readOnly}
                    value={this.props.user.address.street}
                    onChange={(evt) =>
                      this.props.setUserField(
                        "address.street",
                        evt.target.value
                      )
                    }
                  />{" "}
                </Card.Body>
              </Col>
              <Col sm={8}>
                <Card.Body>
                  City:{" "}
                  <FormControl
                    readOnly={this.props.readOnly}
                    value={this.props.user.address.city}
                    onChange={(evt) =>
                      this.props.setUserField("address.city", evt.target.value)
                    }
                  />
                </Card.Body>
              </Col>

              <Col sm={8}>
                <Card.Body>
                  ZipCode:{" "}
                  <FormControl
                    readOnly={this.props.readOnly}
                    value={this.props.user.address.zipcode}
                    onChange={(evt) =>
                      this.props.setUserField(
                        "address.zipcode",
                        evt.target.value
                      )
                    }
                  />
                </Card.Body>
              </Col>
            </Card>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
