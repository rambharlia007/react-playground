import React, { Component } from "react";
import $ from "jquery";
import Axios from "axios";
import "bootstrap/dist/js/bootstrap.min.js";

class FitmentEvaluationRound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
              <label>Would the candidate make a good fit at Prowareness?</label>
              <textarea class="form-control" rows="3" />
            </div>
            <div class="form-group">
              <label>Motivation factors</label>
              <div class="form-check form-check-inline pull-right">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">
                  Challenging work/Projects
                </label>
              </div>
              <div class="form-check form-check-inline pull-right">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">Designation/role</label>
              </div>
              <div class="form-check form-check-inline pull-right">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">Financial aspect</label>
              </div>
              <textarea class="form-control" rows="3" placeholder="Comments" />
            </div>

            <div class="form-group">
              <label>Passion</label>

              <div class="form-check form-check-inline pull-right">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">Writing Blogs</label>
              </div>
              <div class="form-check form-check-inline pull-right">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">Open source projects</label>
              </div>
              <div class="form-check form-check-inline pull-right">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">
                  Association with any Groups / Conferences
                </label>
              </div>
              <div class="form-check form-check-inline pull-right">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">Technical Certifications</label>
              </div>
              <textarea
                class="form-control"
                rows="3"
                placeholder="Commitment [*] (number of companies changed (descending order) and reasons)"
              />
            </div>
            <div class="dropdown">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Status
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  In progress
                </a>
                <a class="dropdown-item" href="#">
                  Rejected
                </a>
                <a class="dropdown-item" href="#">
                  Approved
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FitmentEvaluationRound;
