import { useEffect, useState } from "react"
import type { Achievement } from "../types/acheivements"
import { Achievements } from "../services/acheivementService";
import { achevmentsChecker } from "../helpers/acheivmentHelper";
import type { User } from "../types/user";
import type { Tasks } from "../types/tasks";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Acheivement() {

    const navigate = useNavigate()

    const [acheivments, setAcheivment] = useState<Achievement[]>(()=>{
        const localAcheivements = localStorage.getItem("acheivements");
        return localAcheivements ? JSON.parse(localAcheivements) : Achievements
    } )

    const localUser:any = localStorage.getItem("user")
    const user:User = JSON.parse(localUser)
    const localTasks:any = localStorage.getItem("tasks")
    const tasks:Tasks[] = JSON.parse(localTasks)


    useEffect(() => {
        localStorage.setItem("acheivments", JSON.stringify(acheivments));
      }, [acheivments]);

        achevmentsChecker({user,acheivments,setAcheivment,tasks})

  return (
    <div className="lg:px-20 px-4 py-10">
        <div className="flex items-center ">
            <IoArrowBackCircle onClick={()=>navigate("/")} className="text-white text-2xl mr-2 ml-4 hover:cursor-pointer"/>
            <p className="text-white text-xl"> Acheivements</p>
        </div>
    <div className="grid grid-cols-1  lg:grid-cols-4 py-10 gap-5 px-5 items-center justify-center">
    {
        acheivments.map((a)=>
            <div className="bg-purple-800 w-60 flex px-4 py-2 rounded"  key={a.id} >
                <div>

                <p>{a.title}</p>
                <p>{a.desc}</p>
                <p className={`${a.completed ? "text-green-900 bg-green-200 ":"text-red-900 bg-red-200 " }px-2 w-50 mt-2 rounded flex items-center justify-center`}  >{`${a.completed?"Acheived":"Not Acheived"}`}</p>
                    
                </div>
            </div>
        )
    }
    </div>
    </div>
  )
}

export default Acheivement