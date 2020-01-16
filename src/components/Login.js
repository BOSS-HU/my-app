import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
@connect(state => ({ isLogin: state.user.isLogin }), {
  login() {
    return dispatch => {
      // mock一个异步登录
      setTimeout(() => {
        dispatch({ type: "login" });
      }, 1000);
    };
  }
})
class Login extends React.Component {
  render() {
    const from = this.props.location.state.from || "/";
    if (this.props.isLogin) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <p>请先登录</p>
        <button onClick={this.props.login}>登录</button>
      </div>
    );
  }
}
export default Login;
