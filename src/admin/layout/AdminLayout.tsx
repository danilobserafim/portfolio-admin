import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar';

export default function AdminLayout() {
  return (
    <div className="w-full h-screen flex ">
      <div className="flex-1 flex flex-col bg-gray-50 ">
        <Topbar />
        <main className="flex-1 p-6 overflow-y-auto dark:bg-gray-800 dark:text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
