import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Axios from "axios";

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
                    //   id: "company",
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
            // manual
            data={data}
            onFetchData={(state, instance) => {
              // show the loading overlay
              this.setState({ loading: true });
              // fetch your data
              Axios.post("http://localhost:3500/applicant", {
                page: state.page,
                pageSize: state.pageSize,
                applicant: state.sorted,
                applicant: state.filtered
              }).then(res => {
                // Update react-table
                this.setState({
                  data: res.data.rows,
                  pages: res.data.pages,
                  loading: false
                });
              });
            }}
            className=" -highlight"
          />
          <br />
        </div>
      </div>
    );
  }
}

export default Applicant;
