
import Layout from "./Layout";
import LoginB from "./LoginB";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Boards from "./Boards";
import Artical from "./Artical";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* 定义二级路由嵌套 */}
          {/* { 默认二级路由 添加index属性 把自己的path干掉 } */}
          <Route index element={<Boards />}></Route>
          <Route path='Artical' element={<Artical />}></Route>
        </Route>
        <Route path='/LoginB' element={<LoginB />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App