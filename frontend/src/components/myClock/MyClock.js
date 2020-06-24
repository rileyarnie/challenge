import React, { Component } from "react";
import Clock from "react-clock";

class MyClock extends Component {
  render() {
    return (
      <>
        <div className="center">
          <Clock value={this.props.date} />
        </div>
      </>
    );
  }
}

export default MyClock;
