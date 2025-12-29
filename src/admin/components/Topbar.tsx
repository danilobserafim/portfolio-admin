import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('auth_token');
    navigate('/');
  }

  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-4 dark:bg-gray-900 dark:text-white dark:border-b-gray-700">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <button
        onClick={logout}
        className="text-sm px-3 py-1 rounded-md hover:text-white hover:bg-red-700 transition-all ease-in cursor-pointer"
      >
        Sair
      </button>
    </header>
  );
}
