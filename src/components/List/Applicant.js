import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Applicant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.makeData();
  }

  makeData = () => {
    this.fetch(`http://localhost:3500/applicant`, {
      method: "GET"
    }).then(res => {
      this.setState({ data: res });
      // this.setState({ loading: false });
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
    const { data, pages, loading } = this.state;
    return (
      <div class="row">
        <div class="col-md-12">
          <ReactTable
            columns={[
              {
                columns: [
                  {
                    Header: "Name",
                    accessor: "name"
                  },
                  {
                    Header: "Company",
                    id: "company",
                    accessor: "company"
                  },
                  {
                    Header: "technology",
                    accessor: "technology"
                  },
                  {
                    Header: "phone Number",
                    id: "phoneNumber",
                    accessor: "phoneNumber"
                  }
                ]
              }
            ]}
            data={data}
            defaultPageSize={10}
            className=" -highlight"
          />
          <br />
        </div>
      </div>
    );
  }
}

export default Applicant;
