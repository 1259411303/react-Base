import React from "react";

// App Son
// 父传子 props 函数
// 子传父：子组件调用父组件传递过来的函数，并且把想要传递的数据当初函数的实参
// 传入即可

function Son (props) {
  const {getSonMsg} = props

  function clickHandler () {
    const sonMsg = '(模板精简写法)-子组件数据'
    getSonMsg(sonMsg)
  }

  return (
    <div>this is son
      <button onClick={()=>getSonMsg("子组件数据")}>按钮（第一种写法）</button>

      <button onClick={clickHandler}>按钮（第二种写法）</button>
    </div>
  )
}

class App extends React.Component{
  state = {
    message: 'this is message',
    list: [1,2,3],
    userInfo: {
      name: 'cp',
      age: 30
    }
  }

  getSonMsg = (e) => {
    console.log("父传子-函数", e)
  }

  render () {
    return (
      <div>
        <Son 
          getSonMsg={this.getSonMsg}
        />
      </div>
    )
  }
}

export default App