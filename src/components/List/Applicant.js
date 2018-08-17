import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Axios from "axios";
import _ from "lodash";
class Applicant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pages: null,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = (state, instance) => {
    this.setState({ loading: true });
    Axios.get("http://localhost:3500/applicant").then(res => {
      // Update react-table
      let filteredData = res.data;
      // You can use the filters in your request, but you are responsible for applying them.
      if (state.filtered.length) {
        filteredData = state.filtered.reduce((filteredSoFar, nextFilter) => {
          return filteredSoFar.filter(row => {
            return (row[nextFilter.id] + "").includes(nextFilter.value);
          });
        }, filteredData);
      }
      // You can also use the sorting in your request, but again, you are responsible for applying it.
      const sortedData = _.orderBy(
        filteredData,
        state.sorted.map(sort => {
          return row => {
            if (row[sort.id] === null || row[sort.id] === undefined) {
              return -Infinity;
            }
            return typeof row[sort.id] === "string"
              ? row[sort.id].toLowerCase()
              : row[sort.id];
          };
        }),
        state.sorted.map(d => (d.desc ? "desc" : "asc"))
      );

      // You must return an object containing the rows of the current page, and optionally the total pages number.
      const res1 = {
        rows: sortedData.slice(
          state.pageSize * state.page,
          state.pageSize * state.page + state.pageSize
        ),
        pages: Math.ceil(filteredData.length / state.pageSize)
      };

      this.setState({
        data: res1.rows,
        pages: res1.pages,
        loading: false
      });
    });
  };

  render() {
    const { data, pages, loading } = this.state;
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
            className="btn btn-primary pull-right"
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
                pageSizeOptions={[5, 10, 15, 18, 20, 30]}
                manual // Forces table not to paginate or sort automatically, so we can handle it server-side
                data={data}
                pages={pages} // Display the total number of pages
                loading={loading} // Display the loading overlay when we need it
                onFetchData={this.fetchData} // Request new data when things change
                filterable
                defaultPageSize={18}
                className=" -highlight"
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Applicant;
