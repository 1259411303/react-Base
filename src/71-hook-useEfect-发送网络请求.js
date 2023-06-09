// 类组件 如何发送网络请求
// 生命周期钩子函数 componentDidMount
// 执行时机？
// 在初始化的时候dom渲染完毕时执行一次

// useEffect
// 1、不加依赖项	  - 初始化 + 重新渲染
// 2、加[]         - 初始化执行一次
// 3、加特定依赖项 [count,name] - 首次执行 + 任意一个变化执行（依赖项变化）

import { useEffect } from 'react'

function App () {
  useEffect(() => {
    // 发送网络请求
    // async function loadData () {
    //   const res = await axios.get('http://geek.itheima.net/v1_0/channels') 
    //   console.log("res: ",res)
    // }

    // axios有拦截器（成熟），fetch纯原生没有拦截器
    function loadData () {
      fetch('http://geek.itheima.net/v1_0/channels').then(
        response => response.json()
      ).then( data => 
        {
          console.log("data: ",data)
        }
      )
      
    }

    loadData()
  },[])
  return (
    <div></div>
  )
}

export default App