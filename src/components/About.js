import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
class About extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/about/me">我的信息</Link>
        <Link to="/about/order">我的订单</Link>
        <Switch>
          <Route path="/about/me" component={() => <div>我的信息</div>}></Route>
          <Route
            path="/about/order"
            component={() => <div>我的订单</div>}
          ></Route>
          <Redirect to="/about/me"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default About;
