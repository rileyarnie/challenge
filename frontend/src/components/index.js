import React, { Component } from "react";
import axios from "axios";
import Wall from "./Wall/Wall";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";

class Main extends Component {
  state = {
    method: "",
    startTime: 0,
    stopTime: 0,
    reportTime: 0,
    startNumber: 0,
    stopNumber: 0,
    totalStarted: [0],
    totalStopped: [0],
    totalNumberRunning: 0,
    message: "",

    date: new Date(new Date().setHours(0, 0, 0)),
    seconds: 0,
  };

  startTimer = () => {
    setInterval(
      () =>
        this.setState(
          (prevState) => ({
            seconds: prevState.seconds + 1,
          }),
          () => {
            var t = new Date();
            t.setHours(0, 0, 0);
            t.setSeconds(t.getSeconds() + this.state.seconds);
            this.setState({
              date: t,
            });
          }
        ),
      1000
    );
  };
  startServerHandler = () => {
    setInterval(() => {
      this.setState(
        (prevState) => ({
          method: "START",
          startNumber: Math.floor(10 + Math.random() * (20 + 1 - 10)),
          startTime: prevState.startTime + 30,
        }),
        () => {
          this.setState(
            {
              totalStarted: [
                ...this.state.totalStarted,
                this.state.startNumber,
              ],
            },
            () => {
              axios
                .post(
                  "https://serverchallenge.herokuapp.com/api/tracker/start",
                  {
                    eventName: this.state.method,
                    message: `${this.state.method} ${this.state.startNumber} SERVERS`,
                    startTime: this.state.startTime,
                  }
                )
                .then((res) => {
                  this.setState({
                    message: `STARTED ${this.state.startNumber} SERVERS`,
                  });
                })
                .catch((err) => console.log(err));
            }
          );
        }
      );
    }, 30000);
  };
  stopServerHandler = () => {
    setInterval(() => {
      this.setState(
        (prevState) => ({
          method: "STOP",
          stopNumber: Math.floor(
            5 + Math.random() * (this.state.startNumber + 1 - 5)
          ),
          stopTime: prevState.stopTime + 40,
        }),
        () => {
          this.setState(
            {
              totalStopped: [...this.state.totalStopped, this.state.stopNumber],
            },
            () => {
              this.setState(
                {
                  totalNumber:
                    this.state.totalNumber + this.state.runningNumber,
                },
                () => {
                  axios
                    .post(
                      "https://serverchallenge.herokuapp.com/api/tracker/stop",
                      {
                        eventName: this.state.method,
                        message: `${this.state.method} ${this.state.stopNumber} SERVERS`,
                        stopTime: this.state.stopTime,
                      }
                    )
                    .then((res) => {
                      this.setState({
                        message: `STOPPED ${this.state.stopNumber} SERVERS`,
                      });
                    })
                    .catch((err) => console.log(err));
                }
              );
            }
          );
        }
      );
    }, 40000);
  };

  reportServerHandler = () => {
    setInterval(() => {
      const getTotal = () => {
        let x = this.state.totalStarted.reduce((a, b) => a + b);
        let y = this.state.totalStopped.reduce((a, b) => a + b);
        return x - y;
      };

      this.setState(
        (prevState) => ({
          method: "REPORT",
          totalNumberRunning: getTotal(),
          reportTime: prevState.reportTime + 50,
        }),
        () => {
          axios
            .post("https://serverchallenge.herokuapp.com/api/tracker/log", {
              eventName: this.state.method,
              message: `${this.state.method}: ${this.state.totalNumberRunning} SERVERS ARE RUNNING`,
              reportTime: this.state.reportTime,
            })
            .then((res) => {
              this.setState({
                message: `REPORT: ${this.state.totalNumberRunning} SERVERS ARE RUNNING`,
              });
            })
            .catch((err) => console.log(err));
        }
      );
    }, 50000);
  };

  serverHandlers = () => {
    this.startTimer();
    this.startServerHandler();
    this.stopServerHandler();
    this.reportServerHandler();
  };

  handleReport = () => {
    this.props.getReport();
    console.log("getting report");
  };

  componentDidMount() {
    this.serverHandlers();
  }

  render() {
    return (
      <div className="">
        <Wall date={this.state.date} seconds={this.props.seconds} />
        <br></br>
        <br></br>
        <hr></hr>
        {this.state.message !== "" ? (
          <div className="alert alert-info" role="alert">
            {this.state.message}
          </div>
        ) : (
          ""
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
    getReport: () => dispatch(actionTypes.gettingReport()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
