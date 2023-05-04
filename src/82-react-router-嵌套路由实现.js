
import Layout from "./Layout";
import LoginB from "./LoginB";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Boards from "./Boards";
import Artical from "./Artical";

function App () {
  return (
    // 声明当前要用一个非hash模式的路由
    <BrowserRouter>
      {/* 路由出口 路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 指定路径和组件的对应关系 path代表路径 element代表组件 成对出现 path -> element */}
        <Route path='/' element={<Layout />}>
          {/* 定义二级路由嵌套 */}
          <Route path='Boards' element={<Boards />}></Route>
          <Route path='Artical' element={<Artical />}></Route>
        </Route>
        <Route path='/LoginB' element={<LoginB />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App