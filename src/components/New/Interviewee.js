import React, { Component } from "react";
import Header from "../../components/Header";
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Fa,
  Card,
  CardBody
} from "mdbreact";
const pStyle = {
  padding: "0px"
};

class Interviewee extends Component {
  state = {
    name: "",
    company: "",
    email: "",
    phoneNumber: "",
    experience: 0,
    ctc: 0,
    ectc: "",
    recruitedBy: "",
    reason: ""
  };

  submitApplicant = () => {
    var data = {
      id: parseInt(Math.random() * 10000),
      name: this.state.name,
      company: this.state.company,
      experience: this.state.experience,
      technology: "",
      phoneNumber: this.state.phoneNumber
    };

    this.fetch(`http://localhost:3500/applicant`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => {
      console.log(res);
    });
  };

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(url, {
      headers,
      ...options
    }).then(response => response.json());
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Applicant</p>
                  <div className="grey-text">
                    <Input
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <Input
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <Input
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <Input
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit">
                      Register
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Interviewee;
