import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  // Link,
  Redirect,
  NavLink
} from "react-router-dom";
import "../styles/about.css";
class About extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavLink exact activeClassName="selected" to="/about/me">
          我的信息
        </NavLink>
        <NavLink activeClassName="selected" to="/about/order">
          我的订单
        </NavLink>
        <Switch>
          <Route path="/about/me" component={() => <div>我的信息</div>}></Route>
          <Route
            path="/about/order"
            component={() => <div>我的订单</div>}
          ></Route>
          <Redirect push to="/about/me"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default About;
