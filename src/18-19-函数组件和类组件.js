import React from "react"
// 函数组件的创建和渲染
// 创建

// 约定说明
// 1. 组件的名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签
// 2. 函数组件必须有返回值，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
// 3. 组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的返回值就是对应的内容
// 4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合
function Hellow () {
  return <div>hellow</div>
}
// 渲染 <Hellow/>  或  <Hellow></Hellow>

// 类组件的创建和渲染
// 创建
// extends继承
// 渲染 <HellowCoponent/>  或  <HellowCoponent></HellowCoponent>

// 约定说明
// 1. 类名称也必须以大写字母开头
// 2. 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
// 3. 类组件必须提供 render方法 render 方法必须有返回值，表示该组件的 UI 结构

class HellowCoponent extends React.Component{
  render () {
    return <div>this is class Component</div>
  }
}

function App() {
  return ( 
    <div className = "App" >
      {/* 渲染hellow组件 */}
       <Hellow/>
       <Hellow></Hellow>
       {/* 渲染类组件 */}
       <HellowCoponent/>
       <HellowCoponent></HellowCoponent>
    </div >
  )
}

export default App