import { AiFillExperiment } from "react-icons/ai"
import { FaLevelUpAlt } from "react-icons/fa"

function Overview() {

    const overview = [{
        name:"Level",
        level:10,
        icon:"💪",
        text:"vs previous month"

    },
{
        name:"Experience",
        level:2562,
        icon:"⏳",
        text:"Xps"


    },
    {
        name:"Streak",
        level:10,
        icon:"🔥",
        text:"Days"


    },
    {
        name:"Longest Streak",
        level:16,
        icon:"🏆",
        text:"Days"


    }
]


  return (
    <div className="px-5 py-7 bg-purple-900/40 w-fit rounded-xl backdrop-blur-xl">
        <div className="mb-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-white text-2xl">Overview</h1>
                <p className="text-gray-300 text-xs">Details regrading your current status</p>
            </div>
            <div>

            </div>
        </div>
        <div className="flex gap-4 flex-wrap">
            {
                overview.map((over,index)=>(
                    <div key={index} className="p-5 bg-purple-900/80 rounded-2xl text-white backdrop-blur-xl flex flex-col justify-start w-50 gap-3"> 
                        <div className="flex items-center justify-start gap-2">
                            <div>{over.icon}</div>
                            <p className="text-lg">{over.name}</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-3" >
                            <p className="text-6xl text-amber-100" >{over.level}</p>
                            <p className="text-xs text-gray-200 ">vs previous month</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Overview