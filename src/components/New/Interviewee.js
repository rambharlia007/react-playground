import React, { Component } from "react";
import Header from "../../components/Header";

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
      <div>
        <Header />
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="card">
              <div class="card-body">
                <form class="text-center p-2">
                  <p class="h4 mb-4">Applicant Form</p>

                  <input
                    type="text"
                    class="form-control mb-4"
                    placeholder="Name"
                    value={this.state.name}
                    name="name"
                    defaultValue="Hello!"
                  />
                  <input
                    type="text"
                    class="form-control mb-4"
                    placeholder="Company"
                    name="name"
                    value={this.state.company}
                  />

                  <input
                    type="email"
                    id="defaultRegisterFormEmail"
                    class="form-control mb-4"
                    placeholder="E-mail"
                    name="name"
                    value={this.state.email}
                  />

                  <input
                    type="text"
                    id="defaultRegisterPhonePassword"
                    class="form-control mb-4"
                    placeholder="Phone number"
                    aria-describedby="defaultRegisterFormPhoneHelpBlock"
                    name="name"
                    value={this.state.phoneNumber}
                  />
                  <div class="input-group mb-3">
                    <select
                      name="name"
                      class="custom-select"
                      value={this.state.experience}
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div class="input-group-append">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Experience
                      </label>
                    </div>
                  </div>

                  <div class="input-group mb-3">
                    <select
                      name="name"
                      class="custom-select"
                      value={this.state.ctc}
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div class="input-group-append">
                      <label class="input-group-text" for="inputGroupSelect01">
                        CTC
                      </label>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <select
                      class="custom-select"
                      name="name"
                      value={this.state.ectc}
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div class="input-group-append">
                      <label class="input-group-text" for="inputGroupSelect01">
                        ECTC
                      </label>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <select
                      class="custom-select"
                      name="name"
                      value={this.state.recruitedBy}
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div class="input-group-append">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Recruited by
                      </label>
                    </div>
                  </div>
                  <div class="custom-file mb-3">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                    />
                    <label class="custom-file-label" for="customFile">
                      Choose file
                    </label>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text">Why change</span>
                    </div>
                    <textarea
                      class="form-control"
                      aria-label="With textarea"
                      value={this.state.reason}
                    />
                  </div>

                  <button
                    class="btn btn-info my-2 btn-block"
                    type="submit"
                    onChange={this.submitApplicant()}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interviewee;
