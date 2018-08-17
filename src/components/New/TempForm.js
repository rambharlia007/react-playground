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

const pStyle = {
  padding: "0px"
};

class TempForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        dateOfBirth: null,
        nativePlace: null,
        location: null,
        qualification: null,
        university: null,
        year: null,
        score: null,
        totalExperience: null,
        relevantExperience: null,
        organisation: null,
        designation: null,
        skillSet: null,
        ctc: {
          actual: null,
          fixed: null,
          variable: null,
          expected: null,
          hike: null
        },
        otherOffers: null,
        noticePeriod: {
          min: null,
          max: null
        }
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  submitApplicant = () => {
    console.log(this.state.formData);
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const formData = { ...this.state.formData };
    formData[name] = value;
    this.setState({
      formData
    });
  }

  render() {
    const { formData, ctc, noticePeriod } = this.state;
    return (
      <div>
        <Row className="justify-content-md-center">
          <div className="col-md-10 offset-2">
            <p className="h4 text-left">Candidate Evaluation Form</p>
          </div>
          <div class="col-2">
            <div class="list-group" id="myList" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
                data-toggle="list"
                href="#home"
                role="tab"
              >
                Personal Details
              </a>
              <a
                class="list-group-item list-group-item-action"
                data-toggle="list"
                href="#profile"
                role="tab"
              >
                Education Details
              </a>
              <a
                class="list-group-item list-group-item-action"
                data-toggle="list"
                href="#messages"
                role="tab"
              >
                Professional Details
              </a>
              <a
                class="list-group-item list-group-item-action"
                data-toggle="list"
                href="#internal-details"
                role="tab"
              >
                Internal Details
              </a>
            </div>
          </div>
          <Col md="6">
            <Card style={{ minHeight: "745px" }}>
              <CardBody>
                <div class="row">
                  <div class="col-8">
                    <div class="tab-content">
                      <div class="tab-pane active" id="home" role="tabpanel">
                        <form>
                          <p className="h6 text-center">Personal details</p>
                          <div className="col-md-12">
                            <Input
                              type="text"
                              label="Name"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <Input
                              type="text"
                              label="DOB"
                              name="dateOfBirth"
                              value={formData.dateOfBirth}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <Input
                              type="text"
                              label="Native Place"
                              name="nativePlace"
                              value={formData.nativePlace}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <Input
                              type="textarea"
                              label="Current Location and Distance"
                              name="location"
                              value={formData.location}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </form>
                      </div>
                      <div class="tab-pane" id="profile" role="tabpanel">
                        <p className="h6 text-center">Education details</p>

                        <div className="row">
                          <div className="col-md-12">
                            <Input
                              type="text"
                              label="Highest Qualification"
                              name="qualification"
                              value={formData.qualification}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <Input
                              label="University"
                              name="university"
                              value={formData.university}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div className="col-md-12">
                            <Input
                              label="Year"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div className="col-md-12">
                            <Input
                              label="Score %"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="messages" role="tabpanel">
                        <p className="h6 text-center">Professional details</p>
                        <div className="row">
                          <div className="col-md-6">
                            <Input
                              label="Total Experience"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <Input
                              label="Relevant Experient"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <Input
                              label="Current Organisation"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <Input
                              label="Current Designation"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <Input
                              label="Skill Set"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <Input
                              label="Current CTC"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-2">
                            <Input
                              label="Fixed"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-2">
                            <Input
                              label="Variable"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-3">
                            <Input
                              label="Expected salary"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-2">
                            <Input
                              label="Hike"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <Input
                              label="Any other offers in hand"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <Input
                              label="Notice period (Min)"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <Input
                              label="Notice period (Max)"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane"
                        id="internal-details"
                        role="tabpanel"
                      >
                        <div class="form-group row">
                          <label class="col-md-2 col-form-label">Resume</label>
                          <div class="col-md-5">
                            <input
                              type="file"
                              class="form-control-file"
                              id="exampleFormControlFile1"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-md-2 col-form-label">
                            Recruiter
                          </label>
                          <div class="col-md-5">
                            <select class="form-control form-control-sm">
                              <option>Puneeth</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
              <div className="card-footer">
                <Button className="btn" onClick={this.submitApplicant}>
                  Submit
                </Button>
                {/* <div className="col-md-4">
                 
                </div> */}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TempForm;
