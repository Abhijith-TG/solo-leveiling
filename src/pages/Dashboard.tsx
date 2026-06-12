import { useEffect, useState } from "react";
import type { Tasks } from "../types/tasks";
import type { User } from "../types/user";
import { tasklist } from "../services/taskService";
import ExpCircle from "../components/ExpCircle";





function Dashboard() {
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const localDate = localStorage.getItem("date");
    if (!localDate) {
      localStorage.setItem("date", JSON.stringify(today));
    } else {
      if (JSON.parse(localDate) < today) {
        setTasks((prev) => prev.map((t) => ({ ...t, completed: false })));
        localStorage.setItem("date", JSON.stringify(today));
      }
    }
  }, []);

  

  const [user, setUser] = useState<User>(() => {
    const localUser = localStorage.getItem("user");

    return localUser ? JSON.parse(localUser) : { level: 1, xp: 0, maxXp: 100 };
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
        {tasks.map((t) => (
          <div className="flex gap-5 my-2 w-90 justify-between" key={t.id}>
            <p className={`${t.completed ? "line-through" : ""} `}>{t.desc}</p>
            <button
              disabled={t.completed}
              onClick={() => increaseXp(t.id)}
              className={`${t.completed ? "bg-gray-400" : "bg-green-400 hover:cursor-pointer hover:bg-green-200"} px-4 w-30 py-1`}
            >
              {t.completed ? "Completed" : "+" + t.xp + " Xp"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
