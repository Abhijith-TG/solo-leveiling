import { useEffect, useState } from "react"
import type { Achievement } from "../types/acheivements"
import { Achievements } from "../services/acheivementService";
import { achevmentsChecker } from "../helpers/acheivmentHelper";
import type { User } from "../types/user";
import type { Tasks } from "../types/tasks";

function Acheivement() {


    const [acheivments, setAcheivment] = useState<Achievement[]>(()=>{
        const localAcheivements = localStorage.getItem("acheivments");
        return localAcheivements ? JSON.parse(localAcheivements) : Achievements
    } )

    const localUser:any = localStorage.getItem("user")
    const user:User = JSON.parse(localUser)
    const localTasks:any = localStorage.getItem("tasks")
    const tasks:Tasks[] = JSON.parse(localTasks)
    
   

    useEffect(() => {
        localStorage.setItem("acheivments", JSON.stringify(acheivments));
      }, [acheivments]);

      useEffect(()=>{
    console.log(acheivments)
          achevmentsChecker({user,acheivments,setAcheivment,tasks})
      },[])

  return (
    <div className=" px-5 py-10">
        <div className="flex items-center ">
            {/* <IoArrowBackCircle onClick={()=>navigate("/")} className="text-white text-2xl mr-2 ml-4 hover:cursor-pointer"/> */}
            <p className="text-white text-2xl ml-10"> Acheivements</p>
        </div>
    <div className="flex flex-wrap py-10 gap-5 px-5 items-center justify-center">
    {
        acheivments.map((a)=>
            <div className={`   ${ a.completed ? a.bg : "bg-gray-600"} w-32 h-32   flex px-4  rounded-full relative  flex-col items-center justify-center`}  key={a.id} >
                <div className={`flex flex-col ${ a.completed ? a.bg2 : "bg-gray-900 grayscale"} z-20 items-center  w-30 h-30 rounded-full `}>
                {/* <p>{a.desc}</p> */}
                <img className=" -z-10 absolute w-[80%] rounded-full" src={a.image} alt="logo" />
                <p className="absolute bottom-4 ">{a.title}</p>
                {/* <p className={`${a.completed ? "text-green-900 bg-green-200 ":"text-red-900 bg-red-200 " }px-2 w-50 mt-2 rounded flex items-center justify-center`}  >{`${a.completed?"Acheived":"Not Acheived"}`}</p> */}
                    
                </div>
            </div>
        )
    }
    </div>
    </div>
  )
}

export default Acheivement