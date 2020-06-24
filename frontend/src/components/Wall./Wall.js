import React, { Component } from "react";
import styles from "./Wall.module.css";
import cx from "classnames";
import Clock from "../clock/Clock";

class Wall extends Component {
  state = {
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
  render() {
    return (
      <>
        <div className={styles.row}>
          <div className={cx(styles.brick, styles.test)}>
            <Clock />
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
        {this.state.number.map((wall) => (
          <div className={styles.row}>
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
