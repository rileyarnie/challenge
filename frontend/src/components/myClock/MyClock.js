import React, { Component } from "react";
import Clock from "react-clock";

class MyClock extends Component {
  render() {
    return (
      <>
        <div className="container ml-4 mt-4">
          <div className="">
            <Clock value={this.props.date} />
          </div>
        </div>
      </>
    );
  }
}

export default MyClock;
