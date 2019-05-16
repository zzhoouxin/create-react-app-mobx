import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("homeStore")
@inject("oneStore")
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>首页数据源的number为:{this.props.homeStore.homeNum}</h1>
        {/* <h1>oneStore的number为:{this.props.oneStore.oneNum}</h1> */}
        <button
          onClick={() => {
            this.props.homeStore.addNum();
          }}
        >
          点击添加
        </button>
        <button
          onClick={() => {
            this.props.homeStore.lessNum();
          }}
        >
          点击删除
        </button>
        <button
          onClick={() => {
            this.props.history.push("/one");
          }}
        >
          跳转到第一个页面
        </button>
      </div>
    );
  }
}
export default Home;
