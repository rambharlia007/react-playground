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
  CardBody,
  CardTitle
} from "mdbreact";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from "material-ui/DatePicker";
//import ReactMaterialSelect from "react-material-select";
//import "react-material-select/lib/css/reactMaterialSelect.css";

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
    // let datePickerHr = document
    //   .querySelector(".datepicker-wrapper")
    //   .getElementsByTagName("hr")[0];
    // datePickerHr.style.border = "none";
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
      <div>
        <Row className="justify-content-md-center">
          <div className="col-md-10">
            <p className="h4 text-left">Candidate Evaluation Form</p>
          </div>
          <Col md="10">
            <Card>
              <CardBody>
                <form>
                  <div className="row" style={{ paddingTop: "15px" }}>
                    <div className="col-md-3">
                      <p className="h6 text-center">Personal details</p>
                      <div className="row">
                        <div className="col-md-12">
                          <Input type="text" label="Name" />
                        </div>
                        <div className="col-md-12">
                          <Input type="text" label="DOB" />
                        </div>
                        <div className="col-md-12">
                          <Input type="text" label="Native Place" />
                        </div>
                        <div className="col-md-12">
                          <Input
                            type="textarea"
                            label="Current Location and Distance"
                          />
                        </div>
                        <div className="col-md-12 text-left">
                          <Button className="btn-block">Submit</Button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <p className="h6 text-center">Education details</p>

                      <div className="row">
                        <div className="col-md-12">
                          <Input type="text" label="Highest Qualification" />
                        </div>
                        <div className="col-md-12">
                          <Input label="University" />
                        </div>

                        <div className="col-md-12">
                          <Input label="Year" />
                        </div>

                        <div className="col-md-12">
                          <Input label="Score %" />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <p className="h6 text-center">Professional details</p>
                      <div className="row">
                        <div className="col-md-6">
                          <Input label="Total Experience" />
                        </div>
                        <div className="col-md-6">
                          <Input label="Relevant Experient" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Input label="Current Organisation" />
                        </div>
                        <div className="col-md-6">
                          <Input label="Current Designation" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <Input label="Skill Set" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <Input label="Current CTC" />
                        </div>
                        <div className="col-md-2">
                          <Input label="Fixed" />
                        </div>
                        <div className="col-md-2">
                          <Input label="Variable" />
                        </div>
                        <div className="col-md-3">
                          <Input label="Expected salary" />
                        </div>
                        <div className="col-md-2">
                          <Input label="Hike" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <Input label="Any other offers in hand" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Input label="Notice period (Min)" />
                        </div>
                        <div className="col-md-6">
                          <Input label="Notice period (Max)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Interviewee;
