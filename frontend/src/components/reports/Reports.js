import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

class Reports extends Component {
  state = {
    showReport: true,
  };

  reportHandler = () => {
    this.props.getReports();
  };

  showReportHandler = () => {
    this.setState({ showReport: !this.state.showReport });
  };

  render() {
    return (
      <div className="container mt-3">
        <button
          className="btn btn-sm btn-outline-primary mb-3"
          onClick={this.reportHandler}
        >
          Get Report
        </button>

        {this.props.reports.length > 0 ? (
          <>
            <button
              className="btn btn-sm btn-outline-secondary mb-3 ml-4"
              onClick={this.showReportHandler}
            >
              {this.state.showReport ? "Hide Report" : "Show Report"}
            </button>

            {this.state.showReport ? (
              <>
                <h3>A Log of All Processes</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Program Time</th>
                      <th scope="col">Event</th>
                      <th scope="col">Message</th>
                      <th scope="col">Actual Time</th>
                    </tr>
                  </thead>
                  {this.props.reports.map((report, index) => (
                    <tbody>
                      <tr key={index}>
                        <th scope="row">{report.programTime}</th>
                        <td>{report.eventName}</td>
                        <td>{report.message}</td>
                        <td>{report.actualTime}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          console.log(this.props.reports)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reports: state.reports,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReports: () => dispatch(actionTypes.gettingReport()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
