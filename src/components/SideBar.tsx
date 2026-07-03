import { useState } from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import { FaChartSimple } from "react-icons/fa6"
import { GoReport } from "react-icons/go"
import { HiHome, HiSave } from "react-icons/hi"
import logo from '../assets/logo.png'
import { useLocation, useNavigate } from "react-router-dom"
import { GiHunterEyes } from "react-icons/gi"

function SideBar() {

    const navItems = [
        {name:"Dashboard",route:"/", icon:<HiHome size={20}/>},
        {name:"Level Up",route:"/level", icon:<GiHunterEyes size={20}/>},
        {name:"Acheivements",route:"/acheivments",icon:<AiFillCheckCircle size={20}/>},
        {name:"Statistics",route:"/statistics",icon:<FaChartSimple size={20}/>},
        {name:"History",route:"/history",icon:<HiSave size={20}/>},
        {name:"Reports",route:"/reports",icon:<GoReport size={20}/>},

    ]

    const navigate = useNavigate();

    const [expand, setExpand] = useState(false)

    const location = useLocation()
    const path = location.pathname


  return (
    <div className={`text-white absolute h-dvh z-100  flex flex-col gap-5  bg-purple-900/20 backdrop-blur-xl px-2 py-5 sm:relative ${expand ? "w-55 items-start": "w-18 items-center"} transition-all `}>
        <div className="flex items-center mb-10 gap-2 ">
        <img src={logo} className="w-10 h-10 shrink-0 relative top-1" />
        {expand && <h1 className="text-[28px] " >TazKora</h1>}

        </div>
        
        <div onClick={()=>setExpand(!expand)} className={`z-100 w-5 h-5 rounded-full absolute top-8 ${expand ? "left-52": "left-15"} bg-purple-950/80 transition-all `}></div>
        <div>

        {
            navItems.map((nav,index)=>
                <div key={index} className={` flex items-center gap-3 mt-2 hover:cursor-pointer hover:bg-purple-950/50 px-3 py-2 rounded-xl transition-all ${path===nav.route ?"bg-purple-950/50":""}  `} onClick={()=>navigate(nav.route)} >
                    <div className=" shrink-0  ">{nav.icon}</div>
                    {expand && <p key={index} className=" text-base" >{nav.name}</p>}
                </div>
            )
        }

        </div>

    </div>
  )
}

export default SideBar