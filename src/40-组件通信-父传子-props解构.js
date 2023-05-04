import React from "react";

// function Son(props) {
//   // props是一个对象 里面存着通过父组件传入的所有数据
//   console.log("props", props)

//   // 解构赋值可以吗？ 会有什么影响？ 可以解构
//   {/* ----------------------------------------  第一种方式： -----------------------------*/} 
//   const {mes,list,userInfo,getMes,child } = props // 解构赋值
//   return (
//     <>
//       <div>我是函数子组件:
//         {mes}
//         {list.map(item =><p key={item}>{item}</p>)}
//         {userInfo.name} 
//         <button onClick={getMes}>触发父组件函数</button>
//         {child}
//       </div>
//     </>
//   )
// }


/* ----------------------------------------  第二种方式： -----------------------------*/
function Son({mes,list,userInfo,getMes,child }) {
  return (
    <>
      <div>我是函数子组件:
        {mes}
        {list.map(item =><p key={item}>{item}</p>)}
        {userInfo.name} 
        <button onClick={getMes}>触发父组件函数</button>
        {child}
      </div>
    </>
  )
}

// 这里写的就是原生的函数语法 props也是一个普通的js对象
// 所以原生支持的写法 这里都是可以的 放心大胆的写

class App extends React.Component{
  // 1、准备数据
  state = {
    message: 'this is message',
    list: [1,2,3],
    userInfo: {
      name: 'cp',
      age: 30
    }
  }

  getMes = () => {
    console.log("父组件中的函数")
  }

  render () {
    return (
      <div>
        <Son 
          mes={this.state.message} 
          list={this.state.list} 
          userInfo={this.state.userInfo}
          getMes={this.getMes}
          child={<span>父组件就JSX模板</span>}
        />

        
      </div>
    )
  }
}

export default App