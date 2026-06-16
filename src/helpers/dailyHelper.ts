import { useEffect } from "react";
import type { Tasks } from "../types/tasks";
import type { User } from "../types/user";


type DailyHelperProps ={
    user:User,
    setUser: React.Dispatch<React.SetStateAction<User>>,
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>
}

export const DailyHelper =({user,setUser,setTasks}:DailyHelperProps)=>{

  useEffect(()=>{

     const today = new Date().toISOString().split("T")[0];
    const localDate:any = localStorage.getItem("date");
    
    

    if (!localDate) {
      localStorage.setItem("date", JSON.stringify(today));
      
      

    } else {
      if (JSON.parse(localDate) < today) {
        setTasks((prev) => prev.map((t) => ({ ...t, completed: false })));
        localStorage.setItem("date", JSON.stringify(today));

      }

      
    }

    const lastDate = new Date(user.lastDate);
    const currentDate = new Date(today);

  const diffInDays =
  (currentDate.getTime() - lastDate.getTime()) /
  (1000 * 60 * 60 * 24);

    if (diffInDays === 1) {
      console.log(user)
  setUser(prev => ({
    ...prev,
    lastDate: today,
    streak: prev.streak + 1
  }));
} else if (diffInDays > 1) {
  setUser(prev => ({
    ...prev,
    lastDate: today,
    streak: 1
  }))


  
  
}

if(!user.streak && !user.lastDate){
    setUser(prev => ({
    ...prev,
    lastDate: today,
    streak: 1
  }))
  }

  if(!user.tasksCompleted){
    setUser(prev => ({
    ...prev,
    tasksCompleted: 1
  }))
  }
  },[])

}