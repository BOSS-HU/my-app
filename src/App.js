import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import { UserContext } from "./context/context";
import "./App.css";
import Home from "./components/Home";
import PrinterName from './components/SayName'
import Detail from "./components/Detail";
import About from "./components/About";
import DatePicker from "./components/DatePicker";
import ReduxTest from "./components/ReduxTest";
import Qs from "./components/Qs";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Clock from "./components/Clock";
import Lifecycle from "./components/Lifecycle";
import Input from "./components/Input";
import Hoc from "./components/Hoc";
import Hook from './components/Hook'

function NoMatch() {
  return <div>404</div>;
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        sex: "male",
        name: "Mike",
        age: 19
      }
    };
  }
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: "red" }} to="/">
              Home
            </NavLink>
          </li>
          {/* <li>
            <Link to="/detail">去detail</Link>
          </li> */}
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/datePicker" replace>
              去datePicker
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/about">
              去about
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/reduxTest">
              去reduxTest
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/qs">
              去qs2
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/detail/web">web</Link>
          </li>
          <li>
            <Link to="/detail/java">java</Link>
          </li>
          <li>
            <Link to="/detail/python">python</Link>
          </li>
        </ul>
        <Switch>
          <Provider store={store}>
            {/* context 上下文 */}
            {/* <UserContext.Provider value={this.state.user}> */}
            <Route path="/" exact component={Home} />
            <Route path="/detail/:course" component={Detail} />
            <Route path="/datePicker" component={DatePicker} />
            <PrivateRoute path="/about" component={About} />
            <Route path="/reduxTest" component={ReduxTest} />
            <Route path="/qs" component={Qs} />
            <Route path="*" component={NoMatch} />
            <Route path="/login" component={Login} />
            {/* </UserContext.Provider> */}
          </Provider>
        </Switch>
      </BrowserRouter>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <PrinterName />
        <Main />
        <Clock />
        <Lifecycle />
        <Input />
        <Hoc stage="react" />
        <Hook></Hook>
      </div>
    );
  }
}
export default App;
