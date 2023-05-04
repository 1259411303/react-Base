
import React from 'react'

// this有问题写法

class Test extends React.Component{

  constructor () {
    super () 
    // 使用bind强行修改我们的this指向
    // 相当于在组件初始化的阶段 就可以吧回调函数的this修正到
    // 永远指向当前组件实例对象
    // call和apply会直接执行这个函数，bind会先不执行函数，返回一个改变this的新的函数
    this.handler = this.handler.bind(this)
    
  }

  // 注意：这种写法了解即可，实际项目中用箭头函数的写法
  
  handler () { // 这种写法this是undefined，需要手动去修改this指向
    console.log("this", this) // this是undefined
    // this.setState去修改数据还可以吗？就会报错了
  }
  render() {
    return (
      <button onClick={this.handler}>click</button>
    )
  }
}

function App() {
  return ( 
    <div className = "App" >
      <Test/>
      
    </div >
  )
}

export default App