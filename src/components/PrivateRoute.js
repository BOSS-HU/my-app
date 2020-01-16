import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function mapStateToProps(state) {
  return { isLogin: state.user.isLogin };
}
function mapDispatchToProps(dispatch) {
  return { 
    login(){
      setTimeout(()=>{
        dispatch({type:'login'})
      },1000)
    }
   };
}

@connect(mapStateToProps,mapDispatchToProps)
class PrivateRoute extends React.Component {
  render() {
    const { isLogin, component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location.pathname }
              }}
            />)
        }
      />
    )
  }
}
export default PrivateRoute;
