import React, { Component } from "react";
import styles from "./Wall.module.css";
import cx from "classnames";
import MyClock from "../myClock/MyClock";

class Wall extends Component {
  state = {
    number: [0, 1, 2, 3],
  };
  render() {
    return (
      <>
        <div className={styles.row}>
          <div className={cx(styles.brick, styles.test)}>
            <MyClock date={this.props.date} seconds={this.props.seconds} />
            <br></br>
          </div>
          <div className={styles.brick}></div>
          <div className={styles.brick}></div>
          <div className={styles.brick}></div>
          <div className={styles.brick}></div>
          <div className={styles.brick}></div>
          <div className={styles.brick}></div>
          <div className={styles.brick}></div>
          <div className={styles.brick}></div>
        </div>
        {this.state.number.map((wall, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.brick}></div>
            <div className={styles.brick}></div>
            <div className={styles.brick}></div>
            <div className={styles.brick}></div>
            <div className={styles.brick}></div>
            <div className={styles.brick}></div>
            <div className={styles.brick}></div>
            <div className={styles.brick}></div>
            <div className={styles.brick}></div>
          </div>
        ))}
      </>
    );
  }
}

export default Wall;
