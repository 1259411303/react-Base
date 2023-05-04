// 组件状态 类组件作为演示
// 一个前提：在React hook出来之前，函数式组件是没有自己的状态的，所以我们统一通过类组件来讲解

import React from 'react'
class TestComponent extends React.Component {
  // 1、定义组件状态
  state = {
    // 在这里可以定义各种属性 全都是当前组件的状态
    name: 'cp teacher'
  }
  // 事件回调函数
  changeName = () => {
    // 3、修改state中的状态name
    // 注意：不可以直接做赋值修改 必须通过一个方法 setState
    this.setState({
      name: '旭哥'
    })
  }
  render () {
    // 2、类组件
    return (
      <div>
        this is TestComponent
        当前name为： {this.state.name}
        <button onClick={this.changeName}>修改name</button>
      </div>
    )
  }
}

// 注意事项：
// 1、编写组件其实就是编写原生js类或者函数
// 2、定义状态必须通过state 实例属性的方法 提供一个对象 名称是固定的就叫state
// 3、修改state中的任何属性 都不可以通过直接赋值 必须走setState方法 这个方法来自于继承React.Component得到
// 4、这里的this关键词 很容易出现指向错误 上面的写法是最推荐和最规范的 没有this指向的问题

// 根组件
function App() {
  return ( 
    <div className = "App" >
      <TestComponent/>
    </div >
  )
}

export default App