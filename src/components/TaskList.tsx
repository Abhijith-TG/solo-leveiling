import type { Tasks } from '../types/tasks'


type TaskProps = {
    tasks:Tasks[],
    increaseXp:(t:number)=>void
}


function TaskList({tasks,increaseXp}:TaskProps) {
  return (
        <div className=''>
        {tasks.map((t) => (
          <div className="flex gap-5 my-2 w-95 px-2 justify-between text-white " key={t.id}>
            <p className={`${t.completed ? "line-through" : ""} `}>{t.desc}</p>
            <button
              disabled={t.completed}
              onClick={() => increaseXp(t.id)}
              className={`${t.completed ? "bg-gray-400" : "bg-green-400 hover:cursor-pointer hover:bg-green-200"} px-4 w-30 py-1 text-black`}
            >
              {t.completed ? "Completed" : "+" + t.xp + " Xp"}
            </button>
          </div>
        ))}
      </div>
  )
}

export default TaskList