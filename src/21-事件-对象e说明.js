import React from "react"
// 函数组件的创建和渲染
// 创建

function Hellow () {
  const clickHandler = (e)=> {
    // 阻止默认行为
    e.preventDefault();
    console.log("函数组件的事件被触发了", e)
  }
  return (<div><a onClick={clickHandler} href="http://baidu.com">百度</a></div>)
}

function App() {
  return ( 
    <div className = "App" >
      {/* 渲染hellow组件 */}
       <Hellow/>
       <Hellow></Hellow>
    </div >
  )
}

export default App