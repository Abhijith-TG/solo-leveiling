import type { Tasks } from '../types/tasks'


type TaskProps = {
    tasks:Tasks[],
    increaseXp:(t:number)=>void
}


function TaskList({tasks,increaseXp}:TaskProps) {
  return (
        <div className=''>
        {tasks.map((t) => (
          <div className="flex gap-5 my-2 sm:w-95  px-2 justify-between text-white" key={t.id}>
            <p className={`${t.completed ? "line-through" : ""} text-xs sm:text-base`}>{t.desc}</p>
            <button
              disabled={t.completed}
              onClick={() => increaseXp(t.id)}
              className={`${t.completed ? "bg-gray-400" : "bg-green-400 hover:cursor-pointer hover:bg-green-200"}  sm:text-base text-xs px-4 sm:w-30 py-1 w-20 text-black`}
            >
              {t.completed ? "Completed" : "+" + t.xp + " Xp"}
            </button>
          </div>
        ))}
      </div>
  )
}

export default TaskList