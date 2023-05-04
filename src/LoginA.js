// 1、导入 useNavigate 
import { useNavigate } from "react-router-dom";

function LoginA () { 
  // 2、执行 useNavigate 得到一个跳转函数
  const navigate = useNavigate()

  function goAbout () {
    // replace 默认flase  为true时点击返回上一个页面失效  要点两下才可以

    // searchParams方式传参
    // navigate('/About?id=1001&name=cp', { replace: true })

    // params 方式传参
    navigate('/About/1001/name', { replace: true })
  }
  return (
    <div>
      LoginA
      <button onClick={goAbout}>跳到关于</button>
    </div>
  )
 }

 export default LoginA