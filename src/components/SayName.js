import React from "react";
import { UserContext } from "../context/context";
export default class PrinterName extends React.Component {
    static contextType = UserContext
  render() {
      const {sex,name,age} = this.context
    return (
      <div>
       sex:{sex},name:{name},age:{age}
      </div>
    );
  }
}
