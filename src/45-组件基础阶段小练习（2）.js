import React from "react";

// 渲染列表
function ListItem ({item,delHandler}) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={delHandler}>删除</button>
    </div>
  )
}

// 数据提供者 渲染ListItem组件 APP-ListItem
// 先不抽离组件 完成基础渲染之后再去抽离

class App extends React.Component{
  state = {
    list: 
    [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }

  // 给子组件传递的函数
  delHandler = (msg) => {
    this.setState({
      list: this.state.list.filter((item)=>item.id !== msg)
    })
  }

  render () {
    return (
      <div>
        {/* <ListItem list={this.state.list} delHandler={this.delHandler} /> */}
        { this.state.list.map(item => (
          <ListItem key={item.id} item={item} delHandler={()=>this.delHandler(item.id)}/>
        ))}
        
      </div>
    )
  }
}

export default App