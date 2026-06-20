import { useState } from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import { FaChartSimple } from "react-icons/fa6"
import { GoReport } from "react-icons/go"
import { HiHome, HiSave } from "react-icons/hi"
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom"

function SideBar() {

    const navItems = [
        {name:"Home",route:"/", icon:<HiHome size={20}/>},
        {name:"Acheivements",route:"/acheivments",icon:<AiFillCheckCircle size={20}/>},
        {name:"Statistics",route:"/statistics",icon:<FaChartSimple size={20}/>},
        {name:"History",route:"/history",icon:<HiSave size={20}/>},
        {name:"Reports",route:"/",icon:<GoReport size={20}/>},

    ]

    const navigate = useNavigate();

    const [expand, setExpand] = useState(false)


  return (
    <div className={`text-white absolute h-screen z-100   bg-purple-900/20 backdrop-blur-xl px-2 py-5 sm:relative ${expand ? "w-55": "w-18"} transition-all `}>
        <div className="flex items-center mb-10 gap-2 ">
        <img src={logo} className="w-10 h-10 shrink-0 relative top-1" />
        {expand && <h1 className="text-[28px] " >TazKora</h1>}

        </div>
        
        <div onClick={()=>setExpand(!expand)} className={`z-100 w-5 h-5 rounded-full absolute top-8 ${expand ? "left-52": "left-15"} bg-purple-950/80 transition-all `}></div>
        {
            navItems.map((nav,index)=>
                <div className="flex items-center gap-3 mt-2 hover:cursor-pointer hover:bg-purple-950/50 px-2 py-2 rounded-xl transition-all" onClick={()=>navigate(nav.route)} >
                    <div className=" shrink-0  ">{nav.icon}</div>
                    {expand && <p key={index} className=" text-md" >{nav.name}</p>}
                </div>
            )
        }


    </div>
  )
}

export default SideBar