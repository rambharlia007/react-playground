import React, { Component } from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-fixedheader-dt/css/fixedHeader.dataTables.min.css";
var $ = require("jquery");
require("datatables.net");
require("datatables.net-fixedheader-dt");

class datatabletest extends Component {
  componentDidMount() {
    $(this.refs.main).DataTable({
      ajax: {
        url: "http://localhost:3500/applicant",
        dataSrc: function(json) {
          return json;
        }
      },
      columns: [
        { data: "name" },
        { data: "dateOfBirth" },
        { data: "nativePlace" },
        { data: "location" },
        { data: "university" },
        { data: "designation" }
      ],
      fixedHeader: {
        header: true,
        footer: true
      },
      lengthMenu: [[15, 20, 25, 30], [15, 20, 25, 30]]
    });
  }
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-5">
          <p className="h4 text-left" style={{ paddingTop: "15px" }}>
            Applicant grid
          </p>
        </div>
        <div className="col-md-5">
          <button
            type="button"
            className="btn btn-default pull-right"
            onClick={() => {
              this.props.history.replace("/new/applicant");
            }}
          >
            Create New Applicant
          </button>
        </div>

        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <table ref="main" class="display" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Extn.</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
              </table>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default datatabletest;
