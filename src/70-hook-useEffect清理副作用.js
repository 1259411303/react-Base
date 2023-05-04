
// useEffect - 清理副作用
// 使用场景：
// 在组件被销毁时，如果有些副作用操作需要清理，就可以使用此语法，比如常见的定时器

import { useEffect, useState } from 'react'

function Test () {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("定时器执行了")
    },1000)
    return () => {
      // 清理的动作
      clearInterval(timer)
    }
  })
  return (
    <button>this is test</button>
  )
}

function App () {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {flag ? <Test /> : null}
      <button onClick={() => setFlag(!flag)}>swicth</button>
    </div>
  )
}

export default App