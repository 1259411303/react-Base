// 1、导入countStore
import { counterStore } from './store/counter'
// 2、导入中间件链接mobx react 完成响应式变化
import { observer } from 'mobx-react-lite'

function App () {
  return (
    <div>
      {/* { 把store中的count渲染一下 } */}
      { counterStore.count }
      {/* { 点击事件触发action函数修改count值 } */}
      <button onClick={counterStore.addCount}>+</button>
    </div>
  )
}

// 3、包裹App

export default observer(App)