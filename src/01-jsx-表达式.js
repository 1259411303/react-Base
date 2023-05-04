// 一、JSX中使用js表达式（特别注意：if语句/switch-case 语句/变量声明语句，这些叫做语句，不是表达式，不能出现在{}中）
// 1、识别常规的变量
const name = "小峰"
// 2、原生js方法调用
const getAge = () => {
  return 18
}
// 3、三元运算符
const flag = false

function App() {
  return (
    <div className="App">
      { name }
      { getAge() }
      { flag ? '真棒' : '真菜' }
    </div>
  );
}

export default App;
