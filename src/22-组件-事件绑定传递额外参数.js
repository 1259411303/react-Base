import React from "react"
// 函数组件的创建和渲染
// 创建
// 如果传递自定义参数？
// 1、只需要一个额外参数 （clickHandler） -> {()=>clickHandler('自定义的参数')}
// 2、既需要e也需要额外的参数 {(e)=>clickHandler(e,'自定义的参数')}
function Hellow () {
  const clickHandler = (e,msg)=> {
    console.log("函数组件的事件被触发了", e,msg)
  }
  
  return (
    <>
      <div onClick={clickHandler}>click me</div>
      <div onClick={()=>clickHandler('自定义的参数')}>只需要一个额外参数</div>
      {/* 自定义参数 */}
      <div onClick={(e) => clickHandler(e,'this is msg')}>既需要e也需要额外的参数</div>
    </>
  )
}

function App() {
  return ( 
    <div className = "App" >
      {/* 渲染hellow组件 */}
       <Hellow/>
       {/* <Hellow></Hellow> */}
    </div >
  )
}

export default App