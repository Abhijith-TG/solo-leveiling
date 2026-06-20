import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

function Layout() {
  return (
    <div className="flex  ">
        <SideBar/>
        <main className="ml-15 sm:ml-2">
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout