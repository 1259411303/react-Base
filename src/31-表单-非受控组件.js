import React, {createRef} from "react";

// 表单-非受控组件 在实际开发中使用的频率比 表单-受控组件 要少
// 因为使用框架之后，不建议在很多地方使用原生dom

class Counter extends React.Component{
  // 这个实例属性是可以自定义的 语义化即可
  msgRef = createRef()

  getValue = () => {
    console.log("msgRef", this.msgRef.current.value)
  }

  render () {
    return (
      <>
        <input
          type="text"
          ref={this.msgRef}
        ></input>
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
    )
  }
}

function App() {
  return ( 
    <div className = "App" >
      <Counter></Counter>
      
    </div >
  )
}

export default App