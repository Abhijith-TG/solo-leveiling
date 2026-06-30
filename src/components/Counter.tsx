import { useEffect, useState } from "react"

type counterProps = {
    num:number,
    incre?:number
}


function Counter({num,incre=1}:counterProps) {

    const [count, setCount] = useState(0)


    useEffect(()=>{

        const interval = setInterval(()=>{
            setCount((prev)=>{
                if(prev>=num){
                    clearInterval(interval)
                    return num
                }
                return prev+incre;
            })
        },20)

        return ()=>clearInterval(interval)
    },[])



  return (
    <div>{count}</div>
  )
}

export default Counter