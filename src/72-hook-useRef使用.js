// 使用场景：
// 在函数组件中获取真实的dom元素对象或组件对象

import React,{ useRef,useEffect } from 'react'

// 组件实例 类组件
// dom对象 标签

class TestC extends React.Component {
  state = {
    name: 'test name'
  }
  getName = () => {
    return 'this is child Test'
  }
  render () {
    return (
      <div>我是类组件</div>
    )
  }
}

function App () {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    console.log('testRef.current', testRef.current)
    console.log('h1Ref.current', h1Ref.current)
  },[])
  // useEffect回调是在dom渲染之后执行
  // 和vue里面的watch 效果比较像 但是执行时机是不同的
  return (
    <div>
      <TestC ref={testRef}/>
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  )
}

export default App