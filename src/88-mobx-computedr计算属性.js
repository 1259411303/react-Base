// 1、导入countStore
import { counterStore } from './store/counter'
// 2、导入中间件链接mobx react 完成响应式变化

// 函数组件的导入方式
import { observer } from 'mobx-react-lite'
// 如果是类组件 类组件导入方式
// import { observer } from 'mobx-react'

// 注意看 ./store/counter.js 文件

function App () {
  return (
    <div>
      {/* { 把store中的count渲染一下 } */}
      { counterStore.count }
      {/* { 点击事件触发action函数修改count值 } */}
      <button onClick={counterStore.addCount}>+</button>


      {/* 使用计算属性 */}
      { counterStore.filterList.join('-')}
      <button onClick={counterStore.addList}>修改数组</button>
    </div>
  )
}

// 3、包裹App

export default observer(App)