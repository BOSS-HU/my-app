import React, { Component } from "react";
import "../styles/Clock.css";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date(), count: 0 };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(
        (prevState, prevProps) => ({
          //箭头函数后面加括号代表返回的是对象
          date: new Date(),
          count: prevState.count + 1
        }),
        () => {
          // console.log(this.state.count);
        }
      );
    }, 1000);
    // console.log(this.state.count);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <div className="red">{this.state.date.toLocaleTimeString()}</div>;
  }
}
