// 通过类组件修改状态的方式 counter
import React from 'react'

class Counter extends React.Component{
  // 通过state定义组件状态
  state = {
    count: 0
  }
  // 事件回调函数
  changeCount = () => {
    // 修改state
    // react这个体系下，不可直接赋值 要用setState方法修改
    // value 永远都是上一次count值 +1
    this.setState({
      // count: ++this.state.count
      count: this.state.count + 1
    })

  }
  render () {
    return (
      <button onClick={this.changeCount}>{this.state.count}click</button>
    )
  }
}

function App() {
  return ( 
    <div className = "App" >
      <Counter/>
      
    </div >
  )
}

export default App