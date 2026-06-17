import { useState } from "react"
import type { Achievement } from "../types/acheivements"
import { Achievements } from "../services/acheivementService";

function Acheivement() {

    const [acheivments, ] = useState<Achievement[]>(()=>{
        const localAcheivements = localStorage.getItem("acheivements");
        return localAcheivements ? JSON.parse(localAcheivements) : Achievements
    } )


  return (
    <div className="lg:px-20 px-4 py-10">
        <p className="text-white text-xl">Acheivements</p>
    <div className="grid grid-cols-1  lg:grid-cols-4 py-10 gap-5 px-5 items-center justify-center">
    {
        acheivments.map((a)=>
            <div className="bg-purple-800 w-60 flex px-4 py-2 rounded"  key={a.id} >
                <div>

                <p>{a.title}</p>
                <p>{a.desc}</p>
                <p>{`${a.completed?"Acheived":"Not Acheived"}`}</p>
                    
                </div>
            </div>
        )
    }
    </div>
    </div>
  )
}

export default Acheivement