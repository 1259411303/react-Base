import React from "react";

// 类组件默认值：1、使用 defaultProps（不推荐写法） 2、static类静态属性定义（推荐）
// 区别： 
//    第一种在用的时候 组件内部已经有了 pageSize 这个 prop 
//    第二种只有传递的时候组件内部才有这个prop

// 第二种方法设置props默认值
class Test extends React.Component{
  static defaultProps = {
    pageSize: 30
  }
  render () {
    return (
      <div>
        this is test
        {this.props.pageSize}
      </div>
    )
  }
} 

// 第一种方法设置props默认值
// Test.defaultProps = {
//   pageSize: 10 // 如果给我传pageSize就以传入的位置，如果不传就是10
// }

class App extends React.Component{
  render () {
    return (
      <div>
        {/* 不传值 */}
        <Test />
        
        {/* 传值 */}
        <Test pageSize={20}/>
      </div>
    )
  }
}

export default App