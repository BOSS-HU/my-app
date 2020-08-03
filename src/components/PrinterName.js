import React from "react";
import { UserContext } from "../context/context";
export default class PrinterName extends React.Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {value => (
            <span>
              PrinterName： {value.name},{value.sex}
            </span>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}
