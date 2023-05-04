
// useState - 回调函数的参数
// 使用场景
// 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过计算
// 才能获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

import { useState } from 'react'

function getDefaultValue () {
  for (let i = 0; i < 10000; i++) {

  }
  return '10'
}

function Counter (props) {
  console.log("props", props)
  const [count,setCount] = useState(()=>{
    // 这里目的为了体验初始值经过一定的计算
    // 这个计算比较广泛含义的概念
    // 只要无法直接确定 需要通过一定的操作才能获取 就可以理解为计算
    // 循环遍历一万条数据才能确定这里的初始值是什么
    // return props.count
    return getDefaultValue()
  })
  return (
    <button onClick={() => setCount(count + 1)} >{count}</button>
  )
}

function App () {
  
  return (
    <div>
      <Counter count={10}/>
      <Counter count={20}/>
    </div>
  )
}

export default App