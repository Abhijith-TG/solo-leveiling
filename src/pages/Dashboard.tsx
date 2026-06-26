import SideContent from "../components/SideContent";
import TopBar from "../components/TopBar";






function Dashboard() {

 


  return (
    <div className="p-5 flex flex-wrap w-full gap-5 items-start justify-between shadow-white ">
                <TopBar/>
                <SideContent/>

      
    </div>
  );
}

export default Dashboard;
