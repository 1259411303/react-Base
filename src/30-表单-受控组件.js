
// 表单-非受控组件 在实际开发中使用的频率比 表单-受控组件 要少
// 因为使用框架之后，不建议在很多地方使用原生dom

import React from "react";

// 什么是受控组件？ input框自己的状态被React组件控制
// 受控组件就是可以 被react的状态控制的组件

// React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，
// React将state与表单元素的值（value）绑定到一起，由state的值来控制表单元素的值，
// 从而保证单一数据源特性

class Counter extends React.Component{
  // 1、声明用来控制input vaue的react组件自己的状态
  state = {
    message: ''
  }

  inputChange = (e) => {
    console.log("change事件触发了", e)
    // 4、拿到输入框最新的值 交给state中的message
    this.setState({
      message: e.target.value
    })
  }

  render () {
    return (
      <div>
        {/* 2、给input框的vue属性绑定 react state */}
        {/* 3、给input框绑定changge的事件 为了拿到当前输入框的数据 */}
        <input
          type="text"
          value={this.state.message}
          onChange={this.inputChange}
        ></input>
      </div>
    )
  }
}

function App() {
  return ( 
    <div className = "App" >
      <Counter></Counter>
      
    </div >
  )
}

export default App