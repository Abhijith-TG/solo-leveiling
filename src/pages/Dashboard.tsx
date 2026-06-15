import { useEffect, useState } from "react";
import type { Tasks } from "../types/tasks";
import type { User } from "../types/user";
import { tasklist } from "../services/taskService";
import ExpCircle from "../components/ExpCircle";
import TaskList from "../components/TaskList";





function Dashboard() {
  useEffect(() => {
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
  }));
}

  }, []);

  

  const [user, setUser] = useState<User>(() => {
    const localUser = localStorage.getItem("user");

    return localUser ? JSON.parse(localUser) : { level: 1, xp: 0, maxXp: 100,streak:1, lastDate:new Date().toISOString().split("T")[0]};
  });

  const [tasks, setTasks] = useState<Tasks[]>(() => {
    const localTask = localStorage.getItem("tasks");
    return localTask ? JSON.parse(localTask) : tasklist;
  });



  const increaseXp = (id: number) => {
    const task: any = tasks.filter((t) => t.id === id);

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
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="p-5">
      <ExpCircle user={user}/>
      <div>
        <TaskList tasks={tasks} increaseXp={increaseXp}/>
      </div>
    </div>
  );
}

export default Dashboard;
