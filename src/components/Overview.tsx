import Counter from "./Counter"
import DateFilter from "./DateFilter"
import type { User } from "../types/user"
import type { Activity } from "../types/tasks"


function Overview() {

    const user:User = JSON.parse(localStorage.getItem('user')|| '')

    const activity:Activity[] = JSON.parse(localStorage.getItem('activity') || '')

    const earnedXP = activity.reduce(
    (acc, a) => acc + a.xp,
    0
    );

    const overview = [{
        name:"Level",
        level:user.level,
        icon:"💪",
        text:"vs previous month"

    },
{
        name:"Experience",
        level:earnedXP,
        icon:"⏳",
        text:"Xps"


    },
    {
        name:"Streak",
        level:user.streak,
        icon:"🔥",
        text:"Days"


    },
    {
        name:"Longest Streak",
        level:user.longestStreak,
        icon:"🏆",
        text:"Days"


    }
]



  return (
    <div className="px-5 py-7 bg-purple-900/40 rounded-xl backdrop-blur-xl w-full">
        <div className="mb-8 flex justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-white text-xl sm:text-2xl">Overview</h1>
                <p className="text-gray-300 text-xs">Details regrading your current status</p>
            </div>
            <div>
                <DateFilter/>
            </div>
            
        </div>
        <div className="flex gap-4 flex-wrap justify-center sm:justify-start ">
            {
                overview.map((over,index)=>(
                    <div key={index} className="p-5 bg-purple-900/80 rounded-2xl text-white backdrop-blur-xl flex flex-col justify-start w-40  sm:w-50 gap-3"> 
                        <div className="flex items-center justify-start gap-2">
                            <div>{over.icon}</div>
                            <p className=" text-sm sm:text-lg">{over.name}</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-3" >
                            <div className=" text-4xl sm:text-6xl text-amber-100" ><Counter num={over.level} incre={over.name==='Experience'?30:1} /></div>
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