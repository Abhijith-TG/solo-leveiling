import type { Achievement } from "../types/acheivements"
import type { Tasks } from "../types/tasks"
import type { User } from "../types/user"

type AchevmentsCheckerProps = {
    user:User,
    acheivments:Achievement[],
    setAcheivment: React.Dispatch<React.SetStateAction<Achievement[]>>,
    tasks:Tasks[]
}


export const achevmentsChecker = ({user,acheivments,setAcheivment,tasks}:AchevmentsCheckerProps)=>{

const completed = tasks.every(a=>a.completed)




    if(user.tasksCompleted>=1 && !acheivments[0].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===1?{...a, completed:true}:a))
    )

    if(user.level>=2 && !acheivments[1].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===2?{...a, completed:true}:a)))
    }

    if(user.level>=5 && !acheivments[2].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===3?{...a, completed:true}:a)))
    }

    if(user.level>=10 && !acheivments[3].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===4?{...a, completed:true}:a)))
    }

    if(user.level>=20 && !acheivments[9].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===10?{...a, completed:true}:a)))
    }

     if(user.streak>=3 && !acheivments[4].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===5?{...a, completed:true}:a)))
    }

     if(user.streak>=7 && !acheivments[5].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===6?{...a, completed:true}:a)))
    }

    if(user.tasksCompleted>=25 && !acheivments[6].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===7?{...a, completed:true}:a)))
    }

    if(user.tasksCompleted>=50 && !acheivments[7].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===8?{...a, completed:true}:a)))
    }

    if(completed && !acheivments[8].completed){
        setAcheivment((prev)=>prev.map((a)=>(a.id===9?{...a, completed:true}:a)))
    }
}
}