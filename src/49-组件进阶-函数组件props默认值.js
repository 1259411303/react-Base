import React from "react";

// 1、通过 defaultProps 可以给组件的props设置默认值，在未传入props的时候生效
// 2、直接使用函数参数默认值

// 函数组件默认值：1、使用 defaultProps 2、使用参数默认式（推荐）
// 区别： 
//    第一种在用的时候 组件内部已经有了 pageSize 这个 prop 
//    第二种只有传递的时候组件内部才有这个prop

// 第二种方法设置props默认值
function Test ({pageSize=30}) {
  return (
    <div>
      this is test
      {pageSize}
    </div>
  )
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