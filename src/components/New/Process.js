import React, { Component } from "react";
import Header from "../../components/Header";
import $ from "jquery";
import Axios from "axios";
import "bootstrap/dist/js/bootstrap.min.js";

class Process extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <h6>Round-1 assigned to Nidhin</h6>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Fitment Evaluation Form</h5>
              <form>
                <div class="form-group">
                  <label>What impressed you most about the candidate?</label>
                  <textarea class="form-control" rows="3" />
                </div>
                <div class="form-group">
                  <label>
                    What according to you, can the candidate improve on?
                  </label>
                  <textarea class="form-control" rows="3" />
                </div>
                <div class="form-group">
                  <label>
                    Would the candidate make a good fit at Prowareness?
                  </label>
                  <textarea class="form-control" rows="3" />
                </div>
                <div class="form-group">
                  <label>Motivation factors</label>

                  <div class="form-check form-check-inline pull-right">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="inlineCheckbox1">
                      Challenging work/Projects
                    </label>
                  </div>
                  <div class="form-check form-check-inline pull-right">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="inlineCheckbox2">
                      Designation/role
                    </label>
                  </div>
                  <div class="form-check form-check-inline pull-right">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="inlineCheckbox3">
                      Financial aspect
                    </label>
                  </div>
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Comments"
                  />
                </div>

                <div class="form-group">
                  <label>Passion</label>

                  <div class="form-check form-check-inline pull-right">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="inlineCheckbox1">
                      Writing Blogs
                    </label>
                  </div>
                  <div class="form-check form-check-inline pull-right">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="inlineCheckbox2">
                      Open source projects
                    </label>
                  </div>
                  <div class="form-check form-check-inline pull-right">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="inlineCheckbox3">
                      Association with any Groups / Conferences
                    </label>
                  </div>
                  <div class="form-check form-check-inline pull-right">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="inlineCheckbox3">
                      Technical Certifications
                    </label>
                  </div>
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Commitment [*] (number of companies changed (descending order) & reasons)"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
