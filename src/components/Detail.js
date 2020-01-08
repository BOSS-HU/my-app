import React from "react";
// import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// import Home from "./Home";
import PrinterName from "./PrinterName";
import SayName from "./SayName";
class Detail extends React.Component {
  render() {
    return (
      <div>
        <h2>Detail</h2>
        {/* <Switch>
          <Route path="/" component={Home}></Route>
        </Switch> */}
        <PrinterName></PrinterName>
        <SayName></SayName>
      </div>
    );
  }
}
export default Detail;
