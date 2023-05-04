import React from "react";

// 目标：B组件中的数据传给A
// 技术方案：
// 1、先把B中的数据通过子传父 传给App
// 2、再把App接收到的B中的数据 通过父传子 传给A

function SonA (props) {
  const {sendAmsg} = props
  // const aaa = getBMsg()
  return (
    <div>this is A{sendAmsg}</div>
  )
}

function SonB (props) {
  const {getBMsg} = props
  function clickHandler() {
    const bMsg = 'B组件的数据'
    getBMsg(bMsg)
  }
  return (
    <div>this is B
        <button onClick={clickHandler}>发送数据</button>
    </div>
  )
}

class App extends React.Component{
  state = {
    sendAmsg: '测试app->A初始值'
  }

  getBMsg = (e) => {
    console.log("父传子-函数", e)
    this.setState({
      sendAmsg: e
    })
  }

  render () {
    return (
      <div>
        <SonA sendAmsg={this.state.sendAmsg} />
        <SonB getBMsg={this.getBMsg}/>
      </div>
    )
  }
}

export default App