import{ useLocalStorage } from './hooks/useLocalStorage'
// 需求描述：自定义hook函数，可以自动同步到LocalStroage
// const [message, setMessage ] = useLocalStorage(defaultValue)
// 1、message可以通过自定义传入默认初始值
// 2、每次修改message数据的时候 都会自动往本地同步一份

function App () {
  const [ message, setMessage ] = useLocalStorage('hook-key','阿飞')
  setTimeout(() => {
    setMessage('cp')
  }, 5000);
  return (
    <div style={{height: '1200px'}}>
      {message}
    </div>
  )
}

export default App