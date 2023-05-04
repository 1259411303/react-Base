
import React from 'react'

// 不要直接修改状态的值（赋值），而是基于当前状态创建新的状态

class Counter extends React.Component{
  state ={
    count: 0,
    list: [1,2,3],
    person: {
      name: 'jack',
      age: 18
    }
  }
  clickHandler = ()=> {
  // 简单类型修改：

    // this.setState({
    //   count: this.state.count + 1
    // })

    // 修改数组
    // this.setState({
    //   list: [...this.state.list, 4, 5]
    // })

    // 修改对象
    // this.setState({
    //   person: {
    //     ...this.state.person,
    //     name: '憨憨'
    //   }
    // })

    // 合并修改
    // this.setState({
    //   // 修改数组
    //   list: [...this.state.list, 4, 5],
    //   // 修改对象
    //   person: {
    //     ...this.state.person,
    //     name: '憨憨'
    //   }
    // })

    // 删除 - filter (不会修改原数组，map也不会修改源数组)
    this.setState({
      list: this.state.list.filter((item) => item !== 2)
    })

  }
  render () {
    return (
      <>
        <ul>
          {this.state.list.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
        <div>
            {this.state.count}
            <div>{this.state.person.name}</div>
            <button onClick={this.clickHandler}>changeState</button>
        </div>
      </>
    )
  }
}

function App() {
  return ( 
    <div className = "App" >
      <Counter/>
      
    </div >
  )
}

export default App