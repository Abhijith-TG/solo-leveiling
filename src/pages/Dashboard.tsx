import Overview from "../components/Overview";
import OverviewMain from "../components/Overview2";
import SideContent from "../components/SideContent";
import TopBar from "../components/TopBar";
import type { Activity } from "../types/tasks";

function Dashboard() {
  const activity: Activity[] = JSON.parse(
    localStorage.getItem("activity") || "[]",
  );

  return (
    <div className="p-5  w-full  shadow-white max-h-dvh">
      <div className=" flex flex-wrap w-full gap-5 items-start  shadow-white ">
        <div className="flex flex-1 flex-col gap-5">
          <TopBar />
          <Overview />
          <OverviewMain activity={activity} />
        </div>
        <SideContent />
      </div>
    </div>
  );
}

export default Dashboard;
