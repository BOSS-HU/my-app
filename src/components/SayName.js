import React from "react";
import { UserContext } from "../context/context";
export default class PrinterName extends React.Component {
  static contextType = UserContext
  render() {
    console.log(`this.context` + JSON.stringify(this.context))
    const { sex, name, age } = this.context.user
    return (
      <div>
        sex:{sex},name:{name},age:{age}
      </div>
    );
  }
}
// PrinterName.contextType = UserContext