// 实现步骤
// 1. 使用createContext 创建Context对象
// 2. 在顶层组件通过Provider 提供数据
// 3. 在底层组件通过useContext函数获取数据

import React, { useContext, useState  } from "react";

import Context from "./context";

function ComA () { 
  const count = useContext(Context)
  return (
    <div>
      <div>this is comA</div>
      <br />
       app传过来的数据为： { count }
      <ComC />
    </div>
  )
 }

 function ComC () { 
   const count = useContext(Context)
  return (
    <div>
      <div>this is comC</div>
      <br />
      app传过来的数据为： { count }
    </div>
  )
 }

function App () {
  const [ count, setCount ] = useState(0)
  return (
    <Context.Provider value={count}>
      <div>
        <ComA />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </Context.Provider>
  )
}

export default App