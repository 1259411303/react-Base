import React from "react";

// 实现步骤：
// 1. 安装属性校验包：yarn add prop-types
// 2. 导入prop-types 包
// 3. 使用 组件名.propTypes = {} 给组件添加校验规则

// 里面有各种各种的内置的校验规则
// 常见类型：array、bool、func、number、object、string
import PropTypes from "prop-types";

function Test ({list}) {
  return (
    <div>
      {list.map((item,index) => <p key={index}>{item}</p>)}
    </div>
  )
}

Test.propTypes = {
  // 定义各种规则
  // 常见类型：array、bool、func、number、object、string
  list: PropTypes.array //限定这里的list参数的类型必须是数字类型
}

class App extends React.Component{
  render () {
    return (
      <div>
        <Test list={[1,2,3]}/>
      </div>
    )
  }
}

export default App