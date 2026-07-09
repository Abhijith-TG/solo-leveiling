import DateFilter from "./DateFilter";
import HeatMap from "./HeatMap";
import type { activityProps } from "./XpChart";
import XpChart from "./XpChart";




function OverviewMain({activity}:activityProps) {
  return (
    <div className="px-5 py-7 bg-purple-900/40 w-fit rounded-xl backdrop-blur-xl text-white flex flex-wrap">
        <div className="flex justify-between flex-wrap w-full gap-4">
            <div className="flex flex-col gap-2">
                <h1 className=" text-lg sm:text-xl">Activities Overview</h1>
                <p className="text-xs text-gray-300">Overview of the activities and tasks completed.</p>
            </div>
            <div>
                <DateFilter/>
            </div>
        </div>

        <div className="mt-8 flex gap-12 flex-wrap">
                <div className="w-full sm:w-100 h-50 bg-purple-900/40 rounded-xl">
                    <XpChart activity={activity}/>
                </div>
                <div className="w-full sm:w-100 h-50 bg-purple-900/40 rounded-xl">
                    <HeatMap activity={activity}/>
                </div>
        </div>

        </div>
  )
}

export default OverviewMain;