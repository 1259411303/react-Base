import React from "react";

// 里面有各种各种的内置的校验规则
// 常见类型：array、bool、func、number、object、string
// 四种常见结构：
// 1. 常见类型：array、bool、func、number、object、string
// 2. React元素类型：element
// 3. 必填项：isRequired
// 4. 特定的结构对象：shape({})

// 注意： 通常用在组件库开发，一搬的业务场景用不到

import PropTypes from "prop-types";

function Test ({list}) {
  return (
    <div>
      {/* {list.map((item,index) => <p key={index}>{item}</p>)} */}
    </div>
  )
}

Test.propTypes = {
  // 定义各种规则
  // 常见类型：array、bool、func、number、object、string
  list: PropTypes.array.isRequired //限定这里的list参数的类型必须是数字类型
}

class App extends React.Component{
  render () {
    return (
      <div>
        {/* <Test list={[1,2,3]}/> */}
        <Test />
      </div>
    )
  }
}

export default App