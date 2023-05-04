
import { observer } from 'mobx-react-lite'
import { useStore } from './store/index'

function App () {
  // const rootStore = useStore()
  // console.log("rootStore:", rootStore)

  // 注意：解构赋值 到store实例对象就可以了
  // 防止破坏响应式 用哪个store就解构哪个store
  const { counterStore } = useStore() // 解构赋值
  
  return (
    <div>
      {/* <div>
        { rootStore.counterStore.count }
        <button onClick={rootStore.counterStore.addCount}>+</button>
      </div> */}

      <div>
        { counterStore.count }
        <button onClick={counterStore.addCount}>+</button>
      </div>
    </div>
  )
}
export default observer(App)