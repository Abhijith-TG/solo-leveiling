import Overview from "../components/Overview";
import SideContent from "../components/SideContent";
import TopBar from "../components/TopBar";






function Dashboard() {

 


  return (
    <div className="p-5  w-full  shadow-white max-h-dvh">

    <div className=" flex flex-wrap w-full gap-5 items-start justify-between shadow-white ">
                <div className="flex flex-col gap-5">
                <TopBar/>
            <Overview/>
      </div>
                <SideContent/>
    </div>
      
    </div>
  );
}

export default Dashboard;
