import React from "react";
import PrinterName from "./PrinterName";
import SayName from "./SayName";
class Detail extends React.Component {
  render() {
    return (
      <div>
        <div>
          <a href="#/">去home</a>
        </div>
        <PrinterName></PrinterName>
        <SayName></SayName>
      </div>
    );
  }
}
export default Detail;
