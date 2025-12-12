import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AdminLayout() {
  return (
    <div className="w-full h-screen flex ">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-50 ">
        <Topbar />
        <main className="flex-1 p-6 overflow-y-auto dark:bg-zinc-800 dark:text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
