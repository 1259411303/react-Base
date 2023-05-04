import React from "react";

class App extends React.Component{
  // 1、创建组件时，最先执行，初始化的时候只执行一次
  constructor () {
    super()
    console.log("constructor")
  }
  state = {
    count: 0
  }
  clikHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // 3、组件挂载（完成DOM渲染）后执行，初始化的时候只执行一次
  // 发送网络请求，DOM操作
  componentDidMount () {
    console.log("componentDidMount")
    // ajax  类似于 mounted
  }
  // 2、每次组件渲染都会触发  渲染UI(挂载阶段和更新阶段是同一个render)
  // 注意：不能在里面调用setState（）
  render () {
    console.log("render")
    return (
      <>
        <div>this is div</div>
        <button onClick={this.clikHandler}>{this.state.count}</button>
      </>
    )
  }
}

export default App