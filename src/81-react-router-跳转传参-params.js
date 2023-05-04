// 引入两组件
import About from "./About";
import Home from "./Home";
import LoginA from "./LoginA";
import { BrowserRouter, Link, Routes, Route  } from "react-router-dom";

// 进行路由配置

// 注意看：本组件<Route path='About/:id' element={<About />}></Route>
// 和LoginA，About这两个组件查看如何传参 LoginA -> about

function App () {
  return (
    // 声明当前要用一个非hash模式的路由
    <BrowserRouter>
      {/* 指定跳转的组件 to用来配置路由地址 */}
      <Link to="/Home">首页</Link>
      <Link to="/About">关于</Link>
      {/* 路由出口 路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 指定路径和组件的对应关系 path代表路径 element代表组件 成对出现 path -> element */}
        <Route path='/Home' element={<Home />}></Route>
        <Route path='About/:id' element={<About />}></Route>
        <Route path='/' element={<LoginA />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App