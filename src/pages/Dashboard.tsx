import { useEffect, useState } from "react";
import type { Tasks } from "../types/tasks";
import type { User } from "../types/user";
import { tasklist } from "../services/taskService";
import ExpCircle from "../components/ExpCircle";
import TaskList from "../components/TaskList";
import { DailyHelper } from "../helpers/dailyHelper";
import { increaseXp } from "../helpers/xpHelper";





function Dashboard() {

  const [user, setUser] = useState<User>(() => {
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser)
     :
      { level: 1, xp: 0, maxXp: 100,streak:1,tasksCompleted:0,lastDate:new Date().toISOString().split("T")[0]};
  });

  const [tasks, setTasks] = useState<Tasks[]>(() => {
    const localTask = localStorage.getItem("tasks");
    return localTask ? JSON.parse(localTask) : tasklist;
  });





  DailyHelper({user,setUser,setTasks})

  const increaseXps = (id: number) => {
    increaseXp({id,user,tasks,setUser,setTasks})
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="p-5 flex flex-col  items-center justify-center shadow-white ">
      <ExpCircle user={user}/>
      <div className="sm:overflow-y-auto sm:h-65 ">
        <TaskList tasks={tasks} increaseXp={increaseXps}/>
      </div>
    </div>
  );
}

export default Dashboard;
