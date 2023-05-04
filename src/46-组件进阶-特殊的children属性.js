import React from "react";

// children属性是什么？
// 表示该组件的子节点，只要组件内部有子节点，props中就有该属性

// children可以是什么？
// 1、普通文本 
// 2、普通标签元素 
// 3、函数 
// 4、JSX

// 目的：高阶组件

function ListItem (props) {
  console.log("props",props)  // 打印结果：{children: "this is child"}
  // 只要在组件标签内部里面写了任意内容，他都会出现在组件props里边的children属性
  const {children} = props
  // children()
  return (
    <>
      <div>ListItem {children} </div>
      <div>也可以遍历 {children.map(child => child)} </div>
    </>
  )
}

class App extends React.Component{
  state = {
    
  }

  textFunc = () => {
    console.log("函数")
  }

  render () {
    return (
      <div>
        {/* 只要在组件标签内部里面写了任意内容，他都会出现在组件props里边的children属性 */}
        <ListItem>
          普通文本
          <div>普通标签元素</div>
          {/* {this.textFunc} */}
          {<div><p>{'JSX'}</p></div>}
        </ListItem>
      </div>
    )
  }
}

export default App