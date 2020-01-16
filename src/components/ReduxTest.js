import React from "react";
// import { minus, asyncAdd } from "../store/counter";
import { connect } from "react-redux";

function mapStateToProps(state) {
  // console.log(state)
  return { num: state.counter };
}
function mapDispatchToProps(dispatch,ownProps) {
  // console.log('ownProps:'+JSON.stringify(ownProps))
  return {
    add() {
      dispatch({ type: "add" });
    },
    minus() {
      dispatch({ type: "minus" });
    },
    asyncAdd() {
      setTimeout(() => {
        dispatch({ type: "add" });
      }, 1000);
    }
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class ReduxTest extends React.Component {
  render() {
    // console.log(this.props);
    const { add, minus, asyncAdd, num } = this.props;
    return (
      <div>
        <p>{num}</p>
        <div>
          <button onClick={() => add()}>+</button>
          <button onClick={() => minus()}>-</button>
          <button onClick={() => asyncAdd()}>asyncAdd</button>
        </div>
      </div>
    );
  }
}
export default ReduxTest;
