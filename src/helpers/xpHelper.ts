import type React from "react"
import type { Tasks } from "../types/tasks"
import type { User } from "../types/user"

type increaseXpProps ={
    id:number,
    user:User,
    tasks:Tasks[],
    setUser:React.Dispatch<React.SetStateAction<User>>
    setTasks:React.Dispatch<React.SetStateAction<Tasks[]>>
}

export const increaseXp=({id,user,tasks,setUser,setTasks}:increaseXpProps)=>{
    const task:Tasks[] = tasks.filter((t) => t.id === id);

    if (task[0].completed) return;

    setTasks((prev) =>
      prev.map((t) => (t.id === task[0].id ? { ...t, completed: true } : t)),
    );

    const newXp = user.xp + task[0].xp;

    if (newXp >= user.maxXp) {
      setUser((prev) => ({
        ...prev,
        level: prev.level + 1,
        xp: newXp - prev.maxXp,
        maxXp: (prev.level + 1) * 100,
      }));
    } else setUser((prev) => ({ ...prev, xp: newXp }));
}