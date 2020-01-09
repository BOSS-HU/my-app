import React from "react";

// import Home from "./Home";
import PrinterName from "./PrinterName";
import SayName from "./SayName";
class Detail extends React.Component {
  render() {
    let { match, history, location } = this.props;
    console.log(match);
    console.log(history);
    console.log(location);
    // console.log(this.props);
    return (
      <div>
        <h2>{match.params.course}</h2>
        <button onClick={history.goBack}>后退</button>
        <button
          onClick={() => {
            history.push({ pathname: "/", state: { foo: "bar" } });
          }}
        >
          前进
        </button>
        <PrinterName></PrinterName>
        <SayName></SayName>
      </div>
    );
  }
}
export default Detail;
