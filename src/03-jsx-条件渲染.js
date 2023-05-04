
// 三、条件渲染
// 技术方案：三元表达式（常用） 逻辑&&运算

// 三元表达式 - 满足条件才渲染一个span标签
// 2、&&
const flag1 = true
const flag2 = true

function App() {
  return (
    <div className="App">
      { flag1 ? <span>this is span</span> : null}

      { true ? (
        <div>
          <span>多行显示</span>
        </div>
        ) : null}

      { flag2 && <span>逻辑&&运算</span>}
    </div>
  );
}

export default App;
