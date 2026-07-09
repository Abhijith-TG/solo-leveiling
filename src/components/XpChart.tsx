import type { Activity } from "../types/tasks";

export type activityProps = {
  activity: Activity[];
};

function XpChart({ activity }: activityProps) {




  return (
    <div className="h-full px-2">
      {activity.length === 0  ? (
        <div></div>
      ) : (
        <div className="flex items-end h-full gap-3">
          {activity.slice(-7).map((a, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`sm:w-10 w-5 bg-green-400/80 rounded-t-lg`}
                style={{
                  height: `${(a.xp / 315) * 180}px`,
                }}
              ></div>
              <p className="text-xs">{a.xp} xp</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default XpChart;
