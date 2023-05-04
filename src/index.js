// React 框架的核心包
// ReactDom 专门做渲染相关的包

import React from 'react';
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
import './index.css';
// 引入的根组件
import App from './App';

// import Context from "./context";
// Context 如果要传递的数据 只需要在整个应用初始化的时候传递一次就可以选择在当前文件里做数据提供
// 如果 Context 需要传递数据并且还需要在对数据做修改 底层组件也需要跟着一起变 咱就写到app.js

// 渲染根组件app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // react18 要把严格模式节点去掉
  // 因为他会影响useEffect的执行时机，因为他要检查额外的副作用，所以会让每一个index都执行2次
    // <Context.Provider value={1000}>
      <App />
    // </Context.Provider>
);

// // 渲染根组件app 到一个id为root的dom节点上
// ReactDOM.render(
//   // react18 要把严格模式节点去掉
//   // 因为他会影响useEffect的执行时机，因为他要检查额外的副作用，所以会让每一个index都执行2次
//   <React.StrictMode>
//     <App />,
//   </React.StrictMode>,
//   document.getElementById('root')
// )

