import type { Activity } from "../types/tasks";

export const addDailyActivity = (xp:number)=>{
  const today = new Date().toISOString().split("T")[0];

  const localActivity = localStorage.getItem('activity');
    const activities:Activity[] =  localActivity ? JSON.parse(localActivity): [];


  const existing = activities.find(
    (a) => a.date === today
  );

  

  if(existing){
      existing.xp=existing.xp+xp, existing.taskCount=existing.taskCount+1
  }else{
    activities.push({
        date:today,
        xp:xp,
        taskCount:1
    })
  }

    localStorage.setItem("activity",JSON.stringify(activities))

  


}