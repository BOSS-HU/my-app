import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initValue: ""
    };
  }
  handelChange(e) {
    this.setState({ initValue: e.target.value });
  }
  render() {
    const { initValue } = this.state;
    console.log(initValue);

    return (
      <div>
        <input
          type="text"
          value={initValue}
          onChange={e => this.handelChange(e)}
        />
      </div>
    );
  }
}
