import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Applicant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.fetch(`http://localhost:3500/applicant`, {
      method: "GET"
    }).then(res => {
      this.setState({ data: res });
      // this.setState({ loading: false });
    });
  }

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
    const { data } = this.state;
    if (data && data.length == 0) return null;
    return (
      <div className="row">
        <div className="col-md-12">
          <ReactTable
            data={data}
            className="-striped -highlight"
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
          />
          <br />
        </div>
      </div>
    );
  }
}

export default Applicant;
