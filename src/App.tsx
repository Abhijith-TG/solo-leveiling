import { useState } from "react";

function App() {

  const tasklist = [
    {id:1,desc:"Add one commit 1",completed:false,xp:10},
    {id:2,desc:"Add one commit 2",completed:false,xp:100},
    {id:3,desc:"Add one commit 3",completed:false,xp:25},
    {id:4,desc:"Add one commit 4",completed:false,xp:20},
    {id:5,desc:"Add one commit 5",completed:false,xp:75}
  ]

const [level, setLevel] = useState(1)

const [xp,setxp]= useState(0);
const [maxXp, setMaxXp] = useState(100)

const percentage = (xp / maxXp) * 100;

const radius = 70;
const circumference = 2 * Math.PI * radius;

const strokeDashoffset =
  circumference - (percentage / 100) * circumference;

  const increaseXp = (id:Number)=>{
    const task:any = tasks.filter((t)=>t.id===id)
    task.map((t:any)=>t.completed=true)

    const newXp = xp+task[0].xp;

    if(newXp>=maxXp){
      setLevel(level+1)
      setxp(newXp-maxXp)
      setMaxXp((level+1)*100)
    }else
    setxp(newXp)

  }

  const [tasks, ] = useState(tasklist)




  return (
    <div className="p-5">
   <div className="bg-black w-90 h-90 flex items-center justify-center relative">
      <svg width="180" height="180">
  <circle
    cx="90"
    cy="90"
    r={radius}
    stroke="#333"
    strokeWidth="10"
    fill="transparent"
  />

  <circle
    cx="90"
    cy="90"
    r={radius}
    stroke="lime"
    strokeWidth="10"
    fill="transparent"
    strokeDasharray={circumference}
    strokeDashoffset={strokeDashoffset}
    transform="rotate(-90 90 90)"
  />
</svg>

<p className="text-green-400 text-2xl font-bold absolute">Level {level} </p>
<p className="text-green-400 text-md  absolute bottom-17">XP {xp+"/"+maxXp}</p>


 
   </div>

    <div>
      {
        tasks.map((t)=>
          <div className="flex gap-5 my-2" key={t.id}  >
            <p className={`${t.completed ? "line-through":""} `}>{t.desc}</p>
            <button disabled={t.completed} onClick={()=>increaseXp(t.id)} className={`${t.completed ? "bg-gray-400":"bg-green-400 hover:cursor-pointer hover:bg-green-200"} px-4 py-1`}  >{t.completed ?"Completed":t.xp+" Gain"}</button>
          </div>
        )
      }



    </div>

   </div>
  )
}

export default App
