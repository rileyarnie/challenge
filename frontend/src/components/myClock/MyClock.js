import React, { Component } from "react";

class MyClock extends Component {
  state = {
    date: 0,
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
  render() {
    return (
      <>
        {this.state.seconds === 0 ? (
          <button onClick={this.startTimer}>Start</button>
        ) : (
          <button disabled>Start</button>
        )}

        <Clock value={this.state.date} />
      </>
    );
  }
}

export default MyClock;
