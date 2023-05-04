// 第一种：searchParams 方式接收路由参数 1
// import { useSearchParams  } from "react-router-dom";

// 第二种params 方式接收路由参数
import { useParams  } from "react-router-dom";

function About () { 
  // 第一种：searchParams 方式接收路由参数 2
  // const [params] = useSearchParams()
  // // params是一个对象 对象里有一个get方法
  // // 用来获取对应的参数
  // // 把参数的名称作为get方法的实参传过来
  // const id = params.get('id')
  // const name = params.get('name')
  // console.log("params:", params)

  // 第二种params 方式接收路由参数
  const params = useParams()
  console.log("params:", params)
  return (
    <div>
      {/* 第一种：searchParams 方式接收路由参数 3 */}
      {/* <div>
        about
        得到的参数id值为 {id}--name:{name}
      </div> */}

      {/* 第二种params 方式接收路由参数 */}
      <div>
        about
        得到的参数id值为 {params.id}
      </div>
    </div>
  )
 }

 export default About