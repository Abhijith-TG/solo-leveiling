import type { User } from "../types/user"




function Statistics() {

    const localUser:string = localStorage.getItem("user") || ""
        const user:User = JSON.parse(localUser)

        let maxXp = 0;

        for(let i = 1;i<=user.level;i++){
            maxXp = maxXp + (i*100)
        }

    const stats=[{
        name:"🔥 Streak",
        stat:user.streak
    },
    {
        name:"🏆 Longest Streak",
        stat:user.longestStreak
    },
    {
        name:"⭐XP Earned",
        stat:maxXp
    },
    {
        name:"✅ Tasks Completed",
        stat:user.tasksCompleted
    },
    {
        name:"📅 Days Active",
        stat:10
    },
    {
        name:"📈 Weekly Progress",
        stat:10
    },

]

  return (
   <div className="p-5 flex flex-col  shadow-white ">
        <h1 className="text-2xl mb-5  text-white">Hunter Records</h1>
        <div className="flex flex-wrap  gap-8">

        {
            stats.map((stat,item)=>
                <div className={`flex flex-col gap-3 text-white items-center p-2 bg-violet-900/50  rounded-2xl w-45 h-20`} key={item} >
                    <h1>{stat.name} </h1>
                    <h1 className="text-xl font-bold">{stat.stat} </h1>
                </div>
            )
        }
        </div>

        
        <div className="mt-10 flex gap-5">

            <div>


            <h1 className="text-xl mb-5  text-white">Daily progress</h1>

            <div className="w-50 h-10 bg-black">
                <div className="h-10 w-25 bg-green-400">

                </div>
            </div>

            </div>
            <div>

            <h1 className="text-xl mb-5  text-white">Weekly Progress</h1>

            <div className="w-50 h-10 bg-black">
                <div className="h-10 w-5 bg-green-400">

                </div>
            </div>

            </div>

            

        </div>

        <div className="mt-10">
             <h1 className="text-xl mb-5   text-white">Activity</h1>
                    <div className="bg-black p-0.5 w-200 h-50">
                       <div className="bg-green-500 w-3 h-3" ></div>       
                    </div>
            </div>
    

    

    

    

    

    </div>
  )
}

export default Statistics