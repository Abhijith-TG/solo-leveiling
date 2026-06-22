import type { User } from "../types/user"




function Statistics() {

    const localUser:any = localStorage.getItem("user")
        const user:User = JSON.parse(localUser)

        let maxXp = 0;

        for(let i = 1;i<=user.level;i++){
            maxXp = maxXp + (i*100)
        }

    const stats=[{
        name:"🔥 Current Streak",
        stat:user.streak
    },
    {
        name:"🏆 Longest Streak",
        stat:user.streak
    },
    {
        name:"⭐ Total XP Earned",
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
        <h1 className="text-2xl mb-5  text-white">Statistics</h1>
        {
            stats.map((stat,item)=>
                <div className="flex gap-3 text-white" key={item} >
                    <h1>{stat.name}: </h1>
                    <h1>{stat.stat} </h1>
                </div>
            )
        }
    <div>

    </div>

    

    

    

    

    

    

    </div>
  )
}

export default Statistics