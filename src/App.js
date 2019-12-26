import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import DatePicker from "./components/DatePicker";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/datePicker" component={DatePicker} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
