import React from "react";

const itemStyle = {
  width: '100%',
  height: '50px',
  lineHeight: '50px',
  background: 'black',
  color: '#fff',
  marginBottom: '10px'
}
function ListItem ({list,delHandler}) {
  return (
    <div>this is ListItem
      {list.map(item => 
        <div key={item.id} style={itemStyle}>{item.name}
          <button onClick={()=>delHandler(item.id)}>删除</button>
        </div>
      )}
    </div>
  )
}

class App extends React.Component{
  state = {
    list: 
    [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }

  delHandler = (msg) => {
    console.log("父组件",msg)
    this.setState({
      list: this.state.list.filter((item)=>item.id !== msg)
    })
  }

  render () {
    return (
      <div>
        <ListItem list={this.state.list} delHandler={this.delHandler} />
      </div>
    )
  }
}

export default App