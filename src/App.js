import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import { UserContext } from "./context/context";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import About from "./components/About";
import DatePicker from "./components/DatePicker";
import ReduxTest from "./components/ReduxTest";
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'

function NoMatch(){
  return (
    <div>
      404
    </div>
  )
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
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/detail">去detail</Link>
          </li> */}
          <li>
            <Link to="/datePicker">去datePicker</Link>
          </li>
          <li>
            <Link to="/about">去about</Link>
          </li>
          <li>
            <Link to="/reduxTest">去reduxTest</Link>
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
            <Route exact path="/" component={Home} />
            <Route path="/detail/:course" component={Detail} />
            <Route path="/datePicker" component={DatePicker} />
            <PrivateRoute path="/about" component={About} />
            <Route path="/reduxTest" component={ReduxTest} />
            <Route path="*" component={NoMatch}/>
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
        <Main />
      </div>
    );
  }
}
export default App;
