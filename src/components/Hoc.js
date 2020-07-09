import React, { Component } from "react";
const WithName = Comps => {
  return props => <Comps {...props} name="高阶组件" />;
};
const WithLog = Comps => {
  console.log("WithLog");
  return props => <Comps {...props} />;
};

@WithName
@WithLog
class Base extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stage, name } = this.props;
    return (
      <div>
        {stage}-{name}
      </div>
    );
  }
}

export default Base;
