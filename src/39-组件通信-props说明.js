import React from "react";

// 一、props是只读对象
//   根据单项数据流的要求，子组件只能读取props中的数据，不能进行修改
//  this.props.msg = 'new msg'  // 不可以 不可以直接进行修改、谁的数据谁改

// 二、props可以传递任意数据
//  数字、字符串、布尔值、对象、数组、函数、JSX（就是一个模板，相当于vue里面的插槽，react没有插槽）

// App 父组件 son 子组件

// 3、接收数据 props
// 函数式son
function SonF(props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  console.log("props", props)
  return (
    <>
      <div>我是函数子组件:
        {props.mes}
        {props.list.map(item =><p key={item}>{item}</p>)}
        {props.userInfo.name}
        <button onClick={props.getMes}>触发父组件函数</button>
        {props.child}
      </div>
    </>
  )
}

// // 类组件的son
// class SonC extends React.Component{
//   render() {
//     return(
//       // 类组件必须通过this关键词 去获取 这里的props是固定的 
//       <div>我是类子组件:{this.props.mes}</div>
//     )
//   }
// }

class App extends React.Component{
  // 1、准备数据
  state = {
    message: 'this is message',
    list: [1,2,3],
    userInfo: {
      name: 'cp',
      age: 30
    }
  }

  getMes = () => {
    console.log("父组件中的函数")
  }

  render () {
    return (
      <div>
      {/* 2、绑定数据 */}
      {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        {/* <SonF mes={this.state.message}></SonF> */}
        <SonF 
          mes={this.state.message} 
          list={this.state.list} 
          userInfo={this.state.userInfo}
          getMes={this.getMes}
          child={<span>父组件就JSX模板</span>}
        />

        {/* <SonC mes={this.state.message}></SonC> */}

        
      </div>
    )
  }
}

export default App