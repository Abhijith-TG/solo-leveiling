import { useEffect, useState } from "react";

type User = {
  level: number;
  xp: number;
  maxXp: number;
};

type Tasks = { id: number; desc: string; completed: boolean; xp: number };

function App() {
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

  const tasklist: Tasks[] = [
    {
      id: 1,
      desc: "Make a Git commit",
      completed: false,
      xp: 10,
    },
    {
      id: 2,
      desc: "Fix a bug",
      completed: false,
      xp: 30,
    },
    {
      id: 3,
      desc: "Create a new React component",
      completed: false,
      xp: 25,
    },
    {
      id: 4,
      desc: "Study for 30 minutes",
      completed: false,
      xp: 20,
    },
    {
      id: 5,
      desc: "Solve one DSA problem",
      completed: false,
      xp: 40,
    },
    {
      id: 6,
      desc: "Write an API endpoint",
      completed: false,
      xp: 35,
    },
    {
      id: 7,
      desc: "Read documentation",
      completed: false,
      xp: 15,
    },
    {
      id: 8,
      desc: "Refactor code",
      completed: false,
      xp: 25,
    },
    {
      id: 9,
      desc: "Push code to GitHub",
      completed: false,
      xp: 15,
    },
    {
      id: 10,
      desc: "Deploy a project",
      completed: false,
      xp: 100,
    },
  ];

  const [user, setUser] = useState<User>(() => {
    const localUser = localStorage.getItem("user");

    return localUser ? JSON.parse(localUser) : { level: 1, xp: 0, maxXp: 100 };
  });

  const [tasks, setTasks] = useState<Tasks[]>(() => {
    const localTask = localStorage.getItem("tasks");
    return localTask ? JSON.parse(localTask) : tasklist;
  });

  const percentage = (user.xp / user.maxXp) * 100;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

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

        <p className="text-green-400 text-2xl font-bold absolute">
          Level {user.level}{" "}
        </p>
        <p className="text-green-400 text-md  absolute bottom-17">
          {user.xp + "/" + user.maxXp} XP
        </p>
      </div>

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

export default App;
