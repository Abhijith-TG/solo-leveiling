import type { activityProps } from "./XpChart";

function HeatMap({ activity }: activityProps) {
  const getActivityColor = (count: number) => {
    if (count === 0) return "bg-gray-900";
    if (count === 1) return "bg-purple-900";
    if (count <= 3) return "bg-purple-700";
    if (count <= 5) return "bg-violet-500";
    return "bg-green-400";
  };
  const days = [];

  for (let i = 34; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    days.push(date.toISOString().split("T")[0]);
  }

  return (
    <div className="rounded-xl p-5 h-full flex justify-between flex-col">
      <div className="grid grid-cols-7 gap-2">
        {days.map((date) => {
          const dayActivity = activity.find((a) => a.date === date);

          return (
            <div
              key={date}
              title={date}
              className={`
          w-5 h-5 rounded
          ${
            dayActivity
              ? getActivityColor(dayActivity.taskCount)
              : "bg-gray-100/10"
          }
        `}
            />
          );
        })}
      </div>

      <div className="flex justify-end gap-2 mt-5 items-center text-xs text-gray-400">
        <span>Less</span>

        <div className="w-3 h-3 bg-gray-900 rounded"></div>
        <div className="w-3 h-3 bg-purple-900 rounded"></div>
        <div className="w-3 h-3 bg-purple-700 rounded"></div>
        <div className="w-3 h-3 bg-violet-500 rounded"></div>
        <div className="w-3 h-3 bg-green-400 rounded"></div>

        <span>More</span>
      </div>
    </div>
  );
}

export default HeatMap;
