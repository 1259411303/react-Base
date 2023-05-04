// JSX样式控制
// 1、行内样式 - 在元素身上绑定一个style属性即可
// 2、类名样式 - 在元素身上绑定一个className属性即可

// 模板精简写法（推荐）
import './05-jsx-样式处理.css' // 尽量放到顶部，不然会报错（语法校验错误）
const style = {
  color: 'red',
  fontSize: '30px'
}

// 动态控制这个active类名 满足条件才有
const activeFlag = true

function App() {
  return (
    <div className="App">
      {/* 两个大括号。外边的括号{}是为了让里面的括号{}识别为对象，里边的括号{}写属性和属性值 */}
      {/* 不精简 */}
      <span style={{ color: 'red', fontSize: '30px' }}>this is span</span>
      {/* 精简写法，推荐 */}
      <span style={style}>模板精简写法（推荐）</span>

      <span className="active">测试类目属性</span>

      <span className={activeFlag ? 'active' : ''}>动态控制active类名</span>
    </div>
  )
}

export default App
