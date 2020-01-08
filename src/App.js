import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { UserContext } from "./context/context";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import DatePicker from "./components/DatePicker";
class App extends React.Component {
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
          <li>
            <Link to="/detail">去detail</Link>
          </li>
          <li>
            <Link to="/datePicker">去datePicker</Link>
          </li>
        </ul>

        <Switch>
          <UserContext.Provider value={this.state.user}>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
            <Route path="/datePicker" component={DatePicker} />
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
