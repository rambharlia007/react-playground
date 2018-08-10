import React, { Component } from "react";

class Interviewee extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-8">
                      <input class="form-control" />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Company</label>
                    <div class="col-sm-8">
                      <input class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Experince</label>
                    <div class="col-sm-8">
                      <input class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Current CTC</label>
                    <div class="col-sm-8">
                      <input class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Expected CTC</label>
                    <div class="col-sm-8">
                      <input class="form-control" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-8">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
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
