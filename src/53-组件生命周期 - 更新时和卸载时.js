import React from "react";

class Test extends React.Component {
  // 如果数据是组件的状态去影响视图 定义到state中
  // 而如果我们需要的数据状态 不和视图绑定 定义成一个普通的实例属性就可以了
  // state中尽量保持精简
  timer = null
  componentDidMount () {
    this.timer = setTimeout(() => {
      console.log("开启定时器")
    }, 1000);
  }

  componentDidUpdate () {
    console.log('【Test】 componentWillUnmount')
    // 清理定时器
    // clearInterval(this.timer)
  }
  
  render () {
    return <div>test</div>
  }
}

class App extends React.Component{
  // 1、创建组件时，最先执行，初始化的时候只执行一次 （不是很常用）
  constructor () {
    super()
    console.log("constructor")
  }

  state = {
    count: 0,
    flag: true
  }

  clikHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag
    })
  }

  // 3、组件挂载（完成DOM渲染）后执行，初始化的时候只执行一次
  // 发送网络请求，DOM操作
  componentDidMount () {
    console.log("componentDidMount")
    // ajax  类似于 mounted
  }

  // 四、组件更新后（DOM渲染完毕） 不是很常用
  // DOM操作，可以获取到更新后的DOM内容，
  // 注意：不要直接调用setState（）
  componentDidUpdate () {
    console.log("componentDidUpdate")
  }

  // 五、组件卸载（从页面消失） 
  // 执行清理工作 （比如：清理定时器等）
  componentWillUnmount () {
    console.log("componentWillUnmount")
  }

  // 二 2、每次组件渲染都会触发  渲染UI(挂载阶段和更新阶段是同一个render)
  // 注意：不能在里面调用setState（）
  render () {
    console.log("render")
    return (
      <>
        <div>this is div</div>
        {/* 通过一个数据状态的切换 让Test组件进行销毁重建 就会发生组件卸载 */}
        {this.state.flag ? <Test /> : null}
        
        <button onClick={this.clikHandler}>{this.state.count}</button>
      </>
    )
  }
}

export default App