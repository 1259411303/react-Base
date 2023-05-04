import React from "react";

// App 父组件 son 子组件

// 接收数据 props
// 函数式son
function SonF(props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  return (
    <div>我是函数子组件:{props.mes}</div>
  )
}

// 类组件的son
class SonC extends React.Component{
  render() {
    return(
      // 类组件必须通过this关键词 去获取 这里的props是固定的 
      <div>我是类子组件:{this.props.mes}</div>
    )
  }
}

class App extends React.Component{
  // 1、准备数据
  state = {
    message: 'this is message'
  }
  render () {
    return (
      <>
      {/* 2、绑定数据 */}
      {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        <SonF mes={this.state.message}></SonF>
        <SonC mes={this.state.message}></SonC>
      </>
    )
  }
}

export default App