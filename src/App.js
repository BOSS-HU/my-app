import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import {UserContext} from './context/context'
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import DatePicker from "./components/DatePicker";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:{
        sex:'male',
        name:'Mike',
        age:19
      }
    }
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <UserContext.Provider value={this.state.user}>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/datePicker" component={DatePicker} />
          </UserContext.Provider>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
