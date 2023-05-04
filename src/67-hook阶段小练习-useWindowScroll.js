import{ useWindowScroll } from './hooks/useWindowScroll'

// 需求描述： 定义一个hook函数，实现获取滚动距离y

function App () {
  const [y] = useWindowScroll()
  return (
    <div style={{height: '1200px'}}>
      <div style={{position: 'fixed', left: '200px', top: '0'}}>{y}</div>
    </div>
  )
}

export default App