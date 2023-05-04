import React, {createContext} from "react";
// App -> A -> C
// APP数据 -> C

// 注意事项：
// 1、上层组件和下层组件是相对的，只要存在就可以使用  通常我们都会通过app作为数据提供方
// 2、这里涉及到的语法都是固定的，有两处，提供位置 value提供数据 获取的位置 {value=>使用value做什么都可以}

// 1、导入createContext方法执行,结构提供者和消费者

const {Provider,Consumer} = createContext()

function ComA () {
  return (
    <div className="ComA">
      this is ComA
      <ComC />
    </div>
  )
}

function ComC () {
  return (
    <div className="ComC">
      this is ComC
      {/* 3、通过Consumer使用数据 */}
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}

class App extends React.Component{
  state = {
    message: 'this is message'
  }

  render () {
    return (
      // 2、使用provider包裹跟组件
      <Provider value="this.state.message">
        <div className="App">
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default App