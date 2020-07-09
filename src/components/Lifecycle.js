import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("1.构造函数");
  }
  //   componentWillMount() {
  //     //   可以访问属性和状态，可以进行api调用，但是没办法做dom相关操作
  //     console.log("2.组件将要挂载，componentWillMount");
  //   }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("2.getDerivedStateFromProps");
  // }
  componentDidMount() {
    //组件以及挂载，可以进行状态更新
    console.log("3.组件已经挂载，componentDidMount");
  }
  // getSnapshotBeforeUpdate() {
  //   return null;
  //   console.log("getSnapshotBeforeUpdate,用于获得最新的 DOM 数据");
  // }
  //   componentWillReceiveProps() {
  //     //父组件传递的属性有变化，做相应相应
  //     console.log("4.组件属性更新了，componentWillReceiveProps");
  //   }
  shouldComponentUpdate() {
    // 组件是否需要更新，返回布尔值，优化点
    console.log("5.组件是否需要更新，shouldComponentUpdate");
    return true;
  }
  //   componentWillUpdate() {
  //     // 组件将要更新
  //     console.log("6.组件将要更新,componentWillUpdate");
  //   }
  componentDidUpdate() {
    //   组件已经更新
    console.log("6.组件将要更新,componentWillUpdate");
  }
  render() {
    console.log("组件渲染");

    return <div>生命周期</div>;
  }
}
