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
import PropTypes from "prop-types";
import Highlight from "react-highlight";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from "material-ui/DatePicker";
import ReactMaterialSelect from "react-material-select";
import "react-material-select/lib/css/reactMaterialSelect.css";

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
    reason: "",
    value: "pomsky"
  };

  componentDidMount() {
    let datePickerHr = document
      .querySelector(".datepicker-wrapper")
      .getElementsByTagName("hr")[0];
    datePickerHr.style.border = "none";
  }

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
  getSelectValue = value => {
    console.log(value);
  };
  render() {
    const options = [
      {
        label: "Pomsky",
        value: "pomsky"
      },
      {
        label: "Golden Doodle",
        value: "goldenDoodle",
        disabled: true
      }
    ];

    return (
      <Row className="row justify-content-md-center">
        <Col md="8">
          <Card>
            <CardBody>
              <form>
                <p className="h4 text-center py-4">Applicant</p>
                <div className="row">
                  <div className="col-md-6">
                    <Input type="text" label="Name" />
                  </div>
                  <div>
                    <div className="md-form">
                      <MuiThemeProvider>
                        <div className="datepicker-wrapper">
                          <DatePicker
                            style={{
                              borderBottom: "1px solid #bdbdbd",
                              height: "3rem"
                            }}
                            id="datepicker"
                            textFieldStyle={{ width: "100%" }}
                            hintText="DOB"
                            label="DOB"
                          />
                        </div>
                      </MuiThemeProvider>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Input type="text" label="Native Place" />
                  </div>
                  <div className="col-md-6">
                    <Input type="text" label="Highest Qualification" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <Input label="University" />
                  </div>

                  <div className="col-md-4">
                    <Input label="Year" />
                  </div>

                  <div className="col-md-4">
                    <Input label="Score %" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      type="textarea"
                      label="Current Location and Distance"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ReactMaterialSelect
                      label="Choose favourite film character"
                      resetLabel="None of them"
                      onChange={this.callbackFunction2}
                    >
                      <option dataValue="Pulp Fiction">Vincent Vega</option>
                      <option dataValue="Star Wars">Darth Vader</option>
                      <option dataValue="Lord Of The Rings">
                        Bilbo Baggins
                      </option>
                      <option dataValue="Terminator">Terminator</option>
                      <option dataValue="The Godfather">Vito Corleone</option>
                    </ReactMaterialSelect>
                  </div>
                  <div className="col-md-6" />
                </div>
                <div className="text-center">
                  <Button>Submit</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Interviewee;
