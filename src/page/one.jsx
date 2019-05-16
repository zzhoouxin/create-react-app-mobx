import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("homeStore")
@inject("oneStore")
@observer
class One extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>页面一</h1>
          <h1>首页数据源的number为:{this.props.homeStore.homeNum}</h1>
        <h1>oneStore的number为:{this.props.oneStore.oneNum}</h1>
        <button onClick={() => { this.props.history.push("/");}}>
         跳转到首页
        </button>
      </div>
    );
  }
}
export default One
