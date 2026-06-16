import { useEffect, useState } from "react";
import type { User } from "../types/user";
import Streaks from "./Streaks";
import { useNavigate } from "react-router-dom";


type circleType ={
  user:User
}

function ExpCircle({user}:circleType) {

  const navigate = useNavigate()

  const percentage = (user.xp / user.maxXp) * 100;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const [color,setColor] = useState("text-green-400")

  

 
  useEffect(()=>{
    const value = user.xp/user.maxXp*100;
if (value <= 10) {
  setColor("text-red-400");
} else if (value <= 30) {
  setColor("text-orange-400");
} else if (value <= 50) {
  setColor("text-yellow-400");
} else if (value <= 70) {
  setColor("text-violet-400");
} else if (value <= 90) {
  setColor("text-blue-400");
} else {
  setColor("text-green-400");
}

  },[user])


  return (
    <div className="bg-black w-90 h-90 flex items-center justify-center relative  shadow-[0_0_10px_rgba(168,85,247,0.8)] rounded-xl mb-3">
      <div className="absolute top-2 right-2">
        <Streaks  streakCount={user.streak}/>
      </div>

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

        <p className="text-green-400 text-2xl font-bold absolute">
          Level {user.level}{" "}
        </p>
        <p className="text-green-400 text-md  absolute bottom-17">
          <span className={`${color}`}>{user.xp}</span> / <span>{user.maxXp}</span>  XP
        </p>
        <p onClick={()=> navigate('/acheivments')} className="text-green-600 text-md text-sm hover:text-green-400 hover:cursor-pointer absolute bottom-10">
          Acheivements
        </p>
      </div>
  )
}

export default ExpCircle