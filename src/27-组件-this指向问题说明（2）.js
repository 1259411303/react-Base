
import React from 'react'

// this有问题写法

// 箭头函数本身是不具备this的，他会直接沿用父元素里边作用的this

class Test extends React.Component{

  // 注意：这种写法了解即可，实际项目中用箭头函数的写法

  handler () { // 这种写法this是undefined，需要手动去修改this指向或者是用箭头函数倒用的写法
    console.log("this", this) // this是undefined
    // this.setState去修改数据还可以吗？就会报错了
  }
  render() {

    // render的this指向的就是组件的实例对象
    // render函数中的this已经被react内部修正
    // 这里的this就是指向当前的组件的实例对象
    // 那我们箭头函数中的this 直接沿用 所以也是指向组件的实例对象
    console.log("父级函数的this指向为：", this)

    return (
      // 如果不通过constructor做修正 直接可以在事件绑定的位置
      // 通过箭头函数的写法 直接沿用父函数中的this指向 也是ok的
      // 箭头函数本身是不具备this的，他会直接沿用父元素里边作用的this

      // 这里面的箭头函数的父级函数就是render
      <button onClick={() => this.handler()}>click</button>
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