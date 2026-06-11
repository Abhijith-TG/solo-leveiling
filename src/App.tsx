import { useState } from "react";

function App() {


  const [level, setLevel] = useState(1)

const [xp,setxp]= useState(0);
const [maxXp, setMaxXp] = useState(100)

const percentage = (xp / maxXp) * 100;

const radius = 70;
const circumference = 2 * Math.PI * radius;

const strokeDashoffset =
  circumference - (percentage / 100) * circumference;

  const increaseXp = ()=>{
    const newXp = xp+102;

    if(newXp>=maxXp){
      setLevel(level+1)
      setxp(newXp-maxXp)
      setMaxXp(level*100)
    }else
    setxp(newXp)

  }


  return (
    <div>
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
   <button onClick={()=>increaseXp()} >click</button>
   </div>
  )
}

export default App
