import React from "react";
// import { BrowserRouter, Link, Switch, Route, Router } from "react-router-dom";
// import Detail from "./Detail";
class Home extends React.Component {
  render() {
    const { location } = this.props;
    console.log("接收参数：", location.state);
    return (
      <div>
        <h2>Home </h2>
      </div>
    );
  }
}
export default Home;
